"use client";

import { createContext, useContext, useTransition, ReactNode } from "react";

type NavigationContextType = {
  isPending: boolean;
  startTransition: typeof import("react").useTransition extends () => [boolean, (callback: () => void) => void] ? (callback: () => void) => void : never;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isPending, startTransition] = useTransition();

  return (
    <NavigationContext.Provider value={{ isPending, startTransition }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
