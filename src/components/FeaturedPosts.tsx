import PostCard from "./PostCard";
import { posts } from "../data/posts";

export default function FeaturedPosts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-pink-500 font-semibold text-5xl">
            Latest Articles
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-500">
            Featured Posts
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 font-bold">
            Sharing tutorials, software engineering insights, backend
            development experiences, and practical guides to help developers
            grow.
          </p>
        </div>

        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
