import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";

export default function StrungAlong() {
    return (
        <div className="projectPage">
            <h1>Strung along</h1>
            <h2>Concordia Game Jam 2023: The Space Between</h2>
            <p>
                This was the third game jam I participated in. By this point, my
                skills with Unity were pretty well established. I was also
                continuing my trend of being very involved with game design
                discussion we held at the start of the jam. As it's been around
                17 months since this jam, I don't recall how much of the game
                concept I came up with. I do recall that I was still refining my
                game design skills and that it was a group effort to arrive at
                our final design though.
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
                largest impact on our game design was 'Name a better pair'
                (include a cooperative aspect). Our game concept settled into
                being a 2 player couch-coop game where the two characters were
                connected via a string. The string represented the space between
                the two characters and was our interpretation of the theme.
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
                This caused a lot of difficulties.
            </p>
            <h3>String logic: one player moves</h3>
            <p>
                Having the string attatched to both of the players meant that I
                had to do both a forwards and backwards pass to ensure that the
                string couldn't stretch and could pull the other player along.
                This led me to make different logic for three distinct
                scenarios: only player 1 (the cat) was moving, only player 2
                (the rabbit) was moving, both players were moving. The simpler
                case was when only one of the two players was moving. In this
                situation, I'd do a forwards pass, pulling at each node in order
                towards the player that moved if the distance between the node
                and the previous checked node was greater than the max distance.
                This generated the pulling effect, while also making it so that
                the string could have slack. Only the taut nodes needed to be
                moved. At the end of the string, if the second player was too
                far away from the node closest to it, its velocity would be
                influenced to pull it towards the node, and therefore the other
                player. After the second player was checked, a backwards pass
                was performed, making sure that all the nodes from the second
                player to the first were close enough together. Since each node
                could only be moved a certain amount each check (to prevent all
                the nodes from being in the same spot), this helped give the
                string some 'weight'. It also had the unintended effect of
                making it so that when one player pulled the other, the moving
                player was sometimes pulled back.
            </p>
            <h3>String logic: both players are moving</h3>
            <p>
                The case where both players were moving simultaneously was more
                complicated. Upon reviewing my code, the string pulled towards
                the center, with the center node being pulled towards one of the
                two players. The center node changed which player was dominant
                every fixed update frame (which is where the movement logic was
                being called from). After the string pulled towards the center,
                the second half of the half double pass was performed on each
                side, pulling the nodes up to, but not including, the center
                node towards the respective closer player. This mostly created
                the intended behaviour of neither character being able to move
                very well. Since the cat player did have a dash ability though,
                they were able to pull the rabbit better. Also since air physics
                are different than ground physics, if a character was mid air,
                it was slightly easier to pull on them.
            </p>
            <h3>String gravity and interaction</h3>
            <p>
                This challenge was amongst the easiest to solve once the base
                string was set up. In order to make the string perform better, I
                decided that only the central node would be affected by gravity.
                This had the intended effect of pulling the entire string down.
                While this made it so that some nodes could float, the string
                was short enough that this wasn't much of an issue. In the end,
                this decision made the string perform better.
            </p>
            <p>
                Setting up conditional collisions was very simple. We used
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
