<template>
	<nav class='toolbar-menu'> 
		<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/blog">
    		Latest News
    	</nuxt-link> 
	</nav>
</template>
<script>
	export default {
		name: 'toolbar-menu',
		data() {
			return {

			}
		}
	}
</script>
<style lang='scss'>
	.toolbar-menu {
		&__link {
			color: $white;
			transform: rotateZ(-90deg);
			display: block;
			text-decoration: none;
			&:hover {
				color: $accent;
			}
			&.link-active {
				color: $accent;
			}
		}
		@media (max-height: 500px) {
			margin-bottom: 30px;
		}
	}
</style>