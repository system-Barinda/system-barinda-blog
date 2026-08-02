import { ArrowRight } from "lucide-react";

type Props = {
  category: {
    title: string;
    description: string;
    articles: number;
    icon: React.ElementType;
  };
};

export default function CategoryCard({ category }: Props) {
  const Icon = category.icon;

  return (
    <div
      className="
      group
      rounded-2xl
      border
      border-slate-800
      bg-slate-900
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-xl
    "
    >
      <div
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-xl
        bg-blue-600/10
        text-blue-500
        transition
        group-hover:bg-blue-600
        group-hover:text-white
      "
      >
        <Icon size={32} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">{category.title}</h3>

      <p className="mt-4 leading-7 text-slate-400">{category.description}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {category.articles} Articles
        </span>

        <ArrowRight
          size={20}
          className="text-blue-500 transition group-hover:translate-x-2"
        />
      </div>
    </div>
  );
}
