<template>
  <div class="app-container">
    <A :key="key+'a'" />
    <B :key="key+'b'" />
    父组件 {{ input1 }}
    <el-input v-model="input1" />
    <!-- <el-button type="primary" @click="publicRules">按钮</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column v-for="(item,key) in data" :key="key" :label="item.laber" :prop="item.prop" />
    </el-table> -->
  </div>
</template>

<script>
import { getList } from '@/api/table'
import myMinix from './minix'
import A from './a'
import B from './b'

export default {
  components: { A, B },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  mixins: [myMinix],
  data() {
    return {
      list: null,
      listLoading: true,
      data: [
        {
          laber: '姓名',
          prop: 'author'
        },
        {
          laber: '时间',
          prop: 'display_time'
        }
      ],
      tableListMap: [
        { laber: '张三', value: 1 },
        { laber: '张三', value: 2 },
        { laber: '李四', value: 1 },
        { laber: '王五', value: 1 },
        { laber: '赵六', value: 1 }
      ]
    }
  },
  created() {
    this.fetchData()
    const a = this.tableListMap.find(x => {
      // eslint-disable-next-line no-return-assign
      return x.laber = '张三'
    })
    console.log(a, '111')
  },
  mounted() {
    this.speak()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    speak() {
      this.objs.class = 'end'
    }
  }
}
</script>
