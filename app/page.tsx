"use client";
import ProjectCard from "@/components/ProjectCard";
import FooterLink from "@/components/FooterLink";
import { useState } from "react";

export default function Home() {
    const [bgClassName, SetBg] = useState("");

    return (
        <div className={`min-h-screen p-8 pb-20 gap-16 sm:p-20 ${bgClassName}`}>
            <div className="opacityOverride">
                <ProjectCard
                    setBg={SetBg}
                    projTitle="CodingCards"
                    projDesc="Coding cards is a roguelike deckbuilder where the cards have lines of code. It's currently my main project!"
                    buttonRef="/projects/coding_cards"
                    bgClassName="bgA"
                />
                <ProjectCard
                    setBg={SetBg}
                    projTitle="Minesweeper"
                    projDesc="I recreated the classic game Minesweeper! I did just about everything in a single weekend, with some quality of life/minor bug fixes later. You can learn all about how I did this here!"
                    buttonRef="/projects/minesweeper"
                    bgClassName="bgB"
                />
            </div>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                Check out my things!
                <FooterLink
                    buttonRef="https://github.com/DragonGawain?tab=repositories"
                    imgSrc="/githubIcon.png"
                    imgAltText="Git"
                    text="Git repos"
                />
                <FooterLink
                    buttonRef="https://dragongawain.itch.io/"
                    imgSrc="/itchioIcon.png"
                    imgAltText="Itch"
                    text="Itch.io profile"
                />
                <FooterLink
                    buttonRef="https://www.linkedin.com/in/craig-kogan/"
                    imgSrc="/linkedinIcon.png"
                    imgAltText="Ln"
                    text="Linkedin"
                />
            </footer>
        </div>
    );
}
