// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CZERTAINLY Documentation',
  tagline: 'Security and trust assurance and automation in ever connected world',
  url: 'https://www.czertainly.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/czertainly_sign_color.svg',
  organizationName: '3KeyCompany', // Usually your GitHub org/user name.
  projectName: 'CZERTAINLY-Documentation', // Usually your repo name.

  // plugins: [
  //     './src/plugins/test'
  // ],
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
              [require('./src/plugins/remarkSimplePlantumlPlugin'), { baseUrl: 'https://www.plantuml.com/plantuml/svg', type: "svg" }],
          ],
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
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-acme.yaml',
            route: '/api/core-acme/',
          },
          {
            id: 'core-auth',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-auth.yaml',
            route: '/api/core-auth/',
          },
          {
            id: 'core-authority',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-authority.yaml',
            route: '/api/core-authority/',
          },
          {
            id: 'core-certificate',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-certificate.yaml',
            route: '/api/core-certificate/',
          },
          {
            id: 'core-client-operations',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-client-operations.yaml',
            route: '/api/core-client-operations/',
          },
          {
            id: 'core-compliance-profile',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-compliance-profile.yaml',
            route: '/api/core-compliance-profile/',
          },
          {
            id: 'core-connector',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-connector.yaml',
            route: '/api/core-connector/',
          },
          {
            id: 'core-credential',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-credential.yaml',
            route: '/api/core-credential/',
          },
          {
            id: 'core-cryptographic-operations',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-cryptographic-operations.yaml',
            route: '/api/core-cryptographic-operations/',
          },
          {
            id: 'core-custom-attributes',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-attribute.yaml',
            route: '/api/core-custom-attributes/',
          },
          {
            id: 'core-discovery',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-discovery.yaml',
            route: '/api/core-discovery/',
          },
          {
            id: 'core-entity',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-entity.yaml',
            route: '/api/core-entity/',
          },
          {
            id: 'core-group',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-group.yaml',
            route: '/api/core-group/',
          },
          {
            id: 'core-key',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-cryptographic-key.yaml',
            route: '/api/core-key/',
          },
          {
            id: 'core-local',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-local.yaml',
            route: '/api/core-local/',
          },
          {
            id: 'core-location',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-location.yaml',
            route: '/api/core-location/',
          },
          {
            id: 'core-ra-profile',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-ra-profile.yaml',
            route: '/api/core-ra-profile/',
          },
          {
            id: 'core-other',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-other.yaml',
            route: '/api/core-other/',
          },
          {
            id: 'core-token',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-token.yaml',
            route: '/api/core-token/',
          },
          {
            id: 'core-token-profile',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-core-token-profile.yaml',
            route: '/api/core-token-profile/',
          },


          {
            id: 'connector-authority-provider-legacy',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-authority-provider-legacy.yaml',
            route: '/api/connector-authority-provider-legacy/',
          },
          {
            id: 'connector-authority-provider-v2',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-authority-provider-v2.yaml',
            route: '/api/connector-authority-provider-v2/',
          },
          {
            id: 'connector-compliance-provider',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-compliance-provider.yaml',
            route: '/api/connector-compliance-provider/',
          },
          {
            id: 'connector-credential-provider',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-credential-provider.yaml',
            route: '/api/connector-credential-provider/',
          },
          {
            id: 'connector-cryptography-provider',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-cryptography-provider.yaml',
            route: '/api/connector-cryptography-provider/',
          },
          {
            id: 'connector-discovery-provider',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-discovery-provider.yaml',
            route: '/api/connector-discovery-provider/',
          },
          {
            id: 'connector-entity-provider',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-connector-entity-provider.yaml',
            route: '/api/connector-entity-provider/',
          },

          {
            id: 'protocol-acme',
            spec: 'https://api.czertainly.com/2.7.0/doc-openapi-protocol-acme.yaml',
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
            label: 'Core API',
            position: 'left',
            items: [
              {
                label: 'ACME',
                to: '/api/core-acme/',
              },
              {
                label: 'Auth',
                to: '/api/core-auth/',
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
                label: 'Client Operations',
                to: '/api/core-client-operations/',
              },
              {
                label: 'Compliance Profile',
                to: '/api/core-compliance-profile/',
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
                label: 'Cryptographic Operations',
                to: '/api/core-cryptographic-operations/',
              },
              {
                label: 'Custom Attributes',
                to: '/api/core-custom-attributes/',
              },
              {
                label: 'Discovery',
                to: '/api/core-discovery/',
              },
              {
                label: 'Entity',
                to: '/api/core-entity/',
              },
              {
                label: 'Group',
                to: '/api/core-group/',
              },
              {
                label: 'Key',
                to: '/api/core-key/',
              },
              {
                label: 'Local',
                to: '/api/core-local/',
              },
              {
                label: 'Location',
                to: '/api/core-location/',
              },
              {
                label: 'RA Profile',
                to: '/api/core-ra-profile/',
              },
              {
                label: 'Other',
                to: '/api/core-other/',
              },
              {
                label: 'Token',
                to: '/api/core-token/',
              },
              {
                label: 'Token Profile',
                to: '/api/core-token-profile/',
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
                label: 'Compliance Provider',
                to: '/api/connector-compliance-provider/',
              },
              {
                label: 'Credential Provider',
                to: '/api/connector-credential-provider/',
              },
              {
                label: 'Cryptography Provider',
                to: '/api/connector-cryptography-provider/',
              },
              {
                label: 'Discovery Provider',
                to: '/api/connector-discovery-provider/',
              },
              {
                label: 'Entity Provider',
                to: '/api/connector-entity-provider/',
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
            href: 'https://github.com/3KeyCompany/CZERTAINLY/discussions',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://discord.gg/XYsSZKjSt4',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
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
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} CZERTAINLY s.r.o. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','java','hcl'],
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
