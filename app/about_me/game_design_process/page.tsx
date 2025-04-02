import Button from "@/components/ui/Button";

export default function gdProcess() {
    return (
        <div className="projectPage">
            <h2>My game design process</h2>
            <p>
                Fundamentally, I design games using the bottom up approach,
                meaning I start with the mechanics and I build a story around
                how the game works. I've worked with people who think top down
                (story then mechanics) before, and it's difficult for me to
                think that way. My process of how I make a game is still
                evolving, so I'll examine my game jams to examine what my
                process is. Since I often lead the jam design sessions, I've
                gained a fair bit of experience, and have a number of samples
                that I can look back on to analyze.
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
                This step is important because it guides how we the devs think
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
                <li>Come up with idea</li>
                <li>
                    Roughly define mechanics, while still brainstorming
                    potentially game defining mechanics
                </li>
                <li>
                    Refine mechanics, limit introduction of new ideas to ensure
                    a clear goal. Also set up some scope limits and ensure that
                    the team knows what are extra features.
                </li>
                <li>
                    Add in a loose story to help guide mid-development feature
                    ideas
                </li>
            </ol>
            <p className="!indent-0">
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
            <Button href="./" text="Return to About Me" newTab={false} />
        </div>
    );
}
