// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CZERTAINLY Documentation',
  tagline: 'Medicine for your certificates!',
  url: 'https://www.czertainly.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/czertainly_sign_color.svg',
  organizationName: '3KeyCompany', // Usually your GitHub org/user name.
  projectName: 'CZERTAINLY-Documentation', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'core-local',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-local.yaml',
            routePath: '/api/core-local/',
          },
          {
            id: 'core-client-operations',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-client-operations.yaml',
            routePath: '/api/core-client-operations/',
          },
          {
            id: 'core-connector',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-connector.yaml',
            routePath: '/api/core-connector/',
          },
          {
            id: 'core-credential',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-credential.yaml',
            routePath: '/api/core-credential/',
          },
          {
            id: 'core-authority',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-authority.yaml',
            routePath: '/api/core-authority/',
          },
          {
            id: 'core-raprofile',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-raprofile.yaml',
            routePath: '/api/core-raprofile/',
          },
          {
            id: 'core-discovery',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-discovery.yaml',
            routePath: '/api/core-discovery/',
          },
          {
            id: 'core-admin',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-admin.yaml',
            routePath: '/api/core-admin/',
          },
          {
            id: 'core-client',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-client.yaml',
            routePath: '/api/core-client/',
          },
          {
            id: 'core-certificate',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-certificate.yaml',
            routePath: '/api/core-certificate/',
          },
          {
            id: 'core-other',
            specUrl: 'https://api.czertainly.com/doc-openapi-core-other.yaml',
            routePath: '/api/core-other/',
          },
          {
            id: 'connector-credential-provider',
            specUrl: 'https://api.czertainly.com/doc-openapi-connector-credential-provider.yaml',
            routePath: '/api/connector-credential-provider/',
          },
          {
            id: 'connector-authority-provider-legacy',
            specUrl: 'https://api.czertainly.com/doc-openapi-connector-authority-provider-legacy.yaml',
            routePath: '/api/connector-authority-provider-legacy/',
          },
          {
            id: 'connector-authority-provider-v2',
            specUrl: 'https://api.czertainly.com/doc-openapi-connector-authority-provider-v2.yaml',
            routePath: '/api/connector-authority-provider-v2/',
          },
          {
            id: 'connector-discovery-provider',
            specUrl: 'https://api.czertainly.com/doc-openapi-connector-discovery-provider.yaml',
            routePath: '/api/connector-discovery-provider/',
          },
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: '#3fb24d',
          /**
           * Options to pass to redoc
           * @see https://github.com/redocly/redoc#redoc-options-object
           */
          redocOptions: { hideDownloadButton: false },
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'CZERTAINLY Documentation',
        logo: {
          alt: 'CZERTAINLY Logo',
          src: 'img/czertainly_sign_color.svg',
          srcDark: 'img/czertainly_sign_white.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Docs',
            position: 'left',
            to: '/docs',
          },
          {
            label: 'Contributors',
            position: 'left',
            to: '/contributors',
          },
          {
            label: 'Core API',
            position: 'left',
            items: [
              {
                label: 'Administrator',
                to: '/api/core-admin/',
              },
              {
                label: 'Authority',
                to: '/api/core-authority/',
              },
              {
                label: 'Certificate',
                to: '/api/core-certificate/',
              },
              {
                label: 'Client',
                to: '/api/core-client/',
              },
              {
                label: 'Client Operations',
                to: '/api/core-client-operations/',
              },
              {
                label: 'Connector',
                to: '/api/core-connector/',
              },
              {
                label: 'Credential',
                to: '/api/core-credential/',
              },
              {
                label: 'Discovery',
                to: '/api/core-discovery/',
              },
              {
                label: 'Local',
                to: '/api/core-local/',
              },
              {
                label: 'RA Profile',
                to: '/api/core-raprofile/',
              },
              {
                label: 'Other',
                to: '/api/core-other/',
              },
            ],
          },
          {
            label: 'Connector API',
            position: 'left',
            items: [
              {
                label: 'Authority Provider Legacy',
                to: '/api/connector-authority-provider-legacy/',
              },
              {
                label: 'Authority Provider v2',
                to: '/api/connector-authority-provider-v2/',
              },
              {
                label: 'Credential Provider',
                to: '/api/connector-credential-provider/',
              },
              {
                label: 'Discovery Provider',
                to: '/api/connector-discovery-provider/',
              },
            ],
          },
          // {
          //   href: 'https://api.czertainly.com',
          //   label: 'OpenAPI',
          //   position: 'left',
          // },
          {
            href: 'https://www.czertainly.com',
            label: 'About CZERTAINLY',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} 3Key Company s.r.o. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
