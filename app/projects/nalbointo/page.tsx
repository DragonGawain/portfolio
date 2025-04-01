import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function Nalbointo() {
    return (
        <div className="projectPage">
            <h1>Nalbointo vs The Hopocalypse</h1>
            <h2>About the game</h2>
            <p>
                Nalbointo was a school project that I did for one of my game dev
                courses while studying at university. The project was to create
                a game while learning how to cooperate with a team, as well as
                to maintain documenation. I had originally been in a team of
                three, but due to some internal team issues, one person ended up
                leaving the team without having done much, so it ended up being
                only me and one other person on the team. Nalbointo is a
                hexagonal grid based, deterministic puzzle game with hefty
                inspiration from{" "}
                <Button
                    colorScheme="none"
                    buttonType="inline"
                    href="https://caravelgames.com/Articles/Games.html"
                    text="DROD (Deadly Rooms Of Death)"
                />
                . Both DROD and Nalbointo have the character wielding a Very
                Large Sword. A turn is spent either moving to an adjecent cell
                (moving both the player and the sword), or rotating, which only
                moves the sword. Unlike DROD, Nalbointo uses a hexagonal grid
                whereas DROD uses a square grid. Nalbointo's sword also cannot
                move on top of walls, and Nalbointo cannot move diagonally.
            </p>
            <h2>My contributions</h2>
            <p>
                I did the lion's share of the programming, including the
                character controller, collision checks for player/sword, setting
                up the tilemap, enemy AI, lighting, and inventory system. My
                partner set up the save system, art, and music. Some aspects,
                such as the UI, were split amongst both of us.
            </p>
            <h2>Technical details</h2>
            <h3>Enemy AI</h3>
            <p>
                The game features two types of AI. The first AI attempts to move
                directly towards the player. If there is a wall in the way, it
                simply gets stuck on the wall. For other type of enemy, I
                implemented a hexagonal version of the A* algorithm. The A*
                enemies are able to pathfind around walls as well as the sword.
                All enemies die if they end up in the same cell as the sword.
                Neither type enemy are able to walk directly onto the sword,
                requiring that the player give an input to kill the enemies. The
                player moves before the enemies to make it so that enemies can't
                'dodge' an attack. Enemies also have an activation radius. Until
                the player gets close enough to them, the enemies remain
                completely stationary. This was done partly because of the
                dynamic lighting that I had set up. The other reason was that,
                for larger levels especially, we had wanted the player to
                overcome certain challenges. If all the enemies attempted to
                converge on the player's location from turn 1, it would ruin the
                hand crafted level design. As an example, if an enemy was set up
                to ambush the player, the ambush wouldn't work if the enemy
                moved from its spot before the player got close.
            </p>
            <h3>Dynamic lighting</h3>
            <p>
                All the walls block light, creating a 'fog of war' type of
                effect. As I mentioned earlier, this is part of why enemies only
                activate when the player gets close enough. We wanted to make
                sure that the player could see the enemies moving. It is a
                puzzle game after all, and I am not a fan of information hiding
                as a method to create difficult puzzles. In the game, there are
                three different types of torches that cast light. The player
                also has a light zone around them so that they can see their
                immediate surroundings. The first type of torch is the green
                permanent torches. These were placed by my partner and I to
                light up certain parts of the levels that we want to always be
                visible. The second type of torch is the blue torch. These start
                unlit, but light up the first time the player touches them with
                either the sword or their body. Upon touching a blue torch, the
                game saves. Touching a lit blue torch saves the game again.. The
                last type of torch is the orange torch. The player starts with
                10 of these and can place or pick them up as they desire. In
                terms of implementation, I used{" "}
                <Button
                    colorScheme="none"
                    buttonType="inline"
                    href="https://docs.unity3d.com/2021.3/Documentation/Manual/index.html"
                    text="Unity's Universal Render Pipeline"
                />{" "}
                (URP) as I do for all of my projects, and the ShadowCaster2D
                script to create the shadow casters. In order to get the shadows
                to work, we selected tiles in the editor that would block the
                light and a gameobject is instantiated on all of those places at
                runtime to block the light. I used that implementation because I
                did not know of a way to have only select tiles in a tilemap
                block light. Thinking on it now, I probably could have made
                another tilemap that has both a TilemapCollider2D as well as the
                ShadowCaster2D components. As I have not tested this, I am
                uncertain if it would work, but it would be my first angle of
                attack if I were to recreate the system anew.
            </p>
            <h3>Other mechanics</h3>
            <p>
                Throughout the project, we had to down scope a fair bit. This
                was partly due to the loss of a team member, and also partly due
                to other courses demanding our attention and time. In the end,
                the only other feature that we had time to implement was a
                button and gate system. There are two types of buttons: one that
                activates when the player steps on it, and one that activates
                when the sword comes in contact with it. Both types of button
                can toggle the state (open/close) of any number of doors. All
                buttons are toggles, meaning they will close all open gates and
                open all closed gates that they influence. To set that up, each
                gate has a SerializedField Array that we can drag/drop buttons
                into in the Unity editor. Then, every time the button is
                activated, it changes it's state. Every gate checks all of it's
                buttons every frame and opens/closes accordingly. This is a
                pretty silly implementation of button and gates. A much better
                implementation would be to have the buttons contain an array of
                the gates it toggles, and every time the button is pressed, it
                toggles all of its related gates. The only potential advantage I
                could see in the implemented system is that it guarantees
                correctness if two buttons are activated on the same turn.
                However, that's a very simple fix only requiring a defined turn
                order. For example: player, sword, enemies.
            </p>
            <p>
                We had had plans for other ideas, such as multi-floor levels,
                traps (arrow traps, pitfalls that would bring the player to a
                different level), an enemy that could spawn other enemies, and
                more, but sadly none of them made it into the game. We had
                planned them out as extra features to being with in order to
                ensure that the project remained within scope, so it was an
                easily accepted loss.
            </p>
            <h3>Levels</h3>
            <p>
                The game features three levels. The first is a tutorial to teach
                players how to move and rotate the character. It also introduces
                the concept of gates, as well as show the player that in order
                to navigate through some passages, you must enter them with the
                sword facing a certain direction. It features three main rooms,
                the first introducing the simple enemies, the second the A*
                enemies, and the third a combination of the two.
            </p>
            <p>
                The second level has three main components. First a button/gate
                puzzle. There are five buttons and four gates. Each button
                toggles different gates and the player must figure out which
                buttons to push to have all four gates open at the same time.
                Then there are two main rooms that the player must navigate
                through to hit buttons. The lower room is wide open whereas the
                upper room is mainly tight corriders. The idea was to show how
                different layouts induce a different playstyle.
            </p>
            <p>
                The third and final level is a boss level where we implemented a
                special 'ghost' enemy. The ghost enemy cannot be killed and uses
                the A* algorithm to chase the player. If the ghost gets too
                close to the player, it slows down a bit so that the player can
                use combat maneuvers that involve moving backwards and not be
                harshly punished for it. However, if the player spends too long
                dealing with a group of enemies, the ghost will catch up and
                kill the player. This level also features some hidden passages
                that are completely unmarked as a reward to players who poke at
                every wall. The ghost cannot travel through the secret passages,
                so it gives the player a big head lead. I did a lot of the level
                designing, coming up with the level concepts and building them.
                My partner playtested them and gave balance suggestions. If I
                recall, I had asked them if they were interested in making any
                of the levels and they had told me no, but I may be
                misremembering.
            </p>
            <h2>Technical challenges</h2>
            <p>
                There were a few technical challenges that we encountered along
                the way. Firstly, the way I implemented the player and sword is
                not very good. Internally, there is a 'scout' object that checks
                the cell the player/sword want to move into and if there is a
                wall there that blocks movement, the move is cancelled. Instead
                of having an object check the cell(s), I could have figured out
                which cell the player/sword wanted to move into and check if the
                move was legal in the code. The introduction of the scout object
                was completely unnecessary and caused other complications. The
                scout system in general was very clunky, and after the project
                was complete I created a demo that tested how a system without
                the scouts would work and successfully had a prototype working
                within 30 minutes.
            </p>
            <p>
                Other than the very clunky to use scout system, I didn't face
                many other technical challenges. Setting up the A* algorithm
                took some work as this was the first project I did where I used
                the A* algorithm. Speaking of A*, learning to think in hexagonal
                grid coordinates was also a challenge that I faced early on.
                Thankfully I found some resources online that helped explain how
                hexagonal grids work and they helped me build my mental model of
                the coordinates.
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2021.3.18f1</li>
                <li>Group project (team of 2)</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: December 01, 2023</li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://dragongawain.itch.io/nalbointo-vs-the-hopocalypse"
                text="View on itch"
            />
            {/* repo is private */}
            {/* <Button
                variant="git"
                href="https://github.com/DragonGawain/376-project"
                text="View the source code"
            /> */}
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
