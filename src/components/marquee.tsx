"use client"

import { motion } from "framer-motion"

const items = [
  "HAY DESIGN",
  "TAGTERRASSE",
  "FIBERNET",
  "INGEN BINDING",
  "MØDELOKALER",
  "TELEFONBOKSE",
  "24/7 ADGANG",
  "RENGØRING",
  "NETVÆRK",
  "HILLERØD",
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
