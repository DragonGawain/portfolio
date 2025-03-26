import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function CheezyLunar() {
    return (
        <div className="projectPage">
            <h1>Cheezy Lunar Defender</h1>
            <p>This is a page where I talk all about Cheezy Lunar Defender!</p>
            <Button
                colorScheme="itch"
                href="https://zaidminhas.itch.io/cheezy-lunar-defender"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/GGJ2024/"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
