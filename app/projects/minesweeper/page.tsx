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
            <h2>Technical challenges/details</h2>
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
                creating a custom Cell script that inherited from the{" "}
                <Button
                    colorScheme="none"
                    buttonType="inline"
                    href="https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Tilemaps.TileBase.html"
                    text="TileBase"
                />{" "}
                class. This allowed me to create Scriptable Object tiles that
                could each store unique data. I could then use this custom tile,
                and the unique data that each one stored, to change the sprite
                of the tiles during runtime. It was important that I could
                change the sprite of each individual tile and not the sprite of
                the tile type. If the sprite of the tile type was being altered,
                then all cells would change their sprite to be the same thing.
                This was the first time I discovered this method of creating
                tiles that could hold unique data and I would use this same
                methodology in several other projects in the future. Once I had
                a stable way of storing unique data, I was able to deal with
                this issue. Once the mines were placed, I simply had to go to
                each tile and, if it's not a mine, count the number of mines in
                the surrounding cells. Then, I assign that number to be the
                value that the cell represents.
            </p>
            <p>
                The second complication of laying the mines was easier to deal
                with. The reason it's an issue is because there are a few things
                that need to be dynamically checked. The first cell that the
                player opens cannot be a mine, and a cell also cannot contain
                two mines. I also decided that all the cells adjacent to the
                initial cell should not contain a mine. Ensuring that the
                initial cells could not contain mines was easy, I simply had to
                open the cells before placing the mines (mines can only be
                placed in closed cells). The challenge was dealing with the
                possibility of two mines being placed in the same cell. I used
                UnityEngine.Random.Range to select the cells randomly, so it
                would not have been easy to alter the randomizer. Instead, every
                time it attempted to place a mine, I checked if it was a legal
                spot. If it was, I incremented a counter and set the unique data
                of that cell to be a mine. After attempting to place all the
                mines needed, I check to see if they have all been placed. If
                all mines are placed, then the game state shifts and the player
                can start playing. If not all the mines have been placed, then I
                attempt to generate as many mines that still need to be placed.
                This process continues until all mines have been placed.
            </p>
            <h2>Final thoughts</h2>
            <p>
                I had a lot of fun completing the project! It was short and I
                learnt a lot about tilemaps. I still use the custom TileBase
                method for data-storing cells to this day.
            </p>
            <p>
                If I were to recreate minesweeper again, I would most likely go
                with the GameObject method. This would be fairly simple. Instead
                of a tilemap, I would create some sort of data structure,
                probably a dictionary, to store all the cells. The dictionary
                would use a key of (int, int) to represent to coordinate of each
                cell, and the value would represent the value of the cell
                (number or mine) as well as if it was open or closed. The mine
                generation system would stay the same.
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
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
