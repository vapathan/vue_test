<template>
  <div class="container-fluid mx-auto p-5 bg-blue-200">
    <div class="flex gap-4">
      <sidebar></sidebar>
      <div class="container w-full -h-full rounded-xl p-5 bg-blue-100">
        <slot name="main"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: "AppLayout",
  components: {
    Sidebar
  }
}
</script>

<style scoped>

</style>
