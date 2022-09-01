<template>
    <div class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center lg:container mx-auto">
        <a href="/" class="flex items-center">
            <img class="h-8 w-auto sm:h-10 mr-4" src="https://flowbite.com/docs/images/logo.svg" alt="">
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">DOKI</span>
        </a>        
        <div class="flex items-center lg:order-2">
            <a href="#" class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Log in</a>
            <router-link to="/modelselect" class="bg-blue-700 text-white hover:text-white hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">간편 견적내기</router-link>
        </div>
        <div class="justify-between items-center w-full flex lg:w-auto lg:order-1">
            <router-link :to="route.path" class="lg:px-4 lg:text-lg text-sm" v-for="route in routes" :key="route"> 
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <div v-if="route.meta.isMenu" class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent">
                            <span class="hover:text-blue-700 text-gray-700 lg:text-lg text-base font-medium" >{{route.title}}</span>
                        </div>
                    </li>
                </ul>  
            </router-link>                        
        </div>        
      </div>
    </div> 
  </template>
  
  <script>
  import { ref,onBeforeMount,onMounted, computed } from 'vue'
  import { useStore, mapGetters } from 'vuex'
  import router from '../../routes'
  export default {
    setup(){
      const routes = ref([])
      
      onBeforeMount(()=>{
        //routes.value = router.options.routes
        routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
      });
      return {
        routes,
        router, 
      }
    },
  }
  </script>
  
  <style scoped>
  </style>