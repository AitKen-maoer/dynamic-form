<template>
  <div>
    <div class="index">
      <el-container>
        <el-header height="200px">
          <div>
            <el-descriptions class="margin-top" title="表单" :column="3" :size="size" border>
              <template slot="extra">
                <el-button type="primary" size="mini" @click="addOnceForm">添加一项</el-button>
              </template>
              <el-descriptions-item>
                <template slot="label">
                  标签宽度
                </template>
                <el-input v-model="form.label" size="mini">
                  <template slot="append">px</template>
                </el-input>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  标签位置
                </template>
                <el-radio-group v-model="form.labelPosition" size="small">
                  <el-radio-button label="left">左对齐</el-radio-button>
                  <el-radio-button label="right">右对齐</el-radio-button>
                  <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-header>
        <el-container>
          <!-- 成品区 -->
          <el-main>
            <mainCommon
              ref="mainCommon"
              v-model="mainCommonForm"
              :public-data="form"
              @handelEdit="handleEditFormItem"
              @change="mainCommonChange"
              @onSubmit="showADDJSON"
            />
          </el-main>
          <el-drawer
            title="表单属性"
            :visible.sync="drawer"
            direction="rtl"
            size="33%"
            :before-close="handleClose"
          >
            <asideCommon
              ref="asideCommon"
              :key="key+'asideCommon'"
              @updataKey="()=>{key++}"
              @beforeClose="handleClose"
              @onSuccess="onSuccessAsideCommon"
            />
          </el-drawer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import asideCommon from './aside.vue'
import mainCommon from './main.vue'

export default {
  components: {
    mainCommon,
    asideCommon
  },
  data() {
    return {
      poolForm: ['input'],
      key: 0,
      drawer: false,
      mainCommonForm: {},
      size: 'medium',
      form: {
        label: '100',
        labelPosition: 'right'
      },
      FormdataList: []
    }
  },
  methods: {
    /**
     * 添加一项
     */
    addOnceForm() {
      this.handleShow()
    },
    /**
     * 打开抽屉
     */
    handleShow() {
      const self = this
      self.drawer = true
    },
    /**
     * 关闭抽屉
     */
    handleClose(done) {
      const self = this
      self.drawer = false
    },
    /**
     * 编辑表单项
     * @param {index} 编辑当前数据索引
     * @param {data} 编辑回显表单的值
     */
    handleEditFormItem(index, data) {
      const self = this
      self.handleShow()
      this.$nextTick(() => {
        self.$refs.asideCommon.edit(index, data)
      })
    },
    /**
     * 立即提交回调
     */
    onSuccessAsideCommon() {
      const self = this
      self.drawer = false
    },
    showADDJSON() {
      const data = {
        formdataList: this.$refs.mainCommon.formdataList,
        publicData: this.form,
        form: this.mainCommonForm
      }
      console.log(data)
      console.log(JSON.stringify(data))
    },
    /**
     * 表单项change
     */
    mainCommonChange() {
      const self = this
      self.mainCommonForm = { ...self.mainCommonForm }
    }
  }
}
</script>
<style scoped>
.index{
    border-bottom: 1px solid #f0f0f0;
}
.el-header, .el-footer {
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  border-left: 1px solid #f0f0f0;
  color: #333;
}

.el-main {
  color: #333;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
/*
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
