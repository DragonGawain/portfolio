import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";

export default function StrungAlong() {
    return (
        <div className="projectPage">
            <h1>Strung along</h1>
            <h2>Concordia Game Jam 2023: The Space Between</h2>
            <p>
                This was the third game jam I participated in. By this point, my
                skills with Unity were developped to the point that I could be
                assigned major tasks that the game depended on. I was also
                continuing my trend of being very involved with game design
                discussion we held at the start of the jam. As it's been around
                17 months since this jam at the time that I'm writing this, I
                don't recall how much of the game concept I came up with. I do
                recall that I was still refining my game design skills and that
                it was a group effort to arrive at our final design though.
            </p>
            <h2>About the game</h2>
            <p>
                For this jam, we (the team) put a lot of effort into integrating
                as many
                <Tooltip
                    text="modifiers"
                    tooltip="A modifier is an additional restriction/feature that your game includes. Modifiers are completely optional!"
                />{" "}
                as possible. We ended up with 9 out of the 18 modifiers, the
                most the any team included! The modifier that probably had the
                largest impact on our game design was 'Name a better pair',
                which had us 'include a cooperative aspect' in the game. Our
                game concept settled into being a 2 player
                <Tooltip
                    text="couch-coop"
                    tooltip="A couch-coop game is a cooperative game where players are expected to be in the same physical location, such as sitting next to each other on a couch, while playing the game. In the case of this game, the standard keyboard control scheme has both players using the same keyboard."
                />{" "}
                game where the player two characters were connected via a
                string. The string represented the space between the two
                characters and was our interpretation of the theme.
            </p>
            <h2>My contribution</h2>
            <p>
                I was the main programmer on the team, in charge of making the
                string, the character controller, as well as some other minor
                game features (object that defines the end of the level,
                floors/walls that only interact with one of the characters,
                floors/walls that the string does/does not interact with). My
                largest contribution was definitely setting up the core of the
                game - the characters and the string. The string also
                represented a huge amount of where my effort went for this jam,
                which leads us to the technical challenges that I faced.
            </p>
            <h2>Technical challenge: the string</h2>
            <p>
                The string was truly the only challenge that I faced during this
                jam. I dedicated at least 75% of the jam to creating, refining,
                and debugging the string. The string itself had enough problems
                that I can break it down into a few sections:
            </p>
            <ul>
                <li>The string body (setting up nodes)</li>
                <li>Making the string connected to both players</li>
                <li>Making the string affected by gravity</li>
                <li>Making the string interact with the ground</li>
            </ul>
            <p>
                I learnt very quickly that a string is <i>very</i> difficult to
                make well. I don't recall exactly how much trial and error it
                took to eventually arrive at the solution that I did (again,
                this jam was about 17 months ago at the time of writing this),
                but I eventually ended up with a string of 21 nodes, with the
                two player characters being extra nodes, bringing the total
                count up to 23. Fundamentally, the string is an ordered list of
                nodes and checks are constantly being done to ensure that no
                node can get too far away from the node before it or the node
                after it. However, since there was a player on both ends of the
                string, it meant that the string could be pulled from either
                direction, as well as from both directions at the same time.
                This caused a lot of difficulties. In the end, I made different
                logic for different situations. In the simplest case, neither
                player is moving, in which case no string logic needs to be
                computed. The other cases are if exactly one of the players is
                moving (it matters which character is the one moving, but the
                underlying logic is identical), or if both players are moving
                simulataneously. The basic functionalities that the string
                needed were:
            </p>
            <ol>
                <li>Don't stretch if pulled apart</li>
                <li>
                    Either player could pull the other if the string was taut
                    (this includes a player being suspended if the other player
                    was on a high platform)
                </li>
                <li>The string must be affected by gravity</li>
                <li>
                    the string must interact with some platforms (allowing the
                    string alone to suspend both players) but not others
                </li>
                <li>
                    We also had an additional abiity that allowed players to
                    swap their locations. This also meant that the players
                    change which end of the string that they are on.
                </li>
            </ol>
            <h3>How it's built: the nodes</h3>
            <p>
                As mentioned before, the string is an ordered list of 21 nodes.
                The number of nodes was experimentally determined, defined by
                how long we wanted the string to be. Most nodes are not affected
                by gravity. This was to make the string simpler, and helped deal
                with the issues gravity was causing. Instead, only the center
                node is affected by gravity. This is string logic case 0:
                neither player is moving. In this case, the center node, pulled
                down by gravity, pulls the nodes on either side of it closer to
                itself, causing the string as a whole to fall. To move the
                string nodes, I used{" "}
                <Button
                    text="Vector3.MoveTowards"
                    href="https://docs.unity3d.com/2021.3/Documentation/ScriptReference/Vector3.MoveTowards.html"
                    colorScheme="none"
                    buttonType="inline"
                />
                . In order to display the string visually, I used a{" "}
                <Button
                    text="line renderer"
                    href="https://docs.unity3d.com/2021.3/Documentation/ScriptReference/LineRenderer.html"
                    colorScheme="none"
                    buttonType="inline"
                />{" "}
                and defined each point on the line to be one of the nodes of the
                string. The line renderer also had points for the two players.
            </p>
            <h3>String logic case 1: one player is moving</h3>
            <p>
                In this situation, I start by doing a forwards pass (from the
                player that moved to the player that is stationary), pulling
                each node in order closer to the player that moved if the
                distance between the node and the previous checked node is
                greater than the maximum distance. For the node closest to the
                moving player, it checks the distance between itself and the
                player. After all nodes are checked, the distance between the
                stationary player and the final node is checked, pulling the
                stationary player if needed. Unlike nodes, I additively alter
                the Rigidbody.velocity field to pull the player. This generates
                the pulling effect, while also making it so that the string
                could have slack. Only the
                <Tooltip
                    text="taut"
                    tooltip="Taut in this case meaning nodes whose distance to their neighbor has exceeded the defined maximum distance."
                />{" "}
                nodes are moved. After the second player is checked, a backwards
                pass is performed, making sure that all the nodes from the
                stationary player to the moving player are close enough
                together. Since each node can only be moved a certain amount
                each time it is checked (to prevent all the nodes from bunching
                up together), this helped give the string some 'weight'.
            </p>
            <h3>String logic case 2: both players are moving</h3>
            <p>
                The case where both players are moving simultaneously is more
                complicated. Upon reviewing my code, the string pulls towards
                the center, pulling the players along with it. The center node
                is pulled towards one of the two players, alternating every
                fixed update frame (which is where the movement logic was being
                called from). This made it so that the string could not stretch
                much, even if the players are moving away from each other. After
                the string pulls towards the center, the second half of the half
                double pass is performed on each side, pulling the nodes from,
                but not including, the center node towards the respective closer
                player. This mostly created the intended behaviour of neither
                character being able to move very well. The point of the second
                half of the half double pass is to accommodote for cases where
                the string gets stretched. It allows for the string to close
                itself by pulling on the players. All together, it pulls both
                players closer to the center, then allows the string itself to
                shift a bit closer to the player that is further away. A
                consistent way to stretch the string is the cat player's dash
                ability though. This forcibly gave the cat a burst of speed,
                allowing it to stretch the string a bit. The end result is that
                the rabbit player is, slowly, pulled towards the cat player. The
                moment either player stops moving, the single player (or 0
                player) string logic kicks in and immediately fixes the string,
                bringing it back to its intended maximum length and pulling both
                players towards the center. Using the cat's dash ability is the
                only way that I can currently think of that stretches the
                string.
            </p>
            <h3>String gravity and interaction</h3>
            <p>
                Making the string be affected by gravity is something I touched
                on earlier. In order to make the string perform better, I
                decided that only the central node would be affected by gravity.
                This had the intended effect of pulling the entire string down.
                While this made it so that some nodes could float, the string
                was short enough that this wasn't much of an issue. In the end,
                this decision made the string perform better. Also, since that
                was a game jam submission, time was of the essence and I was
                very willing to make the sacrifice of allowing some nodes to
                float for the trade off of having a higher functioning string.
            </p>
            <p>
                Setting up conditional collisions was very simple. I used
                physics layers so that the string simply would not interact with
                some walls/floors. We used physics layers for the walls/floors
                that only one player could pass through as well.
            </p>
            <h2>Post jam follow up</h2>
            <p>
                After the jam was over, I spent a day going over the string to
                see if I could improve upon it. That main issues I wanted to
                solve were the string being able to stretch a bit, as well as
                the back pull that it sometimes induced. The best smoothing that
                I found was to use fixed distance joints to connect the nodes.
                Instead of using my custom pulling logic, the distance joints
                wimply did not allow the nodes to be too far away from each
                other while also allowing the nodes to be closer to each other.
                There were two problems with distance joints. The first problem
                was that if the nodes were too far apart (i.e. the joints were
                too long) then string between the nodes would be able to slip
                over corners and drag the rest of the string with it. The second
                issue was that distance joints broke when they were too small.
                To be precise, if I set the maximum distance that the two ends
                of the joint could be from each other and daisy chained the
                joints, the maximum distance simply was not respected. If I were
                to attempt to recreate the string now, I would probably attempt
                to use distance joints again, but also put colliders or a
                raycast in between each pair of nodes. This would allow me to
                detect if the string is slipping past a corner and take some
                sort of action. I would need to do more testing and
                experimentation to determine what would work.
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2021.3.18f1</li>
                <li>Group project (team of 5)</li>
                <li>48 hour game jam</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: November 06, 2023</li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://trim-ge2019.itch.io/the-red-line-of-fate"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/CGJ2023"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
