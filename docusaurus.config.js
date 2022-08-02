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
          // numberPrefixParser: true,
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            numberPrefixParser,
            item,
            version,
            docs,
            options,
          }) {
            // Example: return an hardcoded list of static sidebar items
            const initialItems = await defaultSidebarItemsGenerator({
              options,
              item,
              version,
              docs,
              numberPrefixParser,
            });
            const dirs = createSidebarDirs(numberPrefixParser, initialItems);
            return dirs;
          },
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/manifoldfinance/kb/tree/trunk/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/manifoldfinance/kb/tree/trunk/',
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
        {
          to: '/Block-Construction',
          label: 'Block Construction',
          position: 'left',
        },
        {
          to: '/general/general-model',
          label: 'General Model',
          position: 'left',
        },
        {
          to: '/Protocol/protocol-backbonev01',
          label: 'ProtocolV01',
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
          type: 'doc',
          docId: 'intro',
          activeBasePath: 'network',
          label: 'Network',
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
      copyright: `Copyright © ${new Date().getFullYear()} Manifold Finance, Inc. All Rights Reservved.`,
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
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: 'en',
        docsRouteBasePath: [
          'docs/Protocol',
          'docs/Strategies',
          'docs/Rpc',
          'docs/Block-Construction',
          'protodocs',
        ],
        docsDir: [
          'docs/Staking',
          'docs/Block-Construction',
          'docs/Rpc',
          'docs/Switchboard',
          'protodocs',
        ],
        indexBlog: false,
      },
    ],
  ],
};

function prefixParser(file) {
  const [prefix, filename] =
    file
      ?.replace(/(\w+\/)?(Appendix )?([A-H\d\.]+) (.*?)/g, '$3@$4')
      ?.split('@') || [];

  return { prefix, filename };
}

/**
 * @param {import("@docusaurus/plugin-content-docs/src/types").NumberPrefixParser} numberPrefixParser
 * @param {import("@docusaurus/plugin-content-docs/src/sidebars/types").SidebarItem[]} unsortedItems
 */
function createSidebarDirs(numberPrefixParser, unsortedItems) {
  const firstItem = unsortedItems?.[0];
  if (firstItem?.type === 'link' || firstItem?.type === 'category') return;

  const id = firstItem?.id || '';
  const dir = id.replace(/(\w+\/).*/g, '$1');

  const items = unsortedItems.sort((a, b) => {
    const compareUnits = [a, b];
    const [newa, newb] = compareUnits.map((unit) => {
      if (unit?.type !== 'doc') return;
      let pref = prefixParser(unit.id).prefix?.split('.') || ['300'];

      if (pref[0].replace(/[^A-H]/g, '')) return 300;
      return parseInt(pref.map((p) => (p.length === 1 ? '0' + p : p)).join(''));
    });

    return newa - newb;
  });

  const itemsWhichNeedCategories = Array.from(
    new Set(
      items.map((item) => {
        if (item?.type !== 'doc') return undefined;

        const { prefix, filename } = prefixParser(item?.id);

        if (!prefix) return undefined;

        const splitpref = prefix.split('.');

        if (splitpref.length > 2) return splitpref.slice(0, 2).join('.');

        if (splitpref.length === 1) return splitpref[0];

        return undefined;
      }),
    ),
  )
    ?.map((prefix) => {
      const categoryName = items.find((item) => {
        if (item.type !== 'doc') return false;
        const namePrefix = prefixParser(item.id).prefix;
        return namePrefix === prefix;
      });
      if (categoryName?.type !== 'doc') return prefix;
      const lab = categoryName?.id?.replace(/\w+\//g, '') || undefined;
      return {
        type: 'category',
        label: lab,
        collapsed: true,
        collapsible: true,
        items: [],
      };
    })
    .filter((cat) => cat?.label);

  const manualLabelPrefixes = itemsWhichNeedCategories.map(
    ({ label }) => prefixParser(label).prefix,
  );

  // add the docs to their corresponding categories
  const thingsAddedInDirs = itemsWhichNeedCategories.map((category) => {
    const catPrefix = prefixParser(category.label).prefix;

    const directDescendant = items.find((item) => {
      if (item.type !== 'doc') return;
      const itemPrefix = prefixParser(item.id).prefix;
      return catPrefix === itemPrefix;
    });

    const backupDesc = { type: 'doc', id: `${dir}${category.label}` };
    const introfiedDirectDescendant = {
      ...(directDescendant || backupDesc),
      label: 'Introduction',
    };

    const splitCatPrefix = catPrefix.split('.');

    // const forbiddenPrefixes = manualLabelPrefixes.reduce((acc, labelPrefix) => {
    //   if (splitCatPrefix.length > 1) return []

    //   const splitLabelPrefix = labelPrefix.split('.')
    //   splitLabelPrefix[0] === splitCatPrefix[0] && acc.push(labelPrefix)
    //   return acc
    // }, [])

    const subItems = items.reduce((acc, item) => {
      if (item.type !== 'doc') return acc;
      const itemPrefix = prefixParser(item.id).prefix;
      const splitItemPrefix = itemPrefix?.split('.');

      // if (forbiddenPrefixes.includes(itemPrefix)) return acc;
      if (splitItemPrefix.length <= splitCatPrefix.length) return acc;

      if (splitCatPrefix.length > 1 && splitItemPrefix.length > 2) {
        itemPrefix !== catPrefix &&
          splitItemPrefix.length > 2 &&
          splitItemPrefix[0] === splitCatPrefix[0] &&
          splitItemPrefix[1] === splitCatPrefix[1] &&
          acc.push(item);
        return acc;
      }

      splitItemPrefix !== splitCatPrefix &&
        splitItemPrefix.length < 3 &&
        splitItemPrefix[0] === splitCatPrefix[0] &&
        acc.push(item);
      return acc;
    }, []);

    return { ...category, items: [introfiedDirectDescendant, ...subItems] };
  });
  //console.dir(thingsAddedInDirs.slice(-10), { depth: null })

  // prepare lists of dirs and subdirs so we can put the former in the latter later
  const { dirs, subdirs } = thingsAddedInDirs.reduce(
    (acc, curr) => {
      const { dirs, subdirs } = acc;

      const isSubdir = prefixParser(curr.label).prefix.split('.').length > 1;
      isSubdir ? subdirs.push(curr) : dirs.push(curr);

      return { dirs, subdirs };
    },
    { dirs: [], subdirs: [] },
  );

  //put dirs in subdirs
  const final = dirs.map((dir) => ({
    ...dir,
    items: dir.items.reduce((acc, curr, index) => {
      if (curr.label === 'Introduction') return [curr];

      acc.push(curr);
      const currPrefix = prefixParser(curr.id).prefix.split('.');

      const nextDir = subdirs.find((subdir) => {
        const subdirPrefix = prefixParser(subdir.label).prefix.split('.');
        return (
          subdirPrefix[0] === currPrefix[0] &&
          parseInt(subdirPrefix[1]) === parseInt(currPrefix[1]) + 1
        );
      });

      nextDir && acc.push(nextDir);

      return acc;
    }, []),
  }));
  //console.log(final)

  // filter out all the double categories/entries
  const filtered = final.map((cat) => {
    if (!cat.items?.length) {
      return cat;
    }
    return {
      ...cat,
      items: cat.items.filter((item) => {
        if (item.type === 'category') return true;

        return !cat.items.some(
          (sub) => sub?.label === item?.id?.replace(/\w+\//g, ''),
        );
      }),
    };
  });

  // now that we have sorted everything nicely we can get rid of all the prefixes
  const withoutPrefs = filtered.map((cat) => {
    const { prefix: catPrefix, filename: catLabel } = prefixParser(cat.label);
    const isAppendix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(
      catPrefix[0],
    );
    const categoryLabel = isAppendix
      ? `Appendix ${cat.label}`
      : catLabel || cat.label;

    if (!cat.items?.length) {
      return { ...cat, label: categoryLabel };
    }
    return {
      ...cat,
      label: categoryLabel,
      items: cat?.items?.map((subCat) => {
        const subCatLabel = prefixParser(subCat.label || subCat.id).filename;
        if (subCat.type === 'doc') {
          if (subCat.label) return subCat;
          return { ...subCat, label: subCatLabel };
        }
        return {
          ...subCat,
          label: subCatLabel || subCat.label,
          items: subCat?.items?.map((subsubCat) => {
            const subsubCatLabel = prefixParser(subsubCat.id).filename;
            if (subsubCat.label) return subsubCat;
            return { ...subsubCat, label: subsubCatLabel };
          }),
        };
      }),
    };
  });

  const withNoOneMemberCategories = withoutPrefs.map((category) => {
    if (!category?.items?.length) return category;
    if (category?.items?.length > 1) return category;

    return {
      label: category.label,
      type: 'doc',
      id: category.items?.[0]?.id || 'intro',
    };
  });

  const firstItems = [
    'Motivation',
    'The User Manual',
    'OpenMev',
    'Table of Contents',
    'Introduction',
    'Copying',
    'Distribution',
    'VENOM Manual',
  ];

  const notAppendices = [
    'Acknowledgments',
    'Command and Function Index',
    'Command-Line Option Index',
    'Distribution',
    'Function Index',
    'Footnotes',
    'Copying',
    'Concept Index',
    'Glossary',
  ];

  const withSpecialItems = withNoOneMemberCategories.reduce((acc, item) => {
    const label = item.label.replace(/Appendix /g, '');
    if (firstItems.includes(label)) {
      return [{ ...item, label: label }, ...acc];
    }
    if (notAppendices.includes(label)) {
      return [...acc, { ...item, label: label }];
    }
    acc.push(item);
    return acc;
  }, []);

  // gross manual modifications
  console.log(items[0]);
  if (
    items?.[0]?.type === 'doc' &&
    items[0].id.replace(/(\w+)\/.*/g, '$1') === 'auctex'
  ) {
    console.log('aaaaaa');
    const firstThree = withSpecialItems.slice(0, 3);
    const last = withSpecialItems.slice(3);
    return [...firstThree.reverse(), ...last];
  }

  if (
    items?.[0]?.type === 'doc' &&
    items[0].id.replace(/(\w+)\/.*/g, '$1') === 'emacs'
  ) {
    const finalOrder = [
      'Appendix A',
      'Appendix B',
      'Appendix C',
      'Appendix D',
      'Appendix E',
      'Appendix F',
      'Appendix G',
      'Ethereum',
      'Glossary',
      'Nodes',
      'Protocol',
      'Engineering',
      'Function',
      'Variable',
      'Concept',
    ];

    const firstItems = withSpecialItems.slice(0, -finalOrder.length - 1);
    const lastItems = withSpecialItems.slice(-finalOrder.length - 1);
    console.dir(lastItems);
    const sortedLastItems = finalOrder.map(
      (item, index) =>
        lastItems.find((uitem) => uitem.label.includes(item)) ||
        lastItems[index],
    );

    return [...firstItems, ...sortedLastItems];
  }

  return withSpecialItems;
}

module.exports = config;
