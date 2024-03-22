<script setup lang="ts">
import { filterStates } from "@/consts/filter";
import IssFilterItem from '@/components/ui-kit/IssFilterItem.vue';
import IconInbox from '@/components/icons/IconInbox.vue';
import IconDone from '@/components/icons/IconDone.vue';
import IconNotDone from '@/components/icons/IconNotDone.vue';
import useTodoStore from "@/stores/useTodoStore";

const todoStore = useTodoStore();
const getIsActive = (state) => {
  return todoStore.filterState === filterStates[state];
}
</script>

<template>
  <div>
    <IssFilterItem
        text="Все"
        :is-active="getIsActive('ALL')"
        @click="todoStore.setFilterState(filterStates['ALL'])"
    >
      <icon-inbox/>
    </IssFilterItem>

    <IssFilterItem
        text="Не выполненные"
        :is-active="getIsActive('IN_PROGRESS')"
        @click="todoStore.setFilterState(filterStates['IN_PROGRESS'])"
    >
      <icon-done/>
    </IssFilterItem>

    <IssFilterItem
        text="Выполненные"
        :is-active="getIsActive('DONE')"
        @click="todoStore.setFilterState(filterStates['DONE'])"
    >
      <icon-not-done/>
    </IssFilterItem>
  </div>
</template>