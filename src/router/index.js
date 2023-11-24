import { createRouter,createWebHistory } from "vue-router"
import QuizzesView from "../views/QuizzesView.vue"

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path:"/",
            name:'quizzes',
            component: QuizzesView
        }
    ]
})

export default router