export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-28 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
          bg-[size:60px_60px]
          opacity-20
        "
        />
      </div>
    </>
  );
}
