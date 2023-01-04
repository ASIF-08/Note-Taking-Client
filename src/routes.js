import Router from 'vue-router'
import HomePage from './components/HomePage.vue';
import LogIn from "@/components/LogIn.vue"
import SignUp from "@/components/SignUp.vue"
import DetailedView from "@/components/DetailedView.vue"
import ListAll from "@/components/ListAll.vue"
import AddNote from "@/components/AddNote.vue"

const router = new Router({
    mode: "history",
    routes: [
        {
            name: 'HomePage',
            path: '/',
            component: HomePage
        },
        {
            name: 'LogIn',
            path: '/LogIn',
            component: LogIn
        },
        {
            name: 'SignUp',
            path: '/SignUp',
            component: SignUp
        },
        {
            name: 'DetailedView',
            path: '/detailedview',
            component: DetailedView
        },
        {
            name: 'LsitAll',
            path: '/ListAll',
            component: ListAll
        },
        {
            name: 'AddNote',
            path: '/AddNote',
            component: AddNote
        }
    ]
});

export default router;