<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content flex flex-col">
      <!-- <slot name="header">
        <div class="modal-header h-[40px] flex item-center justify-between">
          <h3>{{ title }}</h3>
          <button class="close-button" @click="closeModal">X</button>
        </div>
      </slot> -->
      <div class="header w-full p-2" v-if="!hiddenHeader">
        <slot name="header">
          <div class="flex items-center justify-between">
            <h3>{{ title }}</h3>
            <!-- <button class="close-button" @click="closeModal">X</button> -->
          </div>
        </slot>
      </div>
      <div class="content w-full p-2">
        <slot name="content" />
      </div>
      <div class="footer w-full p-2" v-if="!hiddenFooter">
        <slot name="footer">
          <div v-if="!hiddenFooter" class="modal-footer h-[40px] flex item-center justify-end gap-x-2">
            <button class="close-button" @click="closeModal">Close</button>
            <button class="close-button" @click="$emit('ok')">Ok</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  hiddenFooter: {
    type: Boolean,
    default: false,
  },
});

const isVisible = ref<boolean>(false);

const emit = defineEmits(['ok']);

const openModal = () => {
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

defineExpose({
  openModal,
  closeModal,
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  max-width: 1000px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
</style>