<template>
  <div>
    <el-checkbox-group v-model="checkbox" v-bind="$attrs">
      <el-checkbox v-for="(item, index) in options" :key="index" :label="item.value" :value="item.value">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
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
      type: [Array, Object],
      default() {
        return []
      }
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
    checkbox: {
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
