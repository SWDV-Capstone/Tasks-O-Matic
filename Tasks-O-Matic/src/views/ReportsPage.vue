<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-img src="../favicon.png" style="max-width: 5%" slot="start" />
        <ion-title>Your {{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-img src="../favicon.png" style="max-width: 5%" slot="start" />
          <ion-title size="large">Your {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <ion-content>
        <ion-card v-for="(r, i) in reports" :key="i">
          <ion-card-header>
            <ion-card-title>{{ r.title }}</ion-card-title>
            <ion-card-subtitle>{{ r.desc }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
              <!-- {{ r.somethingElse }} -->
          </ion-card-content>
        </ion-card>
      </ion-content>
    
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, 
  IonImg,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle,
  IonToolbar, 
} from '@ionic/vue';

const reports= [
  {title: 'Report 1', desc: 'Report 1 Description'},
  {title: 'Report 2', desc: 'Report 2 Description'},
  {title: 'Report 3', desc: 'Report 3 Description'},
  {title: 'Report 4', desc: 'Report 4 Description'},
]
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
