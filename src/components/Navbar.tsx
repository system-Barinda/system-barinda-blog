import { Menu, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-pink-600/90  border-2 border-b border-pink-700"
            : "bg-pink-500"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold text-2xl"
                    : "text-white hover:text-white transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-full bg-white p-3 hover:bg-gray-200 cursor-pointer">
              <Search size={18} className="text-slate-900" />
            </button>

            <button className="rounded-xl bg-[#f0bb0c] px-5 py-3 font-medium text-white transition hover:bg-[#ff6600]/90">
              Subscribe
            </button>
          </div>

          <button
            onClick={() => setMobile(true)}
            className="text-white md:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>

      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </>
  );
}
