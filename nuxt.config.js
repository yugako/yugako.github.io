module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - George Gasyuk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:400,700&display=swap' },
    ]
  },

  /*
  * Modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
  ],
  markdownit: {
    injected: true,
  },
  styleResources: {
      scss: [
          '@/assets/scss/global.scss',
      ]
  },
  pwa: {
    icons: {

    }
  },

  /*
  * Plugins
  */
  plugins: [
    '~plugins/vue-typed',
    '~plugins/disqus',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#018aac',
  },

  /*
  ** Generate configuration
  */
  generate: {
    routes: function() {
      const fs = require('fs');
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(0, -5)}`, // Remove the .json from the end of the filename
          payload: require(`./assets/content/blog/${file}`),
        };
      });
    },
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

