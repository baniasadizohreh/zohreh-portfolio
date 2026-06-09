import Image from "next/image";

const highlights = [
  "15+ Years Experience",
  "Financial Services",
  "Governance",
  "Operational Resilience",
  "Cybersecurity",
  "AI Adoption",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] text-[#F7F3EA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(214,195,154,0.11),transparent_38%)]" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6C39A]/40 text-lg font-semibold text-[#D6C39A]">
          <Image
              src="/zohreh-portfolio/zb-transparent.png"
              alt="Zohreh Baniasadi"
              width={100}
              height={100}
              priority
            />
        </div>

        <a
          href="mailto:navacolu@gmail.com"
          className="rounded-full border border-[#D6C39A]/30 px-5 py-2 text-sm text-[#D6C39A] transition hover:bg-[#D6C39A] hover:text-[#070707]"
        >
          Contact
        </a>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-6xl items-center gap-16 px-6 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#D6C39A]">
            Zohreh Baniasadi
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[#AFA391]">
            Luxembourg • Governance • Resilience • AI
          </p>

          <div className="mt-7 h-px w-24 bg-[#D6C39A]" />

          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Helping organisations navigate
            <span className="text-[#D6C39A]">
              {" "}
              transformation, resilience and AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D8D1C3]">
            Independent consultant helping financial institutions and regulated
            organisations strengthen governance, operational resilience,
            cybersecurity and responsible AI adoption.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/zohreh-portfolio/experience"
              className="rounded-full bg-[#D6C39A] px-7 py-3 text-center font-semibold text-[#070707] transition hover:bg-[#E8D7B0]"
            >
              View Experience
            </a>

            <a
              href="mailto:navacolu@gmail.com"
              className="rounded-full border border-[#D6C39A]/30 px-7 py-3 text-center font-semibold text-[#F7F3EA] transition hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D6C39A]/15 bg-white/[0.035] px-4 py-2 text-sm text-[#D8D1C3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[40px] bg-[#D6C39A]/10 blur-2xl" />

            <Image
              src="/zohreh-portfolio/profile.png"
              alt="Zohreh Baniasadi"
              width={500}
              height={650}
              priority
              className="relative h-[560px] w-[430px] rounded-[32px] object-cover shadow-2xl shadow-black/60"
            />
          </div>
        </div>
      </section>
    </main>
  );
}