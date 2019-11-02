<template>
	<div class="socials">
		<ul class='socials-list'>
			<li class='socials-list__item' :key='social.link' v-for='social in socials'>
				<a :href="social.link" class='socials-list__link'>
					<i :class='social.icon'></i>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'socials',
		data() {
			return {
				socials: [
					{
						link: '#',
						icon: 'fab fa-facebook-f',
					},
					{
						link: '#',
						icon: 'fab fa-linkedin-in',
					},
					{
						link: '#',
						icon: 'fab fa-github',
					},
					{
						link: '#',
						icon: 'fab fa-telegram',
					},
					{
						link: '#',
						icon: 'fas fa-envelope',
					}
				]
			}
		}
	}
</script>
<style lang='scss'>
	.socials {
		&-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			&__item {
				margin-bottom: 15px;
			}
			&__link {
				color: $white;
				&:hover {
					color: $accent;
				}
			}
		}
	}
</style>