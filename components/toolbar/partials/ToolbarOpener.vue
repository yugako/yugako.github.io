<template>
    <div class="toolbar-opener" :class='{"menu-active": IsMenuOpened}' @click='menuOpen'>
        <i v-if='!IsMenuOpened' class="fas fa-bars"></i>
        <i v-else class="fas fa-times"></i>
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
	      	height: 50px;
	      	top: 0;
	      	left: 0px;
	      	color: $white;
	      	font-size: 2rem;
	      	text-align: center;
	      	z-index: 99;
	      	&.menu-active {
	          	left: 75px;
	      	}
	      	@include sm-size-max {
	          	display: block;
	      	}
	  	}
	}
</style>