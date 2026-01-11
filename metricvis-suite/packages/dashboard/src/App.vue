<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// ✅ FIX: Use NAMED imports (with curly braces)
import { StatCard, LiveChart } from '@metricvis/core';
import '@metricvis/core/dist/metricvis-core.css';

// 🔄 Real-time Data Simulation
const trafficData = ref<number[]>([10, 25, 45, 30, 60, 75, 50, 65, 80, 55]);
let timer: any;

onMounted(() => {
  // Add a new random point every 800ms to simulate "Live" activity
  timer = setInterval(() => {
    const newVal = Math.floor(Math.random() * 80) + 10; // Random 10-90
    
    // Keep array size fixed at 20 items for performance
    const newData = [...trafficData.value, newVal];
    if (newData.length > 20) newData.shift();
    
    trafficData.value = newData;
  }, 800);
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="dashboard">
    <header>
      <h1>Executive Overview</h1>
      <span class="live-badge">● LIVE</span>
    </header>

    <div class="grid">
      <StatCard 
        title="Total Revenue" 
        value="$45,231" 
        trend="up" 
        :percentage="12.5" 
      />
      <StatCard 
        title="Server Load" 
        value="42%" 
        trend="neutral" 
      />
      <StatCard 
        title="Active Sessions" 
        value="1,204" 
        trend="down" 
        :percentage="3.2" 
      />
    </div>

    <div class="chart-section">
      <h2>Real-Time Traffic</h2>
      <div class="chart-wrapper">
        <LiveChart :data="trafficData" color="#8b5cf6" :height="150" />
      </div>
    </div>
  </div>
</template>

<style>
body { background: #f8fafc; font-family: 'Inter', sans-serif; padding: 2rem; color: #1e293b; }
header { display: flex; align-items: center; gap: 12px; margin-bottom: 2rem; }
h1 { margin: 0; font-size: 1.5rem; font-weight: 700; color: #0f172a; }
h2 { margin: 0 0 1rem 0; font-size: 1.1rem; color: #475569; }

.live-badge { 
  color: #ef4444; font-weight: bold; font-size: 0.75rem; animation: pulse 2s infinite; 
}

.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 24px; 
  margin-bottom: 32px;
}

.chart-section {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.chart-wrapper {
  height: 200px; /* Constraints the chart height */
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>