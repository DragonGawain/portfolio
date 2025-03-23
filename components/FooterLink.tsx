import Image from "next/image";

interface FooterLinkProps {
    buttonRef: string;
    imgSrc: string;
    imgAltText: string;
    text: string;
}

export default function FooterLink({
    buttonRef,
    imgSrc,
    imgAltText,
    text,
}: FooterLinkProps) {
    return (
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={buttonRef}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                aria-hidden
                src={imgSrc}
                alt={imgAltText}
                width={20}
                height={20}
            />
            {text}
        </a>
    );
}
