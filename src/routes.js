import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";
import DetailedView from "@/components/DetailedView.vue";
import ListAll from "@/components/ListAll.vue";
import AddNote from "@/components/AddNote.vue";
import store from "@/store";
import { BToast } from "bootstrap-vue";


const meta = {
    authorize: ["admin", "general"],
};

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
            path: '/login',
            component: LogIn
        },
        {
            name: 'SignUp',
            path: '/signup',
            component: SignUp
        },
        {
            name: 'DetailedView',
            path: '/note/:id',
            props: true,
            component: DetailedView,
            meta
        },
        {
            name: 'ListAll',
            path: '/listall',
            component: ListAll,
            meta
        },
        {
            name: 'AddNote',
            path: '/addnote',
            component: AddNote,
            meta
        },
        {
            name: "UpdateNote",
            path: "/updatenote/:id",
            props: true,
            component: AddNote,
            meta
        },
        {
            name: 'FavouriteNotes',
            path: '/favourite',
            component: ListAll,
            meta
        },
    ]
});

router.beforeEach((to, from, next) => {
    const authorize = to.meta.authorize;

    // Right now, role-based authorization is NOT supported
    if (authorize && !store.getters.isAuthenticated) {
        new BToast().$root.$bvToast.toast("Please login first.", {
            title: "Error",
            autoHideDelay: 2000,
            variant: "danger",
            appendToast: true,
        });
        return next({ path: "/login" });
    } else {
        if (authorize && !authorize.includes(store.state.auth.role)) {
            new BToast().$root.$bvToast.toast("You do not have sufficient access to this page.", {
                title: "Error",
                autoHideDelay: 2000,
                variant: "danger",
                appendToast: true,
            });
            return next({
                path: "/",
            });
        }
    }
    next();
});

export default router;