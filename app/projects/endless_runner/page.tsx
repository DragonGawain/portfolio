import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function EndlessRunner() {
    return (
        <div className="projectPage">
            <h1>Endless Runner Game</h1>
            <p>This is a page where I talk all about Endless Runner Game!</p>
            {/* currently not on itch and the git repo is private */}
            <Button href="../" text="Return to Main Menu" newTab={false} />
        </div>
    );
}
