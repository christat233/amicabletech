"use client";

import { useEffect, useRef, useState } from "react";
import { generalMessage, whatsappLink } from "./site-content";

const links = [
  ["Services", "#services"],
  ["How it works", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div className="mobile-nav" ref={rootRef}>
      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
      >
        <span /><span /><span />
      </button>
      <nav className="mobile-nav-panel" id="mobile-navigation-panel" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([label, href], index) => (
          <a
            href={href}
            key={href}
            ref={index === 0 ? firstLinkRef : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="mobile-menu-cta"
          href={whatsappLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Chat on WhatsApp <span aria-hidden="true">→</span>
        </a>
      </nav>
    </div>
  );
}
