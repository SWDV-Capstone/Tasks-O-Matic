<template>
  <ion-page>
    <Header></Header>
      <ion-content>Hello Test Page!
        <p>{{ store.count }}</p>
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Header from '../components/PageHeader.vue'
import { store } from '../stores/store.js'

import { 
  IonButtons,
  IonButton,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle,
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  IonToolbar,
  IonImg,
  IonLabel,
} from '@ionic/vue';

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