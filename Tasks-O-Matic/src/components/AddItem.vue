<!-- * eslint-disable * -->
<template>
    <ion-list>
        <form @submit.prevent="submitForm">
            <h1>New Item</h1>

            <!-- Name Item -->
            <ion-item>
                <h4>Item Name</h4>
                <!-- <lable for="itemName">Add a new item</lable> -->
                <ion-input type="text" id="itemName" v-model="itemName" placeholder="Enter item name" />
            </ion-item>

            <!-- Item Description -->
            <ion-item>
                <h4>Item Description</h4>
                <!-- <lable for="itemName">Add a new item</lable> -->
                <ion-input type="text" id="itemDesc" v-model="itemDesc" placeholder="Enter item description" />
            </ion-item>

            <!-- Item Details -->
            <ion-item>
                <h4>Assigned User</h4>
                <ion-input type="text" v-model="userName" placeholder="Enter user" />
            </ion-item>
            <!-- <div>
                <h4>Due Date</h4>
                <input type="date" v-model="itemDateDue" />
            </div> -->
            <ion-item>
                <h4>Time Allotted (hrs.)</h4>
                <ion-input type="number" v-model="itemTimeAllotted" />
            </ion-item>

            <!-- Save Item -->
            <ion-button @click="addNewItem">Add</ion-button>
        </form>
    </ion-list>
</template>

<script>
import db from '../firebase/firebaseInit';
import { uid } from 'uid';
// import {mapMutations } from 'vuex';
import { IonList, IonItem, IonInput, IonButton } from '@ionic/vue'


export default {
    name: 'AddItem',
    components: { IonList, IonItem, IonInput, IonButton },
    data() {
        return {
            dateOptions: { year: 'numeric', month: 'long', day: 'numeric' },
            itemDateCreated: null,
            itemName: null,
            itemDesc: null,
            itemDateDue: null,
            itemTimeAllotted: null,
            TimeTotal: 0,
            userName: null,
            itemList: [],
            // newItem: '',
        }
    },
    created() {
        // this.itemDateCreated = Date.now();
        this.itemDateCreated = new Date().toLocaleDateString('en-US', this.dateOptions);
    },
    methods: {
        // Item List
        addNewItem() {
            this.itemList.push({
                // id: this.itemList.length + 1,
                // id: uid(),
                id: uid(),
                itemName: '',
                itemDesc: '',
                // itemDateDue: '',
                itemTimeAllotted: 0,
                userName: '',
            });

            //     itemName: this.itemName,
            //     itemDesc: this.itemDesc,
            //     itemDateDue: this.itemDateDue,
            //     itemTimeAllotted: this.itemTimeAllotted,
            //     userName: this.userName,
            // });
            this.itemName = '';
            this.itemDesc = '';
            // this.itemDateDue = '';
            this.itemTimeAllotted = '';
            this.userName = '';
            this.submitForm();
        },
        async uploadItem() {
            // if (this.itemName == '') {
            //     alert('Please enter an item name');
            //     return;
            // }

            // Create a new items collection
            const dataBase = db.collection('items').doc();
            // Set item data for collection
            await dataBase.set({
                id: uid(6),
                itemName: this.itemName,
                itemDesc: this.itemDesc,
                // itemDateDue: this.itemDateDue,
                itemTimeAllotted: this.itemTimeAllotted,
                userName: this.userName,
            });
        },
        submitForm() {
            this.uploadItem();
        },
    }
}
</script>