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
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === "accepted") {
      loadGA()
      setHasConsent(true)
    } else if (!consent) {
      setVisible(true)
    } else {
      setHasConsent(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted")
    loadGA()
    setHasConsent(true)
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined")
    setHasConsent(true)
    setVisible(false)
  }

  return (
    <>
      {/* Sticky settings button — shown after consent is given */}
      {hasConsent && !visible && (
        <button
          onClick={() => setVisible(true)}
          aria-label="Cookie-indstillinger"
          className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-[#8397a9] flex items-center justify-center shadow-lg hover:bg-[#9d2e1e] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white"
          >
            {/* Cookie with bite taken out and chocolate chips */}
            <path d="M21 12.2A9 9 0 1 1 11.8 3a1 1 0 0 0 1 1 2 2 0 0 0 2 2 1 1 0 0 0 1 1 2 2 0 0 0 2 2 1 1 0 0 0 1 1 1.2 1.2 0 0 0 2.2 2z" />
            <circle cx="9" cy="10" r="1" fill="rgba(0,0,0,0.3)" />
            <circle cx="13" cy="14" r="1" fill="rgba(0,0,0,0.3)" />
            <circle cx="10" cy="15" r="0.75" fill="rgba(0,0,0,0.3)" />
            <circle cx="14" cy="10" r="0.75" fill="rgba(0,0,0,0.3)" />
          </svg>
        </button>
      )}

      {/* Cookie banner */}
      {visible && (
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
      )}
    </>
  )
}
