<template>
  <div ref="containerRef" :class="`ae-field-container ${className || ''}`" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { cloneFieldNode } from '../vanilla/field.js';
import type { Ref } from 'vue';

interface Props {
  name: string;
  className?: string;
}

const props = defineProps<Props>();
const containerRef: Ref<HTMLDivElement | null> = ref(null);
let clonedNode: Node | null = null;

const updateField = () => {
  if (!containerRef.value) return;

  if (clonedNode) {
    containerRef.value.removeChild(clonedNode);
    clonedNode = null;
  }

  const cloned = cloneFieldNode(props.name);
  if (cloned) {
    containerRef.value.appendChild(cloned);
    clonedNode = cloned;
  }
};

onMounted(updateField);
watch(() => props.name, updateField);

onUnmounted(() => {
  if (clonedNode && containerRef.value) {
    containerRef.value.removeChild(clonedNode);
  }
});
</script>
