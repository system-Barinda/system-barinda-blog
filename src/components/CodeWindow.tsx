export default function CodeWindow() {
  return (
    <div
      className="
      w-full
      max-w-xl
      overflow-hidden
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      shadow-2xl
    "
    >
      <div className="flex items-center gap-2 border-b border-slate-700 px-5 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-slate-400">
          app.tsx
        </span>
      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
{`const developer = {
  name: "System",
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
  );
}