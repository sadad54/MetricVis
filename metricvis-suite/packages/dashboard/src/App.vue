<script setup lang="ts">
// Importing directly from our local library!
import StatCard from '@metricvis/core';
import '@metricvis/core/dist/style.css'; // Import library styles
</script>

<template>
  <div class="dashboard">
    <h1>Executive Overview</h1>
    <div class="grid">
      <StatCard 
        title="Total Revenue" 
        value="$45,231" 
        trend="up" 
        :percentage="12.5" 
      />
      <StatCard 
        title="Active Users" 
        value="1,204" 
        trend="down" 
        :percentage="3.2" 
      />
      <StatCard 
        title="Server Uptime" 
        value="99.9%" 
        trend="neutral" 
      />
    </div>
  </div>
</template>

<style>
body { background: #f8fafc; font-family: sans-serif; padding: 2rem; }
h1 { color: #334155; margin-bottom: 2rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
</style>