import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect : '/login',
      },
      {
          path: '/login',
          name: 'Login',
          component: () => System.import('@/components/Login'),
      },
      {
          path: '/full',
          name: 'Full',
          component: () => System.import('@/components/Full'),
          redirect : '/chat',
          children : [
              {
                  path: '/chat',
                  name: '消息',
                  component: () => System.import('@/components/Chat'),
              },
              {
                  path: '/friend',
                  name: '联系人',
                  component: () => System.import('@/components/Friend'),
              },
              {
                  path: '/personal',
                  name: '个人信息',
                  component: () => System.import('@/components/Personal'),
              }
          ]
      },
  ]
})
