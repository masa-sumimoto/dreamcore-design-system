# Dreamcore Design System — Information Architecture

> Status: draft v1 (2026-07-12)

## プロジェクトの目的

1. Next.js で Dreamcore 美学を体現する Web サイトを構築し、実際のページデザインを作り込む
2. その成果物を **Figma テンプレート「Dreamcore Design System」** として公開する

designmd.sh には依存しない。コードが Single Source of Truth であり、Figma はその写像。

## サイトマップ

```
/                       Landing — 世界観の体現(最大の見せ場)
├── /foundations        Foundations index
│   ├── /foundations/colors        カラー(Pastels / The Void / Functional)
│   ├── /foundations/typography    タイポグラフィ(Instrument Serif × Inter)
│   ├── /foundations/spacing       スペーシング & リミナルレイアウト
│   ├── /foundations/effects       Fog blur / Glow / Floating elevation
│   └── /foundations/motion        Drift easing / duration / モーション原則
├── /components         Components index
│   ├── Floating Card
│   ├── Drift Button
│   ├── Input / Form
│   ├── Navigation
│   └── Status / Badge
└── /showcase           実例ギャラリー — Figma テンプレートの元ネタ
    ├── Dashboard
    ├── Blog / Article
    └── Profile / Auth
```

## 各ページの役割

### `/` Landing
- Dreamcore の感情(anemoia, comfort + unease)を最初の1画面で伝える
- Hero: Instrument Serif の大型ディスプレイ + fog gradient + drift motion
- Foundations / Components / Showcase への導線
- ポートフォリオとしての顔でもある

### `/foundations/*`
- トークンのリファレンス。各ページは「トークン一覧(コピー可能な値)+ 美学的 rationale」の2層構成
- rationale は旧 DESIGN.md の詩的な文体を継承する(例: "a permanent sunset in a dream")

### `/components`
- 実装コンポーネントのライブデモ + 使用ガイドライン(Do / Don't)
- 各コンポーネントは Figma コンポーネントと 1:1 対応させる前提で命名・variant 設計する

### `/showcase`
- 「Dreamcore で実際に UI を組むとこうなる」を示すフルページ実例
- Figma テンプレートのページ構成はここから逆算する

## デザイントークン戦略

- 定義場所: `src/app/globals.css` の `@theme`(Tailwind v4)
- 旧 dreamcore-design-md の Linter 対策トークン(accent-soft〜accent-obsidian)は廃止
- 新規に一級市民化したトークン:
  - Effects: `--blur-fog`, `--shadow-float`, `--shadow-glow-primary`
  - Motion: `--ease-drift`, `--ease-fade`
- Figma Variables へのマッピング: color / typography / spacing / radius は 1:1。effects は Figma styles、motion は prototype 設定 + ドキュメントで表現

## フォント(すべて Google Fonts)

| 役割 | フォント | 意図 |
|------|---------|------|
| Display | Instrument Serif (400 / italic) | Times New Roman 的 anemoia の現代的解釈 |
| Body | Inter | 「夢の中の普通さ」— 旧 DESIGN.md から継続 |
| Mono | Geist Mono | トークン値・コード表示用 |

## Figma テンプレートへのロードマップ

1. コード側でトークン・コンポーネント・Showcase を完成させる
2. Figma MCP(figma-generate-library / code-to-design)で Variables・スタイル・コンポーネントを生成
3. Showcase ページを Figma フレームとして再構成し、テンプレートファイルに整理
4. Figma Community にテンプレートとして公開
