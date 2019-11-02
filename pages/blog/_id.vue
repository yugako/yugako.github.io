<template>
  <article class="blog-single">
    <div class="blog-single__img" :style='{backgroundImage: `url(${article.thumbnail})`}'></div>
    <div class="container page-component">
      <a @click="$router.go(-1)">Go back to overview</a>
      <div class="blog-single__header">
         <h1 class="blog-single__header-title">{{article.title}}</h1>
          <span class="blog-single__header-date"><i class="fas fa-calendar-alt"></i>January 06, 2019</span>
      </div>
     
      <div class="blog-single__content" v-html="$md.render(article.body)"></div>
      <vue-disqus shortname="personal-12" :identifier="article.id" :url="currentUrl"></vue-disqus>
    </div>
  </article>
</template>

<script>

  export default {
    name: 'index',
     async asyncData({ params, payload }) {
      if (payload) {
        return { article: payload };
      } 
      else {
        console.log(params);
        return {
          article: await require(`~/assets/content/blog/${params.id}.json`),
        };
      }   
    },
    data() {
      return {
        currentUrl: window.location.href,
      }
    },
  }
</script>
<style lang='scss'>
  .blog-single {
    background-color: #0e0f10;
    padding-bottom: 100px;
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