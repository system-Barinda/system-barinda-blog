export default function CodeWindow() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-t-xl bg-white shadow-2xl">
      {/* Blog/Window Header Bar */}
      <div className="flex items-center justify-between bg-[#31698a] px-6 py-4 text-white">
        <h3 className="text-xl font-bold tracking-wide">Technology News</h3>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-white/40" />
          <div className="h-3 w-3 rounded-full bg-white/40" />
          <div className="h-3 w-3 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="border-x border-b border-slate-200 bg-white p-6 text-left shadow-inner">
        <div className="mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Tuesday, 24 November
          </span>
          <h4 className="mt-1 text-lg font-bold text-slate-800">
            Airborne technology & Developer Profile
          </h4>
        </div>

        {/* Code Block Container */}
        <div className="rounded-lg border border-slate-200 bg-slate-900 p-4">
          <div className="mb-2 flex items-center gap-2 border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-slate-400">app.tsx</span>
          </div>
          <pre className="overflow-x-auto text-xs leading-6 text-slate-200 md:text-sm">
            {`const developer = {
  name: "System Sylvere BARINDA",
  role: "Software Engineer",

  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "Git"
  ],

  mission:
    "Build amazing software."
};

export default developer;`}
          </pre>
        </div>
      </div>
    </div>
  );
}
