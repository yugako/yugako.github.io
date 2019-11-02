<template>
	<transition name='slide-fade'>
		<div class="popup">
			<div class="popup__content">
				<h2>{{data.title}}</h2>
				<div class='popup__content-descr' v-html='data.describe'></div>
			</div>
			<span @click='closePopup' class="popup__close">&times;</span>
		</div>
	</transition>
</template>
<script>
	export default {
		name: 'popup',
		props: ['data'],
		data() {
			return {

			}
		},
		methods: {
			closePopup() {
				this.$store.commit('isOpened');
			}
		}
		
	}
</script>
<style lang="scss">
	.popup {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $dark;
		color: $white;
		z-index: 99999;
		opacity: 1;
		&__close {
			position: absolute;
			top: 30px;
			right: 30px;
			font-size: 5rem;
			color: $white;
			cursor: pointer;
			line-height: 1rem;
			&:hover {
				color: $accent;
			}
		}
		&__content {
			max-width: 75vw;
			margin: auto;
			text-align: center;
			&-descr {
				text-align: justify;
				ul {
				margin-top: 15px;
				margin-bottom: 15px;
				li {
					line-height: 2rem;
					color: $text-color;
					&::before {
						content: '';
						width: 15px;
						height: 15px;
						background-color: $accent;
						border-radius: 50%;
						margin-right: 10px;
						display: inline-block;
					}
					
				}
			}
			}
		}
	}
</style>