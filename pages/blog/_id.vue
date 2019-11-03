<template>
  <article class="blog-single">
    <div class="blog-single__pagination">
        <a href="#" @click.prevent='prevPost'>
          <i class="fas fa-long-arrow-alt-left"></i>
        </a>
        <a @click="$router.go(-1)">
          <i class="fas fa-bars"></i>
        </a>
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
    async asyncData({ params, payload }) {
      if (payload) return { article: payload };
      else
        return {
          article: await require(`~/assets/content/blog/${params.id}.json`),
        };
      },
    data() {
      return {
        id: this.$route.params.id,
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
      padding-top: 25%;
      background-size: cover;
      background-position: center;
      width: 100%;
    }
    &__header {
      padding-top: 70px;
      padding-bottom: 100px;
       text-align: center;
      &-title {
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 15px;
        color: $white;
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
        }

        pre {
          background-color: $dark;
          color: $accent;
          padding: 10px;
          width: 100%;
          overflow-x: auto;
        }
    }
  }
</style>