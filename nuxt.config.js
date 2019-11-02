const config = require('./contentful.json');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GG - Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:400,700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },

    ]
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fire'
  ],
  fire: {
     useOnly: [
      'auth',
      'firestore',
      'functions',
      'storage',
      'realtimeDb',
      'performance',
      'remoteConfig'
    ],
    config: {
      development: {
        apiKey: "AIzaSyAbHEpHDaTm0ed3czwebEbQs1cwNcwlpn0",
        authDomain: "portfolio-11879.firebaseapp.com",
        databaseURL: "https://portfolio-11879.firebaseio.com",
        projectId: "portfolio-11879",
        storageBucket: "portfolio-11879.appspot.com",
        messagingSenderId: "165637758076",
        appId: "1:165637758076:web:db81fc148e834097d5bdf9"


      },
      production: {
        apiKey: "AIzaSyAbHEpHDaTm0ed3czwebEbQs1cwNcwlpn0",
        authDomain: "portfolio-11879.firebaseapp.com",
        databaseURL: "https://portfolio-11879.firebaseio.com",
        projectId: "portfolio-11879",
        storageBucket: "portfolio-11879.appspot.com",
        messagingSenderId: "165637758076",
        appId: "1:165637758076:web:db81fc148e834097d5bdf9"


      }
    }
    
  },
  styleResources: {
      scss: [
          '@/assets/scss/global.scss',
      ]
  },
  plugins: [
    '~plugins/vue-typed',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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

