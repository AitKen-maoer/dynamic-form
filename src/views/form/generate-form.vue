<template>
  <div>
    <el-form
      ref="form"
      :validate-on-rule-change="false"
      :model="form"
      :label-position="nature.publicData.labelPosition"
      :rules="rules"
      :label-width="nature.publicData.label+'px'"
    >
      <el-row>
        <el-col v-for="(item,index) in nature.formdataList" :key="index+'FormdataList'" :span="Number(item.span)" :offset="Number(item.offset)">
          <el-form-item :label="item.label" :prop="item.required ? item.model : ''" :msg="item.message">
            <component
              :is="item.name"
              v-model="form[item.model]"
              :options="item.options"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              @change="componentChange(index,item)"
              @onSubmit="onSubmit"
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
import checkboxForm from './components/checkbox'
import textareaForm from './components/textarea'
import switchForm from './components/switch'
import ButtonForm from './components/button'
import myMinix from './minix'

export default {
  modle: {
    prop: 'value',
    event: 'change'
  },
  components: {
    inputForm,
    selectForm,
    radioForm,
    checkboxForm,
    textareaForm,
    switchForm,
    ButtonForm
  },
  mixins: [myMinix],
  props: {
    value: {
      type: [Object, Number, Array, String],
      default: ''
    },
    data: {
      type: [String],
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    form: {
      get() {
        return this.value
      },
      set(values) {
        return this.$emit('change', values)
      }
    },
    nature() {
      const d = JSON.parse(this.data)
      return d
    }
  },
  created() {
    this.init()
  },
  methods: {
    componentChange(index, data) {
      this.$emit('change', index, data)
    },
    /**
     * 表单提交
     */
    onSubmit() {
      this.$refs['form'].validate((valid, object) => {
        this.$emit('onSubmit', valid, object)
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item{
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
</style>
