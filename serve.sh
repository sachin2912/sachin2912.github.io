#!/usr/bin/env bash
# Local preview for the portfolio.
# Usage:  ./serve.sh            (serves on http://localhost:8000)
#         ./serve.sh 5500       (serves on a custom port)
#
# This is a plain static site — no build step. Just a web server so that
# data.js loads correctly (opening index.html via file:// can block it).
set -e
PORT="${1:-9023}"
cd "$(dirname "$0")"

echo ""
echo "  Portfolio preview running:"
echo "    →  http://localhost:${PORT}"
echo ""
echo "  Edit data.js, then just refresh the browser. Ctrl+C to stop."
echo ""

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  exec python -m SimpleHTTPServer "$PORT"
else
  echo "Python not found. Install Python 3, or run: npx serve ."
  exit 1
fi
