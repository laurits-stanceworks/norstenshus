"use client"

import { motion } from "framer-motion"

const items = [
  "HAY DESIGN",
  "GÅGADEN I HILLERØD",
  "TAGTERRASSE",
  "FIBERNET",
  "INGEN BINDING",
  "HISTORISK BYGNING",
  "MØDELOKALER",
  "NØGLEFRI ADGANG",
  "24/7 ADGANG",
  "NETVÆRKSARRANGEMENTER",
]

export function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="bg-[#9d2e1e] py-4 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-white text-xs font-semibold uppercase tracking-[0.25em] shrink-0"
          >
            {item}
            <span className="ml-12 text-white/40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
