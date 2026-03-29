/**
 * Affiliate URL Replacement Script
 *
 * Usage:
 *   npx tsx scripts/replace-affiliate-urls.ts [--dry-run]
 *
 * 1. Edit scripts/tracking-urls.json:
 *    - Set "enabled": true for approved brands
 *    - Set "trackingUrl" to your affiliate tracking URL
 * 2. Run with --dry-run first to preview changes
 * 3. Run without --dry-run to apply changes
 * 4. Run `npm run build` to verify
 */

import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const CONFIG_PATH = path.join(process.cwd(), "scripts", "tracking-urls.json");

interface BrandConfig {
  enabled: boolean;
  trackingUrl: string;
  originalUrls: string[];
  files: string[];
}

interface Config {
  _comment?: string;
  [brand: string]: BrandConfig | string | undefined;
}

const dryRun = process.argv.includes("--dry-run");

function main() {
  console.log(dryRun ? "🔍 DRY RUN MODE\n" : "🚀 REPLACING URLs\n");

  const config: Config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
  let totalReplacements = 0;
  let totalFiles = 0;

  for (const [brand, value] of Object.entries(config)) {
    if (brand === "_comment" || typeof value === "string") continue;
    const brandConfig = value as BrandConfig;

    if (!brandConfig.enabled) {
      console.log(`⏭  ${brand}: skipped (not enabled)`);
      continue;
    }

    if (!brandConfig.trackingUrl) {
      console.log(`⚠️  ${brand}: enabled but no trackingUrl set!`);
      continue;
    }

    console.log(`\n✅ ${brand}: → ${brandConfig.trackingUrl}`);

    for (const file of brandConfig.files) {
      const filePath = path.join(POSTS_DIR, file);
      if (!fs.existsSync(filePath)) {
        console.log(`   ❌ ${file}: not found`);
        continue;
      }

      let content = fs.readFileSync(filePath, "utf-8");
      let fileReplacements = 0;

      for (const originalUrl of brandConfig.originalUrls) {
        // Match url="..." in AffiliateCTA components
        const pattern = new RegExp(
          `(url=")${escapeRegex(originalUrl)}(")`,
          "g"
        );
        const matches = content.match(pattern);
        if (matches) {
          fileReplacements += matches.length;
          content = content.replace(pattern, `$1${brandConfig.trackingUrl}$2`);
        }
      }

      if (fileReplacements > 0) {
        if (!dryRun) {
          fs.writeFileSync(filePath, content, "utf-8");
        }
        console.log(
          `   📝 ${file}: ${fileReplacements} URL(s) ${dryRun ? "would be " : ""}replaced`
        );
        totalReplacements += fileReplacements;
        totalFiles++;
      } else {
        console.log(`   ℹ️  ${file}: no matching URLs found`);
      }
    }
  }

  console.log(
    `\n${dryRun ? "Would replace" : "Replaced"} ${totalReplacements} URL(s) across ${totalFiles} file(s)`
  );

  if (dryRun && totalReplacements > 0) {
    console.log("\nRun without --dry-run to apply changes:");
    console.log("  npx tsx scripts/replace-affiliate-urls.ts");
  }

  if (!dryRun && totalReplacements > 0) {
    console.log("\nNext steps:");
    console.log("  1. npm run build");
    console.log("  2. Check CTA links in browser");
    console.log("  3. git add -A && git commit -m 'chore: update affiliate tracking URLs'");
  }
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main();
