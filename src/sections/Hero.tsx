import { motion } from "framer-motion";
export default function Hero() {
    return (
        <section
            className="relative z-10 min-h-screen flex mt-10 flex-col items-center justify-center gap-1 text-center text-white px-6 w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center mt-10"
            >
                {/* Tagline Box */}
                <motion.div
                    className="px-4 py-1.5 text-zinc-500 bg-zinc-900 text-xs rounded-full flex items-center space-x-2 shadow-md border-[1px] border-zinc-800 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span>✨</span>

                    {/* Glowing Text Animation */}
                    <motion.span
                        className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white"
                        initial={{ backgroundPosition: "200% 0" }}
                        animate={{ backgroundPosition: "-200% 0" }}
                        transition={{ duration: 2, repeat: Infinity, delay: 10 }}
                        style={{
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Introducing Magic UI Template
                    </motion.span>

                    {/* Animated Arrow */}
                    <motion.span
                        className="ml-2 text-gray-400"
                        initial={{ x: 5 }}
                        animate={{ x: 0 }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                    >
                        ➝
                    </motion.span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="bg-gradient-to-br mt-4 dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-4 text-5xl font-semibold leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Magic UI is the new way
                    <br /> to build landing pages.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="text-lg text-gray-400 max-w-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Beautifully designed, animated components and templates built with
                    Tailwind CSS, React, and Framer Motion.
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.button
                    className="mt-6 px-6 py-3 bg-zinc-200 text-zinc-700 relative z-10 rounded-lg text-sm font-semibold shadow-lg flex items-center space-x-1 hover:bg-gray-200 transition"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
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
            </motion.div>


            <motion.div
                className="w-full relative z-10 mt-20 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="w-full relative mt-10 p-10 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <motion.div
                        className="card-wrapper w-[65vw] min-w-[60vw] max-h-[65vh] min-h-[35vh] lg:min-h-[65vh] p-1 shrink-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="card-content w-full overflow-hidden">
                            <img className="w-full h-full" src="/hero-dark.png" />
                        </div>
                    </motion.div>

                    {/* Gradient Overlay */}
                    <motion.div
                        className="w-full absolute h-full bg-gradient-to-b from-transparent to-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    />
                </motion.div>
            </motion.div>

            {/* Bloom Effect (Fixed Blur) */}
            <motion.div
                className="w-[82%] rounded-full min-h-[560px] p-10 absolute top-[52%] left-[50%] -translate-x-1/2 z-9 -translate-y-1/2 flex gap-2 bg-[radial-gradient(circle,rgba(36,28,19)_0%,rgba(36,28,19)_49%,rgba(36,28,19,0.4)_100%)] blur-3xl"
                initial={{ opacity: 0, scale: 0.4 }}  // No blur animation, just scale
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
            </motion.div>

        </section>
    );
}
