<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col v-for="(item,index) in formdataList" :key="index+'FormdataList'" :span="Number(item.span)">
          <el-form-item :label="item.label + '：'">
            <component
              :is="item.name"
              v-model="item.model"
              :options="item.options"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import inputForm from './components/input'
import selectForm from './components/select'
import radioForm from './components/radio'

import Bus from '@/store/eventBus'

export default {
  modle: {
    prop: 'value',
    event: 'change'
  },
  components: {
    inputForm,
    selectForm,
    radioForm
  },
  props: {
    value: {
      type: [Object, Number, Array, String],
      default: ''
    }
  },
  data() {
    return {
      formdataList: []
    }
  },
  computed: {
    form() {
      return this.value
    }
  },
  created() {
    Bus.$off('onSubmitSuccess').$on('onSubmitSuccess', (data) => {
      const self = this
      self.formdataList.push(data)
      console.log(self.formdataList)
    })
  }
}

</script>
<style scoped>
</style>
