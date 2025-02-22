import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
}
