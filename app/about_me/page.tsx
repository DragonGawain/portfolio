import Button from "@/components/ui/Button";

export default function aboutMe() {
    return (
        <div className="projectPage">
            <p>
                Hi! I'm Craig Kogan, a Software Engineer from Montreal, Canada.
                I graduated from Concordia University in December 2024.
            </p>
            <Button href="../" text="Return to Main" newTab={false} />
            <Button
                href="./about_me/how_I_debug"
                text="My debugging process"
                newTab={false}
            />
            <Button
                href="./about_me/tools_I_use"
                text="Tools I use/made"
                newTab={false}
            />
        </div>
    );
}
