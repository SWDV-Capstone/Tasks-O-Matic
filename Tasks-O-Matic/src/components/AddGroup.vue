<template>
  <ion-content class="AddGroup">
      <ion-item>
        <ion-input v-model="groupState.group" type="text" placeholder="Enter Group Name"></ion-input>
        <ion-button @click="createGroup()" >Add</ion-button>
        <h3 v-show="groupState.invalid" class="err-msg">{{ groupState.errMsg }}</h3>
      </ion-item>
      {{ groupState.group }}

  </ion-content>
</template>

<script setup lang="ts">
// import AddGroup from '@/components/AddGroup.vue'
import { reactive, defineEmits } from 'vue';

import { 
  IonContent,
  IonInput,
  IonButton,
  IonItem
} from '@ionic/vue';

const emit = defineEmits([
  'create-Group',
])
const groupState = reactive({
  group: '',
  invalid: false,
  errMsg: '',
})

const createGroup = () => {
  groupState.invalid = false;
  if (groupState.group !== '') {
    emit('create-Group', groupState.group);
    groupState.group = '';
    return
  }
    groupState.invalid = true;
    groupState.errMsg = 'Please enter a group name';
};


</script>

<style scoped>
ion-content.md {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
}
ion-toolbar.md {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
}
ion-content.ios {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px  
  --padding-bottom: 10px;
}
ion-toolbar.ios {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
}</style>
