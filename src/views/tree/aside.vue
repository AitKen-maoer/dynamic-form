
<template>
  <div class="index">
    <el-form ref="form" :model="form" label-width="130px">
      <el-form-item label="添加项：">
        <el-select v-model="form.name" placeholder="请选择活动区域" class="handWidth">
          <el-option v-for="(item,key) in formInput" :key="key+'formInput'" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <div v-if="form.name != 'ButtonForm'">
        <el-form-item label="标签：">
          <el-input v-model="form.label" placeholder="请输入标签(label)" />
        </el-form-item>
        <el-form-item label="对应字段：">
          <el-input v-model="form.model" placeholder="请输入对应表字段" />
        </el-form-item>
        <el-form-item v-if="form.name == 'inputForm' || form.name == 'selectForm' || form.name == 'textareaForm'" label="占位文本：">
          <el-input v-model="form.placeholder" placeholder="请输入占位文本(placeholder)" />
        </el-form-item>
        <div v-if="form.name == 'selectForm' || form.name == 'radioForm' || form.name == 'checkboxForm'">
          <el-row v-for="(item, index) in form.options" :key="index+'selectData'">
            <el-col :span="4">
              <div class="deleteClassIcon">
                <i class="el-icon-remove-outline icon-del" @click="addOrDelSelectData(0,index)" />
              </div>
            </el-col>
            <el-col :span="10">
              <el-form-item label="label">
                <el-input v-model="item.label" size="mini" />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="value">
                <el-input v-model="item.value" size="mini" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button icon="el-icon-circle-plus-outline" size="mini" @click="addOrDelSelectData(1)">添加一项</el-button>
          </el-form-item>
        </div>
        <!-- 默认值 -->
        <el-form-item label="默认值：">
          <component
            :is="form.name"
            v-model="form.default"
            :options="form.options"
            :placeholder="form.placeholder"
          />
        </el-form-item>
        <el-form-item label="是否禁用：">
          <el-switch v-model="form.disabled" placeholder="请输入默认值：" />
        </el-form-item>
        <el-form-item label="是否必填：">
          <el-switch v-model="form.required" placeholder="请输入默认值：" />
        </el-form-item>
        <el-form-item label="必填提示语：">
          <el-input v-model="form.message" placeholder="请输入必填提示语：" />
        </el-form-item>
      </div>
      <el-form-item label="占用宽度：">
        <el-input-number v-model="form.span" :step="1" :min="0" :max="24" step-strictly />
      </el-form-item>
      <el-form-item label="偏移量：">
        <el-input-number v-model="form.offset" :step="1" :min="0" :max="24" step-strictly />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="close">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Bus from '@/store/eventBus'
import inputForm from './components/input'
import selectForm from './components/select'
import radioForm from './components/radio'
import checkboxForm from './components/checkbox'
import textareaForm from './components/textarea'
import switchForm from './components/switch'
// import ButtonForm from './components/button'

export default {
  components: {
    inputForm,
    selectForm,
    radioForm,
    checkboxForm,
    textareaForm,
    switchForm
  },
  data() {
    return {
      form: {
        name: 'inputForm',
        model: '',
        label: '',
        offset: '',
        options: [{}]
      },
      isEditIndex: null,
      formInput: [
        { label: '输入框', value: 'inputForm' },
        { label: '下拉框', value: 'selectForm' },
        { label: '单选框', value: 'radioForm' },
        { label: '多选框', value: 'checkboxForm' },
        { label: '文本框', value: 'textareaForm' },
        { label: '开关', value: 'switchForm' },
        { label: '按钮', value: 'ButtonForm' }
      ]
    }
  },
  methods: {
    /**
     * 添加一项选项值或者删除一项选项值
     * @param type {1:添加，0:删除}
     */
    addOrDelSelectData(type, index) {
      const self = this
      if (type === 1) {
        self.form.options.push({})
      } else if (type === 0) {
        self.form.options.splice(index, 1)
      }
    },
    onSubmit() {
      const self = this
      Bus.$emit('onSubmitSuccess', self.form, self.isEditIndex)
      this.$emit('updataKey')
      this.$emit('onSuccess')
    },
    /**
     * 取消
     */
    close() {
      this.$emit('beforeClose')
      this.$emit('updataKey')
    },
    /**
     * 编辑表单项
     * @param {index} 编辑当前索引
     * @param {d} 传回表单数据
     */
    edit(index, d) {
      const self = this
      self.form = JSON.parse(JSON.stringify(d))
      self.isEditIndex = index
    }
  }
}

</script>
<style lang="scss" scoped>
.index{
  padding-right: 16px;
}
.deleteClassIcon{
  text-align:center;
  line-height:40px;
  padding-left:30px;
}
.icon-del{
  cursor: pointer;
  font-size:20px;
  color:#F56C6C;
  &:hover{
    opacity: 0.6;
    transition: 0.3s all;
  }
}
.divider-class{
  overflow: hidden;
  margin-bottom: 20px;
}
</style>
