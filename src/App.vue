<template>
  <app-layout>
    <template #main>
      <router-view></router-view>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    AppLayout, Home
  }
}
</script>

<style>
</style>
