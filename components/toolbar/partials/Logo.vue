<template>
	<div class='site-logo'>
		<nuxt-link exact to="/">
    		<img src="@/assets/img/logo.png">
    	</nuxt-link> 
	</div>
</template>
<script>
	export default {
		name: 'logo',
		data() {
			return {

			}
		}
	}
</script>
<style lang='scss'>
	.site-logo {
		display: block;
		img {
			max-width: 70px;
			max-height: 70px;
		}
		
		a {
			color: $accent;
			text-decoration: none;
			&:first-letter {
				color: $white;

			}
			&:hover {
				color: $white;
				&:first-letter {
					color: $accent;
				}
			}
		}
	}
</style>