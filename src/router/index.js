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
          component: require('@/components/Login').default,
      },
      {
          path: '/full',
          name: 'Full',
          component: require('@/components/Full').default,
          redirect : '/message',
          children : [
              {
                  path: '/message',
                  name: '消息',
                  component: require('@/components/Message').default,
              },
              {
                  path: '/friend',
                  name: '联系人',
                  component: require('@/components/Friend').default,
              },
              {
                  path: '/personal',
                  name: '个人信息',
                  component: require('@/components/Personal').default,
              }
          ]
      },
      {
          path: '/chat',
          name: 'chat',
          component: require('@/components/Chat').default,
      },
  ]
})
