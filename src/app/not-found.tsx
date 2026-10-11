import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="eyebrow">Page not found</p>
        <h1>This page isn’t available.</h1>
        <p>The address may have changed. Return to AMICABLE TECH to explore phone support and services.</p>
        <Link className="button button-green" href="/">Back to home <span aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}
