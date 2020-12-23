import vueRouter from 'vue-router'
import User from './components/User'
import UserAgregarGasto from './components/UserAgregarGasto'
import UserAuth from './components/UserAuth'
import UserPerfil from'./components/UserMostrarDatos'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: UserAuth
            },
            {
                path: '/usuario/:username',
                name: "user",
                component: User
            },
            {
                path: '/user/add-gasto/:username',
                name: "user_balance",
                component: UserAgregarGasto
            },
            {   path: '/user/auth',
                name:"user_auth",
                component: UserAuth
            },
            {   path: '/user/perfil/:username',
                name:"user_transaction",
                component:UserPerfil
            },

        ]
    })

export default router