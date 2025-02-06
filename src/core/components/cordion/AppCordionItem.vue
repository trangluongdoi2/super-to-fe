<template>
  <div class="bg-accent-gray rounded-md w-full flex items-center justify-between" @click="toggle()">
    <button
      class="w-full text-left p-4 focus:outline-none"
      :class="{ 'text-blue-500': open }"
    >
      {{ item.title }}
    </button>
    <slot name="icon" :item="item">
      <div class="p-4">
        <AppIcon name="arrow" size="10" class="arrow-icon" :class="{ 'rotate': open }" />
      </div>
    </slot>
  </div>
  <Transition 
    name="accordion"
    @before-enter="leave"
    @enter="enter"
    @before-leave="enter"
    @leave="leave"
    :duration="100"
  >
  <div v-show="open" class="p-4" ref="contentRef">
    <TaskDetails :item="item" />
  </div>
</Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, PropType } from 'vue';
import AppIcon from '@/core/components/AppIcon.vue';
import TaskDetails from '@/modules/tasks/components/TaskDetails.vue';
import { ITask } from '@/types/task';

defineProps({
  item: {
    type: Object as PropType<ITask>,
    required: true, 
  },
  index: {
    type: Number,
    required: true,
  },
});

const open = ref<boolean>(false);
const scrollHeight = ref<number>(0);
const contentRef = ref<HTMLElement>();
let resizeObserver: ResizeObserver;

const toggle = () => {
  open.value = !open.value;
}

function enter(el: HTMLElement) {
  contentRef.value.style.height = el.scrollHeight + 'px';
}

function leave(el: HTMLElement) {
  contentRef.value.style.height = '0';
}

onMounted(() => {
  if (contentRef.value) {
    scrollHeight.value = contentRef.value.scrollHeight;
    resizeObserver = new ResizeObserver(() => {
      console.log('resizeObserver');
      if (open.value && contentRef.value) {
        contentRef.value.style.height = contentRef.value.scrollHeight + 'px';
      }
    });
    resizeObserver.observe(contentRef.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver && contentRef.value) {
    resizeObserver.unobserve(contentRef.value);
  }
});

</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.5s ease, opacity 0.5s ease;
  overflow: hidden;
}
.accordion-enter, .accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.arrow-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.arrow-icon.rotate {
  transform: rotate(90deg);
}
</style>