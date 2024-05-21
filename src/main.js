/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './components/App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.config.globalProperties.
$globalState = {
    logged: false,
    admin: false
};

registerPlugins(app)

app.use(router)
app.mount('#app')
