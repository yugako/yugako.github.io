<template>
  <section class="blog">
    <g-title class='blog-title' text='Blog' />
    <articles class='blog-articles' :pages='pages' />
  </section>
</template>

<script>
  import articles from '@/components/blog/articles';
  import GTitle from '@/components/elements/GTitle';

  import { createClient } from '@/plugins/contentful';
  const contentfulClient = createClient();

  export default {
  	 asyncData ({env}) {
      return Promise.all([
        // fetch all blog posts sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'blog',
          order: '-sys.createdAt'
        })
      ]).then(([blog]) => {
        // return data that should be available
        // in the template
        return {
          pages: blog.items
        }
      }).catch(console.error)
    },
    data() {
    	return {
    		pages: null
    	}
    },
    components: {
      articles, GTitle
    }
  }
</script>
<style lang='scss'>
  .blog {
    background-color: #0e0f10;
    &-articles {
      margin-top: 110px;
    }
    &-title {
      margin-top: 60px;
    }
  }
</style>