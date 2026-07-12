# Dreamcore Design System — Developer Guide

Guide for AI assistants and human contributors to develop within this project.

## Build and Run Commands
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Run linter: `npm run lint`

## Technology Stack & Conventions
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4. All design tokens are defined in [src/app/globals.css](file:///Users/smmt/Projects/repositories/dreamcore-design-system/src/app/globals.css) under the `@theme` block.
- **Tokens Mirroring**: Code is the Single Source of Truth. Tokens defined in CSS are mapped to TypeScript metadata in [src/lib/tokens.ts](file:///Users/smmt/Projects/repositories/dreamcore-design-system/src/lib/tokens.ts).
- **Interactive Demos**: Live interactive elements (like the easing demos) must handle transitions gracefully, removing transitions when resetting state to prevent jarring backward animations.

## Design Philosophy & Guidelines
- **Blush Canvas**: Background should default to Soft Blush Cream (`#fef2f2`). Never use pure `#ffffff` or `#000000`.
- **The Void**: Deep shades like `#151e3f` (Deep Consciousness) or `#030027` (Shadow Realm) represent gravity and focus. Use them intentionally.
- **Liminal Spacing**: Large content areas are separated by `mt-liminal` (48px) to evoke comfort and quiet empty spaces (liminality).
- **Soft Geometry**: Avoid sharp corners. Use `rounded-soft` (12px), `rounded-dreamy` (24px), or `rounded-full`.
- **Atmospheric Easing**: Use custom transition curves, primarily `ease-drift` (`cubic-bezier(0.16, 1, 0.3, 1)`) for slow, floating deceleration.
