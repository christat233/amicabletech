import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AMICABLE TECH handles information shared through its website and contact channels.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page section-wrap">
      <Link className="policy-back" href="/">← Back to AMICABLE TECH</Link>
      <p className="eyebrow">Privacy</p>
      <h1>Privacy Policy</h1>
      <p className="policy-updated">Last updated: 11 October 2026</p>
      <p>This notice describes the information a visitor may choose to share when contacting AMICABLE TECH through this website and how that information may be used to respond to the enquiry.</p>

      <h2>Information and contact channels</h2>
      <p>This website does not contain an enquiry form. Its contact links let you choose to open WhatsApp with a draft message, your phone application, your email application, or Google Maps. The website does not send the draft WhatsApp message or email for you. Information you choose to provide through those services may include your name, phone or email details, device model, and the issue you describe.</p>
      <p>When you follow an external contact link, the relevant provider processes information under its own terms and privacy notice. This site does not control that provider’s practices. Review the provider’s notice before sharing information there.</p>

      <h2>Purpose and handling</h2>
      <p>Information you send to the business may be used to understand and respond to your enquiry, assess whether support may be suitable, and communicate about that request. The website code does not define a retention period, deletion workflow, or a system for storing enquiries. The business should confirm these operational practices before publication as a final policy.</p>
      <p>Do not include passwords, account verification codes, or other authentication secrets in an enquiry. The site does not intentionally ask for them.</p>

      <h2>Website technologies and security</h2>
      <p>The application source reviewed for this policy contains no analytics or advertising tags, embedded third-party widgets, consent manager, or use of browser cookies, local storage, or session storage. The site links to WhatsApp, Google Maps, telephone, and email services, which may process data after you choose to use them. Hosting and infrastructure logs are controlled by the deployment provider and are not described here because the live hosting configuration has not been verified.</p>
      <p>Reasonable technical safeguards should be used to protect information handled by the business. No website or communication channel can be described as completely secure.</p>

      <h2>Your questions or privacy requests</h2>
      <p>For questions about information you have sent to AMICABLE TECH, contact the business by email at <a href="mailto:amicabletechempire@gmail.com">amicabletechempire@gmail.com</a> or phone at <a href="tel:+2347018727534">+234 701 872 7534</a>. Explain the request and the contact channel you used. The business will need to confirm the appropriate process and any applicable rights for your circumstances.</p>

      <h2>Updates</h2>
      <p>This policy may be updated when website features or information-handling practices change. The date above indicates when this version was prepared. Review this page periodically for updates.</p>
    </main>
  );
}
