export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-24">

      {/* Hero */}
      <section className="space-y-4">
        <p className="text-zinc-400 text-sm tracking-widest uppercase">Full-Stack Developer</p>
        <h1 className="text-4xl font-bold text-white leading-tight">
          გამარჯობა, მე ვარ<br />
          <span className="text-indigo-400">ოთარ პიროსმანაშვილი</span>
        </h1>
        <p className="text-zinc-300 text-lg leading-relaxed">
          ვაშენებ თანამედროვე ვებ აპლიკაციებს — მარტივი ვებსაიტებიდან სრული e-commerce
          სისტემებამდე. ვმუშაობ <span className="text-white font-medium">Next.js</span>,{" "}
          <span className="text-white font-medium">React</span> და{" "}
          <span className="text-white font-medium">ASP.NET Core</span>-ით.
        </p>
        <div className="flex gap-4 pt-2 flex-wrap">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            დამიკავშირდი
          </a>
          <a
            href="#projects"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            პროექტები
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">რით ვმუშაობ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Next.js / React",
            "TypeScript",
            "Tailwind CSS",
            "ASP.NET Core",
            "C#",
            "Entity Framework",
            "MySQL / PostgreSQL",
            "Azure",
            "REST APIs",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6">
        <h2 className="text-xl font-semibold text-white">პროექტები</h2>
        <div className="space-y-4">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h3 className="text-white font-semibold text-lg">Dressfield</h3>
              <a
                href="https://github.com/Pistolmani/Dressfield"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                GitHub →
              </a>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              სრული e-commerce პლატფორმა ქართული ნაქარგობის ბიზნესისთვის. მომხმარებლებს შეუძლიათ
              პროდუქტების დათვალიერება, custom შეკვეთების განთავსება და Bank of Georgia-ით გადახდა.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "TypeScript", "ASP.NET Core", "MySQL", "Azure", "BOG iPay"].map((t) => (
                <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h3 className="text-white font-semibold text-lg">NM Designs</h3>
              <a
                href="https://github.com/Pistolmani/NM-Designs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                GitHub →
              </a>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ინტერიერ დიზაინერის პროფესიონალური პორტფოლიო ვებსაიტი. სუფთა დიზაინი, ადაპტური
              განლაგება და SEO ოპტიმიზაცია.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "TypeScript", "Tailwind CSS"].map((t) => (
                <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h3 className="text-white font-semibold text-lg">Pasukhi</h3>
              <a
                href="https://github.com/Pistolmani/Pasukhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                GitHub →
              </a>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              AI-ზე დაფუძნებული მესენჯერ ავტომატიზაციის პლატფორმა Instagram, Facebook და WhatsApp-ისთვის.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["ASP.NET Core", "PostgreSQL", "RabbitMQ", "AI"].map((t) => (
                <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-6">
        <h2 className="text-xl font-semibold text-white">კონტაქტი</h2>
        <p className="text-zinc-400">
          გაქვთ პროექტი? მოხარული ვიქნები ვისაუბროთ.
        </p>
        <div className="space-y-3">
          <a
            href="mailto:pirosmanotar@gmail.com"
            className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
          >
            <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">✉</span>
            pirosmanotar@gmail.com
          </a>
          <a
            href="tel:+995511123807"
            className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
          >
            <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">☎</span>
            +995 511 123 807
          </a>
          <a
            href="https://github.com/Pistolmani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
          >
            <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">⌥</span>
            github.com/Pistolmani
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-800 pt-8 text-zinc-600 text-sm">
        © {new Date().getFullYear()} Otar Pirosmanashvili
      </footer>

    </main>
  );
}
