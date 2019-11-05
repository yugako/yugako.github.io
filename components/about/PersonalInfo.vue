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
						<i class="fas fa-map-marked-alt"></i> Lviv, Ukraine
					</div>
					<div class="about-person__descr">
						<p>
							Hello! I’m George Gasyuk a self-taught & hard-working Frontend & Wordpress Developer with over 2 years work experience. I started in my children’s room, got pro at renowned digital agencies akij co and nork blue lebel. Now I’m based in USA, America, working for Apple fredmansky and enjoying the life in the countryside. 
						</p>
						<p>
							I have couple of hobbies but I like to travel. I have already travelled almost all the districts of our country with my father. I am fond of fruit. 
						</p>
					</div>
 				</div>
 			</div>
 			<div class="row align-items-center justify-content-center mt-sm-0 mt-md-4">
 				<div class="column col-12 col-sm-6 col-lg-3" v-for='feature in features' :key='feature.title'>
 					<div class="about-person__feature">
 						<i :class="feature.icon"></i>
                 		<div class="about-person__feature-desc">
							<h6>{{feature.title}}</h6>
                        	<p>{{feature.description}}</p>
                        </div>
 					</div>
 				</div>
 				<div class="column col-12 col-sm-6 col-lg-3">
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
        	return {
        		features: [
        			{
        				icon: 'fas fa-award',
        				title: '2+ Years Job',
        				description: 'Experience'
        			},
        			{
        				icon: 'fas fa-certificate',
        				title: '500+ Projects',
        				description: 'Completed'
        			},
        			{
        				icon: 'fas fa-user-astronaut',
        				title: 'Freelance',
        				description: 'Available'
        			}
        		]
        	}
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
					// @include md-size-max {
					// 	width: 300px;
					// 	height: 300px;
					// 	margin: auto;
					// 	display: block;
					// 	margin-bottom: 30px;
					// }
					@include sm-size-max {
						width: 200px;
						height: 200px;
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