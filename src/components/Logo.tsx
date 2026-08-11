import { Code2 } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-[#f0bb0c] p-2 text-white">
        <Code2 size={22} />
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          System<span className="text-[#0bdf4b]">Blog</span>
        </h1>

        <p className="text-xs text-slate-100">Software Engineering</p>
      </div>
    </div>
  )
}
