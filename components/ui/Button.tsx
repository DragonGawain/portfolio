import { cva, type VariantProps } from "class-variance-authority";

// TODO:: verify light mode themes
const buttonVariants = cva("", {
    variants: {
        colorScheme: {
            default:
                "bg-[#ededed] hover:bg-[#cccccc] text-[#171717] hover:text-[#171717]",
            git: "bg-[#ededed] hover:bg-[#cccccc] text-[#171717] hover:text-[#171717]", // this is the exact same as default..
            itch: "bg-[#7f1a1a] hover:bg-[#5c0f0f] text-[#fefefe] hover:text-[#fefefe]",
            blue: "bg-[#61d0f0] hover:bg-[#5cb7d1] text-[#171717] hover:text-[#171717]",
            pink: "bg-[#f061d0] hover:bg-[#d15cb7] text-[#171717] hover:text-[#171717]",
            green: "bg-[#b0f001] hover:bg-[#9ec600] text-[#171717] hover:text-[#171717]", // TODO:: especially verify this light theme
            none: "",
        },
        buttonType: {
            button: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto mb-8 mt-4 max-w-56",
            inline: "underline text-blue-500 hover:text-fuchsia-700 visited:text-fuchsia-800",
        },
    },
});

// Not sure why this is exporting the interface..
// I copied this bit from CommunityGrid, and that's what they did there though, so, shrug
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href: string;
    text?: string;
    newTab?: boolean;
}

export default function Button({
    colorScheme = "default",
    buttonType = "button",
    href,
    text = "",
    newTab = true,
}: ButtonProps) {
    return (
        <a
            className={buttonVariants({ colorScheme, buttonType })}
            href={href}
            // target={newTab}
            target={`${newTab === true ? "_blank" : ""}`}
        >
            {text}
        </a>
    );
}
