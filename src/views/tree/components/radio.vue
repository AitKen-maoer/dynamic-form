<template>
  <div>
    <el-radio-group v-model="radio" v-bind="$attrs">
      <el-radio
        v-for="(item,index) in options"
        :key="index + 'radio'"
        :label="item.value"
        :value="item.value"
      >{{ item.label }}</el-radio>
    </el-radio-group>
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
    options: {
      type: [Array, Object],
      default() {
        return []
      }
    }
  },
  data() {
    return { }
  },
  computed: {
    radio: {
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
