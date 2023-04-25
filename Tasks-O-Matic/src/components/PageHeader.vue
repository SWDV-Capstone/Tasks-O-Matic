<template>
  <ion-header class="header" :translucent="true">
    <ion-toolbar>
      <ion-img src="../favicon.png" style="max-width: 5%" slot="start" />
      <ion-label slot="end">User's Name Here</ion-label>
    </ion-toolbar>

    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>Your {{ $route.params.id }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
// import Header from '@/components/PageHeader.vue'

import { 
  IonHeader, 
  IonToolbar,
  IonLabel,
  IonImg,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/vue';
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
