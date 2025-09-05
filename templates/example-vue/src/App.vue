<script setup lang="ts">
import { AnkiField, useIsBack } from '@anki-eco/kit/vue';

const isBack = useIsBack();
</script>

<template>
  vue test <AnkiField name="Q" />
  <AnkiField v-if="isBack" name="A" />
</template>
