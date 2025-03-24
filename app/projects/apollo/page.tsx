import Button from "@/components/ui/Button";

export default function Apollo() {
    return (
        <div>
            <h1>Apollo</h1>
            <p>This is a page where I talk all about Apollo!</p>
            <Button
                variant="itch"
                href="https://twistershadow.itch.io/apollo"
                text="View on itch"
                newTab="_blank"
            />
            <Button
                variant="git"
                href="https://github.com/HugoML58/MTLGJ"
                text="View the source code"
                newTab="_blank"
            />
            <Button href="../" text="Return to Main" />
        </div>
    );
}
