import StatCard from './components/StatCard.vue';

// Export components individually
//export { StatCard };

// Or as a plugin (Vue standard practice)
import type { App } from 'vue';

export default {
  install(app: App) {
    app.component('MvStatCard', StatCard);
  }
}