import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Mobile warning overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0a0a0e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
          className="lg:!hidden"
        >
          <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🖥️</div>
          <h1 style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Desktop Only
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.6, maxWidth: "20rem" }}>
            Open the website in desktop mode for a better experience.
          </p>
        </div>

        {/* Main content — hidden on mobile */}
        <div className="hidden lg:block">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
