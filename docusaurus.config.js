// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manifold Finance KB',
  tagline: 'Knowledge base and documentation for Manifold Finance',
  url: 'https://manifold-kb.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'manifoldfinance', // Usually your GitHub org/user name.
  projectName: 'knowledgebase', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: ['docs', 'protodocs'],
        docsDir: ['docs', 'protodocs'],
        indexBlog: false,
      },
    ],
],
  presets: [
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './generatedSidebarsProtodocs.js'
        },
        docs: {
          routeBasePath: 'protobuf',
          sidebarPath: './sidebarsProtodocs.js',
        }
      }
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
          editUrl:
            'https://github.com/manifoldfinance/kb/tree/trunk/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/manifoldfinance/kb/tree/trunk/',
        },
        theme: {
          customCss: require.resolve('./src/css/docs.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
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
        alt: 'Manifold',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Knowledge Base',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/manifoldfinance/kb',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'protodocs/txpool.proto',
          activeBasePath: 'protodocs',
          label: 'Network',
          position: 'left',
        }
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
      copyright: `Copyright © ${new Date().getFullYear()} Manifold Finance, Inc. All Rights Reservved.`,
    },
    prism: {
  theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['solidity'],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-dappspec-line',
          line: '!Dappspec',
        },
      ],
    },
  },
};

module.exports = config;
