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
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800"
            : "bg-transparent"
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
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-white transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-full bg-slate-800 p-3 hover:bg-slate-700">
              <Search
                size={18}
                className="text-slate-300"
              />
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500">
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

      <MobileMenu
        open={mobile}
        onClose={() => setMobile(false)}
      />
    </>
  );
}