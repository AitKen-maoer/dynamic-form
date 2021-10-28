<template>
  <div>
    <el-switch v-model="input" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Boolean, String, Object],
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(values) {
        return this.$emit('change', values)
      }
    }
  }

}

</script>
<style scoped>
</style>
