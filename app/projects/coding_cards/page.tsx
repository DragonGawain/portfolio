import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";

export default function CodingCards() {
    return (
        <div className="projectPage">
            <h1>Coding Cards</h1>
            <h2>About the game</h2>
            <p>
                Coding Cards is a roguelike deckbuilder where the cards have
                lines of code. During gameplay, you play cards to construct a
                script that you then execute using the bespoke interpreter that
                I built. Coding Cards is currently my main project. When I
                started the project, I had a clear vision of what type of game I
                wanted to make, and that has helped me a lot during development.
                However, my vision is still evolving and I&apos;ve made some
                major decisions that have pulled away from my initial vision. I
                started the project on May 20, 2024, but progress was
                inconsistent until I graduated from univeristy in December of
                the same year. It is a solo project, so everything has been done
                by me. I am, however, looking for an artist and a musician to
                join me/from whom I can purchase custom assets for my game.
            </p>
            <h2>Technical details/what I&apos;ve learnt</h2>
            <p>
                I have overcome a <i>lot</i> of challenges while creating this
                game. As an example, I discovered pretty quickly the value of
                having a
                <Tooltip
                    text="non-monobehaviour"
                    tooltip="In Unity, a monobehaviour is a script that gets attatched to gameObjects that exist in the scene. A non-monobehaviour script cannot be attatched directly to a gameObject. Monobehaviours cannot exist without being on a specific gameObject, so having a script not be a monobehaviour allows for free creation and deletion of the objects. This is perfect for something like a card, that does not always need to exist in the scene, but must always be stored so that the game knows what's on that card."
                />{" "}
                script. This made the manipulation of cards, the
                <Tooltip
                    text="commands"
                    tooltip="A command is a single line of code that is on a card."
                />{" "}
                that are on the cards, the deck, and much more easier to handle.
            </p>
            <h3>The interpreter</h3>
            <p>
                The interpreter that I built is the heart of my entire game. It
                reads through the commands that are in the script, breaks them
                down, and executes them. It can evaluate IF conditions,
                determine how many times a FOR loop should run, and execute
                WHILE loops as long as the condition is true. It even has
                detection to prevent potential infinite loops from being
                executed! However, it has had issues. It took a lot of time and
                effort to get it to where it is now. Here are some of the issues
                I faced and how I fixed them:
            </p>
            <p>
                FOR loops were by far the hardest of the three control commands
                (if, for, while) to get set up. FOR loops suffered from
                <Tooltip
                    text="off-by-one"
                    tooltip="An off-by-one error is when the loop executes one time too many, or one time too few."
                />{" "}
                errors, as well as an issue where it wouldn&apos;t run at all if
                the loop was supposed to be executed only once. The source of
                the both of these errors was internal miscalculation. I thought
                a lot about what a FOR loop is and what the simplest way to
                calculate the number of times it should run. In the end, my
                answer was &quot;take the value that the iterator stop at and
                subtract the value the iterator starts at. Add 1 if the
                condition has an equality in it.&quot; With this thought as the
                basis of the calculation, I was able to fix both of these
                issues.
            </p>
            <p>
                IF/WHILE commands had an issue where if one was evaluated to
                false, nothing after the control command would execute unless
                there was another IF/WHILE that evaluated to true (the issue
                reset whenever a new script was executed, so it took me a while
                to catch this one). The answer to this one was that my control
                command ending wasn&apos;t actually ending the block. Once I
                realized that this was happening, it was a simple fix of giving
                the ending the required functionality.
            </p>
            <p>
                WHILE loops had infinite looping issues that could
                <Tooltip
                    text="softlock"
                    tooltip="A softlock is when the game enters a state where the player is completely stuck and must restart the game in order to get unstuck."
                />{" "}
                the game. Setting up a system to detect potential infinite loops
                was tricky because I had to consider nested control commands. An
                ideal infinite loop detection would check to see if nested
                control commands would always be true thereby causing the
                infinite loop, but mine is not that advanced yet and so assumes
                that all conditions will always be true. I have plans to upgrade
                it though! To set up the detection, I made it so that before the
                first time a WHILE loop is examined, it checks all the
                statements inside of the loop body. With the complete knowledge
                of everything that can happen inside the loop, I can determine
                if there is potential for it to be infinite. My current crude
                approach is to ensure that the player must end the loop in a
                different place then where they started. Since the board size is
                limited and script execution immediately terminates if the
                player attempts to walk off of the board, that ensures that the
                loop cannot be executing forever.
            </p>
            <h3>Extension methods</h3>
            <p>
                I also learnt about extension methods. Extension methods allow
                you to add functionality to existing classes without modifying
                the class itself. In practice, this lets you call a method on a
                variable/object without needing to pass the variable/object in
                as an argument. I use extension methods for a few things, such
                as randomizing the order of elements in a list. The largest use
                I have for extension methods though is enums. I have extension
                methods that allow me to get custom attributes that I&apos;ve
                placed on the enum value, to get a random value in an enum, and
                more.
            </p>
            <h3>Enums</h3>
            <p>
                An enum, short for enumeration, maps values to integers that can
                be defined. by default, values start at 0 and count upwards,
                incrementing by 1 for every additional entry in the enum. You
                can also assign your own integer value to each enum entry. The
                integer that the entry is mapped to is an ID of sorts, so
                it&apos;s good practice to not use the integer to store
                additional value. Each value in an enum can also be assigned
                custom attributes. These custom attributes can be of any type
                that I want. As an example, every card in my game can have
                modifiers. To communicate to the player what the modifier does,
                I use a tooltip system. So, my CardModifier enum has values that
                describe each possible modifier a card can have, and each card
                modifier (i.e. enum value) has a custom &apos;tooltip&apos;
                attribute. I can then use my extension method to get the string
                attribute and use it to construct the tooltip for that card.
            </p>
            <h3>Save system</h3>
            <p>
                I also have a fully functioning save system for my game. In true
                roguelike fashion, the game auto-saves after the completion of
                every script to ensure that you cannot
                <Tooltip
                    text="save scum"
                    tooltip="Save scumming is when a player closes the game without saving to revert to a previous point. This allows for players to change their actions or re-roll RNG results."
                />
                . The save system is currently in its second iteration. In my
                first attempt at making a save system, I encoding data into
                string using custom delimiters to state where new data started.
                This had several flaws. First it was difficult to set up.
                Second, it was also difficult to maintain - any time I needed to
                alter data being saved, it was difficult to find where the data
                was being saved from and in what format. Third, all the data for
                a single entity had to be stored on a single line due to how the
                data was being read. Due to all the flaws in the system, I
                sought and found a better way. The current implementation of my
                save system uses the{" "}
                <Button
                    colorScheme="none"
                    buttonType="inline"
                    href="https://docs.unity3d.com/Packages/com.unity.serialization@3.1/manual/index.html"
                    text="Unity Serialization package"
                />
                . With the serialization package, I was able to create custom
                serializers and deserializers for everything that I need to
                save. This alows me to put the encoding and decoding in the same
                place (as opposed to encoding being on the entity and decoding
                in the SaveManager) making everything easier to find. It also
                makes the save file itself much easier to read since the data is
                now being stored as JSON. It&apos;s much easier to edit what is
                being saved and in what format (number, string, binary, etc). In
                addition, it will be much easier to encrypt JSON then it would
                have been to encrypt my custom save data strings. I feel fairly
                proficient in the use of the serialization package and would be
                able to set it up in another project without much difficulty.
            </p>
            <h3>Other</h3>
            <p>
                This section is for other implementation details that are too
                small to deserve a sub-header of their own, but that I want to
                mention.
            </p>
            <ul>
                <li>
                    I maintain a running devlop file inside of my project. Every
                    day that I work on the game, I add a dated entry and fill it
                    as I work throughout the day. This helps keep me on task,
                    and makes it very easy for me to look back and see where I
                    left off if I don&apos;t work on it for some time.
                </li>
                <li>
                    Fundamentally, a WHILE is simply an IF that gets reevaluated
                    at the end of its block. If the condition is still true, the
                    contents are executed again.
                </li>
                <li>
                    It is better to have a single &apos;tooltip&apos; gameObject
                    that follows the cursor as opposed to giving every
                    gameObject its own hidden tooltip child object. Having a
                    single object follow the mouse allows you to have it follow
                    precise mouse movement, as well as snap it to screen corners
                    so that it does not go off screen. Giving each entity a
                    hidden tooltip child might cause issues if you don&apos;t
                    know where everything can be placed. Even placement is not
                    enough - different screen resolution can cause entities to
                    be shifted. In addition, it&apos;s faster and uses less
                    storage space to use a single object than many.
                </li>
            </ul>

            <h2>How the game plays/Game loop</h2>
            <p>
                The game features a Slay The Spire type node map that the player
                needs to traverse through. There are currently (March 26, 2025)
                four main types of events that can be enountered. After every
                fight type event is cleared, the player is given the opportunity
                to create a new card and add it to their deck. Players are
                presented with three options which can have a control command
                (IF, FOR, WHILE), as well as a random number of statement
                (anything else) commands on them. A card can only have a maximum
                of 5 commands on it.
            </p>
            <h3>Fight type events</h3>
            <p>
                There are a few variations of the &apos;fight&apos; type event:
                &apos;fight&apos;, &apos;miniboss&apos;, and &apos;boss&apos;.
                The fight events are the core of the gameplay loop. In a fight
                event, you play your cards to interact with the world. Your
                ultimate goal is to navigate to the key(s) to collect them. Once
                you&apos;ve collected all the keys, you can make your way to the
                gate cell. Upon reaching the unlocked gate, the level will be
                cleared. There are also enemies that you need to deal with
                (I&apos;ll speak about those later). I have plans to add in an
                alternate win condition - defeating all the enemies in the
                level. The idea behind it is that it would allow for two main
                strategies: a high-mobility build where the player gets the
                key(s) and arrives at the gate very quickly, or a combat build
                focussed on defeating all the enemies. To help flesh out that
                concept, I also have a few different player classes written down
                in my task list file. However, none of that is implemented yet.
            </p>
            <h3>Shop</h3>
            <p>
                The shop was the second event that I built. Currently, it lets
                you remove a single card from your deck. Originally, I was
                planning on making the game such that once a card entered your
                deck, you would never be able to remove or edit it. This was a
                core idea in my game, so it was difficult for me to ultimately
                decide against this plan. I simply found that the game was not
                fun with this sort of permanence.
            </p>
            <h3>Trader</h3>
            <p>
                The trader was built next. The trader constructs three random
                cards using the
                <Tooltip
                    text="random card generator"
                    tooltip="My random card generator produces a card that has a random number of randomly selected commands on it. Building it came with its own set of challenges, but I ultimately solved them with some clever extension method usage. The extension methods also reduced code duplication, making the code much more readable!"
                />{" "}
                that I built. It then randomly selects three cards from the
                player&apos;s deck and offers to exhange one of the cards that
                the player has with one of the randomly generated ones. Each
                card selected from the deck is paired with a card on offer,
                setting up the available trades. I really like the way the
                trader turned out. Sometimes it makes funny cards, such as loops
                that end immediately and so can&apos;t have anything inside of
                them. Or cards that move left then right (which actually does
                have a usecase). It can also produce really valuable cards, so
                its power is not to be underestimated! I find it most
                interesting when the trader creates a card that is very useful,
                but that I had not yet conceived of. It makes me very excited
                for the future when my games shows me its own potential!
            </p>
            <h3>Card editor</h3>
            <p>
                The most recent addition to the suite of events is the card
                editor. Fully embracing the idea that cards should not be
                immutable, the card editor allows the player to select a single
                card and either add commands, remove commands, add card
                modifiers, or remove card modifiers. The player can only select
                one action to perform on a single card at every visit to the
                card editor. Since the card editor allows the player to freely
                add even the rare commands and unique modifiers to cards, I
                introduced currency to balance it! Each piece of a command has a
                different cost, as do modifiers. For example, when building a
                FOR loop, the &apos;&gt;=&apos; symbol should be more expensive
                than &apos;&gt;&apos; as it would allow the FOR loop to run an
                additional time. The cost to add something can be different than
                the cost to remove it.
            </p>
            <h3>Lighting, Interrupts, Enemies</h3>
            <h4>Lighting</h4>
            <p>
                Much like my other projects, Coding Cards uses{" "}
                <Button
                    colorScheme="none"
                    buttonType="inline"
                    href="https://docs.unity3d.com/2022.3/Documentation/Manual/index.html"
                    text="Unity's Universal Render Pipeline"
                />{" "}
                for lighting. However, I&apos;m not currently using it. I have
                some potential plans that incorporate using lighting, but
                nothing that is guranteed to be implemented yet.
            </p>
            <h4>Interrupts</h4>
            <p>
                Another system that I&apos;m quite proud of is the interrupt
                system. If the first command on a card is an IF control command,
                then that card can have the interrupt modifier! If a card with
                the interrupt modifier is played, it does not enter the normal
                script. Instead, its condition is evaluated after every
                statement command is executed (yes, that&apos;s both what it
                does and how it&apos;s implemented internally). If the condition
                is true, normal script execution is paused and the interrupt
                runs. Once the interrupt is finished, the script resumes from
                where it left off. Designing this system was a lot of fun. The
                interrupt system is a way for players to interact with the game
                while the script is executing. I like the extra level of
                reactive control it gives players. This is one of those
                &apos;unique modifiers&apos; I mentioned earlier. I call it
                unique because you cannot create a card with this modifier
                through post-fight card creation.
            </p>
            <h4>Enemies</h4>
            <p>
                There are a two different types of enemies and several movement
                patterns. Basic enemies deal contact damage to the player while
                AOE enemies attack all the cells in an area around them. There
                are a few options for the shape as well as the range that the
                AOE attack can be. To balance out the power of AOE enemies, they
                neither move nor attack every turn. In terms of movement
                patterns, the fundamental two are perpendicular matching and
                parallel matching. Parallel matching will move in the same axis
                (horizontal/vertical) that the player just did until the enemy
                is in the same row/column as the player. At that point, it will
                move directly towards the player. Perpendicular matching prefers
                the axis that the player did not just move in, but also directly
                chases the player if in the same row/column. Beyond that,
                enemies can move fully randomly, or randomly with a bias towards
                one of the two fundamental patterns. Enemies with a bias roll a
                value between 0 and 1. If the value is lower than the bias, then
                the movement pattern is followed. Otherwise, the enemy chooses a
                random direction. There are currently two attacks in the game: a
                basic shoot that launches a bullet in the direction that player
                last moved, and a shockwave mine that is placed on the same cell
                that the player is on. The bullet moves twice as fast as
                everything else and if it collides with an enemy, the enemy
                dies. The shockwave targets cells around it in an expanding
                wave. If an enemy is on the edge of the wave, it dies. Similar
                to the AOE enemyies, the shockwave can also be in different
                shapes and propogate a different number of cells.
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2022.3.16f1</li>
                <li>Solo project</li>
                <li>
                    The few art assets in the game were made by me, or are
                    default unity assets
                </li>
                <li>Currently no sound assets</li>
                <li>Date originally published (on itch): February 11, 2025</li>
                <li>
                    Still in active development with regular updates being
                    published. I have a lot of plans for future features to add
                    in!
                </li>
            </ul>
            <Button
                colorScheme="itch"
                href="https://dragongawain.itch.io/coding-cards"
                text="View on itch"
            />
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
