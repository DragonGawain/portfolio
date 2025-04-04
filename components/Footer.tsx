import FooterLink from "@/components/FooterLink";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <footer
            className={`row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-16 ${className}`}
        >
            Check out my things!
            <FooterLink
                buttonRef="https://github.com/DragonGawain?tab=repositories"
                imgSrc="/icons/githubIcon.png"
                imgAltText="Git"
                text="Git repos"
            />
            <FooterLink
                buttonRef="https://dragongawain.itch.io/"
                imgSrc="/icons/itchioIcon.png"
                imgAltText="Itch"
                text="Itch.io profile"
            />
            <FooterLink
                buttonRef="https://www.linkedin.com/in/craig-kogan/"
                imgSrc="/icons/linkedinIcon.png"
                imgAltText="Ln"
                text="Linkedin"
            />
        </footer>
    );
}
