<template>
  <ion-page>
    <Header></Header>

    <ion-content>

      <AddGroup @create-group="createGroup" />


      <!-- <ion-card ref="groups" v-for="(g, i) in groups" :key="i">
        <ion-card-header>
          <ion-card-title>{{ g.title }}</ion-card-title>
          <ion-card-subtitle>{{ g.desc }}</ion-card-subtitle>
        </ion-card-header>
          <ion-card-content>
              {{ g.somethingElse }}
          </ion-card-content>
      </ion-card> -->

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { uid } from 'uid'
import Header from '@/components/PageHeader.vue'
import AddGroup from '@/components/AddGroup.vue'
// import { groups } from '../stores/GroupsStore.js'


import { 
  IonContent, 
  IonPage, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
} from '@ionic/vue';

const groupList = ref([]);

const createGroup = (group) => {
  groupList.value.push({
    id: uid(),
    group,
    isCompleted: null,
    isPriority: null,
  });
}

// const groups = ref()
// onMounted(() => {
//   groups.value: []
// })

// const groups= [
//   {title: 'Group 1', desc: 'Group 1 Description'},
//   {title: 'Group 2', desc: 'Group 2 Description'},
//   {title: 'Group 3', desc: 'Group 3 Description'},
//   {title: 'Group 4', desc: 'Group 4 Description'},
// ]
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
