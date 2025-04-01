import Button from "@/components/ui/Button";

export default function myTools() {
    return (
        <div className="projectPage">
            <p>tools I use page here.</p>
            <Button href="../" text="Return to Main" newTab={false} />
            <Button href="./" text="Return to About me" newTab={false} />
        </div>
    );
}
