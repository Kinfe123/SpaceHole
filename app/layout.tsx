import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/Header";
const inter = Inter({ subsets: ["latin"] });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: "SpaceHol Ageney",
  description:
    "SpaceHol Agency is a right place to encubate your idea to reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(dmsans.className, dmsans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
