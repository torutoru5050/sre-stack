# SaaSPedia アフィリエイト申請指示書

## 目的
SaaSPedia（https://saaspedia.dev）のアフィリエイトプログラムに申請し、承認されたらトラッキングURLを記事内のAffiliateCTAに差し替える。

## サイト情報（申請時に使う）
- サイト名: SaaSPedia
- URL: https://saaspedia.dev
- 運営者: Toru Iwabuchi
- 内容: DevOps/SRE向けSaaS比較レビューサイト（英語）
- 記事数: 24本
- PartnerStack登録済み（Pending）
- Impact.com登録済み（Verified）

## Phase 1: アフィリエイトプログラム申請

### 優先度 P0（今すぐ申請）

1. **Notion** — PartnerStack内で検索して申請
   - 報酬: 50%（初年12ヶ月間）
   - 記事: notion-ai-vs-clickup-ai.mdx

2. **Datadog** — https://www.datadoghq.com/partner/network/ から申請
   - 報酬: 最大10%（初年度売上）
   - 記事: datadog-vs-newrelic.mdx, grafana-vs-datadog-dashboards.mdx, best-monitoring-tools-kubernetes.mdx

3. **Grafana** — https://grafana.com/partnerships/ からリファラルパートナーとして申請
   - 記事: grafana-cloud-review.mdx, grafana-vs-datadog-dashboards.mdx, best-monitoring-tools-kubernetes.mdx

### 優先度 P1（P0の後に申請）

4. **New Relic** — https://newrelic.com/solutions/partners から申請
   - 記事: datadog-vs-newrelic.mdx, best-monitoring-tools-kubernetes.mdx

5. **PagerDuty** — https://www.pagerduty.com/partner-with-pagerduty/ から申請
   - 記事: rootly-vs-pagerduty.mdx, opsgenie-vs-pagerduty.mdx, best-incident-management-tools.mdx

6. **Tailscale** — https://tailscale.com/contact/partnerships から問い合わせ
   - 記事: tailscale-vs-wireguard.mdx

7. **Supabase** — https://supabase.com/blog/tags/partnerships から確認・申請
   - 記事: supabase-vs-firebase.mdx

8. **HashiCorp (Terraform)** — https://www.hashicorp.com/partners から申請
   - 記事: terraform-vs-pulumi.mdx, best-iac-tools.mdx

9. **Cloudflare** — https://www.cloudflare.com/partners/ から申請
   - 記事: cloudflare-vs-fastly.mdx

10. **Sentry** — https://sentry.io/ でパートナー/リファラルプログラムを探して申請
    - 記事: sentry-vs-bugsnag.mdx, best-error-tracking-tools.mdx

### 申請時の自己紹介テンプレート

```
I run SaaSPedia (https://saaspedia.dev), an independent review and comparison
site for SaaS tools targeting SRE/DevOps engineers. We have 24+ in-depth
comparison articles covering monitoring, CI/CD, IaC, incident management,
and security tools. All reviews are based on hands-on testing in production
environments. We're looking to establish an affiliate partnership to recommend
your product to our technical audience.
```

## Phase 2: トラッキングURL差し替え

承認されたら、各ブランドのトラッキングURLを取得し、記事内のAffiliateCTAのURLを差し替える。

### 差し替え対象ファイル
全て `/Users/totti/dev/side/afiliate/content/posts/` 内のMDXファイル。

### 差し替え方法
各MDXファイル内の `<AffiliateCTA>` コンポーネントの `url` プロパティを更新する。

例:
```
# Before
<AffiliateCTA
  name="Datadog"
  url="https://www.datadoghq.com"
  ...
/>

# After（トラッキングURL取得後）
<AffiliateCTA
  name="Datadog"
  url="https://www.datadoghq.com/?ref=saaspedia"
  ...
/>
```

### ブランドごとの差し替え対象一覧

| ブランド | 現在のURL | 対象ファイル |
|---------|----------|------------|
| Datadog | datadoghq.com | datadog-vs-newrelic, grafana-vs-datadog-dashboards, best-monitoring-tools-kubernetes, best-error-tracking-tools |
| New Relic | newrelic.com | datadog-vs-newrelic, best-monitoring-tools-kubernetes, best-error-tracking-tools |
| Grafana | grafana.com | grafana-cloud-review, grafana-vs-datadog-dashboards, best-monitoring-tools-kubernetes, best-incident-management-tools |
| PagerDuty | pagerduty.com | rootly-vs-pagerduty, opsgenie-vs-pagerduty, best-incident-management-tools |
| Sentry | sentry.io | sentry-vs-bugsnag, best-error-tracking-tools |
| Notion | notion.so | notion-ai-vs-clickup-ai |
| Terraform/HashiCorp | hashicorp.com | terraform-vs-pulumi, best-iac-tools |
| Cloudflare | cloudflare.com | cloudflare-vs-fastly |
| Tailscale | tailscale.com | tailscale-vs-wireguard |
| Supabase | supabase.com | supabase-vs-firebase |
| Linear | linear.app | linear-vs-jira |
| Vercel | vercel.com | vercel-vs-netlify |
| GitHub Copilot | github.com | github-copilot-vs-cursor |
| Cursor | cursor.com | github-copilot-vs-cursor |
| Rootly | rootly.com | rootly-vs-pagerduty, best-incident-management-tools |
| OpsGenie | atlassian.com/opsgenie | opsgenie-vs-pagerduty, best-incident-management-tools |
| Snyk | snyk.io | snyk-vs-sonarqube |
| Bugsnag | bugsnag.com | sentry-vs-bugsnag |
| Railway | railway.app | fly-io-vs-railway |
| Fly.io | fly.io | fly-io-vs-railway |

### 差し替え後の確認
1. `npm run build` でビルドが通ることを確認
2. 各記事ページでCTAリンクが正しく動作することを確認
3. `git commit` してデプロイ

## Phase 3: 追加の収益化（余裕があれば）

- **Amazon Associates** に登録し、DevOps関連書籍のリンクを記事末尾に追加
  - 例: 「SRE本」「Observability Engineering」等
- **UptimeRobot** アフィリエイト（20%ライフタイムリカーリング）に申請し、monitoring系記事に追加

## 注意事項
- 全アフィリエイトリンクには `rel="noopener noreferrer nofollow"` が既に設定済み（AffiliateCTAコンポーネント内）
- Impact.comのSTAT Tagも設置済み（layout.tsx内）。Impact経由のプログラムは自動トラッキングされる
- PartnerStackも登録済み（Pending）。承認後にプログラム申請可能
