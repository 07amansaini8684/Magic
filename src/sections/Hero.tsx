import { motion } from "framer-motion";
export default function Hero() {
  return (
      <section
          className="relative z-10 min-h-screen flex mt-10 flex-col items-center justify-center gap-2 text-center text-white px-6 w-full">
          <motion.div
              className="px-4 py-1.5 text-zinc-500 text-xs rounded-full flex items-center space-x-2 shadow-md border-[1px] border-zinc-800"
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
          >
              <span>✨</span>
              <span>Introducing Magic UI Template</span>
              <motion.span
                  className="ml-2 text-gray-400"
                  initial={{x: 5}}
                  animate={{x: 0}}
                  transition={{repeat: Infinity, repeatType: "reverse", duration: 1}}
              >
                  ➝
              </motion.span>
          </motion.div>

          <motion.h1
              className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
          >
              Magic UI is the new way
              <br/> to build landing pages.
          </motion.h1>

          <motion.p
              className="text-lg text-gray-400 max-w-2xl"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7}}
          >
              Beautifully designed, animated components and templates built with
              Tailwind CSS, React, and Framer Motion.
          </motion.p>

          <motion.button
              className="mt-6 px-6 py-3 bg-white text-zinc-700 rounded-lg text-sm font-semibold shadow-lg flex items-center space-x-1 hover:bg-gray-200 transition"
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5}}
          >
              <span>Get Started for free</span>
              <motion.span
                  initial={{x: 5}}
                  animate={{x: 0}}
                  transition={{repeat: Infinity, repeatType: "reverse", duration: 1}}
              >
                  ➝
              </motion.span>
          </motion.button>


          <motion.div className="w-full relative z-10 mt-20 flex flex-col items-center justify-center">
              <motion.div className="w-full relative mt-10 p-10 flex items-center justify-center overflow-hidden">
                  <motion.div className="card-wrapper  w-[65vw] min-h-[70vh] p-1">
                      <div className="card-content w-full overflow-hidden">
                          <img className="w-full h-full" src="/hero-dark.png"/>
                      </div>
                  </motion.div>
                  <motion.div className="w-full absolute h-full bg-gradient-to-b from-transparent to-black">
                  </motion.div>
              </motion.div>
          </motion.div>
          {/*<motion.div className="absolute bottom-10 left-0 bg-green-300 w-[100%]">*/}
          {/*    <motion.div*/}
          {/*        className="absolute -top-20 w-[50%] h-[50vh] bg-[radial-gradient(circle,rgba(37,26,19),transparent)]  top-10 left-10"*/}
          {/*    />*/}
          {/*    <motion.div*/}
          {/*        className="absolute -top-20 bg-[radial-gradient(circle,rgba(37,26,19),transparent)]   right-10"*/}
          {/*    />*/}
          {/*</motion.div>*/}
          {/*<motion.div className="w-[80%] min-h-[500px] p-10 absolute top-[50%] left-[50%] -translate-x-1/2 z-9 -translate-y-1/2 flex gap-2">*/}
          {/*    <motion.div*/}
          {/*            className="absolute top-0 left-0 w-[50%] rounded-full h-[500px] bg-[radial-gradient(circle,rgba(37,26,19),transparent)]  top-10 left-10"*/}
          {/*        />*/}
          {/*        <motion.div*/}
          {/*            className="absolute top-0 right-0 w-[50%] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,26,19),transparent)]   right-10"*/}
          {/*        />*/}
          {/*</motion.div>*/}
          <motion.div className="w-[85%] rounded-full min-h-[550px] p-10 absolute top-[57%] left-[50%] -translate-x-1/2 z-9 -translate-y-1/2 flex gap-2 bg-[radial-gradient(circle,rgba(36,28,19)_0%,rgba(36,28,19)_49%,rgba(36,28,19,0.4)_100%)] blur-3xl">

          </motion.div>
      </section>
  );
}
