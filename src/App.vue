<template>
  <app-layout>
    <template #main>
      <Home/>
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
