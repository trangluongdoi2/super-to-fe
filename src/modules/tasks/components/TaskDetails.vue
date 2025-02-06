<template>
  <div class="w-full relative hover:cursor-pointer flex flex-row items-center justify-between">
    <section class="w-[calc(100%-30px)]" v-if="!isEditing">
      <h1>{{ item.title }}</h1>
      <p>{{ item.status }}</p>
      <p>{{ item.note }}</p>
    </section>
    <section class="w-[calc(100%-30px)]" v-else>
      <TaskForm :item="item" @change="handleChange" />
    </section>
    <div class="absolute top-[50%] -translate-y-1/2 right-0 flex flex-col gap-y-2">
      <AppIcon @click.stop="editTask" name="edit" size="10" />
      <AppIcon @click.stop="editTask" name="done" size="10" :disable="!isChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, defineProps, computed } from 'vue';
import { ITask } from '@/types/task';
import AppIcon from '@/core/components/AppIcon.vue';
import TaskForm from '@/modules/tasks/components/TaskForm.vue';
import { isEqual } from '@/common';

const props = defineProps({
  item: {
    type: Object as PropType<ITask>,
    required: true,
  },
});

const isEditing = ref<boolean>(false);

const task = ref<ITask>(props.item);

const isChange = computed(() => !isEqual(task.value, props.item));

const handleChange = (data: ITask) => {
  task.value = data;
}

const editTask = () => {
  isEditing.value = !isEditing.value;
}
</script>