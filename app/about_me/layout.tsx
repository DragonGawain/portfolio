import Footer from "@/components/Footer";

export default function AboutMeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <meta name="googlebot" content="noindex" />
            {children}
            <Footer />
        </div>
    );
}
