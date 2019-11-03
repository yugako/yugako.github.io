<template>
    <div class="toolbar-opener" :class='{"menu-active": IsMenuOpened}' >
        <!-- <i v-if='!IsMenuOpened' class="fas fa-bars"></i>
        <i v-else class="fas fa-times"></i> -->
        <input type="checkbox" @click='menuOpen' checked='true' id="checkbox2" class="checkbox2 visuallyHidden">
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
		        padding-left: 75px;
		    }
	  	}
	  	&-opener {
	      	display: none;
	      	position: fixed;
	      	background-color: rgba($dark, .4);
	      	width: 40px;
	      	height: 40px;
	      	top: 0;
	      	left: 0px;
	      	color: $white;
	      	font-size: 2rem;
	      	text-align: center;
	      	z-index: 99;
	      	border-radius: 50%;
	      	&.menu-active {
	          	left: 75px;
	          	border-radius: 0%;
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
	      	    margin-top: 5px;
	      	    width: 30px;
	      	    height: 30px;
	      	    position: relative;
	      	    .bar {
	      	    	padding: 0;
	      	    	width: 30px;
	      	    	height: 4px;
	      	    	background-color: $accent;
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
		      	    top: 13.5px;
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