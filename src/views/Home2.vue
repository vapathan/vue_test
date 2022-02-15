<template>
  <div class="flex pt-2 pb-4">
    <div class="">
      <router-link to="/"
                   class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 mt-1" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
        </svg>
        Back
      </router-link>
    </div>
  </div>
  <tab-list :slugs="slug"></tab-list>
  <div class="p-8 flex justify-between">
    <div>
      <span class="font-semibold text-2xl">Tree</span>
    </div>
    <div>
      <div class="relative">
        <div class="absolute mt-3 ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input type="text" class="h-12 w-80 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
               placeholder="Search Transaction id">
      </div>
    </div>
  </div>
  <div class="flex gap-4 p-6">
    <img src="src/assets/icons/active.svg" alt="" class="w-40">
    <img src="src/assets/icons/inactive.svg" alt="" class="w-40">
    <img src="src/assets/icons/absent.svg" alt="" class="w-40">
    <img src="src/assets/icons/block.svg" alt="" class="w-40">
  </div>
  <div class="py-12">
    <div class="flex justify-center">
      <div class="border rounded-full w-40 h-40 bg-gradient-to-r from-gray-100 to-gray-300  p-4">
        <div class="rounded-full w-32 h-32 border-4 border-green-500 bg-white pt-2 px-6 shadow-lg">
          <div class="absolute flex flex-col justify-center">
            <div class="flex justify-items-center pt-3 pb-2">
              <img src="http://placehold.jp/50x50.png" class="rounded-full cover-object w-12 h-12 ml-3 shadow-md"/>
            </div>
            <div class="flex">
              <span class="text-sm font-bold">Katie Robson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-evenly mt-5">
      <img src="src/assets/icons/Group.svg" alt="" class="w-80">
      <img src="src/assets/icons/Group.svg" alt="" class="rotate-180 w-80">
    </div>
    <div class="flex justify-evenly mt-14">
      <div class="flex flex-row gap-12">
        <img src="src/assets/icons/active_green.png" alt="" class="w-40 h-40">
        <img src="src/assets/icons/inactive.png" alt="" class="w-40 h-40">
      </div>
      <div class="flex flex-row gap-12">
        <img src="src/assets/icons/absent.png" alt="" class="w-40 h-40">
        <img src="src/assets/icons/block.png" alt="" class="w-40 h-40">
      </div>
    </div>
    <div class="flex justify-evenly mt-14">
      <div class="flex flex-row gap-8">
        <img src="src/assets/icons/green.svg" alt="" class="w-28 h-28">
        <img src="src/assets/icons/purple.svg" alt="" class="w-28 h-28">
        <img src="src/assets/icons/orange.svg" alt="" class="w-28 h-28">
        <img src="src/assets/icons/Path 64234.svg" alt="" class="w-28 h-28">
      </div>
      <div class="flex flex-row gap-8">
        <img src="src/assets/icons/green.svg" alt="" class="w-28 h-28">
        <img src="src/assets/icons/purple.svg" alt="" class="w-28 h-28">
        <img src="src/assets/icons/orange.svg" alt="" class="w-28 h-28">
        <img src="src/assets/icons/Path 64234.svg" alt="" class="w-28 h-28">
      </div>
    </div>
  </div>
</template>

<script>
import TabList from "@/components/TabList.vue";

export default {
  name: 'Home2',
  components: {
    TabList
  },
  data() {
    return {
      slug: ['Tree', 'Left Structure', 'Right Structure', 'Direct referrals']
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
