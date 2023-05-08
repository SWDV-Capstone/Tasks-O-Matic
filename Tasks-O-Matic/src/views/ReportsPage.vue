<template>
  <ion-page>
    <Header></Header>
    <ion-card>
      <!-- <ItemReports2 /> -->
    </ion-card>
    <ion-content>
      <ion-card v-for="(r, i) in reports" :key="i">
        <ion-card-header>
          <ion-card-title>{{ r.title }}</ion-card-title>
          <ion-card-subtitle>{{ r.desc }}</ion-card-subtitle>
          <IonCardContent>
            <p>{{ r.value }}</p>
          </IonCardContent>
        </ion-card-header>

        <ion-card-content>
            <!-- {{ r.somethingElse }} -->
        </ion-card-content>
      </ion-card>
    </ion-content>
    
  </ion-page>
</template>

<script setup lang="ts">
// import ItemReports2 from '@/components/ItemReports2.vue';
import Header from '@/components/PageHeader.vue'

import { 
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, 
  IonContent, 
  IonPage, 
} from '@ionic/vue';

const reports= [
  {title: 'Allotted Hours Report', desc: 'Allotted hours left to complete', value: 20},
  {title: 'Percent Complete Report', desc: 'Percent of Items Completed', value: 78},
  {title: 'Items Overdue Report', desc: 'Number of Overdue Items', value: 9},
  {title: 'Active Users report', desc: 'Who is the most active user', value: 'Andrew'},
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
