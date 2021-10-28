import { createRulesByForm } from '@/utils/index'
export default {
  data() {
    return {
      name: 'minix',
      rules: {}
    }
  },
  mounted() {
  },
  methods: {
    init() {
      const self = this
      self.rules = {}
      this.$nextTick(() => {
        self.rules = Object.assign(createRulesByForm(self.$refs.form), self.rules)
      })
    }
  }
}
