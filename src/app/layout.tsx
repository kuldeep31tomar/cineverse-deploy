"use client";
import "./global.css";
import { Inter } from "next/font/google";
import { Providers } from "../redux";
import { ThemeProvider } from "../components/theme-provider";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <title>Cineverse</title>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar />
            <main>
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
