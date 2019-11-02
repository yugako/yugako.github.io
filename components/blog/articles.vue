<template>
	<div class="container">
		<div class="row">
			<div class="col-12 col-sm-6 col-lg-4" v-for='article in blogPosts' :key='article.title'>
				<article class="article">
				 	<!-- <div class="article-img" :style="{backgroundImage: `url(${navItem.fields.image.fields.file.url})`}"></div> -->

				 	<h4 class="article-title">
				 		<nuxt-link 
				 			:to="'/blog/' + article.slug" 
				 			role="menuitem"
				 		>
				 			{{article.title}}
				 		</nuxt-link>
				 	</h4>
			      	
				    <g-button 
				      	:link="'/blog/' + article.slug"
				      	text='Read More'
				      	role="menuitem"
				    />
			    </article>
			</div>	
		</div>
	</div>
	
   
</template>

<script>
	import GButton from '@/components/elements/GButton.vue';
    export default {
        name: 'articles',
        props: ['pages'],
        components: {
        	GButton
        },
         computed: {
		    blogPosts() {
		      return this.$store.state.blogPosts;
		    },
		},
    }
</script>
<style lang="scss">
	.article {
		position: relative;
		padding: 0 20px 20px;
		margin-bottom: 50px;
		background-color: rgba(0, 0, 0, .5);
		-webkit-transition: all .3s ease-in-out;
		transition: all .3s ease-in-out;
		border-radius: 10px;
		text-align: center;
		a {
		    color: $white;
		    text-decoration: none;
		    -webkit-transition: all .3s ease-in-out;
		    transition: all .3s ease-in-out;
		}
		&-img {
			padding-top: 70%;
			background-size: cover;
			background-position: center;
			position: relative;
			overflow: hidden;
			margin: 0 -20px;
			border-radius: 10px 10px 0 0;
		}
		&-title {
			font-weight: 600;
			text-align: center;
			text-transform: uppercase;
			margin: 30px -20px;
			padding-bottom: 30px;
			border-bottom: 4px solid #0e0f10;
		}
	}
</style>