import Button from "@/components/ui/Button";

export default function Apollo() {
    return (
        <div className="projectPage">
            <h1>Apollo</h1>
            <h2>Montreal Game Jam 2023: Historical Event</h2>
            <p>
                This was the second game jam that I ever participated in, so I
                was still learning a lot of things. As an example, it was during
                this jam that I learnt about the Unity New Input system, which I
                now use in all of my projects.
            </p>
            <h2>About the game</h2>
            <p>
                The historical event that we decided to base the game off of is
                the moon landing. The core concept of the game is that the
                player is an astronaut stuck in a five minute time loop. The end
                goal of the game is to fix all the problems with the ship so
                that it can launch successfully.
            </p>
            <h2>My contribution</h2>
            <p>
                As I was still learning how to program in C#/Unity, my
                contributions weren't as large for this jam. The main components
                that I worked on was the interaction system (player interacting
                with objects around the game), setting up the animations, and
                building the scene terrain. I was also the creative lead on the
                team, leading the game design discussion. I also set up most of
                the hitboxes for the large 3D rocket ship model. We made the
                hitboxes ourselves to ensure that they were placed properly and
                wouldn't block off any passages or key interactables.
            </p>
            <h2>Technical challenges</h2>
            <p>
                This jam happened over two years ago at the time of me writing
                this, so I don't remember exact details. I'll only write down
                what I'm sure of.
            </p>
            <h3>Hitboxing</h3>
            <p>
                Setting up the hitboxes was tedious, but easy work. I built the
                hitbox for the entire rocket model insted of doing it component
                wise. This is because the entire rocket was a single 3D model.
                The few similarities that existed in the rocket, for example the
                floor levels, I did copy-paste the hitboxes that I had made to
                save time.
            </p>
            <h3>Interaction system</h3>
            <p>
                The interraction system seems basic to me now, but back then it
                was quite difficult for me to set up. The way it works is a 3D
                raycast is performed in the direction that the player is
                looking, capped to a certain range limit, and if it makes
                contact with an interactable, it's interacted with. If it came
                in contact with something else first, for example a wall, the
                raycast would be blocked and the object would not be interacted
                with. The system works well, but requires that interactables not
                be blocked by other hitboxes.
            </p>
            <h3>Animations</h3>
            <p>
                The game has two cinematics for the two possible endings. To set
                these up, I used the particle system as well as{" "}
                <Button
                    text="cinemachine"
                    href="https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/index.html"
                    colorScheme="none"
                    buttonType="inline"
                />{" "}
                for camera panning. Once more, with my current knowledge, these
                would be trivial to set up, but they were quite a feat back
                then. The animations were set to run when loaded, so to choose
                the animation that played, we loaded into a different scene. For
                the animation itself, Cinemachine controlled the camera to track
                the rocket. The rocket thrusters were created with the particle
                system, and the rocket's position was altered smoothly via the
                animation controller. In the bad ending, the particle system was
                employed once more to create an explosion effect. While hiddin
                within the explosion, the rocket prefab was deleted to make it
                appear as though the rocket ship had been blown up. The
                explosion delay was set using the delay property of the particle
                system. The good ending was functionally the same as the bad
                ending, except that the ship did not blow up. After the good
                ending animation, a fourth scene was loaded in to display the
                second half of the good ending where a small lander landed on
                the moon. If I were to recreate this with my current knowledge,
                I wouldn't use so many different scenes. The first half of the
                good ending is so similar to the bad ending that they could be
                in the same scene with just some variable toggles. Having the
                moon landing cinematic be in a scene of its own is also
                unnecessary. I would most likely enable and disable large parent
                objects that contain the complete cinematics within them. The
                same would apply to the game world - if it was all put as
                children of a single game object that could be easily disabled,
                we could completely turn off the playable part of the game.
                Since the rocket prefab is the same in the game and in the
                cinematics, we could even just reuse that prefab and not need to
                have two (good and bad ending would use the same one anyway)
                copies of it in the scene.
            </p>
            <h2>Final thoughts</h2>
            <p>
                I had very little experience during this jam, and it shows when
                I look back on it and see how it was made. That being said,
                participating in game jams and creating an internally poor but
                functioning game is a huge part of learning and it was a
                necessary step to become as skilled as I am today.
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2021.3.18f1</li>
                <li>Group project (team of 5)</li>
                <li>48 hour game jam</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: April 30, 2023</li>
            </ul>
            <p>
                If you suffer from 3D motion sickness, I recommend you do not
                play this one.
            </p>
            <Button
                colorScheme="itch"
                href="https://twistershadow.itch.io/apollo"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/HugoML58/MTLGJ"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
