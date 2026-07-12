/**
 * Token metadata for the Foundations reference pages.
 * The source of truth for values is src/app/globals.css (@theme);
 * this file mirrors it with names, rationale, and grouping for display.
 */

export type ColorToken = {
  name: string;
  value: string;
  alias: string;
  description: string;
};

export type ColorGroup = {
  title: string;
  rationale: string;
  tokens: ColorToken[];
};

export const colorGroups: ColorGroup[] = [
  {
    title: "Base",
    rationale:
      "The canvas is a permanent sunset. Never pure white, never pure black — the dream always has a temperature.",
    tokens: [
      {
        name: "background",
        value: "#fef2f2",
        alias: "Soft Blush Cream",
        description: "The eternal sunset canvas. Every page starts here.",
      },
      {
        name: "surface",
        value: "#ffffff",
        alias: "Pure White",
        description: "Floating surfaces, detached from the fog.",
      },
      {
        name: "surface-dim",
        value: "#fce7f3",
        alias: "Dimmed Blush",
        description: "Recessed surfaces: inputs, wells, quiet areas.",
      },
    ],
  },
  {
    title: "Soft Pastels",
    rationale:
      "Comfort. The colors of a childhood you may or may not have had.",
    tokens: [
      {
        name: "primary",
        value: "#f9a8d4",
        alias: "Soft Bloom",
        description: "The signature pink. Emphasis, links, brand moments.",
      },
      {
        name: "secondary",
        value: "#c7e2ff",
        alias: "Sky Memory",
        description: "A sky remembered from a dream.",
      },
      {
        name: "lilac",
        value: "#d8b4fe",
        alias: "Ethereal Lavender",
        description: "Special states, rare moments.",
      },
      {
        name: "mint",
        value: "#a7ffe0",
        alias: "Distant Spring",
        description: "Positive states, success, growth.",
      },
      {
        name: "gold",
        value: "#fff6a0",
        alias: "Sunset Fragment",
        description: "Warnings that never feel alarming.",
      },
    ],
  },
  {
    title: "The Void",
    rationale:
      "Unease. The deep end of the dream. Use sparingly — the void is most powerful when it is rare.",
    tokens: [
      {
        name: "void",
        value: "#030027",
        alias: "Shadow Realm",
        description: "The deepest dark. Never use pure black.",
      },
      {
        name: "midnight",
        value: "#151e3f",
        alias: "Deep Consciousness",
        description: "Primary dark tone for text and shadows.",
      },
      {
        name: "rose",
        value: "#b8336a",
        alias: "Emotional Pulse",
        description: "The one saturated voice. Accents, labels, emphasis.",
      },
    ],
  },
  {
    title: "Functional",
    rationale: "Semantic roles, mapped onto the dream.",
    tokens: [
      {
        name: "text",
        value: "#151e3f",
        alias: "= midnight",
        description: "Default text color.",
      },
      {
        name: "text-muted",
        value: "#79aea3",
        alias: "Faded Teal",
        description: "Secondary text — words half-remembered.",
      },
      {
        name: "action",
        value: "#ffbdd9",
        alias: "Drift Pink",
        description: "Interactive elements: buttons, controls.",
      },
    ],
  },
];

export const typographyTokens = [
  {
    name: "display",
    family: "Instrument Serif",
    stack: "var(--font-display)",
    size: "52px / 80px (lg)",
    weight: "400",
    role: "Headlines. Serif letterforms carry anemoia — nostalgia for a time never lived. Italic for emotional emphasis.",
  },
  {
    name: "body",
    family: "Inter",
    stack: "var(--font-sans)",
    size: "16px",
    weight: "400",
    role: "Body text. The ordinary parts of the dream.",
  },
  {
    name: "caption",
    family: "Inter",
    stack: "var(--font-sans)",
    size: "12px",
    weight: "500",
    role: "Captions, metadata, quiet annotations.",
  },
  {
    name: "code",
    family: "Geist Mono",
    stack: "var(--font-mono)",
    size: "11–13px",
    weight: "400",
    role: "Token values, labels, system whispers. Wide tracking, uppercase.",
  },
];

export const spacingTokens = [
  { name: "2", value: 8, role: "Tight: inside small controls" },
  { name: "4", value: 16, role: "Default: between related elements" },
  { name: "8", value: 32, role: "Comfortable: inside cards and sections" },
  { name: "12", value: 48, role: "Distant: between component groups" },
  {
    name: "liminal",
    value: 48,
    role: "The signature gap. Vast emptiness between major content areas — the hallway at 3am",
  },
];

export const radiusTokens = [
  { name: "soft", value: "12px", role: "Inputs, small elements" },
  { name: "dreamy", value: "24px", role: "Cards, containers — the default" },
  { name: "pill", value: "9999px", role: "Buttons, badges, interactive elements" },
];

export const effectTokens = [
  {
    name: "shadow-float",
    value: "0 24px 48px -16px rgb(21 30 63 / 0.10)",
    role: "Default elevation. Soft, distant, detached from the base.",
  },
  {
    name: "shadow-float-far",
    value: "0 40px 80px -24px rgb(21 30 63 / 0.12)",
    role: "Higher elevation: modals, overlays.",
  },
  {
    name: "shadow-glow-primary",
    value: "0 0 48px 0 rgb(249 168 212 / 0.50)",
    role: "The dream glow. Hover states, focus moments.",
  },
  {
    name: "shadow-glow-action",
    value: "0 0 32px 0 rgb(255 189 217 / 0.60)",
    role: "Glow for action-colored elements.",
  },
  {
    name: "blur-fog",
    value: "40px",
    role: "Fog blur radius for atmospheric layers.",
  },
];

export const motionTokens = [
  {
    name: "ease-drift",
    value: "cubic-bezier(0.16, 1, 0.3, 1)",
    role: "The signature easing. A long, floating deceleration — like something settling in water.",
    feel: "もっちり — heavy start, endless tail",
  },
  {
    name: "ease-fade",
    value: "cubic-bezier(0.4, 0, 0.2, 1)",
    role: "For opacity crossfades and gentle state changes.",
    feel: "ぬるっ — smooth, symmetrical",
  },
];
