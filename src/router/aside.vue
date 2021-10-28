
<template>
  <div class="index">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="添加项：">
        <el-select v-model="form.name" placeholder="请选择活动区域" class="handWidth">
          <el-option v-for="(item,key) in formInput" :key="key+'formInput'" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="表单label：">
        <el-input v-model="form.label" placeholder="请输入内容" />
      </el-form-item>
      <div v-if="form.name != 'inputForm'">
        <div style="overflow: hidden;">
          <el-divider content-position="left">选项值</el-divider>
        </div>
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
      <el-form-item label="宽度：">
        <el-input-number v-model="form.span" :step="1" :min="0" :max="24" step-strictly />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Bus from '@/store/eventBus'
export default {
  data() {
    return {
      form: {
        name: '',
        model: '',
        label: '',
        options: [{}]
      },
      formInput: [
        { label: '输入框', value: 'inputForm' },
        { label: '单选框', value: 'radioForm' },
        { label: '下拉框', value: 'selectForm' }
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
      Bus.$emit('onSubmitSuccess', self.form)
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
</style>
