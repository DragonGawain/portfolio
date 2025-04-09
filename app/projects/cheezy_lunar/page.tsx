import Button from "@/components/ui/Button";
// import Tooltip from "@/components/ui/Tooltip";

export default function CheezyLunar() {
    return (
        <div className="projectPage">
            <h1>Cheezy Lunar Defender</h1>
            <h2>Global Game Jam 2024: Make Me Laugh</h2>
            <p>
                For this jam, I was in a team of five. We had one musician, one
                artist, and three programmers. This is one of the few projects
                I&apos;ve been a part of that I did not lead the game design
                discussion.
            </p>
            <h2>About the game</h2>
            <p>
                After our brainstorming/game design discussion, we ended up
                deciding on a game concept of having a cat mine cheese from the
                cheesy moon to load cannons that shoot at an onslaught of mice.
                We leaned heavily into absurdity and the sound design in order
                to make it funny.
            </p>
            <h2>My contribution</h2>
            <p>
                As with many of the other jams that I&apos;ve been a part of, I
                made the character controller for this game. Other than that, I
                also designed the cannons that detect and shoot at enemies.
            </p>
            <h2>Technical details</h2>
            <h3>Cannons</h3>
            <p>
                The cannons were probably the most technically difficult part
                that I was in charge of. The difficult part of the cannons was
                making it so that the sprite rotated from the base. The trick
                was fairly simple - I changed the anchor point of the gameObject
                to be at the base so when I rotated the transform, it rotated
                from the base instead of from the middle of the cannon. The
                actual functional part was fairly easy - the cannon rotates back
                and forth, casting a ray in a straight line outwards. If the ray
                encounters an enemy, the cannon shoots (if it has ammo), and
                then enters a cooldown phase. Once the cooldown is done,
                it&apos;s able to shoot again. The ray is also set to only
                detect enemies through the use of physics layers. In Unity,
                making ray casts only interact with a particular layer is a
                built-in functionality.
            </p>
            <h3>Character controller</h3>
            <p>
                The character controller is fairly standard. For mining
                resources and loading the cannons, the resources/cannons each
                have a trigger box. If the player is within the trigger box,
                it&apos;s able to perform the respective action. We made certain
                that the player could not be in multiple trigger boxes at the
                same time by placing the cannons/resources a certain minimum
                distance away from each other. This made the code simpler to
                write and avoided potential issues. There are also checks to
                ensure that you could only load a cannon with the type of
                resource that it requires and that the player could only have 1
                type of resource in their inventory at a time. Those checks were
                done with a simple IF statement - if the type of cheese the
                player was holding matched, the action could be performed. When
                the player was not holding any cheese, the type represented
                this, allowing the player to mine any type of cheese. The type
                of cheese is stored as an enum.
            </p>
            <h3>Resource deposits</h3>
            <p>
                Each resource deposit has a customizable maximum amount that
                they can hold. I also made it so that they refresh (regain
                resources and potentially change type of resource) after a
                customizable number of waves are cleared. The custom values are
                set in the Unity editor with the use of serialized fields. When
                the enemies get to a resource deposit, they reduce the number of
                resources it currently has in stock. If the number of available
                resources drops below 0, the resource deposit is destroyed.
            </p>
            <h2>Final thoughts</h2>
            <p>
                This jam wasn&apos;t too technically difficult for me. I had the
                knowledge to know how to set up a raycast that only detected
                enemies. I knew how to set up an inventory system and cooldown
                timers. I knew how to design a projectile that split apart into
                more projectiles when it made contact with a target. Overall it
                was just a fun game jam!
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2021.3.18f1</li>
                <li>Group project (team of 5)</li>
                <li>48 hour game jam</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: January 28, 2024</li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://zaidminhas.itch.io/cheezy-lunar-defender"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/GGJ2024/"
                text="View the source code"
            />
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
