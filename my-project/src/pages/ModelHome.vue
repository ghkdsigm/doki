<template>
    <div>
      <!-- <ModelHeader/>
      <ModelSide/> -->
      <div class="min-h-full w-full bg-neutral-900">
        <div class="min-h-screen flex flex-col w-full">
          <div class="w-full border-b border-neutral-800 h-16 px-4 items-center flex">
            <div class="flex justify-between w-full items-center">
              <div class="text-white flex w-full flex-row">
                <div class="flex items-center basis-1/5">
                  <p>기본형</p>
                </div>
                <div class="flex basis-2/5">
                  <ModelHeader/>
                </div>
                <div class="flex basis-2/5">
                  
                </div>
              </div>
              <div>                
                <back-home></back-home>
              </div>
            </div>
          </div>

          <div class="flex-1 flex flex-col sm:flex-row w-full">
            <div class="w-3/4 p-4 border-r border-neutral-800 text-white flex items-center justify-center">Content here</div>

            <div class="w-1/4 p-10 text-white">
              <div>1111</div>
              <div>2222</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import ModelHeader from '../components/common_m/ModelHeader.vue'
  import ModelSide from '../components/common_m/ModelSide.vue';
  import BackHome from '../components/BackHome.vue';

  export default {
    components:{
        ModelHeader,
        ModelSide,
        BackHome
    }
  
  }
  </script>
  
  <style>
  
  </style>