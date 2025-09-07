<template>
  <div class="actions-container">
    <button
      class="button front-button"
      @click="setCardBack(false)"
    >
      Front
    </button>
    <button
      class="button back-button"
      @click="setCardBack(true)"
    >
      Back
    </button>
  </div>
</template>

<script setup>
import { consts } from '@anki-eco/shared';

const setCardBack = (back) => {
  if (window[consts.globalSetBack]) {
    window[consts.globalSetBack](back);
  }
};
</script>

<style scoped>
.actions-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  z-index: 9999;
  font-family: system-ui, -apple-system, sans-serif;
}

.button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  min-width: 60px;
}

.front-button {
  background: white;
  color: black;
}

.back-button {
  background: #333;
  color: white;
}
</style>
