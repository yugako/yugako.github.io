<template>
  <div class="app">
    <!-- Toolbar -->
    <Toolbar v-if='IsMenuOpened' />
    <!-- Content view -->
    <transition name='slide-fade'>
       <nuxt class='app-view' :class='{"toolbar-active": IsToolbar}' />
    </transition>
   
    <!-- Toolbar toggler -->
    <toolbar-opener />
  </div>
</template>

<script>
  import Toolbar from '~/components/toolbar/Toolbar.vue';
  import ToolbarOpener from '~/components/toolbar/partials/ToolbarOpener.vue';
  export default {
    mounted() {
      this.$nextTick(function() {
          const self = this;

          window.addEventListener('resize', () => {
              if (window.innerWidth > 768) {
                  if (!self.IsToolbar) {
                      self.$store.commit('isMenuOpened');
                  }
                  
              }
          });

      })
    },
    
    components: {
      Toolbar, ToolbarOpener
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
<style lang="scss">
  .app {
    display: flex;
    width: 100%;
    overflow-y: auto;
    background-image: url('http://baha.malyarchuk.space/img/home-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    z-index: 9999;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba($dark, 0.4);
        z-index: -1;
    }
    &-view {
      width: 100%;
    }
    .toolbar-active {
        padding-left: 100px;
        @include sm-size-max {
            padding-left: 75px;
        }
    }
  }


</style>

