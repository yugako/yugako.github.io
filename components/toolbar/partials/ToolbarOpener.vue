<template>
    <div class="toolbar-opener" :class='{"menu-active": IsMenuOpened}' >
        <input type="checkbox" @click='menuOpen' v-model='checked' id="checkbox2" class="checkbox2 visuallyHidden">
        <label for="checkbox2">
            <div class="hamburger hamburger2">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
            </div>
        </label>
    </div>
</template>
<script>
	export default {
		name: 'toolbarOpener',
		data() {
			return {
				checked: true
			}
		},
		methods: {
	        menuOpen () {
	            this.$store.commit('isMenuOpened');
	        }
	    },
	    computed: {
	        IsMenuOpened () {
	            return this.$store.getters.MenuOpened;
	        },
	        IsToolbar () {
	            return this.$store.getters.MenuOpened;
	        }
	    }
	}
</script>
<style lang='scss'>
	.toolbar {
	  	&-active {
	  		padding-left: 100px;
	  		@include sm-size-max {
	  			position: relative;
	  			padding-left: 0;
		      	&::before {
		      		content: '';
		      		position: absolute;
		      		top: 0;
		      		left: 0;
		      		width: 100%;
		      		height: 100%;
		      		background-color: rgba($dark, 0.6);
		      		z-index: 8;

		      	}
	  		}
	  		
	  	}
	  	&-opener {
	      	display: none;
	      	position: fixed;
	      	background-color: $dark;
	      	width: 80px;
	      	height: 80px;
	      	top: -40px;
	      	left: -40px;
	      	color: $white;
	      	border: 2px solid $white;
	      	font-size: 2rem;
	      	text-align: center;
	      	z-index: 99;
	      	border-radius: 50%;
	      	z-index: 9;
	      	$m: &;
	      	&.menu-active {
	          	left: 40px;
	          	border-radius: 0%;
	          	border-bottom-right-radius: 50%;
	     		.hamburger {
	     			right: 15px;
	     		}
	         	
	      	}
	      	@include sm-size-max {
	          	display: block;

	      	}

	      	/* GENERAL STYLES FOR HAMBURGER */
	      	.visuallyHidden {
	      	    position: absolute; 
	      	    overflow: hidden; 
	      	    clip: rect(0 0 0 0); 
	      	    height: 1px; width: 1px; 
	      	    margin: -1px; padding: 0; border: 0; 
	      	}

	      	.hamburger {
	      	    margin: 0 auto;
	      	    margin-top: 10px;
	      	    width: 20px;
	      	    height: 19px;
	      	    position: absolute;
	      	    bottom: 13px;
	      	    right: 13px;

	      	    .bar {
	      	    	padding: 0;
	      	    	width: 20px;
	      	    	height: 3px;
	      	    	background-color: $white;
	      	    	display: block;
	      	    	border-radius: 4px;
	      	    	transition: all 0.4s ease-in-out;
	      	    	position: absolute; 
	      	    }
		      	.bar1 {
		      	    top: 0;
		      	}

		      	.bar2,
		      	.bar3 {
		      	    top: 8px;
		      	}

		      	.bar3 {
		      	    right: 0;
		      	}

		      	.bar4 {
		      	    bottom: 0;
		      	}
	      	}
	      	/* HAMBURGER 2 */

	      	.checkbox2:checked + label > .hamburger2 > .bar1{
	      	    transform: translateX(40px);
	      	    background-color: transparent;
	      	}

	      	.checkbox2:checked + label > .hamburger2 > .bar2{
	      	    transform: rotate(45deg);
	      	}

	      	.checkbox2:checked + label > .hamburger2 > .bar3{
	      	    transform: rotate(-45deg);
	      	}

	      	.checkbox2:checked + label > .hamburger2 > .bar4{
	      	    transform: translateX(-40px);
	      	    background-color: transparent;
	      	}
	  	}
	}
</style>