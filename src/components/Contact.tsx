import { profile } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'GitHub',
    value: 'github.com/Naxisbeast',
    href: profile.github,
  },
  {
    label: 'LinkedIn',
    value: 'thapelo-wana-55a42231a',
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="CONTACT_NODE"
          title="Open to bursary, internship, graduate, and Honours conversations."
          description="For opportunities or academic conversations, the best contact path is email, GitHub, or LinkedIn."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-panel module-border rounded-lg p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-matrixlite">
              location_signal
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {profile.location}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Based between Rustenburg and Mahikeng while studying at
              North-West University.
            </p>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-panel group flex flex-col gap-2 rounded-lg p-5 transition hover:-translate-y-0.5 hover:border-cyanline/35 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyanline">
                  {link.label}
                </span>
                <span className="break-all text-sm font-semibold text-slate-100">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
