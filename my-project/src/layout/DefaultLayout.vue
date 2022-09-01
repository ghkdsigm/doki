<template>
    <div class="">
        <!--사이드메뉴-->
        <div class="">
            <Header/>   
        </div>
        <!--메인섹션-->
        <div class="relative py-6 sm:py-10">      
            <div class="container mx-auto">
                <router-view v-slot="{ Component }">
                    <transition name="route" mode="out-in">
                        <component :is="Component"></component>
                    </transition>
                </router-view>
            </div>            
        </div>
        <div class="">
            <Footer/>   
        </div>
    </div>
  </template>
  
  <script>
  import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount, watchEffect, onUpdated  } from 'vue'
  import { useStore, mapGetters } from 'vuex'
  import Header from '../components/common/Header.vue'
  import Footer from '../components/common/Footer.vue';
  export default {
    components:{
    Header,
    Footer
}
  }
  </script>
  
  <style scoped>
  /*컴포넌트 이동 트랜지션*/
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .route-enter-active{
    transition: all 0.1s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .route-leave-active{
    transition: all 0.1s ease-in;
  }
  </style>