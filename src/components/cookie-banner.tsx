"use client"

import { useEffect, useState } from "react"

const CONSENT_KEY = "cookie_consent"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

function loadGA() {
  if (typeof window === "undefined") return
  if (document.getElementById("ga-script")) return

  const script = document.createElement("script")
  script.id = "ga-script"
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-TTLELHVH23"
  script.async = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args) {
    window.dataLayer.push(args)
  }
  window.gtag("js", new Date())
  window.gtag("config", "G-TTLELHVH23")
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === "accepted") {
      loadGA()
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted")
    loadGA()
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl bg-white border border-[#e5e3dc] rounded-lg shadow-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[#6b6b7a] leading-relaxed flex-1">
          Vi bruger cookies til at forbedre din oplevelse og analysere trafikken på vores hjemmeside via Google Analytics.{" "}
          <a href="/privatlivspolitik" className="text-[#9d2e1e] hover:underline">
            Læs vores privatlivspolitik
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-[#6b6b7a] hover:text-[#8397a9] transition-colors px-4 py-2 rounded border border-[#e5e3dc] hover:border-[#8397a9]"
          >
            Kun nødvendige
          </button>
          <button
            onClick={accept}
            className="text-sm bg-[#9d2e1e] text-white px-4 py-2 rounded hover:bg-[#8b2518] transition-colors"
          >
            Accepter alle
          </button>
        </div>
      </div>
    </div>
  )
}
