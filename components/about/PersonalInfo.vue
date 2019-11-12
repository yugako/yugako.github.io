<template>
 	<div class="about-person">
 		<div class="row align-items-center">
 				<div class="col-12 col-md-4 col-xl-3">
 					<div class="about-person__photo">
 						<img class="img-fluid" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/70062120_1080218812148837_2300144141662683136_n.jpg?_nc_cat=108&_nc_oc=AQmra2Tc2a1ySBn85D1c8Rlugyin-5yryJKqudTt_roxfc6WGB5YnrUp0la1Ga6lNzU&_nc_ht=scontent.flwo3-1.fna&oh=21740a93001b7821c4b560998b3c56ed&oe=5E216312" alt='GG'>
 					</div>
 				</div>
 				<div class="col-12 col-md-8 col-xl-9">
 					<h4 class="about-person__name">
 						George Gasyuk
 					</h4>
 					<div class="about-person__loc">
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" class="svg-inline--fa fa-map-marked-alt fa-w-18" role="img"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
							<path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
						</svg> 
						Lviv, Ukraine
					</div>
					<div class="about-person__descr">
						<p>
							Hello! I’m George Gasyuk a self-taught & hard-working Frontend & Wordpress Developer with over 2 years work experience. I started in my children’s room, got pro at renowned digital agencies akij co and nork blue lebel. Now I’m based in USA, America, working for Apple fredmansky and enjoying the life in the countryside. 
						</p>
						<p>
							I have couple of hobbies but I like to travel. I have already travelled almost all the districts of our country with my father. I am fond of fruit. 
						</p>
					</div>
					<g-button external='#' text='Download CV' />
 				</div>
 			</div>
 	</div>
</template>
<script>
	import GButton from '@/components/elements/GButton';

    export default {
        name: 'about',
        data() {
        	return {}
        },
        components: {
          GButton
        }
    }
</script>
<style lang='scss'>
	.about {
		&-person {
			position: relative;
			padding: 30px;
			background-color: #070708;
			-webkit-transition: all .3s ease-in-out;
			transition: all .3s ease-in-out;
			border-radius: 10px;
			margin-bottom: 105px;
			@include md-size-max {
				margin-bottom: 40px;
				padding-bottom: 40px;
				.column {
					margin-top: 20px;
					@include sm-size-max {
						&:first-child {
							margin-top: 0;
						}
					}
				}
			}
			
			&__photo {
				img {
					border-radius: 50%;
					object-fit: cover;
					object-position: center;
			
					@include sm-size-max {
						width: 150px;
						height: 150px;
						display: block;
						margin: auto;
						margin-bottom: 20px;
					}
				}
				
			}
			&__name {
				font-size: 1.125rem;
				color: $white;
				@include lg-size-max {
					text-align: center;
				}
			}
			&__descr {
				p {
					line-height: 1.5rem;
					text-align: justify;
					color: $white;
					margin-bottom: 1rem;

				}
			}
			&__loc {
				font-size: 0.75rem;
				color: $white;
				padding-top: 15px;
				padding-bottom: 15px;
				color: $accent;
				svg {
					fill: $accent;
					width: 14px;
					height: 14px;
				}
				@include lg-size-max {
					text-align: center;
				}
			}
			&__feature {
				display: flex;

				i {
					display: flex;
				    float: left;
				    width: 45px;
				    height: 45px;
				    align-items: center;
				    justify-content: center;
				    color: #fff;
					background: #0e0f10;
					font-size: 20px;
					-webkit-border-radius: 100%;
					border-radius: 100%;
					border: 1px solid $white;
					margin-right: 15px;
				}
				&-desc {
					padding-left: 15px;
					padding-top: 5px;
					color: $white;
					h6 {
						font-size: 15px;
					    font-weight: 400;
					    line-height: 15px;
					}
					p {
						font-size: 12px;
						line-height: 21px;
						color: $accent;
					}
				}
			}
		}
	}
</style>