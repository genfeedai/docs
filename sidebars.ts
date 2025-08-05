import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
    'getting-started',
    'features',
    'pricing',
    'models',
    {
      type: 'category',
      label: 'Content Creation',
      items: ['prompting-guide', 'asset-prompting-guide', 'voice-recognition', 'keyboard-shortcuts'],
    },
    {
      type: 'category',
      label: 'Publish',
      items: [
        'publish',
        {
          type: 'category',
          label: 'Social Media Setup',
          items: ['youtube-setup', 'instagram-setup', 'tiktok-setup', 'linkedin-setup'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced-features', 'members-guide'],
    },
    'faq',
  ],
};

export default sidebars;
