const expertise = [
  "Digital Transformation",
  "Governance & Operational Resilience",
  "DORA & NIS2 Readiness",
  "Cybersecurity & Risk",
  "AI Adoption & Automation",
  "Project & Change Management",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080706] text-[#F7F3EA]">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
        <div>
          <p className="mb-20 text-sm uppercase tracking-[0.35em] text-[#D6C39A]">
            Zohreh Baniasadi
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Transformation, Governance
            <span className="text-[#D6C39A]"> & AI Consultant</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#D8D1C3]">
            I help organisations strengthen governance, cybersecurity,
            operational resilience and responsible AI adoption in complex IT and
            regulated environments.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="mailto:navacolu@gmail.com"
              className="rounded-full bg-[#D6C39A] px-7 py-3 font-semibold text-[#080706]"
            >
              Contact Me
            </a>

            <a
              href="#expertise"
              className="rounded-full border border-[#D6C39A]/30 px-7 py-3 font-semibold text-[#F7F3EA]"
            >
              View Expertise
            </a>
            <a
              href="/zohreh-portfolio/experience" 
              className="rounded-full border border-[#D6C39A]/30 px-7 py-3 font-semibold text-[#F7F3EA]"
            >
              Work Experience
            </a>
          </div>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#D6C39A]">
          Expertise
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D6C39A]/10 bg-white/[0.035] p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-semibold">
            Bridging business, security and technology.
          </h2>

          <p className="leading-8 text-[#D8D1C3]">
            Based in Luxembourg, I work as an independent consultant supporting
            financial services firms and regulated organisations with governance,
            operational resilience, AI-enabled transformation, compliance
            readiness, stakeholder alignment and practical delivery.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#D6C39A]/10 px-6 py-8 text-sm text-[#8F8678]">
        <div className="mx-auto max-w-6xl">
          © 2026 Zohreh Baniasadi · Luxembourg
        </div>
      </footer>
    </main>
  );
}