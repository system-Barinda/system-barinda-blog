import { Code2 } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-blue-600 p-2 text-white">
        <Code2 size={22} />
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          System<span className="text-blue-500">Blog</span>
        </h1>

        <p className="text-xs text-slate-400">
          Software Engineering
        </p>
      </div>
    </div>
  );
}