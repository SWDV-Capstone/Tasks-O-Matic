<template>
  <ion-page>
    <Header></Header>

      <ion-content>
        <ion-card v-for="(ti, i) in items" :key="i">
          <ion-card-header>
            <ion-card-title>{{ ti.title }}</ion-card-title>
            <ion-card-subtitle>{{ ti.desc }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
              <!-- {{ ti.somethingElse }} -->
          </ion-card-content>
        </ion-card>
      </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import Header from '@/components/PageHeader.vue'
// import { items } from '../stores/ItemsStore.js'


import { 
    IonContent, 
    IonPage, 
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
} from '@ionic/vue';

const items= [
  {id: 1, title: 'Item 1', desc: 'Task Item 1 Description'},
  {id: 2, title: 'Item 2', desc: 'Task Item 2 Description'},
  {id: 3, title: 'Item 3', desc: 'Task Item 3 Description'},
  {id: 4, title: 'Item 4', desc: 'Task Item 4 Description'},
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
