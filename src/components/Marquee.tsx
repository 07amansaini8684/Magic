import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Rss, Globe, Shield, HeartHandshake, FileText } from 'lucide-react';

const InfiniteCardMarquee = ({ duration = 15 }: { duration?: number }) => {
  // Updated cards data with Lucide icons and corresponding colors for glow effect
  const cards = [
    { id: 1, icon: <BarChart className="relative z-10 w-10 h-10" />, color: 'from-blue-500 via-blue-400 to-blue-600', textColor: 'text-blue-100' },
    { id: 2, icon: <Rss className="relative z-10 w-10 h-10" />, color: 'from-rose-500 via-rose-400 to-rose-600', textColor: 'text-rose-100' },
    { id: 3, icon: <Globe className="relative z-10 w-10 h-10" />, color: 'from-blue-500 via-cyan-500 to-blue-600', textColor: 'text-cyan-100' },
    { id: 4, icon: <Shield className="relative z-10 w-10 h-10" />, color: 'from-amber-500 via-yellow-500 to-amber-600', textColor: 'text-amber-100' },
    { id: 5, icon: <HeartHandshake className="relative z-10 w-10 h-10" />, color: 'from-rose-500 via-pink-500 to-rose-600', textColor: 'text-pink-100' },
    { id: 6, icon: <FileText className="relative z-10 w-10 h-10" />, color: 'from-emerald-500 via-green-500 to-emerald-600', textColor: 'text-emerald-100' },
  ];
  
  // Create a repeated array that's long enough to ensure continuous flow
  const marqueeCards = [...cards, ...cards, ...cards, ...cards];
  
  return (
    <div className="w-full overflow-hidden bg-black">
      <div className="relative flex">
        {/* First copy */}
        <motion.div
          className="flex"
          animate={{ x: ["0%", "100%"] }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeCards.map((card, index) => (
            <div
              key={`card-${index}`}
              className={`flex-shrink-0 size-20 mx-2 cursor-pointer overflow-hidden rounded-2xl border bg-zinc-950 border-zinc-900 p-4 flex items-center justify-center ${card.textColor} relative`}
            >
              {card.icon}
              <div className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${card.color} opacity-70 blur-[20px] filter`} />
            </div>
          ))}
        </motion.div>
        
        {/* Second copy that follows the first to create seamless loop */}
        <motion.div
          className="flex absolute left-0"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeCards.map((card, index) => (
            <div
              key={`card-duplicate-${index}`}
              className={`flex-shrink-0 size-20 mx-2 cursor-pointer overflow-hidden rounded-2xl border bg-zinc-950 border-zinc-900 p-4 flex items-center justify-center ${card.textColor} relative`}
            >
              {card.icon}
              <div className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${card.color} opacity-70 blur-[20px] filter`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteCardMarquee;