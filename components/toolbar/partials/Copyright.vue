<template>
	<div class="copyright">
		Made with 
		<div class="copyright-icons">
			<svg 
			aria-hidden="true" 
			focusable="false" 
			data-prefix="fas" 
			data-icon="heart" 
			class="svg-inline--fa fa-heart fa-w-16" 
			role="img" 
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 512 512">
			<path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
			</svg>

			<span>&amp;</span>

			<a href="https://vuejs.org/">
				<svg 
					aria-hidden="true" 
					focusable="false" 
					data-prefix="fab" 
					data-icon="vuejs" 
					class="svg-inline--fa fa-vuejs fa-w-14" 
					role="img" 
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 448 512">
					<path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path>
				</svg>
			</a>
			
		</div>
		
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
		&-icons {
			display: flex;
			align-items: center;
			justify-content: space-between;
			svg {
				width: 18px;
				height: 18px;
				fill: $white;
			}
			a {
				line-height: 0;
			}
			.fa-vuejs {
				&:hover {
					fill: green;
				}
			}
			.fa-heart {
				&:hover {
					fill: darkred;
				}
			}
		}
		
	}
</style>