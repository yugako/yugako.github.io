<template>
  <section class="home" v-if='!Expanded'>
    <div class="home-content">
      <h1 class="home-content__title glitch" data-text='George Gasyuk'>George Gasyuk</h1>
      
      <vue-typed-js :typeSpeed="100" :cursorChar="'_'" :showCursor="true" :strings="['Frontend', 'WordPress', 'Frontend & Wordpress Developer']">
        <p class="home-content__subtitle">I'm <span class="typing"></span></p>
      </vue-typed-js>

      <g-button link='/about' text='Want to know more?' />
    </div>
  </section>
</template>

<script>
import GButton from '@/components/elements/GButton.vue';

export default {
    name: '',
    head() {
      return {
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      };
    },
    data() {
      return {
        
      }
    },
    components: {
      GButton
    },
    computed: {
      Expanded() {
        return this.$store.getters.Expanded;
      }
    },
  }
</script>

<style lang='scss'>
  .home {
    // display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
  }
  .home-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__title {
      font-size: 5rem;
      color: $white;
      text-align: center;
      @include md-size-max {
        font-size: 4rem;
      }
      @include sm-size-max {
        font-size: 3rem;
      }
      @include xs-size-max {
        font-size: 2.5rem;
      }
      
    }
    &__subtitle {
      font-size: 3rem;
      color: $white;
      text-align: center;
      margin-bottom: 1rem;
      @include md-size-max {
        font-size: 2.5rem;
      }
      @include sm-size-max {
        font-size: 2rem;
      }
      @include xs-size-max {
        font-size: 1.5rem;
      }
    }
    @include sm-size-max {
        padding-left: 15px;
        padding-right: 15px;
    }
  }
  // Here's the meat and potatoes.

  /* Our mixin positions a copy of our text
  directly on our existing text, while
  also setting content to the appropriate
  text set in the data-text attribute. */
  @mixin glitchCopy { 
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }

  .glitch {
    position: relative;
    color: white;
    // letter-spacing: .5em;
    /* Animation provies a slight random skew. Check bottom of doc
    for more information on how to random skew. */
    animation: glitch-skew 1s infinite linear alternate-reverse;
    
    // Creates a copy before our text. 
    &::before{
      // Duplicates our text with the mixin.
      @include glitchCopy;
      // Scoots text slightly to the left for the color offset.
      left: 2px;
      // Creates the color 'shadow' that happens on the glitch.
      text-shadow: -2px 0 #ff00c1;
      /* Creates an initial clip for our glitch. This works in
      a typical top,right,bottom,left fashion and creates a mask
      to only show a certain part of the glitch at a time. */
      clip: rect(44px, 450px, 56px, 0);
      /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
      with an alternating animation to keep things fresh. */
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    // Creates a copy after our text. Note comments from ::before.
    &::after {
      @include glitchCopy;
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      animation: glitch-anim2 1s infinite linear alternate-reverse;
    }
  }

  /* Creates an animation with 20 steaps. For each step, it calculates 
  a percentage for the specific step. It then generates a random clip
  box to be used for the random glitch effect. Also adds a very subtle
  skew to change the 'thickness' of the glitch.*/
  @keyframes glitch-anim {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100)+px, 9999px, random(100)+px, 0);
        transform: skew((random(100) / 100) + deg);
      }
    }
  }

  // Same deal, just duplicated for ultra randomness.
  @keyframes glitch-anim2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100)+px, 9999px, random(100)+px, 0);
        transform: skew((random(100) / 100) + deg);
      }
    }
  }

  // Does the same deal as before, but now only skews. Used for main text.
  @keyframes glitch-skew {
    $steps: 10;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        transform: skew((random(10) - 5) + deg);
      }
    }
  }
</style>

