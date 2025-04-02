import Button from "@/components/ui/Button";

export default function myTools() {
    return (
        <div className="projectPage">
            <p>tools I use page here.</p>
            <Button href="../" text="Return to Main Menu" newTab={false} />
            <Button href="./" text="Return to About Me" newTab={false} />
        </div>
    );
}
