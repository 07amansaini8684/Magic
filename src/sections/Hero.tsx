import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex mt-10 flex-col items-center justify-center gap-2 text-center bg-black text-white px-6">
      <motion.div
        className="px-4 py-1.5 bg-[#1A1B1B] text-zinc-500 text-xs rounded-full flex items-center space-x-2 shadow-md border-[1px] border-zinc-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>✨</span>
        <span>Introducing Magic UI Template</span>
        <motion.span
          className="ml-2 text-gray-400"
          initial={{ x: 5 }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          ➝
        </motion.span>
      </motion.div>

      <motion.h1
        className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Magic UI is the new way
        <br /> to build landing pages.
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Beautifully designed, animated components and templates built with
        Tailwind CSS, React, and Framer Motion.
      </motion.p>

      <motion.button
        className="mt-6 px-6 py-3 bg-white text-zinc-700 rounded-lg text-sm font-semibold shadow-lg flex items-center space-x-1 hover:bg-gray-200 transition"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>Get Started for free</span>
        <motion.span
          initial={{ x: 5 }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          ➝
        </motion.span>
      </motion.button>

      <motion.div>
        
      </motion.div>
    </section>
  );
}
