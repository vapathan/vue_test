<template>
  <div class="flex flex-col border bg-blue-50 rounded-lg shadow-lg">
    <div class="flex justify-between px-4 pt-2">
      <img  v-if="card.icon1" :src="`src/assets/icons/${card.icon1}.svg`" :alt="card.icon1" class="w-8 h-8">
      <img v-if="card.icon2" :src="`src/assets/icons/${card.icon2}.svg`" :alt="card.icon2" class="w-20 h-8">
    </div>
    <div class="flex justify-end">
      <img   v-if="card.icon3" :src="`src/assets/icons/${card.icon3}.svg`" :alt="card.icon3" class="h-12">
    </div>
    <div class="flex flex-col px-4 pb-2">
      <small>{{card.label1}}</small>
      <h3 class="font-bold">{{card.label2}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
  props:{
    card:{
      type:Object
    }
  }
}
</script>

<style scoped>

</style>
