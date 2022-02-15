<template>
  <div class="border-b border-blue-200">
    <ul class="flex flex-wrap -mb-px space-x-8">
      <template v-for="slug in slugs">
        <li class="">
          <a href="#"
             class="inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg text-font"
             aria-current="page" :class="slug === 'Tree' ? activeClass :''">{{ slug }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabList",
  props: {
    slugs: {
      type: Array
    }
  },
  data() {
    return {
      activeClass: 'text-blue-600 border-b-2 border-blue-600 active'
    }
  }
}
</script>

<style lang="scss" scoped>
.text-font {
  font-family: Atami;
}
</style>
