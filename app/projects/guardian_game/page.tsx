import Button from "@/components/ui/Button";

export default function GuardianGame() {
    return (
        <div className="projectPage">
            <h1>Guardian Game</h1>
            <p>This is a page where I talk all about Guardian Game!</p>
            {/* not on itch and private repo */}
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
