<template>
  <div class="w-32 h-12 py-1 bg-white rounded-full border-2 border-green-700">
    <div class="flex flex-row items-center place-items-center pt-1">
      <img :src="user.img" class="rounded-full cover-object ml-3"/>
      <span class="flex ml-4 text-xs wrap text-justify">{{ user.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserName",
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
