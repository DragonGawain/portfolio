import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function FloorIsLava() {
    return (
        <div className="projectPage">
            <h1>THE: Floor Is Lava</h1>
            <p>This is a page where I talk all about THE: Floor Is Lava!</p>
            <Button
                variant="itch"
                href="https://dragongawain.itch.io/the-floor-is-lava"
                text="View on itch"
                newTab="_blank"
            />
            <Button
                variant="git"
                href="https://github.com/DragonGawain/creative-jam-2024"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
