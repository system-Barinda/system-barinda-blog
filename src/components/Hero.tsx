import { ArrowRight } from "lucide-react";
import FloatingBadge from "./FloatingBadge";
import HeroBackground from "./HeroBackground";
import CodeWindow from "./CodeWindow";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "TailwindCSS",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row">
        <div className="max-w-2xl">
          <span className="rounded-full border border-blue-600 bg-blue-600/10 px-4 py-2 text-sm text-blue-400">
            🚀 Software Engineering Blog
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Build Software
            <br />

            <span className="text-blue-500">
              One Line at a Time
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Sharing tutorials, backend development,
            frontend engineering, system design,
            DevOps, AI, Docker, and everything I
            learn while building real-world
            applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500">
              Explore Articles

              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-4 text-white transition hover:border-blue-500">
              View Projects
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <FloatingBadge
                key={skill}
                title={skill}
              />
            ))}
          </div>
        </div>

        <CodeWindow />
      </div>
    </section>
  );
}