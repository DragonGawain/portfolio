"use client";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
// import { useLocalStorage } from "@uidotdev/usehooks";
import Switch from "react-switch";

// TODO:: Order my projects by how much I want other people to see them (not all jam games need to be together, nor do they need to be in chronological order)
// TODO:: I may want to restructure how I talk about my projects. Specifically, I might want to move my contributions closer to the top of the project page.
export default function Home() {
    const [bgClassName, SetBg] = useState("bgDefault");
    const [animateBg, DoAnimateBg] = useState(true);

    // get
    useEffect(() => {
        const storedAnimate = localStorage.getItem("animateBgState");
        if (storedAnimate !== null) {
            DoAnimateBg(storedAnimate === "true"); // condensed ternary: storedAnimate === true ? true : false
        }
    }, []);

    // set
    useEffect(() => {
        localStorage.setItem("animateBgState", String(animateBg));
    }, [animateBg]);

    return (
        <div
            className={`min-h-screen p-20 gap-16 ${
                animateBg === true ? bgClassName : "bgDefault"
            } `}
        >
            <div className="flex">
                <Switch
                    onChange={function (): void {
                        DoAnimateBg(!animateBg);
                    }}
                    checked={animateBg}
                />
                <span className="block m-1 ml-3">
                    Toggle background animations on/off
                </span>
            </div>
            {/* <p>
                I've done quite a few game jams, so I'll start by listing out
                all of my jam projects! Most of these were 48 hour jams. I'll
                point out the ones that weren't 48 hours.
            </p> */}
            <div className="opacityOverride">
                {/* short 'about me' section goes here */}
                <div></div>
                <ProjectCard
                    setBg={SetBg}
                    projTitle="About me"
                    projDesc="Hi! I'm Craig Kogan, a Software Engineer from Montreal, Canada. I've been interested in game dev for a long time, so I learnt how to make games. You can learn more about me by clicking on this box, or you can learn more about any of my projects by clicking on them instead. I talk in detail about what my contribution to each project was, as well as some implementation details. Most of the projects on my website also have a live itch.io page where you can play the game, as well as a link to the open-source github repo where you can browse the source code."
                    buttonRef="/about_me"
                    bgClassName="bgDefault"
                    imgSrc="/covers/me_photo_bg.jpg"
                    imgAltText=""
                />
                {/* projects go here */}
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Coding Cards"
                    projDesc="Coding cards is a roguelike deckbuilder where the cards have lines of code. It's currently my main project! In this solo project, I've implemented a lot of unique systems. The heart of the entire game is an interpreter that I wrote that can break down and execute the lines of code on the cards. Thanks to my interpreter, it is not much of an exageration to say that I have created my very own, albeit very limited, programming language within C#. February 11, 2025 (still in progress)"
                    buttonRef="/projects/coding_cards"
                    bgClassName="bgCodingCards"
                    imgSrc="/covers/coding_cards_cover1.png"
                    imgAltText="Coding Cards"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Minesweeper"
                    projDesc="I recreated the classic game Minesweeper! I did just about everything in a single weekend, with some quality of life/minor bug fixes later. You can fully customize the size of the board as well as the number of mines (up to a certain limit). I also implemented chording (opening all cells adjacent to a completed cell) as well as zero-spreading (cells adjacent to a cell with a 0 will automatically open). You can learn all about how I did this here! January 17, 2024."
                    buttonRef="/projects/minesweeper"
                    bgClassName="bgMinesweeper"
                    imgSrc="/covers/minesweeper_cover.png"
                    imgAltText="Minesweeper"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Conway's Game Of Life"
                    projDesc="Conway's Game Of Life is a simulation where 'cells' can be in an alive (white) state or dead (blue in my version) state. Cells become alive or dead based on four simple rules. I actually recreated Conway's Game Of Life twice, but my first version was so unoptimized that each generation was taking a significant amount of time, so I completely changed my approach and created a much smoother version. You can learn about the details of Conway's Game Of Life and my implementation adventures here! October 6, 2024"
                    buttonRef="/projects/cgl"
                    bgClassName="bgCGL"
                    imgSrc="/covers/cgl_cover.png"
                    imgAltText="CGL"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Operation: YJLTG"
                    projDesc="Operation: YJLTG was made under the theme of 'Operation' for the Phantom Game Jam 2024 (hosted by Concordia). I designed a fairly sophisticated AI system for this jam! I once more sought out an inexperienced team so I could teach them as much as I could. This 7 day jam had an additional component of building a custom controller for the game. I once more lead the game design discussion and was programmed most of the game including the character controller, the enemy AI, biome specific effects, and more. I also did my best to teach my team as many of my skills that I could. October 20, 2024."
                    buttonRef="/projects/operation_yjltg"
                    bgClassName="bgOperationYJLTG"
                    imgSrc="/covers/operation_yjltg_cover.png"
                    imgAltText="Operation yjltg"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Strung Along"
                    projDesc="The theme of the Concordia Game Jam 2023 was 'The Space Between'. I spent the majority of this game jam programming a string that connected our two player characters. I also made the character controllers, and some other game mechanics. I wasn't as involved in the game design for this jam as I was too busy programming the string. November 06, 2023."
                    buttonRef="/projects/strung_along"
                    bgClassName="bgStrungAlong"
                    imgSrc="/covers/strung_along_cover.png"
                    imgAltText="Strung Along"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Nalbointo vs the Hopocalypse"
                    projDesc="Nalbointo is a haxagonal-grid turn-based deterministic puzzle game. This project was one of the first times I created an A* search algorithm, and the only time I've made A* for a hexagonal grid! In addition to the enemy pathfinding, I also set up the character controller, with full logic for the two cells that the player occupies. Completed as a school project in a team of 2. December 01, 2023"
                    buttonRef="/projects/nalbointo"
                    bgClassName="bgNalbointo"
                    imgSrc="/covers/nalbointo_cover.png"
                    imgAltText="Nalbointo"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Rooty's Adventures: Quest For The Root Beer Float"
                    projDesc="Rooty's adventures was the first game jam I ever did and what kicked off my entire game dev career! It's a submission to the 2023 Global Game Jam, the theme was 'Roots'. As I had been pretty inexperienced at the time, I did mostly level and game design. I learnt a lot from this jam! February 06, 2023."
                    buttonRef="/projects/rooty"
                    bgClassName="bgRooty"
                    imgSrc="/covers/rooty_cover.png"
                    imgAltText="Rooty"
                />
                {/* TODO:: add more stuff to what I did in this jam. I forget.. (also verify the other jams)*/}
                {/* Mention most important contributions here! Details can go on the project page. */}
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Apollo"
                    projDesc="The theme of the Montreal Game Jam 2023 was 'Historical Event'. By this time, I was already a key member of the team. I made the interaction system, set up the hitboxes for most objects, as well as created the animation cutscenes that play at the end of the game. I was also the creative director for this jam, gaining more experience with game and level design. April 30, 2023."
                    buttonRef="/projects/apollo"
                    bgClassName="bgApollo"
                    imgSrc="/covers/apollo_cover.png"
                    imgAltText="Apollo"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Cheezy Lunar Defender"
                    projDesc="The Global Game Jam 2024 had the theme 'Make Me Laugh'. I was the lead programmer for this one, responsible for all of the actions the character could do, as well as how the projectiles behave. Jan 28, 2024."
                    buttonRef="/projects/cheezy_lunar"
                    bgClassName="bgCheezyLunar"
                    imgSrc="/covers/cheezy_lunar_cover.png"
                    imgAltText="Cheezy Lunar"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="THE: Floor is Lava"
                    projDesc="The Creative Jam 2024 hosted by NAD had the theme of 'Disappearing'. For this 46 hour jam, I sought out an inexperienced team with the goal of teaching them as much as I could. I lead the discussion on game design and was the lead programmer on the team, making the character controller and other key gameplay elements. September 22, 2024."
                    buttonRef="/projects/floor_is_lava"
                    bgClassName="bgFloorIsLava"
                    imgSrc="/covers/floor_is_lava_cover.png"
                    imgAltText="The Floor Is Lava"
                />
                {/* <ProjectCard
                    setBg={SetBg}
                    projTitle="gamelabs"
                    projDesc=""
                    buttonRef="/projects/"
                    bgClassName="bgA"
                    imgSrc="/covers/_cover"
                    imgAltText=""
                /> */}
                {/* <p>That's it for the game jams!</p> */}
                {/* not currently on itch */}
                {/* <ProjectCard
                    setBg={SetBg}
                    projTitle="Endless runner"
                    projDesc=""
                    buttonRef="/projects/endless_runner"
                    bgClassName="bgA"
                    imgSrc="/file.svg"
                    imgAltText="Endless runner"
                /> */}
                {/* not currently on itch */}
                {/* <ProjectCard
                    setBg={SetBg}
                    projTitle="Guardian game"
                    projDesc=""
                    buttonRef="/projects/guardian_game"
                    bgClassName="bgA"
                    imgSrc="/file.svg"
                    imgAltText="Guardian game"
                /> */}
                {/* not currently on itch */}
            </div>
            <Footer className="!pb-0" />
        </div>
    );
}
