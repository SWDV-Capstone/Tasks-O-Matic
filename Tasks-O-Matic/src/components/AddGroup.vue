<template>
  <ion-content class="AddGroup">

    <section>
      <div class="input-wrap">
        <ion-input v-model="groupState.group" type="text" placeholder="Enter Name"></ion-input>
        <ion-button @click="createGroup()" >Add Group</ion-button>
        <h3 v-show="groupState.invalid" class="err-msg">{{ groupState.errMsg }}</h3>
      </div>
      {{ groupState.group }}
    </section>

    <section>
      <ion-list>
        <!-- <ion-item v-for="group in groupList" :key="group">{{ groupList }}</ion-item> -->
      </ion-list>
    </section>

  </ion-content>
</template>

<script setup lang="ts">
// import AddGroup from '@/components/AddGroup.vue'
import { reactive, defineEmits } from 'vue';

import { 
  IonContent,
  IonList,
  IonInput,
  IonButton
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
