import { useRef } from "react";
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
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#4285f4] text-white">
      {/* Particle Canvas synchronized with the display card reference */}
      <HeroBackground cardRef={cardRef} />

      <div className="relative mx-auto flex min-h-[100vh] max-w-7xl flex-col items-center justify-center px-6 pt-12 pb-16 text-center">
        {/* Sleek Dark LED Card Display Container */}
        <div
          ref={cardRef}
          className="pointer-events-none mb-8 flex h-20 w-full max-w-4xl items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-2xl z-10"
        />

        {/* Category / Badge */}
        <div className="mb-6 z-10">
          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-wide backdrop-blur-md">
            🚀 Software Engineering Blog
          </span>
        </div>

        {/* Hero Title Area */}
        <h1 className="mt-2 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl z-10">
          Build Software
          <br />
          <span className="text-white/90">One Line at a Time</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg font-light text-blue-100 md:text-xl z-10">
          Sharing tutorials, backend development, frontend engineering, system
          design, DevOps, AI, Docker, and everything I learn while building
          real-world applications.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 z-10">
          <button className="flex items-center gap-2 rounded-md bg-[#ff6600] px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#e65c00]">
            Explore Articles
            <ArrowRight size={18} />
          </button>

          <button className="rounded-md border border-white/40 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
            View Projects
          </button>
        </div>

        {/* Skills List */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 z-10">
          {skills.map((skill) => (
            <FloatingBadge key={skill} title={skill} />
          ))}
        </div>

        {/* Code Window Preview */}
        <div className="mt-16 w-full max-w-4xl drop-shadow-2xl z-10">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
