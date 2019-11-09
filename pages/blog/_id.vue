<template>
  <article class="blog-single">
    <div class="blog-single__pagination">
        <a href="#" @click.prevent='prevPost'>
          <i class="fas fa-long-arrow-alt-left"></i>
        </a>
        <nuxt-link to='/blog'>
          <i class="fas fa-bars"></i>
        </nuxt-link>
        <a href="#" @click.prevent='nextPost'>
          <i class="fas fa-long-arrow-alt-right"></i>
        </a>
    </div> 
    <div class="blog-single__img" :style='{backgroundImage: `url(${article.thumbnail})`}'></div>
    <div class="container page-component">
      
      <div class="blog-single__header">
         <h1 class="blog-single__header-title">{{article.title}}</h1>
          <span class="blog-single__header-date"><i class="fas fa-calendar-alt"></i>January 06, 2019</span>
      </div>
     
      <div class="blog-single__content" v-html="$md.render(article.body)"></div>
      <vue-disqus shortname="personal-12" :identifier="article.id" :url="this.id"></vue-disqus>
     
    </div>
  </article>
</template>

<script>

  export default {
    name: 'index',
    head () {
      let article = this.article;
      
      return {
        title: `${article.title}`,
        meta: [
        {
          hid: `description`,
          name: 'description',
          content: `${article.excerpt}'s public profile at Nuxt.js`
        }]
      }
    },
    async asyncData({ params, payload }) {
      if (payload) {
        return { article: payload };
      } else {

        return {
          article: await require(`~/assets/content/blog/${params.id}.json`),
        };
      }
        
      },
    data() {
      return {
        id: this.$route.params.id,
        pageTitle: this.$route,
      }
    },
    methods: {
      nextPost() {
        let index = this.currentPostIndex;
        if (this.blogPosts[index+1]) {
          this.$router.push({'path': '/blog/' + this.blogPosts[index+1].slug})
        }
        
      },
      prevPost() {
         let index = this.currentPostIndex;
        if (this.blogPosts[index-1]) {
          this.$router.push({'path': '/blog/' + this.blogPosts[index-1].slug})
        }
      }
    },
    computed: {
      blogPosts() {
        return this.$store.state.blogPosts;
      },
      currentPostIndex () {
        let currentPost = null;
        this.blogPosts.forEach((item, index) => {
          if (this.$route.params.id == item.slug) {
            currentPost = index;
          }
        });
        return currentPost;
      }
    },
  }
</script>
<style lang='scss'>
  .blog-single {
    background-color: #0e0f10;
    padding-bottom: 100px;
    &__pagination {
      position: fixed;
      top: 20px;
      left: 55%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      background-color: rgba(0,0,0,0.7);
      -webkit-border-radius: 20px;
      border-radius: 20px;
      -webkit-box-shadow: 1px 1px 15px 0 rgba(0,0,0,0.15);
      box-shadow: 1px 1px 15px 0 rgba(0,0,0,0.15);
      z-index: 99;
      a {
        position: relative;
        height: 30px;
        padding: 0 10px;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
        color:#fff;
        &:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        &:hover {
          color: $accent;
        }
      }
    }
    &__img {
      padding-top: 30%;
      background-size: cover;
      background-position: center;
      width: 100%;
      @include md-size-max {
        padding-top: 40%;
      }
      @include sm-size-max {
        padding-top: 50%;
      }
    }
    &__header {
      padding-top: 70px;
      padding-bottom: 70px;
      @include md-size-max {
        padding-top: 50px;
        padding-bottom: 50px;
      }
      @include sm-size-max {
        padding-top: 40px;
        padding-bottom: 40px;
      }
       text-align: center;
      &-title {
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 15px;
        color: $white;
        @include md-size-max {
          font-size: 35px;
        }
        @include sm-size-max {
          font-size: 30px;
        }
      }
      &-date {
        color: $white;
        font-size: 14px;
        i {
          font-size: 13px;
          margin: 0 5px 0 10px;
          color: $accent;
        }
      } 
    }
    &__content {
        p {
            color: $white;
            font-family: $secondary-font;
            margin-bottom: 1rem;
            margin-top: 1rem;
            &:first-child {
              &::first-letter {
                font-size: 40px;
                font-weight: 700;
                line-height: 1.2;
                float: left;
                text-transform: uppercase;
                padding-right: 15px;
              }
            }
        }
        
        img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
        }

        pre {
          background-color: $dark;
          color: $accent;
          padding: 10px;
          width: 100%;
          overflow-x: auto;
          code {
            font-style: monospace;
          }
        }

        a {
          color: $accent;
        }
    }
  }
</style>