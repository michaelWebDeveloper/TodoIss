<script setup>
import IssFilterItem from '@/components/ui-kit/IssFilterItem.vue';
import IconInbox from '@/components/icons/IconInbox.vue';
import IconDone from '@/components/icons/IconDone.vue';
import IconNotDone from '@/components/icons/IconNotDone.vue';
</script>

<template>
  <div>
    <IssFilterItem text="Все" :is-active="true">
      <icon-inbox/>
    </IssFilterItem>

    <IssFilterItem text="Не выполненные" :is-active="false">
      <icon-done/>
    </IssFilterItem>

    <IssFilterItem text="Выполненные" :is-active="false">
      <icon-not-done/>
    </IssFilterItem>
  </div>
</template>