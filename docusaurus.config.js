// kb.manifoldfinance.com
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('./src/css/mfdoom');

// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manifold Finance Knowledgebase',
  tagline: 'Knowledge base & Documentation for Manifold Finance',
  url: 'https://kb.manifoldfinance.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'manifoldfinance',
  projectName: 'kb',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './generatedSidebarsProtodocs.js',
        },
        docs: {
          routeBasePath: 'protobuf',
          sidebarPath: './sidebarsProtodocs.js',
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/manifoldfinance/kb/tree/trunk/',
          admonitions: {
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger'],
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/manifoldfinance/kb/tree/trunk/',
        },
        theme: {
          customCss: require.resolve('./src/css/mfdoom'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Manifold Finance',
      logo: {
        alt: 'Manifold Finance logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'KB',
        },
        {
          to: '/docs/Block-Construction',
          label: 'Block Construction',
          position: 'left',
        },
        {
          to: '/docs/Rpc/ref-json-rpc',
          label: 'RPC Methods',
          position: 'left',
        },
        {
          to: '/docs/Protocol/protocol-backbonev01',
          label: 'Network Specification',
          position: 'left',
        },
        {
          href: 'https://github.com/manifoldfinance/kb',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://t.me/manifoldfinance',
          label: 'Telegram',
          position: 'right',
        },
        {
          href: 'https://forums.manifoldfinance.com',
          label: 'Forums',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'intro',
          activeBasePath: 'network',
          label: 'Ethereum',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/manifoldfinance',
            },
            {
              label: 'Discourse',
              href: 'https://forums.manifoldfinance.coms',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/foldfinance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/manifoldfinance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manifold Finance, Inc & CommodityStream, Inc. All Rights Reservved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['solidity'],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-dappspec-line',
          line: '!Dappspec',
        },
      ],
    },
    respectsPrefersColorScheme: true,
    switchConfig: {
      darkIcon: '🌙',
      lightIcon: '☀️',
    },
  },
  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: 'en',
        docsRouteBasePath: [
          'docs/Protocol',
          'docs/Strategies',
          'docs/How-To',
          'docs/Rpc',
          'docs/general',
          'docs/reference',
          'docs/Block-Construction',
          'protodocs',
        ],
        docsDir: [
          'docs/Staking',
          'docs/Block-Construction',
          'docs/How-To',
          'docs/Rpc',
          'docs/Switchboard',
          'docs/general',
          'docs/reference',
          'protodocs',
        ],
        indexBlog: false,
      },
    ],
  ],
};

module.exports = config;
