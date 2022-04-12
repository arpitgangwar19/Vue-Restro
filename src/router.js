import signUp from './components/Signup.vue';
import login from './components/Login.vue';
import home from './components/Home.vue';
import add from './components/AddResturant.vue'
import update from './components/UpdateResturant.vue'
import {createRouter,createWebHistory} from 'vue-router';
const routes=[

    {
        name:"Home",
        component : home,
        path:'/'
    },
    {
        name:"Signup",
        component : signUp,
        path:'/signup'
    },
    {
        name:"Login",
        component : login,
        path:'/login'
    },
    {
        name:"Add",
        component : add,
        path:'/add'
    },
    {
        name:"Update",
        component : update,
        path:'/update'
    }
];
const  router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;