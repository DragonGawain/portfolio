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
            {/* <h2>My workflow</h2> */}
            <h2>Personalized IDE setup</h2>
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
            <h2>How I debug</h2>
            <p>
                Debugging is a very crucial part of programming. Knowing
                someone's debugging process can give insight on how they think,
                so I'll go over my debugging process here. To me, there are two
                kinds of bugs. The first kind is a built-in error. If you get an
                IndexOutOfBounds or a StackOverflow error, those are one type of
                bug. The other type of bug is when the program does not provide
                the intended functionality. In either case, the first step is
                always the most important - identifying the bug. If you do not
                know what you are trying to fix, it will never be fixed.
            </p>
            <p>
                In the case of the first type of bug, there is, I think,
                fundamentally only one way to solve it. You look at the stack
                trace that caused the bug and find the source. If the stack
                trace does not provide enough information, start outputting data
                to the console. Eventually, the source of the error will be
                found. Then you need to fix the error without altering the
                functionality. This can sometimes be tricky, or sometimes be
                exceedingly trivial. It all depends on what the bug is and what
                caused it. The important step that I do here though is that I am
                willing to alter other code in my efforts to find the bug. I
                will put console logs outside of method calls (and then of
                course clean it up) to track down the source. Sometimes, the
                stack trace points at one line of code, but the actual issue
                comes from elsewhere, that's part of why logging information is
                so important. No matter what the cause though, at some point,
                something has to be changed. Either the bug needs to be
                remedied, or the system needs to adapt to ensure that users
                cannot cause the bug to happen in the first place.
            </p>
            <p>
                The second kind of bug is more volatile. It means that someone
                made a mistake at some point. My methodology is more or less the
                same though - once the bug is identified, if I don't know the
                source of the bug, I start logging data until I find the source.
                The only big difference here is that it is not a system error,
                so I need to think about <i>why</i> the intended behavior did
                not happen. I often try to restart my entire thinking process to
                deal with this and start from 'what is the intended behavior?'
                and 'what can I do to produce this sort of behavior?'. By
                constantly questioning both the currently implemented system as
                well as every possible solution I can think of, I self-correct
                the code. By going through the entire thought process from
                scratch, it also gives me the opportunity to spot other bugs
                that had not yet revealed themself.
            </p>
            <p className="!indent-0">My debugging process, in short, is:</p>
            <ol>
                <li>
                    Identify bug (determine what went wrong/how the observed
                    behavior differs from the intended)
                </li>
                <li>
                    Track down the source of the bug, sometimes with the help of
                    logging data to the console
                </li>
                <li>
                    In the case of a system bug: ensure that the identified
                    cause is truly the root cause, then correct it
                </li>
                <li>
                    In the case of a behavior bug: rethink the implementation
                    from the start, analyse and challenge the current
                    implementation to determine why/how it is flawed,
                    refactor/add in the correct behavior while also fixing other
                    bugs that the rethink revealed
                </li>
            </ol>
            <h2>My game design process</h2>
            <p>
                Over the years, since before I did my first game jam, I've been
                refining my game design process. This four step process is
                roughly how it works. Fundamentally, I design games using the
                bottom up approach, meaning I start with the mechanics and I
                build a story around how the game works. I've worked with people
                who think top down (story then mechanics) before, and it's
                difficult for me to think that way. My process of how I make a
                game is still evolving, so I'll examine my game jams to examine
                what my process is. Since I often lead the jam design sessions,
                I've gained a fair bit of experience, and have a number of
                samples that I can look back on to analyze.
            </p>
            <h3>Step one: the idea seed</h3>
            <p>
                This first step is always to get an idea. In a jam, you're given
                a theme and I tend to use this as a 'seed'. I take this idea
                seed and I try to make a connection between it and anything
                else. This conncetion can be full random, for example, 'rain'
                can lead to 'water', to 'ocean', to 'submarine', to 'underwater
                submarine monster battle'. To bring that closer to the initial
                theme, of 'rain', I'd replace the submarine with a fighter plane
                fighting sky monsters, and include various weather effects that
                could either aid or hinder the player. With this sort of
                connecting thoughts, I form an idea for what the overall shape
                of the game might look like. If I'm working with a team, I try
                to get everyone to voice some ideas, and I move on to the next
                phase once we've ammased some thoughts.
            </p>
            <h3>Step 2: rough gameplay loop and mechanics</h3>
            <p>
                The second step is to expand on the concept. There's a few key
                questions I always ask. I pose these questions to both myself
                and the team, and they are as follows:
            </p>
            <ul>
                <li>What is the goal of the game?</li>
                <li>What challenges will the player face?</li>
                <li>
                    What abilities will the player have to overcome these
                    challenges?
                </li>
                <li>
                    Bringing in the other questions, what does the core gameplay
                    loop look like?
                </li>
            </ul>
            <p className="!indent-0">
                These questions help define the mechanics that need to be
                implemented. The questions pinpoint the core game cycle of
                'objective, challenge, reward'. During this phase, I also ask
                the team (and myself) to freely throw in new ideas as they think
                of them. I find that the introduction of new ideas helps flesh
                out the mechanical ideas that the game basis brings about. I
                also like trying to incorporate at least one suggestion from
                everyone, but that can't always happen. The idea in phase 2 is
                to get a rough idea of the core gameplay loop. That is the most
                important goal to achieve here. Once we know more or less how
                the game should play, we can move on. This phase is the longest
                and most fluid phase of my game design process, and it smoothly
                leads into the second to last step.
            </p>
            <h3>Step 3: refining</h3>
            <p>
                The penultimate phase in my game design process is refining. In
                this phase, we refine the basic mechanics that were outlined in
                phase 2. I still reiterate the same questions as before, but try
                to limit the inclusion of any more new ideas. At this point, we
                have an idea of the core game loop and the introduction of brand
                new ideas can lead to confusion, resulting in a game whose core
                design is not firm enough. When that happens, you end up with
                game design discussions happening at every moment and a design
                that is in constant flux, which further leads to internal team
                stress. So, I try to limit new ideas in the refining phase. The
                main point here is to settle on the core gameplan. I ask
                different questions depending on the type of game. For example,
                if we're making a platformer, I might ask 'can we make this
                single mechanic into multiple mechanic?'. An example of that
                would be a slippery platform. When boiled down, 'slippery' means
                less friction and maybe a higher maximum speed. So, now we have
                some variable. What if we did high friction and lower max speed?
                Now we took the ice mechanic and turned it into mud. I pointedly
                avoid any discussion of implementation here. What matters is
                taking the concepts and refining them to be clear. I aim to have
                all team members know:
            </p>
            <ul>
                <li>What the game is about/how the game plays (core loop)</li>
                <li>Key game mechanics</li>
                <li>
                    What features we came up with that should be considered
                    extra/out of scope (especially important in game jams!)
                </li>
                <li>What sort of vibe we want the game to have</li>
            </ul>
            <h3>Step 4: the story/the dressing</h3>
            <p>
                This step is important because it guides how we, the devs, think
                while we're making the game. As we implement features, we
                naturally come up with ways to expand upon them. You will never
                come up with the idea of a double jump if you don't have the
                idea of a single jump in your mind to being with. So, in this
                step, I talk about the story a bit. What tale does the game
                tell? It doesn't need to be specific, but if our platformer is a
                space man going to save the princess or king Arthur trying to
                cross the bridge of death, it'll give rise to different thoughts
                despite the core mechanics being the same of a 'platformer where
                the player gets to the other side'. In 48 hour jams, the art
                assets get finished late into the jam, so I tend to work a lot
                with only default assets. This is probably why this rough
                definition of a story is so valuable to me. Even rough art wil
                communicate to the devs what the general vibe of the game is,
                but without that, we need something else to guide our passive
                creative thoughts. Often, a loose idea of what the game story is
                comes about during phase 3, but when it doesn't spending even
                five minutes talking about the story can make a huge difference.
                Conversely, since I tend to think better bottom up, I try to
                avoid talk of the story in phase 2. Instead, I try to focus more
                on how the game plays. Yet another reason why in my process,
                this final, often shortest, step is so vital. It goes back to
                team cohesion - we want the entire team to have a similar vision
                of what story the game is telling, or the mechanics that we come
                up with will be very different.
            </p>
            <h3>Overview</h3>
            <p>In short, my process is:</p>
            <ol>
                <li>Refine the idea seed into multiple potential core ideas</li>
                <li>
                    Roughly define mechanics, while still brainstorming
                    potentially game defining mechanics
                </li>
                <li>
                    Refine mechanics, limit the introduction of new ideas to
                    ensure a clear goal. Also set up some scope limits and
                    ensure that the team knows what are core feature and what
                    are extra features.
                </li>
                <li>
                    Add in a loose story to help guide mid-development feature
                    ideas
                </li>
            </ol>
            <p>
                Getting to this process has been an evolution over my years
                doing game design. Even before my first game jam, I was thinking
                up game ideas and slowly starting to iterate over my process,
                refining it into what it is today. My process works well and I
                have successfully led many game design discussions. That being
                said, it is not a good fit for everyone, nor for every team.
                I've spoken with some people who think in a more top down
                approach and it puts me at a bit of a loss as I don't know how
                to incorporate it (while in phase 2/3). It's been a pretty
                natural evolution, meaning I haven't looked up many official
                guides on the game design process. However, from my discussions
                with those who have more experience than I, including some
                experts, as well as my own personal experience and team
                feedback, I am confident that my process is a good one. It is
                still an evolving process though. I am constantly eager to learn
                more about the game design process and improve upon my own
                version of it!
            </p>
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
