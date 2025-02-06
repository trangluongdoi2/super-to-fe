<template>
  <header class="sticky top-0 z-10 bg-accent-gray mx-auto p-4 h-[80px] w-100 flex justify-between items-center">
    <div class="w-full flex items-center justify-between">
      <div>
        <h1 class="uppercase">Assignment</h1>
      </div>
      <div>Nguy Minh Tai</div>
    </div>
  </header>
  <h1 class="my-2 text-center uppercase">My Tasks List</h1>
  <div class="bg-light-base w-full flex flex-col gap-4 items-center justify-center p-10 pt-0">
    <button class="h-[40px] w-[120px] bg-accent-gray text-white rounded-md font-bold" @click="openTaskCreateModal">Create Task</button>
    <div v-if="!items.length">
      <h1>No tasks found</h1>
    </div>
    <AppCordion :items="items" >
      <template v-slot:content="{ item }">
        <TaskDetails :item="item" />
      </template>
    </AppCordion>
  </div>
  <AppModal ref="createTaskModalEl" @ok="openTaskCreateModal">
    <template v-slot:header>
      <h3>Create Task</h3>
    </template>
    <template v-slot:content>
      <TaskForm @change="updateTaskCreate" :hiddenFooter="true" />
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { ITask } from '@/types/task';
import { useGlobalState } from '@/composables/useGlobalState';
import TaskApi from '@/modules/tasks/api/taskApi';
import AppCordion from '@/core/components/cordion/AppCordion.vue';
import AppModal from '@/core/components/AppModal.vue';
import TaskForm from '@/modules/tasks/components/TaskForm.vue';
import TaskDetails from '@/modules/tasks/components/TaskDetails.vue';

// const items = ref<ITask[]>([]);
const createTaskModalEl = ref<InstanceType<typeof AppModal>>();
const { userRole } = useGlobalState();

const currentTask = ref<ITask | null>(null);
const createTask = ref<ITask | null>(null);

const items = [
  {
    title: 'Task 1',
    description: 'Description 1',
    status: 'Status 1',
  },
  {
    title: 'Task 2',
    description: 'Description 2',
    status: 'Status 2',
  },
  {
    title: 'Task 3',
    description: 'Description 3',
    status: 'Status 3',
  },
]

const openTaskCreateModal = async () => {
  createTaskModalEl.value?.openModal();
}

const updateTaskCreate = async (task: ITask) => {
  createTask.value = task;
  // await TaskApi.createTask(task);
}

const updateTaskEdit = async (task: ITask) => {
  currentTask.value = task;
}

onBeforeMount(async () => {
  // items.value = await TaskApi.getAllTasks({ userRole: userRole.value });
});

</script>