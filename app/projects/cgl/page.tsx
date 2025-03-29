import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function CGL() {
    return (
        <div className="projectPage">
            <h1>Conway's Game Of Life</h1>
            <h2>About the game</h2>
            <p>
                Conway's Game Of Life is a 0 player game played in a sqaure
                grid. It simulates the life cycle of 'cells' based on four
                simple rules. Conway's Game Of life considers diagonal cells to
                be adjacent. The rules are as follows:
            </p>
            <ol>
                <li>
                    Any live cell with zero or one live neighbours dies
                    (underpopulation)
                </li>
                <li>
                    Any live cell with two or three live neighbours lives to the
                    next generation
                </li>
                <li>
                    Any live cell with four or more live neighbours dies
                    (overpopulation)
                </li>
                <li>
                    Any dead cell with exactly three live neighbours becomes a
                    live cell (reproduction)
                </li>
            </ol>
            <p>
                Every generation, the rules are run on all the cells and cells
                become dead/alive as needed. There are a lot of interesting
                patterns that can emerge from the Game Of Life, but that's
                outside of the scope of what I'll be talking about here. If
                you're interested in learning more about Conway's Game Of Life
                and the patterns that emerge, I'll refer you to{" "}
                <Button
                    text="the wikipedia article about it"
                    href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    colorScheme="none"
                    buttonType="inline"
                />
                .
            </p>
            <h2>My recreation</h2>
            <p>
                I created Conway's Game Of Life twice. My first attempt suffered
                from massive lag issues, so I redid the project to deal with the
                lag issues. The entire project took me a total of three days.
            </p>
            <h3>The first attempt</h3>
            <p>
                In my first attempt to create the Game Of Life, I tried to use a
                tilemap. My idea was that I could maybe use{" "}
                <Button
                    text="rule tiles"
                    href="https://docs.unity3d.com/Packages/com.unity.2d.tilemap.extras@3.1/manual/RuleTile.html"
                    colorScheme="none"
                    buttonType="inline"
                />
                {/* TODO: add a page on my website about my custom tile system. Refer to that link here. */}
                . Sadly, I wasn't able to get that to work, but I continued with
                the tilemap method By manually checking each tile in every
                generation, I toggled the state of the tiles (once more using my
                custom data-holding tiles from my Minesweeper game) to be either
                dead or alive. This suffered from a few issues. Firstly, the lag
                that I keep mentioning. The reason this had such terrible lag
                issues was because every generation I was scanning and
                refreshing every tile in the entire tilemap. This was happening
                because I was not keeping track of only the alive cells. In each
                generation, the only cells that need to be checked are the live
                cells and the neighbours of all the live cells. The second major
                issue was that by using a tilemap there was a boundary to the
                simulation. Some patterns result in 'flying machines' that move
                an infinite distance in a certain direction. If any of these
                flying machines hit the edge of the tilemap, they would be
                forcibly deleted, which would result in an inaccurate population
                count, as well as destroy the potential for the flying machine
                to collide with another one, thus altering it in some way. The
                only way to deal with this was to make the tilemap even bigger.
                The bigger the tilemap became, the more tiles had to be checked
                every generation, and the worse the lag became. A new design
                philosophy was needed.
            </p>
            <p>
                In hindsight, looking back on this project now, six months after
                its completion, using custom tiles is not needed. If I had
                instead represented live cells by placing a tile at the
                coordinates and dead cells by removing the tile, I could have
                potentially fixed the lag issues. This representation would have
                also solved the limited space issue as I would be placing and
                removing tiles, not toggling the state of existing tiles. Alas,
                I had not thought of this at the time, so I never tested it.
            </p>
            <h3>The second attempt</h3>
            <p>
                Upon realizing all the issues my tilemap method had, I changed
                my tactic. I completely abandoned the idea of using a tilemap
                and instead just created and deleted gameObjects that were white
                squares. The position of each cell was locked to be a flat
                integer to ensure that it was on the non-existant grid. This
                time, I started tracking data as well. I track both all the live
                cells, as well as all the cells that neighbour a live cell. With
                this information, I can start calculating what happens in each
                generation. I do this with the following steps:
            </p>
            <ol>
                <li>
                    First, each live cell checks how many live neighbours it
                    has. If it has fewer than 2 or more than 3 live neighbours,
                    it's added to a list.
                </li>
                <li>
                    Second, I go through all the cells in the frontier (the list
                    of neighbouring cells) and count the number of times each
                    cell is present. Once the counting is done, I go through the
                    counted frontier and spawn a cell at every location that has
                    exactly three neighbours.
                </li>
                <li>
                    The third step is to go through all the cells selected in
                    the first step and destroy them. As the cells get spawned
                    and destroyed, they add/remove themselves from the master
                    list the keeps track of all the live cells.
                </li>
                <li>
                    The fourth step is cleanup; I empty the list of cells that
                    were just killed as well as the neighbour counts of the old
                    frontier cells.
                </li>
                <li>
                    Finally, I update the on screen counters. The generation is
                    incremented by 1 and the population count is determined by
                    checking the size of the master list of living cells.
                </li>
            </ol>
            <p>
                While looking back at my code, I am once more slightly confused
                at my implementation. Since the frontier is already a
                dictionary, there should be no need to empty it and recount the
                number of live neighbours that a frontier cell has every
                generation. I could instead keep it as a running total. My code
                already has a check to skip over live cells when counting, so
                that would simply need to be applied to spawning - if a cell was
                already alive, don't spawn a new cell on top of it. That being
                said, the existing form works well enough. It only starts to
                experience minor lag issues if the population goes above 2000
                living cells and there is a cluster of cells in proximity to
                each other.
            </p>
            <h2>Lessons I learnt</h2>
            <p>
                I learnt a fair bit while working on this short project. The
                most importnant lesson I learnt was that there is always a
                better way. I was already aware of the concept, and have tested
                it by comparing search speed in data structures for my Data
                Structures and Algorithms class, but it was a good reminder to
                never fully settle on a single design pattern. Through this
                project, I also learnt a bit about what is and isn't efficient
                in Unity. I now am very much aware that attempting to refresh
                thousands of tiles in a tilemap every frame is very laggy. For a
                short project, I got a lot out of it!
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2022.3.16f1</li>
                <li>Solo project</li>
                <li>No art assets (default unity sprites)</li>
                <li>No sound assets</li>
                <li>Date completed: October 06, 2024</li>
            </ul>
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/CGL"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
