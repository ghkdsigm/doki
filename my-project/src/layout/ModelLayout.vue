<template>
    <div class="">
      <div>
        <back-home></back-home>
      </div>
      <!--메인섹션-->
      <div class="" ref="scrollRight">      
        <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
            <component :is="Component"></component>
            </transition>
        </router-view>
      </div>
    </div>
  </template>
  
  <script>
  import { ref,onBeforeMount,onMounted, computed, onBeforeUnmount, watchEffect, onUpdated  } from 'vue'
  import { useStore, mapGetters } from 'vuex'
import BackHome from '../components/BackHome.vue';
  export default {
    components:{
    BackHome
},    
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