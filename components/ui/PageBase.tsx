// import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

// interface Ipb extends PropsWithChildren<ComponentPropsWithoutRef<"div">> {}
interface PageBaseProps {
    children: any;
}

export default function PageBase({ children }: PageBaseProps) {
    return (
        <div className="someCustomClass">
            <p>perm</p>
            {children}
        </div>
    );
}
