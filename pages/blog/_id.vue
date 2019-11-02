<template>
  <!-- <article class="blog-single">
    <div class="blog-single__img" :style='{backgroundImage: `url(${page.fields.image.fields.file.url})`}'></div>
    <div class="container page-component">
      <img class="img-fluid" :src="page.fields.image.fields.file.url" :alt="page.fields.heading" v-if="page.fields.image" />
      <a @click="$router.go(-1)">Go back to overview</a>
      <div class="blog-single__header">
         <h1 class="blog-single__header-title">{{page.fields.heading}}</h1>
          <span class="blog-single__header-date"><i class="fas fa-calendar-alt"></i>January 06, 2019</span>
      </div>
     
      <div class="blog-single__content">
        <p>
          {{page.fields.content}}
        </p>
      </div>
     
    </div>
  </article> -->
  <h1>Blog details</h1>
  
</template>

<script>
  import {createClient} from '@/plugins/contentful';
  const contentfulClient = createClient();

  export default {
    name: 'index',
    asyncData ({ env, params }) {
      return contentfulClient.getEntries({
        'content_type': 'blog',
        'fields.slug': params.id
      }).then(page => {
        console.log(page.items[0])
        return {
          page: page.items[0]
        }
      }).catch(console.error)
    }
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
  }
</style>