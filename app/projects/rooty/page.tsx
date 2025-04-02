import Button from "@/components/ui/Button";

export default function Rooty() {
    return (
        <div className="projectPage">
            <h1>Rooty's Adventures: Quest For The Root Beer Float</h1>
            <h2>Global Game Jam 2023: Roots</h2>
            <p>
                GGJ 2023 was the first game jam that I ever participated in. I
                had long been interested in game dev and had dabbled with Unity
                a bit years prior, but never got very far. GGJ 2023 changed
                that. I had been about half way through univeristy at the time,
                studying software engineering, so I knew how to program.
                However, I was very unfamiliar with C# and knew very little
                about how to navigate the unity editor. Because of that, I did
                very little actual programming. On our team of six, we did have
                a working professional in the game dev industry, so I was able
                to learn a lot from them.
            </p>
            <h2>About the game</h2>
            <p>
                After brainstorming for bit, I came up with the idea of the main
                character being a can of root beer that gained fizz by moving
                around and could use its fizz meter to fly. This idea was
                fleshed out with the concept of 'if your fizz meter gets too
                full, the can explodes and you need to start over'. With help
                from the team, we came up with a story line for the game and
                started working on it.
            </p>
            <h2>My contribution</h2>
            <p>
                I mainly worked on level design, starting from rough sketches to
                in-editor prototypes. I also did some coding, working with{" "}
                <Button
                    text="cinemachine"
                    href="https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/index.html"
                    colorScheme="none"
                    buttonType="inline"
                />{" "}
                to set up a moving camera that would pan from the goal to the
                player's starting position. Sadly, none of my work made it into
                the published version of the game since our team of excellent
                artists accidentally exported all the assets in 4K resolution.
                Since there were a lot of assets in the game, it suffered from
                hefty lag issues in my complicated level, so we ended up using
                the testing level that our team lead had designed. While very
                little of my work (outside of the game concept) made it into the
                final published version, I still had a lot of fun during this
                jam and learnt a lot!
            </p>
            <h2>Technical details</h2>
            <p>
                There's not much to say here for this one. This jam was mostly a
                learning experience for me. I struggled just navigating the
                unity UI at the start. The jam was difficult in general due to
                my lack of knowledge, but I gave it my all and learnt a lot!
                This jam was a few years ago at the time that I'm writing this,
                but I'll still try to compile a list of what I learnt:
            </p>
            <ul>
                <li>
                    How to navigate the Unity Editor (the hierarchy tab , the
                    inspector tab, etc. Also shortcuts, such as F to zoom
                    in/focus on the selected gameObject).
                </li>
                <li>
                    How to manipulate objects in the editor (mainly dealing with
                    the transform component, so position, rotation, and scale,
                    as well as the color of objects).
                </li>
                <li>How to output information in the console.</li>
                <li>
                    How to make the unity editor have a different color tint
                    when in play mode. This is useful because you cannot edit a
                    scene when the game is playing, so it's a omnipresent visual
                    reminder that no edits you make will be permanent.
                </li>
                <li>
                    How to instantiate a prefab from a script. (This is where I
                    got stuck when I tried to teach myself Unity years prior to
                    this jam).
                </li>
                <li>Don't overscope projects</li>
                <li>And a lot of other information!</li>
            </ul>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2021.3.13f1</li>
                <li>Group project (team of 6)</li>
                <li>48 hour game jam</li>
                <li>Art assets made by the team</li>
                <li>Sound assets made by the team</li>
                <li>Date originally completed: February 06, 2023</li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://twistershadow.itch.io/rudys-adventures"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/RootBeerGameJame"
                text="View the source code"
            />
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
