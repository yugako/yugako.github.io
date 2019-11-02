<template>
	<div class="about-interests">
 		<div class="container">
 			<div class="row">
 				<div class="col-12 col-sm-6 col-lg-4" v-for='interest in interests' :key='interest.title'>
 					<div class="about-interests__item">
     					<i :class="interest.icon"></i>
                	 	<div class="about-interests__desc">
							<h6>{{interest.title}}</h6>
           	        	</div>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
</template>
<script>
	export default {
		name: 'interests',
		data() {
			return {
				interests: [
					{
						icon: 'fas fa-music',
						title: 'Music'
					},
					{
						icon: 'fas fa-route',
						title: 'Travelling'
					},
					{
						icon: 'fas fa-film',
						title: 'Movies'
					},
					{
						icon: 'fas fa-table-tennis',
						title: 'Table tennis'
					},
					{
						icon: 'fas fa-book',
						title: 'Books'
					},
					{
						icon: 'fas fa-gamepad',
						title: 'Video games'
					},
				]
			}
		}
	}
</script>
<style lang='scss'>
	.about {
		&-interests {
			position: relative;
			padding: 30px;
			background-color: #070708;
			-webkit-transition: all .3s ease-in-out;
			transition: all .3s ease-in-out;
			border-radius: 10px;
			margin-top: 110px;
			margin-bottom: 105px;
			&__item {
				position: relative;
				background: #0e0f10;
				padding: 15px;
				-webkit-transition: all .3s ease-in-out;
				transition: all .3s ease-in-out;
				display: flex;
				align-items: center;
				border-radius: 10px;
				margin-bottom: 20px;
				&:hover {
					background-color: transparent;
				}
			}
			i {
				position: relative;
				width: 30px;
				float: left;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $accent;
				font-size: 20px;
				margin-right: 30px;
			}
			&__desc {

				h6 {
					font-size: 15px;
					font-weight: 100;
					line-height: 15px;
					color: $white;
				}
				
			}
		}
	}
</style>