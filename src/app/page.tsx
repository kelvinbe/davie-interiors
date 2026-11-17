import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Instagram, Menu } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "The Still House",
    type: "Residential · Amsterdam",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
    className: "project-large",
  },
  {
    number: "02",
    name: "A Study in Light",
    type: "Residential · Copenhagen",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    className: "project-small",
  },
  {
    number: "03",
    name: "Sunday House",
    type: "Hospitality · Rotterdam",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    className: "project-small",
  },
];

const services = [
  ["01", "Interior architecture", "Spatial planning, layouts and considered material choices."],
  ["02", "Full-service interiors", "A complete journey from first sketch to final styling."],
  ["03", "Styling & consultation", "The finishing touches that make a space feel like yours."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="#" aria-label="Forma Studio home">
          forma<span>®</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#studio">Studio</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#services">Services</Link>
        </nav>
        <Link className="header-contact" href="mailto:hello@formastudio.example">
          Let&apos;s talk <ArrowUpRight size={15} />
        </Link>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Independent interior design studio · Est. 2018</p>
          <h1>Spaces that<br /><em>feel like</em> you.</h1>
          <div className="hero-bottom">
            <p>We create warm, thoughtful interiors shaped around the way you live, work and connect.</p>
            <Link className="round-link" href="#projects" aria-label="Explore projects"><ArrowDownRight size={23} /></Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
            alt="Warm, light-filled living room with sculptural furniture and natural materials"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 58vw"
            className="hero-image"
          />
          <span className="image-note">01 / A slower kind of living</span>
        </div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section className="intro section-pad" id="studio">
        <p className="eyebrow">A little about us</p>
        <div className="intro-content">
          <h2>Good design is not just seen.<br /><em>It is experienced.</em></h2>
          <div className="intro-aside">
            <p>At Forma, we believe the best spaces tell a story without saying a word. We pair timeless forms with tactile materials to create interiors that feel effortless, personal and lived in.</p>
            <Link className="text-link" href="mailto:hello@formastudio.example">Get to know our studio <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="projects section-pad" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work · 2022—2026</p><h2>Made to <em>belong.</em></h2></div>
          <Link className="text-link" href="mailto:hello@formastudio.example">Discuss your project <ArrowUpRight size={16} /></Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-image">
                <Image src={project.image} alt={`${project.name} interior design project`} fill sizes="(max-width: 700px) 100vw, 60vw" />
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-meta"><div><h3>{project.name}</h3><p>{project.type}</p></div><ArrowUpRight size={18} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <p className="eyebrow">Our point of view</p>
        <p className="statement-text">Less, but with <em>meaning.</em><br />Beautiful, but <em>livable.</em></p>
        <span className="statement-caption">A considered approach to everyday spaces.</span>
      </section>

      <section className="services section-pad" id="services">
        <div className="services-heading"><p className="eyebrow">What we do</p><h2>Thoughtful from<br /><em>the ground up.</em></h2></div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <div className="service-row" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="contact-top"><p className="eyebrow">Have a space in mind?</p><span>We would love to hear about it.</span></div>
        <h2>Let&apos;s make<br /><em>room for good.</em></h2>
        <Link className="contact-link" href="mailto:hello@formastudio.example">Start a conversation <ArrowUpRight size={18} /></Link>
      </section>

      <footer className="footer">
        <Link className="wordmark" href="#">forma<span>®</span></Link>
        <p>Spaces with soul. Designed with intention.</p>
        <div className="footer-right"><span>© 2026 Forma Studio</span><Link href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></Link><Link href="mailto:hello@formastudio.example">Email <ArrowRight size={14} /></Link></div>
      </footer>
    </main>
  );
}
