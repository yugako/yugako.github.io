<template>
    <div class="about">
    	<div class="container">
    		<!-- About person -->
	     	<g-title class='about-title' text='About' />
	     	<personal-info />

	     	<!-- About person interests -->
	     	<g-title class='about-title' text='My interests' />
	     	<interests />

	     	<!-- Services	 -->
	     	<g-title class='about-title' text='My services' />
	     	<services />
    	</div>
     	
    </div>
</template>

<script>
	import GTitle from '@/components/elements/GTitle';
	import GButton from '@/components/elements/GButton';

	import PersonalInfo from '@/components/about/PersonalInfo';
	import Interests from '@/components/about/Interests';
	import Services from '@/components/about/Services';
    export default {
        name: 'about',
        components: {
          GTitle, GButton, PersonalInfo, Interests, Services
        },
        head: {
	      title: 'About',
	      meta: [
	        { hid: 'description', name: 'description', content: 'About page description' }
	      ],
	    },
    }
</script>
<style lang='scss'>
	.about {
		background-color: #0e0f10;
		font-family: $secondary-font;

		&-title:first-child {
		  margin-top: 60px;
		  margin-bottom: 110px;
		  @include md-size-max {
		  	margin-top: 40px;
		  	margin-bottom: 80px;
		  }
		}

	
		
		
	}
</style>