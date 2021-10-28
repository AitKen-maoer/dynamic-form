<template>
  <div>
    <el-select v-model="selectValue" placeholder="请选择" v-bind="$attrs">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
    return {}
  },
  computed: {
    selectValue: {
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
::v-deep .el-select{
  width: 100%;
}
</style>
