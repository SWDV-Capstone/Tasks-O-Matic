<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Your GG {{ $route.params.id }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <!-- <ion-header collapse="condense">
                <ion-toolbar>
                <ion-title size="large">Your {{ $route.params.id }}</ion-title>
                </ion-toolbar>
            </ion-header> -->

            <ion-card>
                <ion-card-header>
                <ion-card-title>Group Title</ion-card-title>
                <ion-card-subtitle>Group Description</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    Task Items picker goes here
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { 
  IonButtons, 
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
  IonList,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  IonCheckbox,
  IonIcon,
  IonToolbar, 
  IonAccordion, 
  IonAccordionGroup, 
} from '@ionic/vue';
import { ref } from 'vue';
import {
  starOutline,
  starSharp,
} from 'ionicons/icons';
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
