import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path) {
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/landing',
            component: importComponent('Layout/NavbarLayout'),
            children: [
                {
                    path: '/landing/welcome',
                    name: 'Welcome',
                    meta: { title: 'Welcome' },
                    component: importComponent('Welcome')
                }
            ]
        },

        {
            path: '/authentication',
            // redirect: '/authentication/login',
            component: importComponent('Layout/NavbarLayout'),
            children: [
                // Login
                {
                    path: '/authentication/login',
                    name: 'Login',
                    meta: { title: 'Login' },
                    component: importComponent('Authentication/Login')
                },

                // Register
                {
                    path: '/authentication/register',
                    name: 'Register',
                    meta: { title: 'Register' },
                    component: importComponent('Authentication/Register')
                }
            ]
        },

        {
            path: '/user',
            component: importComponent('Layout/DashboardLayout'),
            children: [
                // Home
                {
                    path: '/user/home',
                    name: 'Home',
                    meta: { title: 'Home' },
                    component: importComponent('User/Home'),
                },

                // Profile
                {
                    path: '/user/profile',
                    name: 'Profile',
                    meta: { title: 'Profile' },
                    component: importComponent('User/Profile')
                },

                // Order Bus
                {
                    path: '/user/orderbus',
                    name: 'Order Bus',
                    meta: { title: 'Order Bus' },
                    component: importComponent('User/OrderBus')
                },

                // Order Kereta
                {
                    path: '/user/orderkereta',
                    name: 'Order Kereta',
                    meta: { title: 'Order Kereta' },
                    component: importComponent('User/OrderKereta')
                },

                // Order Pesawat
                {
                    path: '/user/orderpesawat',
                    name: 'Order Pesawat',
                    meta: { title: 'Order Pesawat' },
                    component: importComponent('User/OrderPesawat')
                }
            ]
        },

        {
            path: '/bus',
            component: importComponent('Layout/DashboardLayout'),
            children: [
                // List Bus
                {
                    path: '/bus/listbus',
                    name: 'List Bus',
                    meta: { title: 'List Bus' },
                    component: importComponent('Bus/ListBus')
                }
            ]
        },

        {
            path: '/kereta',
            component: importComponent('Layout/DashboardLayout'),
            children: [
                // List Bus
                {
                    path: '/kereta/listkereta',
                    name: 'List Kereta',
                    meta: { title: 'List Kereta' },
                    component: importComponent('Kereta/ListKereta')
                }
            ]
        },

        {
            path: '/pesawat',
            component: importComponent('Layout/DashboardLayout'),
            children: [
                // List Bus
                {
                    path: '/pesawat/listpesawat',
                    name: 'List Pesawat',
                    meta: { title: 'List Pesawat' },
                    component: importComponent('Pesawat/ListPesawat')
                }
            ]
        },

 
        {
            path: '*',
            redirect: '/landing/welcome'
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});


export default router;