import ProjectCard from "@/components/ProjectCard";
import FooterLink from "@/components/FooterLink";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {/* grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] */}
            <div className="">
                <ProjectCard
                    projTitle="CodingCards"
                    projDesc="Coding cards is a roguelike deckbuilder where the cards have lines of code. It's currently my main project!"
                    buttonRef="/projects/coding_cards"
                    buttonText="Visit project page"
                />
                <ProjectCard
                    projTitle="Minesweeper"
                    projDesc="I recreated the classic game Minesweeper! I did just about everything in a single weekend, with some quality of life/minor bug fixes later. You can learn all about how I did this here!"
                    buttonRef="/projects/minesweeper"
                    buttonText="Visit project page"
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
