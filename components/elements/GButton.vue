<template>
	<div>
		<nuxt-link v-if='link'  class="g-button" :to="link">
	    	{{text}}
	    </nuxt-link>
	    <a v-else :href="external" class="g-button">{{text}}</a> 
	</div>
	
</template>
<script>
	export default {
		name: 'gButton',
		props: ['link', 'text', 'external'],
		data() {
			return {
				
			}
		}
	}
</script>
<style lang='scss'>
	.g-button {
		font-size: 1rem;
		text-decoration: none;
		color: $white;
		position: relative;
		padding: 5px 10px;
		z-index: 3;
		&::after {
			content: '';
			width: 100%;
			height: 3px;
			background-color: $accent;
			position: absolute;
			bottom: -5px;
			left: 0;
			-webkit-transition: all .3s ease-in-out;
			transition: all .3s ease-in-out;
			z-index: -1;

		}
		&::before {
			content: '';
			position: absolute;
			width: 40%;
			height: 100%;
			top: 0;
			left: -15%;
			background: #0e0f10;
			padding: 0px;
			-webkit-border-radius: 10px;
			border-radius: 10px;
			z-index: -1;
			-webkit-transition: all .3s ease-in-out;
			transition: all .3s ease-in-out;
		}
		&:hover {
			&::after {
				content: '';
				width: 3px;
				height: 100%;
				background-color: $accent;
				position: absolute;
				bottom: 0px;
				left: 0;
				-webkit-transition: all .3s ease-in-out;
				transition: all .3s ease-in-out;

			}
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0%;
			left: 0%;
			background: #0e0f10;
			padding: 0px;
			border-radius: 0px;
			z-index: -1;
			-webkit-transition: all .3s ease-in-out;
			transition: all .3s ease-in-out;
		}
		}
	}
</style>