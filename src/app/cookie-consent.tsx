"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const consentKey = "amicable-tech-cookie-notice-accepted";
const consentChangeEvent = "amicable-tech-consent-change";

function subscribeToConsent(onChange: () => void) {
  window.addEventListener(consentChangeEvent, onChange);
  return () => window.removeEventListener(consentChangeEvent, onChange);
}

function getConsentSnapshot() {
  try {
    return window.localStorage.getItem(consentKey) !== "yes";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return false;
}

export default function CookieConsent() {
  const visible = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerSnapshot);

  function acceptNotice() {
    try {
      window.localStorage.setItem(consentKey, "yes");
    } catch {
      // Dismiss for this visit when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(consentChangeEvent));
  }

  if (!visible) return null;

  return (
    <aside className="cookie-notice" aria-label="Cookie notice">
      <p>
        This website uses cookies to ensure you get the best experience on our website. {" "}
        <Link href="/cookies-policy">Cookies Policy</Link>
      </p>
      <button type="button" onClick={acceptNotice}>
        GOT IT
      </button>
    </aside>
  );
}
