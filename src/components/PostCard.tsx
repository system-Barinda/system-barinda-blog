import { ArrowRight } from "lucide-react";

type Props = {
  post: {
    title: string;
    category: string;
    image: string;
    description: string;
    date: string;
    readTime: string;
  };
};

export default function PostCard({ post }: Props) {
  return (
    <article
      className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-slate-200
      bg-pink-600
      transition-all
      duration-300
      hover:shadow-2xl
    "
    >
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-6">
        <span
          className="
          rounded-full
          bg-[#f0bb0c]
          px-3
          py-1
          text-sm
          text-white
          font-semibold
        "
        >
          {post.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">{post.title}</h3>

        <p className="mt-4 leading-7 text-slate-100">{post.description}</p>

        <div className="mt-6 flex justify-between text-sm text-white">
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>

        <button
          className="
          mt-6
          flex
          items-center
          gap-2
          text-[#f0bb0c]
          transition
          hover:gap-3
        "
        >
          Read More
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
