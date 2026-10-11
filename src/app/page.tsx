import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import BackToTop from "./back-to-top";
import { generalMessage, whatsappLink } from "./site-content";

const services = [
  {
    number: "01",
    icon: "repair",
    title: "Phone Repairs & Maintenance",
    description:
      "Get help assessing a phone fault and discussing suitable repair or maintenance options for your device.",
    message:
      "Hello Amicable Tech, I’m enquiring about phone repairs or maintenance. I can share my phone model and describe the issue. Please let me know what service may be suitable.",
  },
  {
    number: "02",
    icon: "software",
    title: "Phone Software Solutions",
    description:
      "Discuss software-related phone issues and available support based on your device and its condition.",
    message:
      "Hello Amicable Tech, I’m enquiring about phone software support. I can share my phone model and explain the software issue. Please let me know what details you need.",
  },
  {
    number: "03",
    icon: "remote",
    title: "Remote Unlocking",
    description:
      "Ask whether remote unlocking support is available for your specific device and situation.",
    message:
      "Hello Amicable Tech, I’m enquiring about remote unlocking. I can share my phone model and lock details. Please assess whether it is eligible.",
  },
  {
    number: "04",
    icon: "network",
    title: "SIM & Network Unlocking",
    description:
      "Check network unlocking eligibility for your phone, carrier, and current lock status.",
    message:
      "Hello Amicable Tech, I’m enquiring about SIM or network unlocking. I can share my phone model, carrier if known, and lock details. Please check eligibility.",
  },
  {
    number: "05",
    icon: "technical",
    title: "Phone Diagnostics & Support",
    description:
      "Get help understanding a phone fault and the support options that may suit your device.",
    message:
      "Hello Amicable Tech, I’m enquiring about phone diagnostics and support. I can share my phone model and describe the issue. Please let me know what information you need to assess it.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Tell us what’s going on",
    description: "Send your phone model and a clear description of the issue on WhatsApp.",
  },
  {
    number: "02",
    title: "Review your options",
    description: "We assess the details and confirm eligibility, a quotation, and expected timing for your enquiry.",
  },
  {
    number: "03",
    title: "Choose how to proceed",
    description: "If you approve the proposed service, the agreed support can move forward.",
  },
] as const;

const faqs = [
  {
    question: "Which devices and services are supported?",
    answer:
      "Support depends on the phone model, issue, and requested service. Share those details and AMICABLE TECH can confirm whether the enquiry is eligible.",
  },
  {
    question: "How do I request a service?",
    answer:
      "Start a WhatsApp enquiry using one of the links on this page. The message opens in WhatsApp for you to review and send; clicking a link does not send a message.",
  },
  {
    question: "How is unlocking eligibility determined?",
    answer:
      "Remote and network unlocking eligibility depends on the particular device and its status. Provide the model, carrier if known, and lock details so the request can be assessed.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Include the phone model, a description of the issue, and relevant details such as the carrier or any error shown. Do not share passwords or account verification codes.",
  },
  {
    question: "How are prices and service timing confirmed?",
    answer:
      "The quotation and expected timing are confirmed for each individual enquiry after the details and eligibility have been assessed.",
  },
  {
    question: "Where is AMICABLE TECH located?",
    answer:
      "AMICABLE TECH is at No. 2 Wellington Bassey Way, Uyo, Akwa Ibom State, Nigeria. Contact the business to discuss arrangements for your enquiry.",
  },
] as const;

function LineIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const paths: Record<(typeof services)[number]["icon"], React.ReactNode> = {
    repair: <><rect x="7" y="2.8" width="10" height="18.4" rx="2" /><path d="M10 5.8h4M11 18.2h2M4 8.5l2-2m12 11 2 2" /></>,
    software: <><rect x="3" y="4" width="18" height="15" rx="2" /><path d="M8 9 6 11l2 2m8-4 2 2-2 2m-3-5-2 6m-7 3h18" /></>,
    remote: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 6h4m-3 11h2M3.5 8.5a5 5 0 0 1 0 7m17-7a5 5 0 0 0 0 7M1 6a8.5 8.5 0 0 1 0 12m22-12a8.5 8.5 0 0 0 0 12" /></>,
    network: <><path d="M12 21s7-5 7-11V5l-7-3-7 3v5c0 6 7 11 7 11Z" /><path d="M9 12h6m-3-3v6" /></>,
    technical: <><rect x="5" y="3" width="11" height="18" rx="2" /><path d="M8 6h5m-4 12h3m2-5 2 2 4-5" /><circle cx="18" cy="9" r="3" /></>,
  };

  return <svg {...common} viewBox="0 0 24 24">{paths[name]}</svg>;
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand-lockup" href="/" aria-label="AMICABLE TECH home">
            <Image src="/brand/amicable-tech-icon.png" alt="" width={128} height={128} priority className="brand-logo" />
            <span className="brand-name">AMICABLE <span>TECH.</span></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a><a href="#process">How it works</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
          </nav>
          <a className="button button-green header-cta" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Open a general enquiry in WhatsApp">
            Chat on WhatsApp <ArrowIcon />
          </a>
          <MobileNavigation />
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Phone support, made clear</p>
            <h1 id="hero-title">Thoughtful technical support for your <span>phone.</span></h1>
            <p className="hero-description">From phone repairs and software support to unlocking enquiries, AMICABLE TECH helps you understand the next step for your device.</p>
            <div className="hero-actions">
              <a className="button button-green" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowIcon /></a>
              <a className="button button-outline" href="#services">Explore services</a>
            </div>
            <p className="hero-note"><span className="note-icon" aria-hidden="true">i</span> Share your model and issue. We’ll confirm what support may be suitable.</p>
          </div>
          <div className="hero-art" role="img" aria-label="AMICABLE TECH logo framed by soft green circles">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-logo-frame">
              <Image src="/brand/amicable-tech-logo.jpeg" alt="AMICABLE TECH — Professional Solutions. Trusted Service." width={1254} height={1254} priority className="art-logo" />
            </div>
            <div className="art-caption">Professional solutions. Trusted service.</div>
            <div className="art-chip chip-top"><span className="chip-dot" />Phone care</div>
            <div className="art-chip chip-bottom"><span className="chip-cross">+</span>Technical support</div>
          </div>
          <a className="hero-scroll" href="#services"><span /> Explore what we do</a>
        </section>

        <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Services</p><h2 id="services-title">The right support<br />starts with a conversation.</h2></div>
            <p>Tell us what your phone needs. We’ll review the details and confirm whether a service is suitable for your device.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span className="service-icon"><LineIcon name={service.icon} /></span><span className="service-number">{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.description}</p>
                <a className="text-link" href={whatsappLink(service.message)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${service.title} on WhatsApp`}>Enquire about this <ArrowIcon /></a>
              </article>
            ))}
          </div>
          <p className="service-footnote"><span aria-hidden="true">*</span> Service availability depends on your device and the details of your enquiry.</p>
        </section>

        <section className="process-section" id="process" aria-labelledby="process-title">
          <div className="section-wrap process-inner">
            <div className="process-intro"><p className="eyebrow eyebrow-light">How it works</p><h2 id="process-title">A clear path from<br />question to support.</h2><p>Every phone and situation is different. We start by understanding yours.</p><a className="button button-white" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">Start a conversation <ArrowIcon /></a></div>
            <div className="steps-list">
              {steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><span className="step-arrow" aria-hidden="true"><ArrowIcon /></span></article>)}
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading"><p className="eyebrow">Good to know</p><h2 id="faq-title">A few helpful answers.</h2><p>Have another question? Send us the details and we’ll take a look.</p><a className="text-link" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp <ArrowIcon /></a></div>
          <div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question}><summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><span className="faq-toggle" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div className="contact-copy"><p className="eyebrow eyebrow-light">Contact</p><h2 id="contact-title">Let’s talk about<br />your device.</h2><p>Share your phone model and the issue you’re experiencing. We’ll help you understand the next step.</p><a className="button button-green" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">Start a WhatsApp enquiry <ArrowIcon /></a><p className="contact-note">WhatsApp opens with a draft message for you to review and send.</p></div>
            <div className="contact-details">
              <div className="contact-detail"><span className="detail-label">Visit</span><a href="https://www.google.com/maps/search/?api=1&query=No.%202%20Wellington%20Bassey%20Way%2C%20Uyo%2C%20Akwa%20Ibom%20State%2C%20Nigeria" target="_blank" rel="noopener noreferrer">No. 2 Wellington Bassey Way<br />Uyo, Akwa Ibom State, Nigeria <span className="external-mark" aria-hidden="true">↗</span></a></div>
              <div className="contact-detail"><span className="detail-label">Phone</span><a href="tel:+2347018727534">+234 701 872 7534</a></div>
              <div className="contact-detail"><span className="detail-label">WhatsApp</span><a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">Send an enquiry <span className="external-mark" aria-hidden="true">↗</span></a></div>
              <div className="contact-detail"><span className="detail-label">Email</span><a href="mailto:amicabletechempire@gmail.com">amicabletechempire@gmail.com <span className="external-mark" aria-hidden="true">↗</span></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <div className="footer-brand-block">
            <Link className="footer-brand" href="/">AMICABLE <span>TECH.</span></Link>
            <p>Professional solutions. Trusted service.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#services">Services</a><a href="#process">How it works</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
          </nav>
          <nav className="footer-policies" aria-label="Legal and privacy">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
          <p className="footer-legal">© {new Date().getFullYear()} AMICABLE TECH. All rights reserved. <span>Uyo, Akwa Ibom State, Nigeria</span></p>
          <p className="footer-credit">Powered by EloTech Resources</p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
