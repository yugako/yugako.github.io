<template>
	<div class="copyright">
		Made with <br>
		<i class="fas fa-heart"></i>
		&amp;
		<i class="fab fa-vuejs"></i> 
	</div>
</template>
<script>
	export default {
		name: 'copyright',
	}
</script>
<style lang='scss'>
	.copyright {
		color: $white;
		text-align: center;
		.fa-vuejs {
			&:hover {
				color: green;
			}
		}
		.fa-heart {
			&:hover {
				color: darkred;
			}
		}
	}
</style>