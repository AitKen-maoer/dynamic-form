<template>
  <div>
    <el-input v-model="input" :placeholder="placeholder" v-bind="$attrs" />
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
      type: [String, Number, Array, Object],
      default: ''
    },
    placeholder: {
      type: [String, Object],
      default: ''
    }
  },
  data() {
    return { }
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
