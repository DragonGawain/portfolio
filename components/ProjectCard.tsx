"use client";
import Image from "next/image";

interface ProjectCardProps {
    setBg: (className: string) => void;
    projTitle: string;
    projDesc: string;
    buttonRef: string;
    bgClassName?: string;
    imgSrc: string;
    imgAltText: string;
}

export default function ProjectCard({
    setBg,
    projTitle,
    projDesc,
    buttonRef,
    bgClassName = "bgDefault",
    imgSrc,
    imgAltText,
}: ProjectCardProps) {
    return (
        <a
            // className=""
            href={buttonRef}
            onMouseEnter={() => setBg(bgClassName)}
            onMouseLeave={() => setBg("bgDefault")}
        >
            <div className="flex mb-16">
                <table>
                    <tbody>
                        <tr>
                            <td className="w-48 h-48">
                                <Image
                                    aria-hidden
                                    src={imgSrc}
                                    alt={imgAltText}
                                    width={192}
                                    height={192}
                                />
                            </td>
                            {/* This table column serves as a spacer between the image and the text. */}
                            <td className="w-5"></td>
                            <td className="align-top">
                                <h2>{projTitle}</h2>
                                <p>{projDesc}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </a>
    );
}
