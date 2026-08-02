import { ArrowUp, Code2, Mail } from "lucide-react";
// import { ArrowUp, Code2, Github, Linkedin, Mail, Twitter } from "lucide-react";

const quickLinks = ["Home", "Blog", "Projects", "About"];

const categories = ["Frontend", "Backend", "DevOps", "Databases"];

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <Code2 size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">System Blog</h2>

                <p className="text-slate-400">Software Engineering</p>
              </div>
            </div>

            <p className="mt-8 max-w-lg leading-8 text-slate-400">
              Sharing practical software engineering knowledge through
              tutorials, project breakdowns, backend development, frontend
              engineering, DevOps, TypeScript, React, Docker and much more.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-blue-500 hover:text-blue-500"
              >
                <Mail size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-blue-500 hover:text-blue-500"
              >
                {/* <Linkedin size={20} /> */}
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-blue-500 hover:text-blue-500"
              >
                {/* <Twitter size={20} /> */}
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-300 transition hover:border-blue-500 hover:text-blue-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-blue-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3 className="text-xl font-semibold text-white">Categories</h3>

            <ul className="mt-6 space-y-4">
              {categories.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-blue-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-center text-slate-500">
            © {new Date().getFullYear()} System Blog. Built with React,
            TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700
              px-5
              py-3
              text-slate-300
              transition
              hover:border-blue-500
              hover:text-blue-500
            "
          >
            Back to Top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
