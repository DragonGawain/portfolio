import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function StrungAlong() {
    return (
        <div>
            <h1>Strung along</h1>
            <p>This is a page where I talk all about strung along!</p>
            <Button
                variant="itch"
                href="https://trim-ge2019.itch.io/the-red-line-of-fate"
                text="View on itch"
                newTab="_blank"
            />
            <Button
                variant="git"
                href="https://github.com/DragonGawain/CGJ2023"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
