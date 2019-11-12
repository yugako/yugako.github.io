<template>
	<div class="blog-single__pagination">
       <a href="#" @click.prevent='prevPost'>
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
           <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
         </svg>
       </a>
       <nuxt-link to='/blog'>
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
           <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
         </svg>
       </nuxt-link>
       <a href="#" @click.prevent='nextPost'>
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
           <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
         </svg>
       </a>
   </div> 
</template>
<script>
	export default {
		name: 'pagination',
		props: ['prevPost', 'nextPost']
	}
</script>
<style lang='scss'>
	.blog-single {
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
		  z-index: 7;
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
		  svg {
		    width: 18px;
		    height: 18px;
		    fill: $white;
		    position: relative;
		    top: 2px;
		    &:hover {
		      fill: $accent;
		    }
		  }
		}
	}
</style>