import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function CGL() {
    return (
        <div className="projectPage">
            <h1>Conway's Game Of Life</h1>
            <p>This is a page where I talk all about Conway's Game Of Life!</p>
            <Button
                colorScheme="git"
                href="https://github.com/DragonGawain/CGL"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
