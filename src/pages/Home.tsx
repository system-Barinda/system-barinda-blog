import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import Categories from "../components/Categories";
import FeaturedProject from "../components/FeaturedProject";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedPosts />

      <Categories />

      <FeaturedProject />

      <Newsletter />
    </>
  );
}
