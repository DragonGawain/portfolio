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
    // const [offset, SetOffset] = useState("");
    return (
        <span>
            {" "}
            <span
                onMouseEnter={() => SetIsHover("visible")}
                onMouseLeave={() => SetIsHover("invisible")}
                className="underline"
                // ref={(el) => {
                //     if (!el) return;
                //     SetOffset(
                //         el.getBoundingClientRect().x > window.innerWidth / 1.85
                //             ? "start-[" +
                //                   (el.getBoundingClientRect().x - 400) +
                //                   "px]"
                //             : "start-[" +
                //                   el.getBoundingClientRect().right +
                //                   "px]"
                //     );
                // }}
            >
                {text}
            </span>
            {/* TODO:: fix the offset thingy. (calc works, but the tooltip is not moving to the left) */}
            {/* BUG:: shorter tooltips will be moved all the way, so I need to adjust for that. Maybe just make min width 400px as well as a cheaty way? */}
            <span
                className={`${isHover} absolute  bg-black text-white dark:bg-white dark:text-black background-cover indent-0 p-1 max-w-[400px]`}
            >
                {tooltip}
            </span>
        </span>
    );
}
