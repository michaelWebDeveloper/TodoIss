<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import IconClose from '@/components/icons/IconClose.vue';
import IssButton from '@/components/ui-kit/IssButton.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  actionButtonText: {
    type: String,
    default: 'Добавить'
  }
})

defineEmits(['closeModal', 'makeAction'])
</script>

<template>
  <template v-if="isOpen">
    <div class="add-modal_overlay"></div>
    <div class="add-modal_container container">
      <div class="add-modal_wrapper card">
        <div class="add-modal_close">
          <IconClose @click="$emit('closeModal')" :size="30" />
        </div>
        <h2 class="todo-title">{{title}}</h2>

        <slot></slot>

        <div class="todo-form_actions">
          <IssButton @click="$emit('closeModal')" class="ml_10" variant="gray" text="Закрыть" />
          <IssButton @click="$emit('makeAction')" class="ml_10" :text="actionButtonText" />
        </div>
      </div>
    </div>
  </template>
</template>

<style>
.add-modal_overlay{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--background-overlay)
}
.add-modal_container{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}
.add-modal_wrapper{
  position: relative;
  width: 400px;
  height: 540px;
}
.add-modal_close{
  position: absolute;
  top: 33px;
  right: 20px;
  color: var(--icon-color);
  cursor: pointer;
}

.todo-form_actions{
  position: absolute;
  bottom: 30px;
  width: calc(100% - 60px);
  display: flex;
  justify-content: flex-end;
}
</style>