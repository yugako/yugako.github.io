<template>
	<transition name='slide-fade'>	
		<section class="toolbar">
			<Logo />
			<toolbar-menu />
			<Socials />
			<Copyright />
		</section>
	</transition>
</template>
<script>
	import Logo from './partials/Logo';
	import ToolbarMenu from './partials/ToolbarMenu';
	import Socials from './partials/Socials';
	import Copyright from './partials/Copyright';
	
	export default {
		name: 'toolbar',
		components: {
			Logo, ToolbarMenu, Socials, Copyright
		}
	}
</script>
<style lang='scss'>
	.toolbar {
		max-width: 100px;
		flex: 0 0 100px;
		width: 100%;
		background-color: rgba($dark, .4);
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 15px;
		padding-bottom: 15px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		overflow-y: auto;
		z-index: 10;
		
		@include sm-size-max {
			max-width: 75px;
			flex: 0 0 75px;
		}
	}
</style>