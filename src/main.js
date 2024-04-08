import { createApp } from 'vue'
import './assets/bootstrap-lumen.css'
//import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.vue'
import { router } from './routes'
const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.mount('#app')
