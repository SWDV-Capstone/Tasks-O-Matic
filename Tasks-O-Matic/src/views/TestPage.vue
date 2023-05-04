<template>
  <ion-page>
    <Header></Header>
      <h1>Hello Test Page!</h1>
    <ion-content>
      <group-list />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Header from '../components/PageHeader.vue'
import GroupList from '@/components/GroupList.vue'

import { 
  IonContent, 
  IonPage, 
} from '@ionic/vue';

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