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
                only me and one other person on the team. Nalbointo is a a
                hexagonal grid based deterministic puzzle game with hefty
                inspiration from{" "}
                <a
                    href="https://caravelgames.com/Articles/Games.html"
                    target="_blank"
                    className="underline text-blue-800 hover:text-violet-800 visited:text-violet-900 dark:text-blue-500 dark:hover:text-fuchsia-700 dark:visited:text-fuchsia-800"
                >
                    DROD (Deadly Rooms Of Death)
                </a>
                . Both DROD and Nalbointo have the character wielding a Very
                Large Sword. A turn is spent either moving to an adjecent cell,
                or rotating, moving the sword into a different cell. Unlike
                DROD, Nalbointo uses a hexagonal grid whereas DROD uses a square
                grid. Nalbointo sword also cannot move on top of while, and
                Nalbointo cannot move diagonally.
            </p>
            <h2>My contributions</h2>
            <p>
                I did the lion's share of the programming, including the
                character controller, collision checks for player/sword, setting
                up the tilemap, enemy AI, lighting, and inventory system. My
                partner set up the save system, art, and music. Some aspects,
                such as the UI, were split amongst both of us.
            </p>
            <h3>Enemy AI</h3>
            <p>
                The game features two types of AI. The first AI attempted to
                move directly towards the player. If there was a wall in the
                way, it would simply get stuck on the wall. For other type of
                enemy, I implemented a hexagonal version of the A* algorithm.
                The A* enemies were able to pathfind around walls as well as the
                sword. All enemies would die if they ended up in the same cell
                as the sword. Neither type enemy were able to walk directly onto
                the sword, requiring that the player give an input to kill the
                enemies. The player would move before the enemies to make it so
                that enemies couldn't 'dodge' an attack. Enemies also had an
                activation radius. Until the player got close enough to them,
                the enemies would remain completely stationary. This was partly
                because of the dynamic lighting that I had set up. The other
                reason was that, for larger levels especially, we had wanted the
                player to overcome certain challenges. If all the enemies
                attempted to converge on the player's location, it would ruin
                certain challenges that we had hand crafted.
            </p>
            <h3>Dynamic lighting</h3>
            <p>
                All the walls would block light, creating a 'fog of war' type of
                effect. This is part of why enemies only activated when the
                player got close enough - we had considered it unfair if an
                enemy had managed to sneak up on the player completel
                undetected. In the game, there are three different types of
                torches that cast light. The player also had a light zone around
                them so that they could see their immediate surroundings. The
                first type of torch are the green permanent torches. These were
                placed by my partner and I to light up certain parts of the
                levels that we always wanted to be visible. The second type of
                torch is the blue torch. These start unlit, but light up the
                first time the player touches them with either the sword or
                their body. Upon touching a blue torch, the game would save. The
                last type of torch is the orange torch. The player starts with
                10 of these and can place or pick them up as they desire. In
                terms of implementation, I used Unity's Universal Render
                Pipeline (URP) as I do for all of my projects and the
                ShadowCaster2D script to create the shadow casters. In order to
                get the shadows to work, we selected tiles in the editor that
                would block the light and a gameobject was instantiated in all
                of those places to block the light.
            </p>
            <h3>Other mechanics</h3>
            <p>
                Throughout the project, we had to down scope a fair bit. This
                was partly due to the loss of a team member, and also partly due
                to other courses demanding our attention and time. In the end,
                the only other feature that we had time to implement was a
                button and gate system. There are two types of buttons: one that
                is activate when the player steps on it, and one that is
                activated when the sword comes in contact with it. Either type
                of button can toggle the state (open/close) of any number of
                doors. We had had plans for other ideas, such as multi-floor
                levels, traps (arrow traps, pitfalls that would bring the player
                to a different level), an enemy that could spawn other enemies,
                and more, but sadly none of them made it into the game. We had
                planned them out as extra features to being with in order to
                ensure that the project remained within scope, so it was an
                easily accepted loss.
            </p>
            <h3>Levels</h3>
            <p>
                The game features three levels. The first is a tutorial to teach
                players how to move and rotate the character. Introduce the
                concept of gates, as well as show the player that in order to
                navigate through some passages, you must enter them with the
                sword facing a certain direction. It features three main rooms,
                the first introducing the simple enemies, the second the A*
                enemies, and the third a combination of the two. The second
                level has three main components. First a button/gate puzzle.
                There are five buttons and four gates. Each button toggles
                different gates and the player must figure out which buttons to
                push to have all four gates open at the same time. Then there
                are two main rooms that the player must navigate through to hit
                buttons. The lower room is wide open whereas the upper room is
                mainly tight corriders. The idea was to show how different
                layouts induce a different playstyle. The third and final level
                is a boss level where we implemented a special 'ghost' enemy.
                The ghost enemy could not be killed and used the A* algorithm to
                chase the player. If the ghost got too close to the player, it
                slowed down a bit so that the player could use combat maneuvers
                that involved moving backwards and not be harshly punished for
                it. However, if the player spent too long dealing with a group
                of enemies, the ghost would catch up and kill the player. This
                level also features some hidden passages that are completely
                unmarked as a reward to players who poke at every wall. The
                ghost cannot travel through the secret passages, so it gives the
                player a big head lead. I did a lot of the level designing,
                coming up with the level concepts and building them. My partner
                did playtest them and helped balance them though.
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
                them would work and successfully had a prototype working within
                30 minutes.
            </p>
            <p>
                Other than the very clunky to use scout system, I didn't face
                many other technical challenges. Setting up the A* algorithm
                took some work as this was the first project I did where I used
                the A* algorithm. Speaking of A*, learning to think in hexagonal
                grid coordinates was also a challenge that I faced early on.
                Thankfully I found some resources that helped explain how
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
                variant="itch"
                href="https://dragongawain.itch.io/nalbointo-vs-the-hopocalypse"
                text="View on itch"
                newTab="_blank"
            />
            {/* repo is private */}
            {/* <Button
                variant="git"
                href="https://github.com/DragonGawain/376-project"
                text="View the source code"
                newTab="_blank"
            /> */}
            <Button href="../" text="Return to Main" />
        </div>
    );
}
