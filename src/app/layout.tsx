import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casefile AI — System Design",
  description:
    "A bilingual visual overview of the Casefile AI mystery game architecture, three-week MVP plan, and test contract.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
