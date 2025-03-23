"use client";
import Button from "./ui/Button";

interface ProjectCardProps {
    setBg: (className: string) => void;
    projTitle: string;
    projDesc: string;
    buttonRef: string;
    bgClassName?: string;
}

// TODO:: make an on-hover effect that changes the background of the entire screen play a GIF of the project

export default function ProjectCard({
    setBg,
    projTitle,
    projDesc,
    buttonRef,
    bgClassName = "bgDefault",
}: ProjectCardProps) {
    return (
        <a
            className=""
            href={buttonRef}
            onMouseEnter={() => setBg(bgClassName)}
            onMouseLeave={() => setBg("bgDefault")}
        >
            <div className="transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] dark:hover:text-gray-900 mb-16">
                {/* <Image></Image> */}
                <h2>{projTitle}</h2>
                <div>
                    <p>{projDesc}</p>
                </div>
                {/* <Button href={buttonRef} text={buttonText} /> */}
            </div>
        </a>
    );
}
