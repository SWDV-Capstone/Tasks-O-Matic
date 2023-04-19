<template>
  <ion-page>
    <Header></Header>
    <ion-content>
      <ion-accordion-group>
        <ion-accordion  v-for="(tg, i) in taskGroups" :key="i">

          <ion-item slot="header" color="light">
            <ion-label>{{ tg.title }}</ion-label>
            <ion-checkbox aria-label="Label" slot="start" v-model="tg.complete"></ion-checkbox>
            <!-- <ion-icon aria-hidden="true" slot="start" :ios="heartOutline" :md="heartSharp"></ion-icon> -->
            <ion-icon aria-hidden="true" slot="end" :ios="starOutline" :md="starSharp"></ion-icon>
          </ion-item>

          <ion-list :fullscreen="true" class="ion-padding" slot="content" v-for="(t, i) in tg.tasks" :key="i">
            <ion-item-sliding>
              <ion-item>
                <input type="checkbox" slot="end" v-model="t.complete">
                <ion-label>
                  {{ t.text }}
                </ion-label>
                <ion-label class="ion-padding" slot="content">
                  Due date: {{ t.due }}
                </ion-label>
                <ion-label class="ion-padding" slot="content">
                  Priority: {{ t.priority }}
                </ion-label>
              </ion-item>
              <ion-item-options>
                <ion-item-option>EDIT</ion-item-option>
                <ion-item-option color="danger">DELETE</ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          </ion-list>
        </ion-accordion>
      </ion-accordion-group>

    </ion-content>
  </ion-page>
</template>
  
  <script setup lang="ts">
  import Header from '@/components/PageHeader.vue'
  import { taskGroups } from '../stores/TaskGroupsStore.js'

  import { 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage,
    IonImg, 
    IonTitle,
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
    IonCard,
  } from '@ionic/vue';
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
  