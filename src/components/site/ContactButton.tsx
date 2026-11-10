"use client";

import { openContact } from "./contact";

export default function ContactButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return <button className={className} onClick={openContact}>{children}</button>;
}
