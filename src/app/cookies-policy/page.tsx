import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How AMICABLE TECH uses cookies and browser storage on this website.",
};

export default function CookiesPolicyPage() {
  return (
    <main className="policy-page section-wrap">
      <Link className="policy-back" href="/">← Back to AMICABLE TECH</Link>
      <p className="eyebrow">Website information</p>
      <h1>Cookies Policy</h1>
      <p className="policy-updated">Last updated: 11 October 2026</p>
      <p>This website currently does not set browser cookies and does not use analytics, advertising, or tracking technologies.</p>

      <h2>Remembering the notice</h2>
      <p>When you select “GOT IT” on the cookie notice, this site stores a small preference in your browser’s local storage so the notice stays dismissed on later visits. This preference is not a cookie and is used only to remember your choice. If browser storage is unavailable, the notice is dismissed for the current visit only.</p>

      <h2>External services</h2>
      <p>This website provides links to WhatsApp, Google Maps, telephone, and email services. Choosing one of those links takes you to or opens the relevant service, which may use its own cookies or other technologies under its own privacy and cookie terms. This site does not control those services.</p>

      <h2>Questions</h2>
      <p>For questions about this policy, contact AMICABLE TECH at <a href="mailto:amicabletechempire@gmail.com">amicabletechempire@gmail.com</a> or <a href="tel:+2347018727534">+234 701 872 7534</a>.</p>
      <p>For information about enquiries and personal information, see the <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </main>
  );
}
