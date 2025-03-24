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
                    <tr>
                        <td className="w-48 h-48">
                            <Image
                                // className="center"
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
                            {/* <div className=""> */}
                            <h2>{projTitle}</h2>
                            <p>{projDesc}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </a>
    );
}

// <div className="mr-4 w-72 h-72 overflow-x-hidden">
//                     {/* <Image
//                         // className="center"
//                         aria-hidden
//                         src={imgSrc}
//                         alt={imgAltText}
//                         width={320}
//                         height={320}
//                     /> */}
//                 </div>
//                 {/* <div
//                     className={`w-72 h-72 mr-4 background-size:cover bg-[url(@/public${imgSrc})]`}
//                 /> */}

//                 {/* </div> */}
//                 {/*transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] dark:hover:text-gray-900 */}
//                 <div className="block">
//                     {/* <Image></Image> */}
//                     <h2>{projTitle}</h2>
//                     {/* <div> */}
//                     <p>{projDesc}</p>
//                     {/* </div> */}
//                 </div>
