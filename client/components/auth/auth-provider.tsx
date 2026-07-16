"use client";

import { useEffect } from "react";

import { useAuthStore } from "@/store/auth-store";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const hydrate = useAuthStore((state) => state.hydrate);
  const initialized = useAuthStore((state) => state.initialized);

  useEffect(() => {
    if (!initialized) {
      void hydrate();
    }
  }, [hydrate, initialized]);

  return <>{children}</>;
}
