<script setup lang="ts">
// Defined props for reusability - strict typing
defineProps<{
  title: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  percentage?: number;
}>();
</script>

<template>
  <div class="mv-card">
    <h3 class="mv-title">{{ title }}</h3>
    <div class="mv-content">
      <span class="mv-value">{{ value }}</span>
      <span 
        v-if="trend" 
        :class="['mv-badge', `mv-${trend}`]"
      >
        {{ trend === 'up' ? '↑' : '↓' }} {{ percentage }}%
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Pure CSS for zero-dependency portability */
.mv-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  font-family: sans-serif;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.mv-title { color: #64748b; font-size: 0.875rem; margin: 0 0 8px 0; }
.mv-value { font-size: 1.5rem; font-weight: 700; color: #0f172a; }
.mv-content { display: flex; align-items: baseline; gap: 12px; }
.mv-badge { font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; font-weight: 600; }
.mv-up { background: #dcfce7; color: #166534; }
.mv-down { background: #fee2e2; color: #991b1b; }
</style>