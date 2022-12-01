import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import store from './store'
import SvgIcon from "vue3-icon";
import router from './routerIndex' // <---

// Animacoes
import VueAnimateOnScroll from 'vue3-animate-onscroll';

//This two lines are need for the vuetiy to take place
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
app.component("svg-icon", SvgIcon);

//Need to include the components and the directives in the vuetify
const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  icons: {
    iconfont: 'mdiSvg',
  },
})

app.use(vuetify)
app.use(store)
app.use(router)
app.use(VueAnimateOnScroll)

app.mount('#app')
