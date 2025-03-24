import Button from "@/components/ui/Button";
import PageBase from "@/components/ui/PageBase";

export default function Rooty() {
    return (
        <div>
            <h1>Rooty's Adventures: Quest For The Root Beer Float</h1>
            <p>This is a page where I talk all about Rooty!</p>
            <Button
                variant="itch"
                href="https://twistershadow.itch.io/rudys-adventures"
                text="View on itch"
                newTab="_blank"
            />
            <Button
                variant="git"
                href="https://github.com/DragonGawain/RootBeerGameJame"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
