#!/usr/bin/env bash
# Entry point cho Cursor Automation / Cloud Agent.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run fetch:trending
echo ""
echo "Done. Commit these paths:"
echo "  data/trending/"
echo "  site/public/data/trending-week.json"
