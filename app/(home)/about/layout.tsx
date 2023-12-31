import Footer from "@/components/footer";
import { HomeNavigation } from "@/components/navigation/home-nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type AboutLayoutProps = {
  children: React.ReactNode;
};
export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNavigation />

        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
