import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold text-blue-500">Explore Topics</span>

          <h2 className="mt-4 text-5xl font-bold text-white">Categories</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Browse articles by category and discover tutorials, best practices,
            and practical software engineering guides for every stage of your
            learning journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
