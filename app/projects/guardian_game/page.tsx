import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function GuardianGame() {
    return (
        <div>
            <h1>Guardian Game</h1>
            <p>This is a page where I talk all about Guardian Game!</p>
            {/* not on itch and private repo */}
            <Button href="../" text="Return to Main" />
        </div>
    );
}
