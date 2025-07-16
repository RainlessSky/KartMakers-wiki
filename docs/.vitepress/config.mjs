import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/kartmakers-wiki/favicon.png' }]],
  title: "KartMakers Wiki",
  description: "Wiki for KartMakers, a kart racing mod for Trailmakers.",
  base: "/kartmakers-wiki/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: { light: "/favicon.png", dark: "/favicon.png", alt: "KartMakers Wiki" },
    siteTitle: false,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RainlessSky/kartmakers-wiki' }
    ],
    sidebar: [
      {
        text: "KartMakers",
        items: [
          { text: 'Banned blocks', link: '/banned_blocks.md'},
          { text: 'Engine types', link: '/engines.md', collapsed: true, items: [
            { text: 'Bulldawg Engine', link: '/engines/bulldawg.md' },
            { text: 'Dragon Engine', link: '/engines/dragon.md' },
            { text: 'Raw Engine', link: '/engines/raw.md' }
            ]
          },
          { text: 'Thrusters', link: '/thrusters.md', collapsed: true, items: [
            { text: 'Thruster', link: '/engines/thruster.md' },
            { text: 'Space Thruster', link: '/engines/space_thruster.md' },
            { text: 'Dragon Jet', link: '/engines/dragon_jet.md' }
            ]
          },
          { text: 'Kart requirements', link: '/kart_requirements.md'}
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/RainlessSky/kartmakers-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Made by the KartMakers team'
    }
  }
})
