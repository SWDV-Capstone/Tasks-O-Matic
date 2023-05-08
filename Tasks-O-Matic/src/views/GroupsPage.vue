<template>
  <ion-page>
    <Header></Header>
    <AddItem />
      <!-- <add-group /> -->
    <ion-content>
      <!-- <group-counter /> -->
      <!-- <group-list /> -->

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Header from '@/components/PageHeader.vue'
// import AddGroup from '@/components/AddGroup.vue'
// import GroupCounter from '@/components/GroupCounter.vue'
// import GroupList from '@/components/GroupList.vue'
import AddItem from '@/components/AddItem.vue';


import { 
  IonContent, 
  IonPage,
} from '@ionic/vue';

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
