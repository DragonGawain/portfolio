"use client";
import { useState } from "react";

interface TooltipProps {
    text: string;
    tooltip: string;
}

// TODO:: if a tooltip is on the far right of the screen, it should show up to the left.
// I can't hard define this since the position of text changes based on resolution and window size.
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
            </span>
            <span
                className={`${isHover} absolute bg-black text-white dark:bg-white dark:text-black background-cover indent-0 p-1`}
            >
                {tooltip}
            </span>
        </span>
    );
}
