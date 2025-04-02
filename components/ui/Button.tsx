import { cva, type VariantProps } from "class-variance-authority";

// TODO:: verify light mode themes
const buttonVariants = cva("", {
    variants: {
        colorScheme: {
            default:
                "dark:bg-[#ededed] dark:hover:bg-[#cccccc] dark:text-[#171717] dark:hover:text-[#171717] bg-[#0a0a0a] hover:bg-[#383838] text-[#fefefe] hover:text-[#fefefe]",
            git: "dark:bg-[#ededed] dark:hover:bg-[#cccccc] dark:text-[#171717] dark:hover:text-[#171717] bg-[#0a0a0a] hover:bg-[#383838] text-[#fefefe] hover:text-[#fefefe]", // this is the exact same as default..
            itch: "dark:bg-[#7f1a1a] dark:hover:bg-[#5c0f0f] dark:text-[#fefefe] dark:hover:text-[#fefefe] bg-[#ff7878] hover:bg-[#ff8e8e] text-[#171717] hover:text-[#171717]",
            blue: "dark:bg-[#61d0f0] dark:hover:bg-[#5cb7d1] dark:text-[#171717] dark:hover:text-[#171717] bg-[#0e1981] hover:bg-[#232f9e] text-[#fefefe] hover:text-[#fefefe] ",
            pink: "dark:bg-[#f061d0] dark:hover:bg-[#d15cb7] dark:text-[#171717] dark:hover:text-[#171717] bg-[#810e19] hover:bg-[#9e232f] text-[#fefefe] hover:text-[#fefefe] ",
            green: "dark:bg-[#b0f001] dark:hover:bg-[#9ec600] dark:text-[#171717] dark:hover:text-[#171717] bg-[#19810e] hover:bg-[#2f9e23] text-[#fefefe] hover:text-[#fefefe] ", // TODO:: especially verify this light theme
            none: "",
        },
        buttonType: {
            button: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto mb-8 mt-4 max-w-56",
            inline: "underline text-blue-800 hover:text-violet-800 visited:text-violet-900 dark:text-blue-500 dark:hover:text-fuchsia-700 dark:visited:text-fuchsia-800",
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
