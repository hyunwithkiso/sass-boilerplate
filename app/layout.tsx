import "./globals.css";
import type { Metadata, Viewport } from "next";
import ProviderWrapper from "@/components/ui/global/provider-wrapper";

export const metadata: Metadata = {
  title: "Shiba | 유저보드",
  description: "SHIBA 유저보드",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-[100dvh] min-w-[100dvw] overflow-hidden">
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
