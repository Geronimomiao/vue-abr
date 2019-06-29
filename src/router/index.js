import Vue from 'vue'
import Router from 'vue-router'

// 主页面底板
import index from '../index/index'

// operation 模块
// 操作录入模块
import operator from '../operation/operator'
// 数据操作模块
import operation from '../operation/operation'
// 审核信息模块
import adjust from '../operation/adjust'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/operation/operator',
          name: 'operator',
          component: operator
        }, {
          path: '/operation/operation',
          name: 'operation',
          component: operation
        }, {
          path: '/operation/adjust',
          name: 'adjust',
          component: adjust
        },
      ]
    }
  ]
})
