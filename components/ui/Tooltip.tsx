"use client";
import { useState } from "react";

interface TooltipProps {
    text: string;
    tooltip: string;
}

export default function Tooltip({ text, tooltip }: TooltipProps) {
    const [isHover, SetIsHover] = useState("invisible");
    return (
        <span>
            {" "}
            <span
                onMouseEnter={() => SetIsHover("visible")}
                onMouseLeave={() => SetIsHover("invisible")}
                className="underline"
            >
                {text}
            </span>{" "}
            <span
                className={`${isHover} absolute bg-black text-white dark:bg-white dark:text-black background-cover indent-0 p-1`}
            >
                {tooltip}
            </span>
        </span>
    );
}
