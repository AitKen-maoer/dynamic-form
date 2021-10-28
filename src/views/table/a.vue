<template>
  <div>
    <div>
      组件b {{ input1 }}
      <el-input v-model="input1" />
    </div>
  </div>
</template>

<script>

import myMinix from './minix'
export default {
  mixins: [myMinix]
}

</script>
<style scoped>
</style>
