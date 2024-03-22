<script setup>
import { defineProps, defineEmits } from "vue";
import IssButton from '@/components/ui-kit/IssButton.vue';

defineProps({
  isDeleteMod: {
    type: Boolean,
    default: false,
  },
  hasSelected: {
    type: Boolean,
    default: false
  }
})

defineEmits([
  'setDeleteMod',
  'addTodo',
  'cancelDeleteMod',
  'deleteSelected'
])

</script>

<template>
  <div class="todo-controls">
    <template v-if="!isDeleteMod">
      <IssButton
          @click="$emit('setDeleteMod')"
          class="ml_10"
          variant="danger"
          text="Удалить задачи"
      />
      <IssButton
          @click="$emit('addTodo')"
          class="ml_10"
          text="Добавить задачу"
      />
    </template>
    <template v-else>
      <IssButton
          @click="$emit('cancelDeleteMod')"
          class="ml_10"
          variant="gray"
          text="Отмена"
      />
      <IssButton
          @click="$emit('deleteSelected')"
          class="ml_10"
          variant="danger"
          v-if="!hasSelected"
          text="Удалить выбранные"
      />
    </template>
  </div>
</template>

<style scoped>
.todo-controls{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>