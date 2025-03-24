import Button from "@/components/ui/Button";

export default function Minesweeper() {
    return (
        <div>
            <h1>Minesweeper</h1>
            <p>This is a page where I talk all about minesweeper!</p>
            <Button
                variant="git"
                href="https://github.com/DragonGawain/Minesweeper"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
