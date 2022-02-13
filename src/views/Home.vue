<template>
  <div class="space-y-8">
    <section class="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <small-card-group></small-card-group>
    </section>
    <section class="container">
      <div class="grid grid-cols-4 gap-4">
        <div class="rounded-lg shadow-lg">
          <retopup-reminder class="h-full"></retopup-reminder>
        </div>
        <div class="rounded-lg shadow-lg bg-gray-200 col-span-3 p-5">
          <div class="flex gap-5">
            <div class="flex flex-col w-1/3 gap-y-2">
              <template v-for="(card,index) in cards" :key="index">
                <small-card :card="card"></small-card>
              </template>
            </div>
            <div class="flex flex-col">
              <div class="mb-2">
                <h3 class="text-sm font-bold">My Total Earnings</h3>
                <p class="text-sm font-normal text-gray-600">4471.440 TRX</p>
              </div>
              <img src="src/assets/icons/my_total_earning.svg" alt="" class="w-3/4">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="flex gap-x-2 justify-between">
        <grad-button label="Add Fund" class="w-full"></grad-button>
        <grad-button label="Withdraw" class="w-full"></grad-button>
      </div>
    </section>
    <section class="container bg-white p-3 rounded-lg">
      <div class="flex justify-end items-center gap-x-3">
        <p class="text-xs text-gray-500">1M</p>
        <p class="text-xs text-gray-500">1M</p>
        <p class="text-xs text-gray-500">1M</p>
        <small-button label="Add"></small-button>
      </div>
      <img class="w-3/4" src="src/assets/icons/graph.svg" alt="">
    </section>
  </div>
</template>
<script>
import SmallCardGroup from '@/components/SmallCardGroup.vue'
import RetopupReminder from '@/components/RetopupReminder.vue'
import SmallCard from '@/components/SmallCard.vue'
import GradButton from "@/components/GradButton.vue";
import SmallButton from "@/components/SmallButton.vue"
export default {
  name: 'Home',
  data() {
    return {
      cards: [
        {
          icon1: 'total_active_deposits',
          icon3: 'roi-income',
          label1: 'Total active deposites',
          label2: '348 TRX'
        },
        {
          icon1: 'total_withdrawal',
          icon3: 'direct-income',
          label1: 'Total withdrawal',
          label2: '3615.000 TRX'
        }]
    }
  },
  components: {
    SmallCardGroup,
    RetopupReminder,
    SmallCard,
    GradButton,SmallButton
  },
}
</script>
<style lang="scss" scoped>

</style>
