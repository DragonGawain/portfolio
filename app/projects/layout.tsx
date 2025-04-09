import Footer from "@/components/Footer";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <meta name="robots" content="noindex" />
            {children}
            <Footer />
        </div>
    );
}
