<!-- This component will list all groups and add functionality -->
<template>
  <form @submit.prevent="onClickAddGroup()">
    <ion-item>
      <ion-label>Enter Group Name</ion-label>
      <!-- <ion-input 
          v-model="newGroup" 
          class="input"
          type="text" 
          placeholder="Add Group"
          ></ion-input> -->
      <!-- <ion-input v-model="groupState.group.title"></ion-input> -->
      <!-- <ion-input v-model="groupState.group"></ion-input> -->
      <ion-button @click="onClickAddGroup()">Add</ion-button>
    </ion-item>
  </form>
</template>

<script lang="ts">
import { ref } from 'vue';
import useGroupState from '@/stores/useGroupState';
import { IonItem, IonLabel, IonButton } from '@ionic/vue'
// import { store } from '@/stores/TestStore';

export default {
  name: 'AddGroup',
  components: { IonItem, IonLabel, IonButton },
  setup: () => {
      // Groups store hook

      const { state: groupState, addGroup } = useGroupState();

      const numberOfGroups = ref(groupState.groups.length);

      const onClickAddGroup = () => {
          addGroup({
              id: groupState.groups.length + 1,
              title: `Added Group ${groupState.groups.length + 1}`,
              desc: ''
          });
          numberOfGroups.value += 1;
      }

      return {
          groups: groupState.groups,
          numberOfGroups,
          onClickAddGroup,
      }
  }
}

</script>

<style scoped>
</style>