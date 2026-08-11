import { ArrowRight, ExternalLink, Star } from 'lucide-react'

const technologies = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'Node.js',
  'PostgreSQL',
  'Docker',
]

export default function FeaturedProject() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className=" text-6xl font-semibold text-pink-500">
            Featured Project
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-500">
            Building Real Software
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Every project is an opportunity to learn something new. Here is one
            of my favorite projects that demonstrates software engineering
            principles, clean architecture, responsive UI and scalable
            development.
          </p>
        </div>

        <div
          className="
          overflow-hidden
          shadow
          rounded-3xl
          border
          border-slate-100
          bg-pink-600
          transition-all
          duration-300
          hover:border-gray-100
        "
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}

            <div className="relative h-80 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200"
                alt="Project"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
            </div>

            {/* Right Side */}

            <div className="flex flex-col justify-center p-10">
              <span className="mb-4 w-fit rounded-full bg-[#f0bb0c] px-4 py-2 text-sm text-white font-semibold">
                Full Stack Project
              </span>

              <h3 className="text-4xl font-bold text-white">
                Library Management System
              </h3>

              <p className="mt-6 leading-8 text-gray-100">
                A modern library management platform built using React,
                TypeScript, TailwindCSS, Node.js and PostgreSQL. It includes
                authentication, dashboards, responsive layouts and scalable
                backend architecture.
              </p>

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                    rounded-full
                    border
                    bg-[#f0bb0c]
                    px-4
                    py-2
                    text-sm
                    text-white
                    font-semibold
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-white">20+</p>

                  <p className="text-white">Components</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">100%</p>

                  <p className="text-white">Responsive</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-3xl font-bold text-white">
                    <Star
                      size={24}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    5
                  </p>

                  <p className="text-white">Main Features</p>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-green-600
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-500
                "
                >
                  {/* <Github size={20} /> */}
                  GitHub
                  <ArrowRight size={18} />
                </button>

                <button
                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-6
                  py-4
                  text-slate-800
                  transition
                  font-semibold
                  hover:cursor-pointer
                "
                >
                  <ExternalLink size={20} />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
