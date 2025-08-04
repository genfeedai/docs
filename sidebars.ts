import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "home",
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started", "features", "pricing"],
    },
    {
      type: "category",
      label: "AI Models",
      items: ["models"],
    },
    {
      type: "category",
      label: "Content Creation",
      items: [
        "prompting-guide",
        "asset-prompting-guide",
        "voice-recognition",
        "keyboard-shortcuts",
      ],
    },
    {
      type: "category",
      label: "Publish",
      items: ["publish"],
    },
    {
      type: "category",
      label: "Advanced",
      items: ["advanced-features", "admin-guide", "members-guide"],
    },
    {
      type: "category",
      label: "Help & Support",
      items: ["faq"],
    },
  ],
};

export default sidebars;
