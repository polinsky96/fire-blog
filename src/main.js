import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Vue2Editor from "vue2-editor";
import router from './router'

import 'normalize.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue2Editor)


app.mount('#app')
