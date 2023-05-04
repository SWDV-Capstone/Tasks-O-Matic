<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <form submit.prevent="onSubmit()" >
        <ion-item>
            <ion-input
                type="text"
                v-model="loginForm.userName"
                class="text-input"
                placeholder="Enter your username"
	            aria-label="username"
            ></ion-input>
        </ion-item>
        <ion-item>
            <ion-input
                type="password"
                v-model="loginForm.passWord"
                class="text-input"
                placeholder="Enter your password"
	            aria-label="password"
            ></ion-input>
        </ion-item>
        <!-- <ion-item>
            <ion-input
                type="email"
                v-model="loginForm.email"
                class="text-input"
                placeholder="Enter your email"
	            aria-label="email"
            ></ion-input>
        </ion-item> -->

        <ion-button type="submit">
            Submit
        </ion-button>
    </form>
</template>

<script lang="ts">
import { IonItem, IonInput, IonButton } from '@ionic/vue'
// import { defineComponent } from 'vue'

import { ref } from 'vue'
import useUserState from '@/stores/useUserState'

export default {
    name: 'UserLogin',
    components: { IonItem, IonInput, IonButton },
    setup: () => {
        const loginForm = ref({
            userName: '',
            passWord: '',
            // email: '',
        })

        const { updateUserData } = useUserState()

        // const onSubmit  {
        //     console.log(loginForm.value);
        // }

        const onSubmit = () => {
            console.log(loginForm.value)
            login().then((data) => updateUserData(data))
        }
        return {
            loginForm, 
            onSubmit,
        }
    }
}
</script>

<style scoped>
</style>