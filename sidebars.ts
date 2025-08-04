import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
    'home',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'pricing',
        'models',
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      items: [
        'prompting-guide',
        'voice-recognition',
        'keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Admin Guide',
      items: [
        'admin-guide',
      ],
    },
    'faq',
  ],
};

export default sidebars;
