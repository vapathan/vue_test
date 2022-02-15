<template>
  <aside class="w-48 h-screen rounded-xl shadow-lg bg-blue-50" aria-label="Sidebar">
    <div class="flex px-3 py-4">
      <img src="src/assets/logo.png" alt="Logo" class="w-12 h-12 mr-3">
      <div class="flex flex-col">
      <h5 class="font-bold">Demo</h5>
        <p class="">Panel 05</p>
      </div>
    </div>
    <div class="px-3 py-4 overflow-y-auto rounded">
      <h5 class="ml-3 pb-5">Menu</h5>
      <ul class="space-y-2" v-for="(menu,index) in menus" :key="index">
        <li>
          <navbar-menu-icon :menu="menu"></navbar-menu-icon>
        </li>
      </ul>
    </div>
    <div class="p-3">
      <div class="bg-sidebar-bg bg-cover p-4 pb-6 rounded rounded-b-2xl">
        <img src="src/assets/icons/referral link.svg" alt="" class="w-64">
      </div>
      <p class="text-gray-400 text-sm text-center mt-3">Demo Panel 05</p>
      <p class="text-xs text-center text-gray-400 text-center">&copy 2021 All Rights Reserved</p>
    </div>
  </aside>

</template>

<script>
import NavbarMenuIcon from "@/components/NavbarMenuIcon.vue";

export default {
  name: "Sidebar",
  components: {
    NavbarMenuIcon
  },
  data() {
    return {
      menus: [
        {
          icon: 'Home',
          label: 'Home'
        }, {
          icon: 'invest_wallet',
          label: 'Invest Wallet'
        }, {
          icon: 'Reports',
          label: 'Reports'
        }, {
          icon: 'Team',
          label: 'Team'
        }, {
          icon: 'Income',
          label: 'Income'
        }, {
          icon: 'Withdrawal',
          label: 'Withdrawal'
        }, {
          icon: 'Logout',
          label: 'Logout'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
