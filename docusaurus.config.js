// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '切り絵シェーダーアート展',
  tagline: '不思議なアート展',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja-JP',
    locales: ['ja-JP'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/social.jpg',
      navbar: {
        title: '切り絵シェーダーアート展',

        items: [

        ],

      },
      footer: {
        style: 'light',
        links: [
          {
            title: '各種リンク',
            items: [
              {
                label: 'ホーム',
                to: '/',
              },
              {
                label: '来場方法（準備中）',
                to: 'docs/来場方法（準備中）',
              },
              {
                label: '出展者一覧（準備中）',
                to: 'docs/出展者一覧（準備中）',
              },
              {
                label: '出展者向けガイドライン',
                to: 'docs/category/出展者向けガイドライン',
              },
              {
                label: 'よくあるご質問',
                to: 'docs/よくあるご質問',
              },
              {
                label: 'おにさわランド公式オンラインストア',
                to: 'https://onisawa.booth.pm/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 切り絵シェーダーアート展`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
