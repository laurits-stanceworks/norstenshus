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
          className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-[#1e2235] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-[#b8a07a]"
          >
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clipRule="evenodd"
            />
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
