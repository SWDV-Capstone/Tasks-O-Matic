<template>
  <ion-page>
    <Header></Header>
    <h1>Hello Test Page!</h1>
      <ion-content>
        <!-- <p>{{ store.count }}</p> -->
        <!-- <AddGroup></AddGroup> -->
        <div class="container">
          <h1>Tasks</h1>
          <!-- <ion-list v-for="task in tasks"> -->
            <!-- <ion-item>{{ task }}</ion-item> -->
          <!-- </ion-list> -->
        </div>

      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import Header from '../components/PageHeader.vue'
// import { store } from '../stores/TestStore.js'
// import AddGroup from '@/components/AddGroup.vue'

import { 
  IonContent, 
  IonPage, 
} from '@ionic/vue';

export default{
  data() {
    return {
      tasks: [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
      ],
    };
  }
};

// import { defineComponent, reactive } from 'vue';
// import SimpleModal from '../components/SimpleModal.vue';
// import Header from '../components/PageHeader.vue'

// export default defineComponent ({
//   name: 'TestPage',
//   components: {
//     // Header,
//     IonPage,
//     IonHeader,
//     IonToolbar,
//     IonTitle,
//     IonContent,
//     IonButtons,
//     IonMenuButton,
//     IonCard,
//     IonCardContent,
//     IonCardHeader,
//     IonCardSubtitle,
//     IonCardTitle,
//     IonImg,
//     IonLabel,
//     IonButton,
    // SimpleModal,
  // },
  // state variables
  // setup() {
  //   const modalInfo = reactive<{ show: Boolean; data: any }>({
  //     show: false,
  //     data: null,

  //   });
  //   const showModal = () => {
  //     modalInfo.show = true;
  //   };
  //   const handleModalClosed = (eventData: any) => {
  //     modalInfo.show = false;
  //     alert(JSON.stringify(eventData));
  //   };
  //   return {
  //     showModal,
  //     handleModalClosed
  //     modalInfo,
  //   };
  // },
// });

// const groups= [
//   {title: 'Group 1', desc: 'Group 1 Description'},
//   {title: 'Group 2', desc: 'Group 2 Description'},
//   {title: 'Group 3', desc: 'Group 3 Description'},
//   {title: 'Group 4', desc: 'Group 4 Description'},
// ]
</script>

<!-- <style scoped>
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
ion-content.md {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
}
/* ion-toolbar.md {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
} */
ion-content.ios {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
}
</style> -->