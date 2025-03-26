import Button from "@/components/ui/Button";

export default function Minesweeper() {
    return (
        <div className="projectPage">
            <h1>Minesweeper</h1>
            <h2>Project inspiration</h2>
            <p>
                I originally decided to recreate minesweeper after watching a
                youtube video where someone had recreated minesweeper in
                minecraft. In that video, they had claimed that setting up
                zero-spreading was difficult (zero-spreading is the term for
                when cells adjacent to 0's automatically open). Driven by the
                urge to prove that setting up zero-spreading is not that
                difficult, I recreated minesweeper in its entirety.
            </p>
            <h2>My contribution (overview)</h2>
            <p>
                This was a solo project that I did all by myself. I used art
                assets from online for the cells (numbers, mines, etc) as well
                as for the text font that I'm using. The entire project took me
                about 1 weekend.
            </p>
            <h2>Technical challenges</h2>
            <p>
                The project as a whole was relatively simple, but I faced a few
                major complications:
            </p>
            <ul>
                <li>Setting up the numbers</li>
                <li>Generation of mines</li>
            </ul>
            <p>
                Before explaining the details of the complications, I need to
                explain how I decided to set up the game. At the beginning, I
                considered two major ways that I could recreate minesweeper. I
                could either make every cell a gameobject, or I could use a
                tilemap. I had wanted to learn more about tilemaps at the time,
                so I ended up going with that implementation. This led to the
                first complication: setting up the numbers, or more generally,
                storing unique data in each individual tile.
            </p>
            <p>
                Unity tilemaps are designed in such a way that they can't easily
                store unique data by default. The solution that I found was
                creating a custom Cell that inherited from the base TileBase
                class. This allowed me to create Scriptable object tiles that
                could each store unique data. This was the first time I
                discovered this method of creating tiles that could hold unique
                data and I would use this same methodology in several other
                projects in the future. Once I had a stable way of storing
                unique data, I was able to deal with this issue. Once the mines
                were placed, I simply had to go to each tile and, if it's not a
                mine, count the number of mines in the surrounding cells. Then,
                I assign that number to be the value that the cell represents.
            </p>
            <p>
                The second complication of laying the mines was easier to deal
                with. The reason it's an issue is because there are a few things
                that need to be dynamically checked. The first cell that the
                player opens cannot be a mine, and a cell also cannot contain
                two mines. I also decided that all the cells adjacent to the
                initial cell should not contain a mine. Ensuring that the
                initial cells could not contain mines was easy, I simply had to
                open the cells before placing the mines. The challenge was
                dealing with the possibility of two mines being placed in the
                same cell. I used UnityEngine.Random.Range to select the cells
                randomly, so it would not have been easy to alter the
                randomizer. Instead, every time it attempted to place a mine, I
                checked if it was a legal spot. If it was, I incremented a
                counter. After attempting to place all the mines needed, I check
                to see if they have all been placed. If all mines are placed,
                then the game state shifts and the player can start playing. If
                not all the mines have been placed, then I attempt to generate
                as many mines as are needed. This process continues until all
                mines have been placed.
            </p>
            <h3>Technical details overview</h3>
            <ul>
                <li>Unity version 2022.3.16f1</li>
                <li>Solo project</li>
                <li>Art assets sourced from online</li>
                <li>No sound assets used</li>
                <li>Date originally completed: January 17, 2024</li>
            </ul>
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/Minesweeper"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
