<template>
  <ion-header class="header" :translucent="true">
    <ion-toolbar>
      <ion-img src="../favicon.png" style="max-width: 5%" slot="start" />
      <!-- <ion-label v-if="isActive" slot="end">ZZZ{{ userName }}MMM</ion-label> -->
      <ion-label slot="end">Hello {{ userName }}</ion-label>
    </ion-toolbar>

    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>Your {{ $route.params.id }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
// import Header from '@/components/PageHeader.vue'
import useUserState from '@/stores/useUserState'
import { IonHeader, IonToolbar, IonLabel, IonImg, IonButtons, IonMenuButton, IonTitle } from '@ionic/vue';

export default {
  name: 'PageHeader',
  components: { IonHeader, IonToolbar, IonLabel, IonImg, IonButtons, IonMenuButton, IonTitle },
  setup: () => {
    // Call users from stores
    // const { state: userState, getIsActive } = useUserState();
    const { state: userState } = useUserState();
    const activeUser = userState.users.find(user => user.isActive === true);
    // const { state: userState, getIsActive } = useUserState();
    return { 
      // users: userState.users,
      // userName: userState.users[0].userName, // Current User
      userName: activeUser ? activeUser.userName : '',
      isActive: userState.users[0].isActive
    }
  }
}

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
