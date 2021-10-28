<template>
  <div>
    <el-button type="primary" v-bind="$attrs" @click="onSubmit">{{ text }}</el-button>
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
      type: [Object, String, Number],
      default() {
        return '提交'
      }
    }
  },
  data() {
    return { }
  },
  computed: {
    text() {
      return this.value
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit')
    }
  }

}

</script>
<style scoped>
</style>
