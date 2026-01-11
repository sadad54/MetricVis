<script setup lang="ts">
import {computed} from 'vue';
const props = defineProps<{
    data: number[];
    color?: string;
    height?: number;
}>();

//svg dimensions
const width=300;
const height = props.height || 100;
const maxVal = 100;

const pathDefinition = computed(() => {
    if (!props.data || props.data.length === 0) {
        return '';
    }
    const stepX = width / (props.data.length - 1);
   const points = props.data.map((val, index) => {
    const x = index * stepX;
    const y = height - (val / maxVal) * height; // Invert Y because SVG 0 is top
    return `${x},${y}`;
  });

  return `M ${points.join(' L ')}`; // "Move to... Line to..."
});
</script>
<template>
  <div class="mv-chart-container">
    <svg :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" :stop-color="color || '#3b82f6'" stop-opacity="0.5" />
          <stop offset="100%" :stop-color="color || '#3b82f6'" stop-opacity="0" />
        </linearGradient>
      </defs>

      <path
        :d="pathDefinition"
        fill="none"
        :stroke="color || '#3b82f6'"
        stroke-width="2"
        vector-effect="non-scaling-stroke"
      />
      
      <path
        :d="`${pathDefinition} L ${width},${height} L 0,${height} Z`"
        fill="url(#gradient)"
        stroke="none"
      />
    </svg>
  </div>
</template>

<style scoped>
.mv-chart-container {
  width: 100%;
  height: 100%;
  min-height: 100px;
  overflow: hidden;
}
svg {
  width: 100%;
  height: 100%;
  display: block; /* Removes bottom scrollbar gap */
}
</style>