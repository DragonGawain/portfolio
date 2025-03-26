import Button from "@/components/ui/Button";

export default function Apollo() {
    return (
        <div className="projectPage">
            <h1>Apollo</h1>
            <p>This is a page where I talk all about Apollo!</p>
            <Button
                colorScheme="itch"
                href="https://twistershadow.itch.io/apollo"
                text="View on itch"
            />
            <Button
                colorScheme="git"
                href="https://github.com/HugoML58/MTLGJ"
                text="View the source code"
            />
            <Button href="../" text="Return to Main" newTab={false} />
        </div>
    );
}
