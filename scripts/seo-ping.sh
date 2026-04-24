#!/bin/bash
# Monthly SEO health check — nordstens.dk
# Verifies all pages return 200. Logs to scripts/seo-ping.log
# Note: Google/Bing sitemap ping endpoints were deprecated in 2023.
#       The sitemap is listed in robots.txt and is discovered automatically.

SITE="https://nordstens.dk"
LOG="/Users/lauritsromer/dev/norstenshus/scripts/seo-ping.log"

PAGES=(
  ""
  "/kontorloesninger"
  "/faciliteter"
  "/moederum"
  "/raa15"
  "/lejevilkaar"
  "/hilleroed"
  "/om-os"
  "/kontakt"
  "/design"
  "/sitemap.xml"
  "/robots.txt"
)

echo "========================================" >> "$LOG"
echo "SEO health check — $(date '+%Y-%m-%d %H:%M')" >> "$LOG"
echo "========================================" >> "$LOG"

FAIL=0
for PAGE in "${PAGES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${SITE}${PAGE}")
  if [ "$STATUS" = "200" ]; then
    echo "  ✓ ${SITE}${PAGE}" >> "$LOG"
  else
    echo "  ✗ ${SITE}${PAGE} — HTTP $STATUS" >> "$LOG"
    FAIL=1
  fi
done

echo "" >> "$LOG"

if [ "$FAIL" = "1" ]; then
  echo "⚠ WARNING: One or more pages returned non-200." >> "$LOG"
  echo "" >> "$LOG"
fi
