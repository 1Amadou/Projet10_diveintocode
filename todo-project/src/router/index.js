import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// TodoListコンポーネントをimport
import TodoList from '../views/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // '/todos'パスune addition
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  }
  // Aboutに関する定義削除
]
// 以下変更なし