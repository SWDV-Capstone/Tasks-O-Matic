<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-img src="../favicon.png" style="max-width: 5%" slot="start" />
                <ion-title>Tasks-O-Matic</ion-title>
            </ion-toolbar>
        </ion-header>

        <!-- <user-login /> -->

        <ion-content>

            <ion-label>Enter Username and Password to Login</ion-label>
            <ion-list :inset="true">
                <ion-textarea ref="input" fill="solid" style="font-weight: bold" label="Username" label-placement="floating"></ion-textarea>
                <br/>
                <ion-textarea ref="input" fill="solid" style="font-weight: bold" label="Password" label-placement="floating"></ion-textarea>
                <br/>
            </ion-list>
                <ion-button>Login</ion-button>
                <h6 style="font-weight: bold"><a href=https://www.google.com>Forgot Password?</a></h6>
        
            </ion-content>
    </ion-page>
</template>

<script lang="ts">
// import UserLogin from '../components/UserLogin.vue';
import { IonPage, IonContent, IonHeader, IonToolbar, IonImg, IonTitle, IonList, IonLabel, IonTextarea, IonButton } from '@ionic/vue';

export default {
    name: 'LoginPage',
    components: { IonPage, IonContent, IonHeader, IonToolbar, IonImg, IonTitle, IonList, IonLabel, IonTextarea, IonButton },
    // components: { UserLogin },
    setup: () => {
        return {
            // UserLogin,
        }
    }
}

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
  --padding-top: 10px;
  --padding-bottom: 10px;
}

ion-toolbar.ios {
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
}
</style>
