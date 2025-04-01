import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";

export default function FloorIsLava() {
    return (
        <div className="projectPage">
            <h1>THE: Floor Is Lava</h1>
            <h2>Creative Game Jam 2024: Disappearing</h2>
            <p>
                This was the first game jam that I did with the express
                intention of gathering an inexperienced team and sharing as much
                game dev knowledge as I could. The team was composed of one
                artist, one musician, and three programers (myself included). Of
                the other two programers, one was somewhat experienced (they had
                worked on some projects in the past and at the time was in the
                middle of a large project), but wanted to imrpove their skills.
                The other programer was very new to game dev, and was also
                relatively new to programing in general. Throughout the jam, I
                kept trying to give tasks that would further my teammates
                knowledge, as well as try to coach them whenever they got too
                stuck. Overall, I think it was a good experience for everyone.
                The entire team gave me positive feedback and told me that I did
                a good job as well, which gave me further confidence.
            </p>
            <h2>About the game</h2>
            <p>
                Our interpretation of the theme was that both the world and the
                players abilities would be disappearing. This resulted in us
                making a puzzle game where the goal was to step on every tile a
                certain number of time. After you walked on a tile a number of
                times equal to its limit, the tile would disappear. We also had
                a unique control system. The player has an inventory queue that
                abilities go into. For example, the ability to move in a certain
                direction would be in the inventory. If you didn't have a marker
                that let you move to the left, you would be unable to. We had
                three types of markers: basic movement,
                <Tooltip
                    text="wind"
                    tooltip="Wind would push the player in a defined direction every three turns."
                />
                , and
                <Tooltip
                    text="mimic"
                    tooltip="Mimic would spawn a second character that would move in the opposite direction that the player moved. If the mimic was unable to move in that direction, it simply didn't, resulting in the offset between the player and the mimic changing."
                />
                . Each of the markers took up a different amount of space in the
                inventory and would last as long as at least one space of the
                inventory contained part of the marker.
            </p>
            <h2>My contribution</h2>
            <p>
                For this jam, I made the character controller (including the
                inventory queue system), set up the tilemap system (using what I
                learnt from making Minesweeper), as well as the mimic ability.
                Aside from the queue, most of it was systems that I've
                implemented in the past. I integrated the animations, which I
                was quite unpracticed with at the time, as well as the music,
                which I had very little experience with as well. My main focus
                was to teach my teammates as much as a could, so that also
                occupied a fair bit of my time.
            </p>
            <h2>Technical challenges</h2>
            <p>
                My main technical challenges arised from being out of practice
                with the Unity's animation system. Due to that, I spent a lot of
                time fine tuning animations and setting things up so that they
                worked properly. In order to make the animations look good, I
                had to completely refactor the movement portion of the character
                controller. In Unity, if an animation alters a gameobjets
                position, you cannot alter the position directly via a script.
                That caused some issues that resulted in a lot of wasted time. I
                was also juggling trying to teach the most inexperienced member
                of the team, and so had spent some time talking through design
                philosophies with them. Due to all the time spent struggling
                with the animation system, coaching, having design discussions
                about how to implement features, as well as the jam being 2
                hours shorter than normal, the final game ended up with a lot of
                bugs. Overall, the jam was still a success and the team all
                learnt a lot and had fun!
            </p>
            <h2>Bugs</h2>
            <p>
                The current version of the game has a lot of bugs, so I feel I
                need to make a dedicated section to talk about them.
            </p>
            <p>
                The character isn't correctly tied to the tilemap. This has to
                do with using the animations to move the character. Since the
                animation itself moves the character a bit (the player in the
                final frame is not in the same position as it is in the first
                frame), the character is constantly getting slightly offset.
                This was very difficult to tune and correct for. As a result,
                the player sprite and the player location can be different. To
                fix this issue, I would make the character lerp it's position
                from one tile to the next while playing the animation, instead
                of using the animation to cause motion. This would ensure that
                the player is gridlocked while also providing a smooth visual.
                That would not solve the issue of the animation causing the
                sprite itself to shift, so to fix that, there are a few options.
                I would probably adjust the sprite renderer offset to fix the
                issue. Since the levels are small, the offset should never get
                too large. Of course fixing the art asset so that the final
                frame lines the character up to be in the same position as the
                initial frame would also fix the issue.
            </p>
            <p>
                Another issue is that the inventory queue is larger visually
                than it is in actuality. This one would be pretty simple to
                solve. It would only require a check to see how many inventory
                slots are available in that level and only show a number of
                slots equal to the number available. This ties in with the next
                bug.
            </p>
            <p>
                Possibly the largest issue is that the game does not reset
                properly. Following up on the previous issue, if at every level
                reset everything was reset properly, then every time a level is
                loaded, the full reset would make it easier to display on the
                avaialble inventory slots. Proper level reseting is
                fundamenetally a matter of restoring the game state to how it
                was originally, so it's a matter of cleaning up gameobjects and
                resetting variable values.
            </p>
            <h2>FInal thoughts</h2>
            <p>
                Despite the final product being a bug ridden mess, that's OK.
                Game jams are a place where failure is epected and encouraged.
                They are a place where people should feel comfortable showing a
                messy, incomplete, bug ridden project to others. What is
                important is if the creators had fun and learnt new things. In
                that sense, this jam was an absolute success. I certainly had a
                good time and I learnt a lot, both about how to teach others my
                knowledge, as well as simply improving my skills. Another
                important lesson that I learnt is that nothing is perfect. For
                example, my custom tilemap system was a bad fit for this game.
                It was difficult to force the correct features into it, though
                we did manage in the end. Overall, this jam was a great time and
                I am proud to say that I had a part in making this game!
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2022.3.16f1</li>
                <li>Group project (team of 5)</li>
                <li>46 hour game jam</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: September 22, 2024</li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://dragongawain.itch.io/the-floor-is-lava"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/creative-jam-2024"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
