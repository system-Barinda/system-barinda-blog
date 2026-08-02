type FloatingBadgeProps = {
  title: string;
};

export default function FloatingBadge({
  title,
}: FloatingBadgeProps) {
  return (
    <div
      className="
      rounded-full
      border
      border-slate-700
      bg-slate-900/70
      px-4
      py-2
      text-sm
      text-slate-200
      backdrop-blur-md
      shadow-lg
      hover:border-blue-500
      hover:text-white
      transition
    "
    >
      {title}
    </div>
  );
}