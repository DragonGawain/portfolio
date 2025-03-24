import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function CheezyLunar() {
    return (
        <div>
            <h1>Cheezy Lunar Defender</h1>
            <p>This is a page where I talk all about Cheezy Lunar Defender!</p>
            <Button
                variant="itch"
                href="https://zaidminhas.itch.io/cheezy-lunar-defender"
                text="View on itch"
                newTab="_blank"
            />
            <Button
                variant="git"
                href="https://github.com/DragonGawain/GGJ2024/"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
