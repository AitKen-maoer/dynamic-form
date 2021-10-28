<template>
  <div>
    <div class="index">
      <el-container>
        <el-header height="200px">
          <div>
            <el-descriptions class="margin-top" title="表单" :column="3" :size="size" border>
              <el-descriptions-item>
                <template slot="label">
                  表单JSON
                </template>
                <el-input v-model="form.desc" type="textarea" @change="textareaChange" />
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-header>
        <el-container>
          <!-- 成品区 -->
          <el-main>
            <mainCommon
              v-if="form.desc"
              ref="mainCommon"
              v-model="mainCommonForm"
              :data="form.desc"
              @onSubmit="showADDJSON"
              @change="mainCommonChange"
            />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
/**
 * 传入数据data，其data是生成表单的json
 * 提交回调函数 onSubmit(valid, object)
 * 触发表单项change 函数 mainCommonChange(index,data)
 */
import mainCommon from './generate-form.vue'
import myMinix from './minix'

export default {
  components: {
    mainCommon
  },
  mixins: [myMinix],
  data() {
    return {
      mainCommonForm: {},
      size: 'medium',
      form: {
        desc: ''
      },
      FormdataList: []
    }
  },
  methods: {
    /**
     * 立即提交回调
     */
    onSuccessAsideCommon() {
      const self = this
      self.drawer = false
    },
    textareaChange() {
      const self = this
      const d = JSON.parse(self.form.desc)
      self.mainCommonForm = d.form
    },
    showADDJSON(valid, object) {
      console.log(this.$refs.mainCommon.formdataList)
      console.log(this.mainCommonForm)
      console.log(this.form)
    },
    /**
     * 表单change
     * 某个项change
     * @param {index} 值的改变返回当前项的索引
     * @param {data} 值的改变返回当前项的json
     */
    mainCommonChange(index, data) {

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
