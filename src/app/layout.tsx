import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Jacey Cui | Personal",
    authors: [
        { name: "Jacey Cui", url: "https://github.com/erich2s" },
    ],
    description: "Jacey Cui's personal portfolio website",
    openGraph: {
        title: "Jacey Cui | Personal",
        description: "Jacey Cui's personal portfolio website",
        url: "https://www.erichuang.art",
        images: [
            {
                url: "/photo.jpeg",
                alt: "Jacey Cui | Personal",
                width: 640,
                height: 800,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Header />
                <main className="container lg:px-28">{children}</main>
                <BackToTop />
            </body>
        </html>
    );
}
