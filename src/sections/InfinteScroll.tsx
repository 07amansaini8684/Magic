
import { HeartHandshake } from "lucide-react"
import InfiniteCardMarquee from "../components/Marquee"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const InfinteScroll = () => {
    return (
        <div className="w-full relative z-10 flex flex-col items-center justify-center overflow-hidden mt-10 pb-20">
            <div className="w-full relative z-10  pb-10 bg-black" >
                <div className="w-full overflow-hidden flex flex-col gap-4 bg-black">
                    {/* <InfiniteCardMarquee  duration={15} /> */}
                    <InfiniteCardMarquee duration={60} />
                    <InfiniteCardMarquee duration={90} />
                    <InfiniteCardMarquee duration={80} />
                    <InfiniteCardMarquee duration={85} />
                </div>
                <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-black" />
                <div className="w-full absolute bottom-0 z-10 flex flex-col items-center justify-center gap-2 text-center text-white px-6">
                    <div className="flex items-center justify-center text-zinc-200 relative cursor-pointer overflow-hidden rounded-2xl border bg-zinc-950 border-zinc-800 p-4">
                        <HeartHandshake className="relative z-10 w-24 h-24" />
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 bg-clip-border white mix-blend-plus-lighter opacity-70 blur-[20px] filter" />
                    </div>
                    <h1 className="text-4xl font-semibold">Stop wasting time on design.</h1>
                    <h2>Start your 7-day free trial. No credit card required.</h2>
                    <motion.button
                        className="bg-zinc-950 border border-zinc-700 hover:bg-zinc-900 hover:border-zinc-800 duration-300 text-zinc-100 text-sm px-6 py-2 rounded-full flex items-center gap-2 transition-all cursor-pointer"
                        whileHover="hover"
                    >
                        Get Started
                        <motion.span
                            variants={{
                                hover: { x: 8 }, // Moves the icon right when the button is hovered
                            }}
                            transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.span>
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default InfinteScroll
