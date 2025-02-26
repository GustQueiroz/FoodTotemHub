"use client"

import { Sheet } from "@/components/ui/sheet"

export function SheetProvider({ children }: { children: React.ReactNode }) {
  return <Sheet>{children}</Sheet>
} 