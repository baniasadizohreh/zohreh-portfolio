const experiences = [
  {
    company: "NAVACO SARL",
    role: "Consultant - Transformation, Governance & AI",
    period: "Dec 2025 - Present",
    location: "Luxembourg",
    points: [
      "Advise organisations on digital transformation, governance, operational resilience and AI adoption.",
      "Support DORA and NIS2 readiness, ICT risk identification and remediation planning.",
      "Bridge business, security and technology stakeholders to improve operational effectiveness.",
    ],
  },
  {
    company: "G.I.P. S.à r.l.",
    role: "DevOps Engineer / Business Development Lead",
    period: "Aug 2024 - Oct 2025",
    location: "Luxembourg",
    points: [
      "Supported cybersecurity, SIEM, monitoring and DevOps initiatives in regulated environments.",
      "Worked with Wazuh, ELK/OpenSearch, infrastructure automation and security operations topics.",
      "Contributed to client communication, service positioning and technical delivery coordination.",
    ],
  },
  {
    company: "ING Luxembourg",
    role: "Project Manager / Business Analyst",
    period: "2023 - 2024",
    location: "Luxembourg",
    points: [
      "Managed business and IT projects in banking operations.",
      "Coordinated stakeholders, requirements, sprint planning and delivery follow-up.",
      "Supported process improvement and operational project execution.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#080706] px-6 py-20 text-[#F7F3EA]">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-[#D6C39A]">
          ← Back home
        </a>

        <p className="mt-12 text-sm uppercase tracking-[0.35em] text-[#D6C39A]">
          Work Experience
        </p>

        <h1 className="mt-5 text-4xl font-semibold md:text-6xl">
          Professional journey
        </h1>

        <div className="mt-16 space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-3xl border border-[#D6C39A]/10 bg-white/[0.035] p-8"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-[#F7F3EA]">
                    {exp.role}
                  </h2>
                  <p className="mt-2 text-[#D6C39A]">{exp.company}</p>
                </div>

                <p className="text-sm text-[#BEB6A8]">
                  {exp.period} · {exp.location}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-[#D8D1C3]">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}