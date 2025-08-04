import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "GenFeed.ai Documentation",
  tagline: "Generate AI-powered content for your business",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.genfeed.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "genfeedai", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/genfeed-social-card.jpg",
    navbar: {
      title: "GenFeed.ai",
      logo: {
        alt: "GenFeed.ai Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://genfeed.ai",
          label: "Back to GenFeed.ai",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Pricing",
              to: "/docs/pricing",
            },
            {
              label: "Available Models",
              to: "/docs/models",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              label: "Prompting Tutorial",
              to: "/docs/prompting-guide",
            },
            {
              label: "Admin Guide",
              to: "/docs/admin-guide",
            },
            {
              label: "Voice Recognition",
              to: "/docs/voice-recognition",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Keyboard Shortcuts",
              to: "/docs/keyboard-shortcuts",
            },
            {
              label: "GenFeed.ai",
              href: "https://genfeed.ai",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GenFeed.ai. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
