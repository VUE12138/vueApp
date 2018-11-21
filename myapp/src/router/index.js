import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
		path: '/hello',
		name: 'Hello',
	    component: Hello
    },
    {
    path: '/login',
    name: 'login',
      component: login
    }
  ]
})
