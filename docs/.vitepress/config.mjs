import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/KartMakers-wiki/favicon.png' }]],
  title: "KartMakers Wiki",
  description: "Wiki for KartMakers, a kart racing mod for Trailmakers.",
  base: "/KartMakers-wiki/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: { light: "/se-docs-dark.png", dark: "/se-docs-light.png", alt: "Sector's Edge Documentation" },
    siteTitle: false,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RainlessSky/KartMakers-wiki' }
    ],
    sidebar: [
      {
        text: "KartMakers",
        items: [
          { text: 'Engine types', link: '/engines.md', collapsed: true, items: [
            { text: 'Bulldawg Engine', link: '/engines/bulldawg.md' },
            { text: 'Dragon Engine', link: '/engines/dragon.md' },
            { text: 'Raw Engine', link: '/engines/raw.md' }
            ]
          }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/RainlessSky/KartMakers-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Made by the KartMakers team'
    }
  }
})
