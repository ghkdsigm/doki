<template>   
    <transition name="route" mode="out-in">
      <component :is="layout"></component>
    </transition>
</template>

<script>
import DefaultLayout from './DefaultLayout.vue'
import ModelLayout from './ModelLayout.vue'
import { computed, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
export default {
components: { DefaultLayout,ModelLayout },
setup() {
  const route = useRoute()
  const layout = computed(() => route.meta.layout || 'DefaultLayout' || 'ModelLayout')  
  return {
    layout,
  }
},
}
</script>

<style>
</style>