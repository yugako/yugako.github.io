<template>
	<div class="about-services">
		<div class="row">
			<div class="col col-12 col-md-6" v-for='service in services' :key='service.title'>
				<div class="about-services__item">
					<i :class="service.icon"></i>
					<h4 class="about-services__item-title">{{service.title}}</h4>
					<p class="about-services__item-descr">{{service.excerpt}}</p>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
	export default {
		name: 'services',
		data() {
			return {
				services: [
					{
						icon: 'fab fa-vuejs',
						image: '',
						title: 'Build Single-Page Application',
						excerpt: 'You`ve saw many times these cool sites which don`t reload after going to another page? It`s a SPA? Do you want the same? Just write me.',
						describe: 'You`ve saw many times these cool sites which don`t reload after going to another page? It`s a SPA? Do you want the same? Just write me.',
					},
					{
						icon: 'fab fa-wordpress',
						image: '',
						title: 'WordPress Theme developing',
						excerpt: 'You have a website, but you don`t imagine how change content? So, in this case, you need a content management system and I`ll help you with it',
						describe: 'Writers and stars of Veep have res ponded incredulously to the news an Australian politician required stitches after knocking himself unconscious.',
					},

					{
						icon: 'fas fa-object-ungroup',
						title: 'Creating sites from exsisting design',
						excerpt: 'Do you have a design and you don`t know how make it alive? I can help you with this problem.',
						describe: 'Writers and stars of Veep have res ponded incredulously to the news an Australian politician required stitches after knocking himself unconscious.',
					},
					
					{
						icon: 'fas fa-cogs',
						image: '',
						title: 'Search Engine Optimization',
						excerpt: 'Would you like to see your website on the first position in search results? You are in the right place :)',
						describe: 'Writers and stars of Veep have res ponded incredulously to the news an Australian politician required stitches after knocking himself unconscious.',
					},
					{
						icon: 'fas fa-medkit',
						title: 'Quick Support',
						excerpt: 'Do you have a design and you don`t know how make it alive? I can help you with this problem.',
						description: 'Lorem Ipsum is simply dummy text of the Lorem has been the industry`s standard dummy text ever.',
					},
				]
			}
		}
	}
</script>
<style lang='scss'>
	.about {
		&-services {
			margin-top: 110px;
			margin-bottom: 105px;
			@include md-size-max {
			  	margin-top: 80px;
			  	margin-bottom: 60px;
			}
			@include sm-size-max {
			  	margin-top: 80px;
			  	margin-bottom: 40px;
			}
			.col:last-child {
				margin-left: 25%;
				@include xs-size-max {
					margin-left: 0;
				}
			} 
			&__item {
				text-align: center;
				position: relative;
				padding: 30px;
				background-color: #070708;
				-webkit-transition: all .3s ease-in-out;
				transition: all .3s ease-in-out;
				border-radius: 10px;
				margin-bottom: 20px;
				i {
					position: relative;
					width: 70px;
					height: 70px;
					font-size: 25px;
					line-height: 70px;
					color: $white;
					background-color: #0e0f10;
					-webkit-border-radius: 50%;
					border-radius: 50%;
					text-align: center;
					&:hover {
						&::after {
							content: '';
							position: absolute;
							width: 60px;
							height: 60px;
							top: 5px;
							left: calc(50% - 30px);
							-webkit-border-radius: 100%;
							border-radius: 100%;
							border: 1px solid $accent;
							-webkit-animation: zoomIn .3s ease;
							animation: zoomIn .3s ease;
						}
					}
				}

				&-title {
					padding-top: 20px;
					padding-bottom: 20px;
					color: $white;
				}

				&-descr {
					color: $white;
				}
			}
			

			@keyframes zoomIn {
				from {
					opacity: 0;
					-webkit-transform: scale3d(0.3, 0.3, 0.3);
							transform: scale3d(0.3, 0.3, 0.3);
				}
				50% {
					opacity: 1;
				}
			}
		}
	}
</style>