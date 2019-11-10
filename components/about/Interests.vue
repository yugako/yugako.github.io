<template>
	<div class="about-interests">
		<div class="row-wrapper">
			<!-- <div class="cl-12 cl-sm-6 cl-lg-4" v-for='interest in interests' :key='interest.title'>
				<div class="about-interests__item">
					<i :class="interest.icon"></i>
        	 	<div class="about-interests__desc">
					<h6>{{interest.title}}</h6>
   	        	</div>
				</div>
			</div> -->
			<div class="cl-12 cl-sm-6 cl-lg-4">
				<div class="about-interests__item">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music" class="svg-inline--fa fa-music fa-w-16" role="img"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
					</svg>
	        	 	<div class="about-interests__desc">
						<h6>Music</h6>
	   	        	</div>
				</div>
			</div>
			<div class="cl-12 cl-sm-6 cl-lg-4">
				<div class="about-interests__item">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="route" class="svg-inline--fa fa-route fa-w-16" role="img"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
					</svg>
	        	 	<div class="about-interests__desc">
						<h6>Travelling</h6>
	   	        	</div>
				</div>
			</div>
			<div class="cl-12 cl-sm-6 cl-lg-4">
				<div class="about-interests__item">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="film" class="svg-inline--fa fa-film fa-w-16" role="img"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
					</svg>
	        	 	<div class="about-interests__desc">
						<h6>Movies</h6>
	   	        	</div>
				</div>
			</div>
			<div class="cl-12 cl-sm-6 cl-lg-4">
				<div class="about-interests__item">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table-tennis" class="svg-inline--fa fa-table-tennis fa-w-16" role="img"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M496.2 296.5C527.7 218.7 512 126.2 449 63.1 365.1-21 229-21 145.1 63.1l-56 56.1 211.5 211.5c46.1-62.1 131.5-77.4 195.6-34.2zm-217.9 79.7L57.9 155.9c-27.3 45.3-21.7 105 17.3 144.1l34.5 34.6L6.7 424c-8.6 7.5-9.1 20.7-1 28.8l53.4 53.5c8 8.1 21.2 7.6 28.7-1L177.1 402l35.7 35.7c19.7 19.7 44.6 30.5 70.3 33.3-7.1-17-11-35.6-11-55.1-.1-13.8 2.5-27 6.2-39.7zM416 320c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path>
					</svg>
	        	 	<div class="about-interests__desc">
						<h6>Table tennis</h6>
	   	        	</div>
				</div>
			</div>
			<div class="cl-12 cl-sm-6 cl-lg-4">
				<div class="about-interests__item">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" class="svg-inline--fa fa-book fa-w-14" role="img"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
					</svg>
	        	 	<div class="about-interests__desc">
						<h6>Books</h6>
	   	        	</div>
				</div>
			</div>
			<div class="cl-12 cl-sm-6 cl-lg-4">
				<div class="about-interests__item">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" class="svg-inline--fa fa-gamepad fa-w-20" role="img"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
						<path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path>
					</svg>
	        	 	<div class="about-interests__desc">
						<h6>Video games</h6>
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
			return {}
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
			@include md-size-max {
			  	margin-top: 80px;
			  	margin-bottom: 40px;
			  }
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
				svg {
					width: 18px;
					height: 18px;
					fill: $accent;
					margin-right: 30px;
				}
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