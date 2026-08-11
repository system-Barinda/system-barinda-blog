import { ArrowUp, Code2, Mail } from 'lucide-react'
// import { ArrowUp, Code2, Github, Linkedin, Mail, Twitter } from "lucide-react";

const quickLinks = ['Home', 'Blog', 'Projects', 'About']

const categories = ['Frontend', 'Backend', 'DevOps', 'Databases']

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#f0bb0c] p-3 text-white">
                <Code2 size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-600">
                  System Blog
                </h2>

                <p className="text-slate-800 font-semibold">
                  Software Engineering
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-lg leading-8 text-slate-600">
              Sharing practical software engineering knowledge through
              tutorials, project breakdowns, backend development, frontend
              engineering, DevOps, TypeScript, React, Docker and much more.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-pink-500 p-3 text-pink-500 transition hover:border-pink-500 hover:text-pink-500"
              >
                <Mail size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-pink-500 p-3 text-pink-500 transition hover:border-pink-500 hover:text-pink-500"
              >
                {/* <Linkedin size={20} /> */}
              </a>

              <a
                href="#"
                className="rounded-xl border border-pink-500 p-3 text-pink-500 transition hover:border-pink-500 hover:text-pink-500"
              >
                {/* <Twitter size={20} /> */}
              </a>

              <a
                href="#"
                className="rounded-xl border border-pink-500 p-3 text-pink-500 transition hover:border-pink-500 hover:text-pink-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-green-500">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-600 font-semibold transition hover:text-blue-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3 className="text-xl font-semibold text-green-500">Categories</h3>

            <ul className="mt-6 space-y-4">
              {categories.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 font-semibold transition hover:text-blue-500"
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
             bg-pink-500

              px-5
              py-3
              text-white
              transition
              hover:cursor-pointer
              hover:text-white
            "
          >
            Back to Top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
