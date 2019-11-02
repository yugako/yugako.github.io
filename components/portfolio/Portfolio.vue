<template>
	<transition name='slide-fade'>
		<section class="portfolio" :class='{expanded: Expanded}'>
			<div class="portfolio-header">
				<h2 class="portfolio-title">Portfolio</h2>
			</div>
			
			<div class="portfolio-filter">
				<ul class="portfolio-filter__list">
				  <li 
				  	class="portfolio-filter__item" 
				  	v-for='filter in worksCat' 
				  	:key='filter.name' 
				  	:class='{active: filter.param === activeName}' 
				  	@click='filterWorks(filter.param)'
				  	>{{filter.name}}
				  </li>
				</ul>
				<!-- /.portfilio-filter__list -->
			 </div>
			  <!-- /.portfolio-filter -->
			<transition-group class='row' name='slide-fade' tag='div'>
				<div 
					class='col-12' 
					:class='{"col-12 col-md-6 col-lg-3": Expanded}' 
					v-for='work in filtered' 
					:key='work.id'
				>
					<div class="portfolio-item-wrapper">
						<div class="portfolio-item" :style="{'background-image': `url(${work.img})`}">
						    <div class="portfolio-item__links">
								<span title="Show details" @click.prevent='showDetails(work)' class="portfolio-item__link">
								 Details
								</span>
								<a title="Go to demo" :href="work.url" class="portfolio-item__link">
								 Source
								</a>
							</div>
						</div>
					</div>
					
				</div>
			</transition-group>
		  	<div class="none" v-if='filtered.length === 0'>Works not found!</div>
		  	<Popup 
				:data='popupData'
				v-if='isPopupOpened' 
			/>
		</section>
		<!-- /.portfolio-works -->
	</transition>
	
	 
</template>
<script>
	import Popup from '../elements/Popup';
	export default {
		name: 'portfolioWorks',
		created() {
			this.filtered = this.works;
		},
		mounted() {
			this.readFromRealtimeDb();
		},
	  	data () {
			return {
				activeName: '',
				works: [],
				filtered: [],
				worksCat: [
					{
						name: 'All',
						param: '',
					},
					{
						name: 'Sites',
						param: 'sites',
					},
					{
						name: 'Personal Projects',
						param: 'personal',
					}
				],
				expanded: false,
				infoPopupData: '',
				
			}
	 	},
	 	// firestore () {
		 // 	return {
		 //   		works: this.$fireStore.collection('works').orderBy('createdAt')
		 // 	}
	  // 	},
	  	
	  	methods: {
			filterWorks(cat) {
		  		this.filtered = [];
		  		if(cat) {
					this.clearActive();

					this.filtered = this.works.filter(item => item.cat === cat);

					cat == 'sites' ? this.activeName = 'sites' : this.activeName = 'personal';
		  		} else {
					this.clearActive();
					this.filtered = this.works;
					this.activeName = '';
		  		}
			},
			clearActive() {
		  		this.activeName = false;
			},
			showDetails(info) {
				this.$store.commit('setPopupData', info);
				this.$store.commit('isOpened');
			},
			async readFromRealtimeDb() {
			     const messageRef = this.$fireDb.ref('works')
			     try {
			       const snapshot = await messageRef.once('value')
			       alert(snapshot.val().message)
			     } catch (e) {
			       alert(e)
			       return
			     }
			   }
	  	},
	  	computed: {
			Expanded() {
				return this.$store.getters.Expanded;
			},
			isPopupOpened() {
				return this.$store.getters.PopupOpened;
			},
			popupData() {
				return this.$store.getters.PopupData;
			}
		},
  	   	
  		components: {Popup}
	}
</script>
<style lang='scss'>
	.portfolio {
		background-color: rgba($dark, 0.7);
		height: 100vh;
		// display: none;
		opacity: 0;
		color: $white;
		padding: 40px;
		overflow-y: auto;
	
		&.expanded {
			flex: 0 0 100%;
			max-width: 100%;
			// padding-left: 140px;
			display: block;
			opacity: 1;
			// @include sm-size-max {
			// 	padding-left: 100px;
			// }
		}
		&-title {
			color: $accent;
			font-size: 1.875rem;
			margin-bottom: 40px;
			&::after {
				content: '';
				width: 10%;
				height: 4px;
				background-color: $light;
				display: block;
			}
		}
		&-item {
			width: 100%;
			padding-top: 75%;
			background-size: cover;
			margin-bottom: 20px;
			background-position: center;
			filter: grayscale(1);
			overflow: hidden;

			&__links {
				position: absolute;
				bottom: -50px;
				left: 0;
				background-color: $dark;
				color: $accent;
				width: 100%;
				padding: 7px 15px;
				display: flex;
				justify-content: space-between;
				cursor: pointer;
				a {
					color: inherit;
					text-decoration: none;
					&:hover {
						color: $white;
					}
				}
				@include md-size-max {
					bottom: 0;
				}

			}
			&-wrapper {
				overflow: hidden;
			}
			$links: &;
			&:hover {
				filter: grayscale(0);
				transform: scale(1.1);
				#{$links}__links {
					bottom: 0;
					transition-delay: 0.4s;
				}

			}
		}
		&-filter {
			&__list {
				display: flex;
				margin-bottom: 50px;
			}
			&__item {
				margin-right: 20px;
				&:hover {
					cursor: pointer;
				}
				
				&.active {
					color: $accent;
				}
			}
		}
	}
</style>
