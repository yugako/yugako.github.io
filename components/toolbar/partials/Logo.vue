<template>
	<div class='site-logo'>
		<nuxt-link exact to="/">
    		GG
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
		width: 70%;
		height: 70%;
		max-width: 70px;
		max-height: 70px;
		color: $accent;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		font-weight: bold;
		font-size: 2rem;
		align-self: flex-start;
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