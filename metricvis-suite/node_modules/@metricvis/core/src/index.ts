import StatCard from './components/StatCard.vue';

import LiveChart from './components/LiveChart.vue';
// Export components individually
export { StatCard, LiveChart };

// Or as a plugin (Vue standard practice)
import type { App } from 'vue';

export default {
  install(app: App) {
    app.component('MvStatCard', StatCard);
    app.component('MvLiveChart', LiveChart);
  }
}