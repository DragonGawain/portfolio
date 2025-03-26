import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("", {
    variants: {
        colorScheme: {
            default:
                "bg-[#0a0a0a] dark:bg-[#ededed] hover:bg-[#383838] dark:hover:bg-[#cccccc] text-[#fefefe] dark:text-[#171717] hover:text-[#fefefe] dark:hover:text-[#171717]",
            git: "bg-[#0a0a0a] dark:bg-[#ededed] hover:bg-[#383838] dark:hover:bg-[#cccccc] text-[#fefefe] dark:text-[#171717] hover:text-[#fefefe] dark:hover:text-[#171717]",
            itch: "bg-[#ff7878] dark:bg-[#7f1a1a] hover:bg-[#ff8e8e] dark:hover:bg-[#5c0f0f] text-[#171717] dark:text-[#fefefe] hover:text-[#171717] dark:hover:text-[#fefefe]",
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
