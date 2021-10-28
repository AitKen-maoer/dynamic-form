<template>
  <div class="index">
    <el-container>
      <el-header>
        <div>
          <el-button type="primary" @click="addOnceForm">添加项</el-button>
        </div>
      </el-header>
      <el-container>
        <!-- 成品区 -->
        <el-main>
          <mainCommon ref="mainCommon" v-model="mainCommonForm" />
        </el-main>
        <el-aside width="400px">
          <asideCommon ref="asideCommon" />
        </el-aside>
      </el-container>
    </el-container>
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
      mainCommonForm: {},
      FormdataList: [
        // {
        //   label: '用户',
        //   name: 'inputFrom',
        //   model: '',
        //   span: '12'
        // },
        // {
        //   label: '用户',
        //   name: 'selectFrom',
        //   model: '',
        //   span: '12',
        //   options: [
        //     { value: '选项1', label: '黄金糕' },
        //     { value: '选项2', label: '双皮奶' },
        //     { value: '选项3', label: '蚵仔煎' },
        //     { value: '选项4', label: '龙须面' },
        //     { value: '选项5', label: '北京烤鸭' }
        //   ]
        // }
      ]
    }
  },
  methods: {
    /**
     * 添加一项
     */
    addOnceForm() {

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
