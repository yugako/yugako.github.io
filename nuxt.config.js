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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:400,700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },

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

