<template>  
  <div class="w-full flex items-center modelheader">
      <div class="w-1/4">    
        <div class="text-xs text-center md:text-base selected">선택1</div>
      </div>

      <div class="w-1/4">
        <div class="text-xs text-center md:text-base text-gray-400 ">선택2</div>
      </div>

      <div class="w-1/4">   
        <div class="text-xs text-center md:text-base text-gray-400">선택3</div>
      </div>

      <div class="w-1/4">
        <div class="text-xs text-center md:text-base text-gray-400">선택4</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modelheader .selected {font-weight: 400; color:#fff;}
</style>