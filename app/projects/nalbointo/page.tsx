import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function Nalbointo() {
    return (
        <div>
            <h1>Nalbointo</h1>
            <p>This is a page where I talk all about Nalbointo!</p>
            <Button
                variant="itch"
                href="https://dragongawain.itch.io/nalbointo-vs-the-hopocalypse"
                text="View on itch"
                newTab="_blank"
            />
            {/* repo is private */}
            {/* <Button
                variant="git"
                href="https://github.com/DragonGawain/376-project"
                text="View the source code"
                newTab="_blank"
            /> */}
            <Button href="../" text="Return to Main" />
        </div>
    );
}
