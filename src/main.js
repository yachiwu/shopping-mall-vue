import { createApp } from 'vue'
import './assets/bootstrap-lumen.css'
//import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.vue'
import { router } from './routes'
// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// fas 是所有的 solid icon
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {store} from './store'

library.add(fas)
const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
