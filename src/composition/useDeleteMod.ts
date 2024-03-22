import {ref} from "vue";

export default () => {
    /**
     * Режим удаления
     */
    const deleteMod = ref(false);
    const deleteList = ref<number[]>([])

    // Добавление\удаление идентификатора в списке задач на удаление
    const toggleDeleteItem = (id) => {
        const deleteIndex = deleteList.value.indexOf(id);
        if(deleteIndex === -1){
            deleteList.value.push(id);
        }else{
            deleteList.value.splice(deleteIndex, 1)
        }
    }

    // Отмена режима удаления
    const cancelDeleteMod = () => {
        deleteMod.value = false;
        deleteList.value = []
    }

    return {
        deleteMod,
        deleteList,
        toggleDeleteItem,
        cancelDeleteMod
    }
}