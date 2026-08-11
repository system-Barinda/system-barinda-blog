import { Mail, Send, Sparkles } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-pink-600
            via-gray-900
            to-pink-600
            p-8
            md:p-14
          "
        >
          {/* Background Decorations */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f0bb0c] px-4 py-2 text-white font-semibold">
                <Sparkles size={18} />
                Weekly Software Engineering Newsletter
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Stay Ahead in
                <span className="block text-green-800">
                  Software Engineering
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Join developers receiving practical tutorials, project
                breakdowns, React, TypeScript, Backend, DevOps, AI, career
                advice, and engineering insights every week.
              </p>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white">100+</h3>

                  <p className="text-slate-300">Articles Planned</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">Weekly</h3>

                  <p className="text-slate-300">New Tutorials</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">Free</h3>

                  <p className="text-slate-300">Forever</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl bg-white p-8 backdrop-blur-md">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-pink-600 p-3 text-white">
                  <Mail size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-600">
                    Subscribe
                  </h3>

                  <p className="text-slate-600">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    w-full
                    rounded-xl
                    shadow-xl
                    bg-slate-200
                    px-5
                    py-4
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    transition
                   
                  "
                />

                <button
                  type="submit"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#f0bb0c]
                    px-6
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#f0bb0c]
                  "
                >
                  Subscribe Now
                  <Send size={18} />
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-slate-400">
                By subscribing you agree to receive software engineering updates
                and learning resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
