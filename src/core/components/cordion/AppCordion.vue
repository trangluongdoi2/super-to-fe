<template>
  <div class="accordion w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-gray-200"
    >
      <AppCordionItem :item="item" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITask } from '@/types/task';
import { PropType } from 'vue';
import AppCordionItem from '@/core/components/cordion/AppCordionItem.vue';

defineProps({
  items: {
    type: Array as PropType<ITask[]>,
    default: () => ([])
  }
})
</script>