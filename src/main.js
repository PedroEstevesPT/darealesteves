import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import store from './store'

//this two lines are need for the vuetiy to take place
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

//need to include the components and the directives in the vuetify
const vuetify = createVuetify({
  ssr: true,
  components,
  directives
})

app.use(vuetify)
app.use(store)

app.mount('#app')
