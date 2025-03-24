import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function OperationYJLTG() {
    return (
        <div className="projectPage">
            <h1>Operation: YJLTG</h1>
            <p>This is a page where I talk all about Operation: YJLTG!</p>
            <Button
                variant="itch"
                href="https://dragongawain.itch.io/operation-yjltg"
                text="View on itch"
                newTab="_blank"
            />
            <Button
                variant="git"
                href="https://github.com/DragonGawain/phantom_game_jam"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
