<script setup lang="ts">
import { defineEmits, defineProps, PropType} from "vue";
import { Todo } from '@/types/todoTypes'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDeleteChecked from '@/components/icons/IconDeleteChecked.vue'
import IconDeleteUnchecked from '@/components/icons/IconDeleteUnchecked.vue'

defineProps({
  deleteChecked: {
    type: Boolean,
    default: false
  },
  deleteMode: {
    type: Boolean,
    default: false
  },
  todoItem: {
    type: Object as PropType<Todo>,
    required: true
  }
})

defineEmits(['toggleIsDone', 'editItem', 'checkDeleteItem' ])
</script>

<template>
  <div class="todo-wrapper">
    <div class="todo-item" :class="{['is-done']: todoItem.isDone}">
      <div class="todo-item_info">
        <div @click="$emit('toggleIsDone')" class="todo-item_state" :class="{['is-done']: todoItem.isDone}"></div>
        <div class="todo-item_text">{{todoItem.name}}</div>
      </div>
      <div class="todo-item_interface">
        <IconEdit @click="$emit('editItem')" class="todo-item_edit" />
      </div>
    </div>


    <div @click="$emit('checkDeleteItem')" v-if="deleteMode" class="todo-item_delete">
      <IconDeleteChecked :size="26" v-if="deleteChecked" />
      <IconDeleteUnchecked :size="26" v-else />
    </div>
  </div>

</template>

<style scoped>
.todo-wrapper{
  position: relative;
}
.todo-item{
  background-color: var(--background-interactable);
  padding: 7px 18px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity 1s;
}
.todo-item.is-done{
  opacity: .4;
}
.todo-item_info{
  display: flex;
  align-items: center;
}
.todo-item_state{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border: 2px solid var(--icon-color);
  border-radius: 50%;
  cursor: pointer;
}
.todo-item_state.is-done{
  background-color: var(--icon-color);
}
.todo-item_text{
  font-size: 16px;
}
.todo-item_interface{
  display: flex;
  align-items: center;
}
.todo-item_edit{
  cursor: pointer;
}
.todo-item_delete{
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #fa5858;
  cursor: pointer;
  position: absolute;
  top: 7px;
  right: 38px;
}
</style>