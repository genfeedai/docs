import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  chat: {
    link: "https://discord.gg/TmfHg42xVb",
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/genfeedai/docs/tree/main",
  footer: {
    content: (
      <span>
        © 2025{" "}
        <a href="https://genfeed.ai" target="_blank" rel="noopener noreferrer">
          Genfeed.ai
        </a>
        . All rights reserved.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Genfeed.ai Documentation" />
      <meta
        property="og:description"
        content="Generate AI-powered content for your business"
      />
      <meta
        property="og:image"
        content="https://cdn.genfeed.ai/assets/cards/default.jpg"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  logo: (
    <span style={{ alignItems: "center", display: "flex" }}>
      <img
        src="https://cdn.genfeed.ai/assets/branding/logo-dark.png"
        alt="Genfeed.ai"
        height={24}
      />
      <img
        src="https://cdn.genfeed.ai/assets/branding/logo-white.png"
        alt="Genfeed.ai"
        height={24}
      />
      <span style={{ fontWeight: 600, marginLeft: ".5em" }}>Genfeed.ai</span>
    </span>
  ),
  navbar: {
    extraContent: (
      <a
        href="https://genfeed.ai"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.875rem",
          fontWeight: 500,
          padding: "0.5rem 1rem",
        }}
      >
        Back to Genfeed.ai →
      </a>
    ),
  },
  navigation: {
    next: true,
    prev: true,
  },
  project: {
    link: "https://github.com/genfeedai",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
