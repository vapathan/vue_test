<template>
  <template v-for="(card,index) in cards" :key="index">
    <small-card :card="card"></small-card>
  </template>
</template>
<script>
import SmallCard from '@/components/SmallCard.vue'

export default {
  name: "SmallCardGroup",
  components: {
    SmallCard
  },
  data() {
    return {
      cards: [
        {
          icon1: 'roi_income (1)',
          icon2: 'roi_income',
          icon3: 'roi-income',
          label1: 'ROI Income',
          label2: '4280.884 TRX'
        },
        {
          icon1: 'direct_income',
          icon2: 'direct_income (1)',
          icon3: 'direct-income',
          label1: 'Direct Income',
          label2: '132.720 TRX'
        },
        {
          icon1: 'binary_income',
          icon2: 'binary_income (1)',
          icon3: 'binary-income',
          label1: 'Binary Income',
          label2: '57.840 TRX'
        },
        {
          icon1: 'current_earning_limit',
          icon2: 'current_earning_limit (1)',
          icon3: 'earning-limit',
          label1: 'Current Earning limit',
          label2: '14460 TRX'
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>