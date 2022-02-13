<template>
  <a href="#"
     class="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100">
    <img :src="`src/assets/icons/${menu.icon}.svg`" :alt="menu.label"  class="w-3">
    <span class="ml-3">{{menu.label}}</span>
  </a>
</template>

<script>
export default {
  name: "NavbarMenuIcon",
  props:{
    menu:{
      type:Object
    }
  }
}
</script>

<style scoped>

</style>