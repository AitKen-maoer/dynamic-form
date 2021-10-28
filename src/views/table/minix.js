export default {
  data() {
    return {
      name: 'minix',
      minixName: 'minixObj',
      flag: false,
      input1: 'input1',
      obj: {
        class: 'classtest',
        id: 'idtest'
      },
      key: 0,
      objs: {
        class: 'classtest',
        id: 'idtest'
      }
    }
  },
  mounted() {
    console.log('minixMounted')
  },
  methods: {
    speak() {
      this.objs.class = 'before'
      console.log('this is minix')
    },
    getData() {
      return '100'
    },
    publicRules() {
      this.obj.class = '公共方法修改了'
      console.log('公共方法调用了')
    }
  }
}
