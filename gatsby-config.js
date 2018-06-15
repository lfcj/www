'use strict'

const url = require('url')

const envError = propName =>
  new TypeError(`Need to declare a ${propName}' env.`)

const {
  STRIPE_KEY,
  PAYMENT_API_KEY,
  API_ENDPOINT,
  API_KEY,
  PAYMENT_ENDPOINT,
  GOOGLE_ANALYTICS_ID = `UA-108549225-1`
} = process.env

if (!STRIPE_KEY) throw envError('STRIPE_KEY')
if (!PAYMENT_API_KEY) throw envError('PAYMENT_API_KEY')
if (!API_ENDPOINT) throw envError('API_ENDPOINT')
if (!API_KEY) throw envError('API_KEY')
if (!PAYMENT_ENDPOINT) throw envError('PAYMENT_ENDPOINT')

const SITE_URL = 'https://microlink.io'

module.exports = {
  polyfill: false,
  siteMetadata: {
    siteUrl: SITE_URL,
    title: 'Microlink easily converts your links into beautiful previews.',
    description:
      'Enter an URL, receive information. Get relevant information from any website and easily create beautiful links previews.',
    ogImage: url.resolve(SITE_URL, '/preview.png'),
    ogVideo: url.resolve(SITE_URL, '/preview.mp4'),
    twitter: '@microlinkio',
    apiEndpoint: API_ENDPOINT,
    apiKey: API_KEY,
    paymentEndpoint: PAYMENT_ENDPOINT,
    paymentApiKey: PAYMENT_API_KEY,
    stripeKey: STRIPE_KEY
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          require('postcss-focus'),
          require('cssnano')({
            autoprefixer: true,
            mergeIdents: true,
            zindex: true,
            discardUnused: true
          })
        ],
        precision: 8
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/`,
        name: 'posts'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify`
  ]
}
