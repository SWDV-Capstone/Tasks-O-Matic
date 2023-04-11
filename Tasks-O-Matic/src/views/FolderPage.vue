<template>
  <ion-page>
    
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Your XXX {{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Your XXX{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-accordion-group>
        <ion-accordion  v-for="(g, i) in groups" :key="i">

          <ion-item slot="header" color="light">
            <ion-label>{{ g.title }}</ion-label>
            <ion-checkbox aria-label="Label" slot="start" v-model="g.complete"></ion-checkbox>
            <!-- <ion-icon aria-hidden="true" slot="start" :ios="heartOutline" :md="heartSharp"></ion-icon> -->
            <ion-icon aria-hidden="true" slot="end" :ios="starOutline" :md="starSharp"></ion-icon>
          </ion-item>

          <!-- <ion-item :fullscreen="true" class="ion-padding" slot="content" v-for="(t, i) in g.tasks" :key="i">
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
          </ion-item> -->

          <ion-list :fullscreen="true" class="ion-padding" slot="content" v-for="(t, i) in g.tasks" :key="i">
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





      <ion-accordion-group>
        <ion-accordion>
          <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">My Job</ion-title>
          </ion-toolbar>
          <ion-item>Bob</ion-item>
          </ion-header>
        </ion-accordion>
      </ion-accordion-group>

      <!-- <ion-list>
        <ion-item-sliding>
          <ion-item>
            <ion-label>TESTing Sliding Item with End Options</ion-label>
          </ion-item>

          <ion-item-options>
            <ion-item-option>Favorite</ion-item-option>
            <ion-icon aria-hidden="true" slot="end" :ios="trash" :md="trash"></ion-icon>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list> -->

      <!-- <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div> -->


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

const groups = [
  {
    title: 'Wash Car',
    tasks: [
      {text: 'Clean interior', completed: true, due: '2021-08-01', priority: true, complete: true },
      {text: 'Vaccume all rugs', completed: true, due: '2021-08-01', priority: true, complete: true },
    ],
    complete: true,
  },
  {
    title: 'Buy Groceries',
    tasks: [
      {text: 'Chicken', completed: false, due: '2021-08-10', priority: false, complete: false},
      {text: 'Milk', completed: true, due: '2021-08-10', priority: false, complete: true},
      {text: 'Bread', completed: false, due: '2021-08-10', priority: false, complete: false},
    ],
    complete: false,
  },
  {
    title: 'Study for Exam',
    tasks: [
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
    ],
    complete: false,
  },
  {
    title: 'Infinite scroll',
    tasks: [
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
      {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
      {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},

    ],
    complete: false,
  }
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
