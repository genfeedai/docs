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
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function (context, options) {
      return {
        name: "webpack-polyfill-plugin",
        configureWebpack(config, isServer, utils) {
          const webpack = require("webpack");
          return {
            resolve: {
              fallback: {
                buffer: require.resolve("buffer/"),
                process: require.resolve("process/browser"),
                stream: require.resolve("stream-browserify"),
              },
            },
            plugins: [
              new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
                process: "process/browser",
              }),
            ],
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "https://assets.genfeed.ai/cards/default.jpg",
    navbar: {
      title: "GenFeed.ai",
      logo: {
        alt: "GenFeed.ai Logo",
        src: "https://assets.genfeed.ai/branding/logo-dark.png",
        srcDark: "https://assets.genfeed.ai/branding/logo-white.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
          to: "/",
        },
        {
          to: "/api/",
          label: "API",
          position: "left",
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
              label: "Pricing",
              to: "/pricing",
            },
            {
              label: "Models",
              to: "/models",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              label: "Prompting Tutorial",
              to: "/prompting-guide",
            },
            {
              label: "Admin Guide",
              to: "/admin-guide",
            },
            {
              label: "Voice Recognition",
              to: "/voice-recognition",
            },
            {
              label: "Keyboard Shortcuts",
              to: "/keyboard-shortcuts",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQ",
              to: "/faq",
            },
            {
              label: "GenFeed.ai",
              href: "https://genfeed.ai",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/genfeedai",
            },
            {
              label: "Twitter",
              href: "https://x.com/genfeedai",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/genfeedai",
            },
            {
              label: "TikTok",
              href: "https://tiktok.com/@genfeedai",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/@genfeedai",
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
