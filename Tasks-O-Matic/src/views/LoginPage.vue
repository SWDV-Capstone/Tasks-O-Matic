<template>
    <ion-page>
        <ion-header :translucent="true">
      <ion-toolbar>
        <ion-img src="../favicon.png" style="max-width: 5%" slot="start" />
        <ion-title>Tasks-O-Matic</ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content>
            <ion-label>Enter Username and Password to Login</ion-label>
            <ion-list :inset="true">
                <ion-textarea ref="input" fill="solid" style="font-weight: bold" label="Username" label-placement="floating"></ion-textarea>
                <br/>
                <ion-textarea ref="input" fill="solid" style="font-weight: bold" label="Password" label-placement="floating"></ion-textarea>
                <br/>
            </ion-list>
                    <!-- helper-text="Enter Username" error-text="Invalid Username" @ion-blur="markTouched" -->
                <ion-button>Login</ion-button>
                <h6 style="font-weight: bold"><a href=https://www.google.com>Forgot Password?</a></h6>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonContent,
    IonTitle,
    IonList,
    IonLabel,
    IonTextarea,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonImg,
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
ion-content.md {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
}
ion-toolbar.md {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
}
ion-content.ios {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
}

ion-toolbar.ios {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
}
</style>
