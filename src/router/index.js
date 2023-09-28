import { createRouter, createWebHashHistory } from 'vue-router'
import RootView from '../views/quizes/Root.vue'
import ChoiceView from '../views/Choice.vue'
import LangView from '../views/langs/Root.vue'
import FinishView from '../views/Finish.vue'

const routes = [
  {
    path: '/it',
    name: 'it',
    component: RootView
  },
  {
    path: '/lang',
    name: 'lang',
    component: LangView
  },
  {
    path: '/finish/:quiz',
    name: 'finish',
    component: FinishView,
    props: true
  },
  {
    path: '/',
    name: 'choice',
    component: ChoiceView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
