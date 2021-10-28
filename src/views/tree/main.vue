<template>
  <div>
    <el-form
      ref="form"
      :validate-on-rule-change="false"
      :model="form"
      :label-position="publicData.labelPosition"
      :rules="rules"
      :label-width="publicData.label+'px'"
    >
      <el-row>
        <vuedraggable v-model="formdataList">
          <el-col v-for="(item,index) in formdataList" :key="index+'FormdataList'" :span="Number(item.span)" :offset="Number(item.offset)">
            <el-form-item :label="item.label" :prop="item.required ? item.model : ''" :msg="item.message">
              <el-tooltip placement="top-end" effect="light">
                <component
                  :is="item.name"
                  v-model="form[item.model]"
                  :options="item.options"
                  :placeholder="item.placeholder"
                  :disabled="item.disabled"
                  @change="componentChange"
                  @onSubmit="$emit('onSubmit')"
                />
                <div slot="content">
                  <el-button size="mini" icon="el-icon-edit" circle @click="$emit('handelEdit', index,item)" />
                  <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="()=>{formdataList.splice(index, 1)}" />
                </div>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </vuedraggable>
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
import vuedraggable from 'vuedraggable'
import Bus from '@/store/eventBus'

export default {
  modle: {
    prop: 'value',
    event: 'change'
  },
  components: {
    inputForm,
    selectForm,
    radioForm,
    vuedraggable,
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
    publicData: {
      type: [Object],
      default() {
        return
      }
    }
  },
  data() {
    return {
      formdataList: []
    }
  },
  computed: {
    form: {
      get() {
        return this.value
      },
      set(values) {
        return this.$emit('change', values)
      }
    }
  },
  created() {
    const json = [
      { name: 'inputForm', model: 'name', label: '姓名', options: [{}], span: 12, placeholder: '请输入姓名', required: true },
      { name: 'inputForm', model: 'age', label: '年龄', options: [{}], span: 12, placeholder: '请输入年龄', required: true },
      { name: 'selectForm', model: 'payinfo', label: '单位', options: [{ label: '市政府', value: '1' }, { label: '公安局', value: '2' }, { label: '泛语', value: '3' }], span: 12, placeholder: '请选择单位', required: true },
      { name: 'radioForm', model: 'title', label: '职位', options: [{ label: '市长', value: '1' }, { label: '局长', value: '2' }, { label: '董事长', value: '3' }, { label: '清洁工', value: '4' }], span: 12, required: true },
      { name: 'checkboxForm', model: 'liek', label: '爱好', options: [{ label: '抽烟', value: '1' }, { label: '喝酒', value: '2' }, { label: '打牌', value: '3' }], span: 12, required: true },
      { name: 'switchForm', model: 'isNo', label: '是否有钱', options: [{}], span: 12, required: true },
      { name: 'ButtonForm', model: '', label: '', options: [{}], span: 12 }
    ]
    json.forEach(item => {
      this.initData(item)
    })
    this.$nextTick(() => {
      this.init()
    })
    Bus.$off('onSubmitSuccess').$on('onSubmitSuccess', (data, isEdit) => {
      this.initData(data, isEdit)
    })
  },
  methods: {
    componentChange() {
      this.$emit('change')
    },
    /**
     * @param {data} Object 添加的表单项数据
     * @param {isEdit} Number||String  编辑项的索引
     */
    initData(data, isEdit) {
      const self = this
      if (isEdit) { // 是否是编辑
        self.formdataList[isEdit] = data
      } else {
        const key = Number(Math.random().toString().substr(3, 6) + Date.now().toString().substr(8, 13)).toString()
        data.key = key
        self.formdataList.push(data)
        if (data.name === 'ButtonForm') return // 按钮就不添加form
        if (data.name === 'checkboxForm') { // 如果是多选按钮组
          self.form[data.model] = []
        } else if (data.name === 'switchForm') { // 开关按钮
          self.form[data.model] = Boolean(data.default)
        } else {
          self.form[data.model] = data.default || null
        }
      }
      self.init()
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
