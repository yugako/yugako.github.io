<template>
  <section class="blog">
    <g-title class='blog-title' text='Blog' />
    <articles class='blog-articles' :pages='pages' />
  </section>
</template>

<script>
  import articles from '@/components/blog/articles';
  import GTitle from '@/components/elements/GTitle';

  export default {
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
    background-color: rgba($dark, 0.9);
    &-articles {
      margin-top: 110px;
      @include md-size-max {
        margin-top: 80px;
      }
      @include md-size-max {
        margin-top: 70px;
      }
    }
    &-title {
      margin-top: 60px;
      @include md-size-max {
        margin-top: 30px;
      }
    }
  }
</style>