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
            id: 'core-acme',
            spec: 'https://api.czertainly.com/doc-openapi-core-acme.yaml',
            route: '/api/core-acme/',
          },
          {
            id: 'core-local',
            spec: 'https://api.czertainly.com/doc-openapi-core-local.yaml',
            route: '/api/core-local/',
          },
          {
            id: 'core-client-operations',
            spec: 'https://api.czertainly.com/doc-openapi-core-client-operations.yaml',
            route: '/api/core-client-operations/',
          },
          {
            id: 'core-connector',
            spec: 'https://api.czertainly.com/doc-openapi-core-connector.yaml',
            route: '/api/core-connector/',
          },
          {
            id: 'core-credential',
            spec: 'https://api.czertainly.com/doc-openapi-core-credential.yaml',
            route: '/api/core-credential/',
          },
          {
            id: 'core-authority',
            spec: 'https://api.czertainly.com/doc-openapi-core-authority.yaml',
            route: '/api/core-authority/',
          },
          {
            id: 'core-rap-rofile',
            spec: 'https://api.czertainly.com/doc-openapi-core-ra-profile.yaml',
            route: '/api/core-ra-profile/',
          },
          {
            id: 'core-discovery',
            spec: 'https://api.czertainly.com/doc-openapi-core-discovery.yaml',
            route: '/api/core-discovery/',
          },
          {
            id: 'core-admin',
            spec: 'https://api.czertainly.com/doc-openapi-core-admin.yaml',
            route: '/api/core-admin/',
          },
          {
            id: 'core-client',
            spec: 'https://api.czertainly.com/doc-openapi-core-client.yaml',
            route: '/api/core-client/',
          },
          {
            id: 'core-certificate',
            spec: 'https://api.czertainly.com/doc-openapi-core-certificate.yaml',
            route: '/api/core-certificate/',
          },
          {
            id: 'core-entity',
            spec: 'https://api.czertainly.com/doc-openapi-core-entity.yaml',
            route: '/api/core-entity/',
          },
          {
            id: 'core-location',
            spec: 'https://api.czertainly.com/doc-openapi-core-location.yaml',
            route: '/api/core-location/',
          },
          {
            id: 'core-compliance-profile',
            spec: 'https://api.czertainly.com/doc-openapi-core-compliance-profile.yaml',
            route: '/api/core-compliance-profile/',
          },
          {
            id: 'core-other',
            spec: 'https://api.czertainly.com/doc-openapi-core-other.yaml',
            route: '/api/core-other/',
          },
          {
            id: 'connector-credential-provider',
            spec: 'https://api.czertainly.com/doc-openapi-connector-credential-provider.yaml',
            route: '/api/connector-credential-provider/',
          },
          {
            id: 'connector-authority-provider-legacy',
            spec: 'https://api.czertainly.com/doc-openapi-connector-authority-provider-legacy.yaml',
            route: '/api/connector-authority-provider-legacy/',
          },
          {
            id: 'connector-authority-provider-v2',
            spec: 'https://api.czertainly.com/doc-openapi-connector-authority-provider-v2.yaml',
            route: '/api/connector-authority-provider-v2/',
          },
          {
            id: 'connector-discovery-provider',
            spec: 'https://api.czertainly.com/doc-openapi-connector-discovery-provider.yaml',
            route: '/api/connector-discovery-provider/',
          },
          {
            id: 'connector-entity-provider',
            spec: 'https://api.czertainly.com/doc-openapi-connector-entity-provider.yaml',
            route: '/api/connector-entity-provider/',
          },
          {
            id: 'connector-compliance-provider',
            spec: 'https://api.czertainly.com/doc-openapi-connector-compliance-provider.yaml',
            route: '/api/connector-compliance-provider/',
          },
          {
            id: 'protocol-acme',
            spec: 'https://api.czertainly.com/doc-openapi-protocol-acme.yaml',
            route: '/api/protocol-acme/',
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
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
                label: 'ACME',
                to: '/api/core-acme/',
              },
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
                to: '/api/core-ra-profile/',
              },
              {
                label: 'Entity',
                to: '/api/core-Entity/',
              },
              {
                label: 'Location',
                to: '/api/core-location/',
              },
              {
                label: 'Compliance Profile',
                to: '/api/core-compliance-profile/',
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
              {
                label: 'Entity Provider',
                to: '/api/connector-entity-provider/',
              },
              {
                label: 'Compliance Provider',
                to: '/api/connector-compliance-provider/',
              },
            ],
          },
          {
            label: 'Protocol API',
            position: 'left',
            items: [
              {
                label: 'ACME',
                to: '/api/protocol-acme/',
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
        additionalLanguages: ['powershell','java'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '9LVBEQBLSX',
        // Public API key: it is safe to commit it
        apiKey: 'e5c6094c457339acfcd8114bef0f509a',
        indexName: 'czertainly',
        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
};

module.exports = config;
