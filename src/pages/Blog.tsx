import { useMemo, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock3,
  Code2,
  Search,
} from "lucide-react";

import { posts } from "../data/posts";

const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Backend",
  "Database",
  "DevOps",
  "System Design",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const searchValue = search.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(searchValue) ||
        post.excerpt.toLowerCase().includes(searchValue) ||
        post.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);

  const featuredPost = posts[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-20">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
              <Code2 size={16} />
              Software Engineering Journal
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Thoughts, lessons and
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                engineering knowledge.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I write about software engineering, backend development,
              architecture, databases, DevOps, and lessons learned while
              building real-world systems.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-2xl">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles, topics, technologies..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-white/[0.06]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAll(false);
                  }}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {selectedCategory === "All" && !search && featuredPost && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                Featured
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Start here
              </h2>
            </div>

            <span className="hidden text-sm text-slate-500 sm:block">
              Latest engineering insight
            </span>
          </div>

          <article className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden bg-slate-900 lg:min-h-[420px]">
              {featuredPost.image ? (
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
                  <Code2 size={80} className="text-blue-400/30" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {featuredPost.date}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock3 size={14} />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight transition group-hover:text-blue-400 sm:text-3xl">
                {featuredPost.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                {featuredPost.excerpt}
              </p>

              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3 hover:text-blue-300"
              >
                Read article
                <ArrowRight size={17} />
              </button>
            </div>
          </article>
        </section>
      )}

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Articles
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Engineering notes
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {filteredPosts.length} article
            {filteredPosts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {visiblePosts.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950">
                        <Code2 size={48} className="text-blue-400/20" />
                      </div>
                    )}

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {post.date}
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 line-clamp-2 text-lg font-bold leading-7 transition group-hover:text-blue-400">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition group-hover:gap-3 group-hover:text-blue-400"
                      >
                        Read more
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load more */}
            {filteredPosts.length > 6 && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((current) => !current)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/30 hover:bg-white/[0.07] hover:text-white"
                >
                  {showAll ? "Show less" : "Load more articles"}
                  <ChevronDown
                    size={17}
                    className={showAll ? "rotate-180" : ""}
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="rounded-2xl border border-dashed border-white/10 px-6 py-20 text-center">
            <Search className="mx-auto text-slate-600" size={40} />

            <h3 className="mt-5 text-lg font-semibold">No articles found</h3>

            <p className="mt-2 text-sm text-slate-500">
              Try searching for another topic or selecting a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-slate-900 p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                Stay updated
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                New engineering articles, straight to your inbox.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Get practical software engineering insights, project lessons,
                and useful development resources without the noise.
              </p>

              <form className="mt-7 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500/50"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
