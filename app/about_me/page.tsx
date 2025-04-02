import Button from "@/components/ui/Button";

export default function aboutMe() {
    return (
        <div className="projectPage">
            <h1>About me</h1>
            <h2>Introduction</h2>
            <p>
                Hi! I'm Craig Kogan, a Software Engineer from Montreal, Canada.
                I graduated from Concordia University in December 2024. I was
                introduced to games at a very young age. I remember playing
                Pacman on my dad's Atari once and grew up playing the orignal
                Super Mario Bros on the NES as well as the original Sonic The
                Hedgehog 2 on the Sega Genesis. At some point when I was close
                to the end of high school, I decided that I didn't want to just
                play game, I wanted to make them. My original feelings that made
                me interested in game dev was that I had wanted to give back to
                the gaming community by making something of my own that I could
                share with others. I started dabbling with some game dev tools,
                but never got very far until I did my first game jam, the global
                game jam 2023.
            </p>
            <h2>My workflow</h2>
            <h3>Personalized IDE setup</h3>
            <p>
                Over the years since I started programming, I've spent a fair
                bit of time trying to optimize my workflow to work better for
                me. I've tried out a few different IDEs, played with keyboard
                shortcuts, and more. Currently, I'm using VScode as my IDE of
                choice. I use a customized color theme based on the Abyss theme.
                Some of the major things that I've altered is the color of
                comments so that they stand out a lot more, as well as the color
                of nested brackets to make it easier to see where inline
                segments end. For a while, I tried the Neovim extension with
                VScode but found that it didn't work with how I think for a few
                reasons. However, I like the philosophy that I pulled from
                Neovim, which was 'don't use the mouse'. So, I delved deep into
                the multitude of keyboard shortcuts that VScode has built in and
                found some that delighted me. Ways to move the cursor around
                faster were a must, as well as a mouse-free way to open and
                close files. I use multiple IDE windows, so being able to throw
                a file into a different window with shortcuts is also something
                that I do. My work over the years has evolved into a truly
                personalized setup that lets me code as fast as I can.
            </p>

            <h3>How I debug</h3>
            <p>Debugging is a very crucial part of</p>
            <Button
                href="./about_me/game_design_process"
                text="My game design process"
                colorScheme="blue"
                newTab={false}
            />
            <Button
                href="./about_me/how_I_debug"
                text="My debugging process"
                newTab={false}
            />
            <Button
                href="./about_me/tools_I_use"
                text="Tools I use/made"
                newTab={false}
            />
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
