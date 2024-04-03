import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3Alt, faJs, faSass, faVuejs, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHtml5, faCss3Alt, faJs, faSass, faVuejs, faLaravel, faPhp)

import AppLoader from './components/AppLoader.vue'
import { router } from './router'

const app = createApp(App)
app.component('AppLoader', AppLoader)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
