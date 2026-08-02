import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden">
      <div className="absolute right-0 h-full w-72 bg-slate-900 p-6 shadow-2xl">
        <div className="mb-8 flex justify-end">
          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold"
                  : "text-slate-300 hover:text-blue-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}