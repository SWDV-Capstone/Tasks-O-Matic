<template>
    <div class="item-list-table">
        <!-- <h2>Item List</h2>
        <h4>200 Items</h4> -->
        <ItemReports2 :timeTotal="timeTotal" />

        <ion-grid class="item-list">
            <ion-row class="table-heading">
                <ion-col>Item Name</ion-col>
                <ion-col>Item Description</ion-col>
                <ion-col>Assigned User</ion-col>
                <ion-col>Due Date</ion-col>
                <ion-col>Time Allotted</ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid class="table-data">
            <ion-row class="table-data" v-for="(item, index) in itemList" :key="index">
                <ion-col><ion-input type="text" v-model="item.itemName" /></ion-col>
                <ion-col><ion-textarea :auto-grow="true" type="text" v-model="item.itemDesc" /></ion-col>
                <ion-col><ion-input type="text" v-model="item.userName" /></ion-col>
                <ion-col><ion-input type="date" v-model="itemDateDue" /></ion-col>
                <ion-col><ion-input type="number" v-model="itemTimeAllotted" /></ion-col>
                <ion-button @click="deleteItem(item.id)">Delete</ion-button>
                <ion-button @click="closeItem(item.id)">Done</ion-button>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script>
// import db from '../firebase/firebaseInit';
import ItemReports2 from './ItemReports2.vue';
import { IonGrid, IonRow, IonCol, IonInput, IonTextarea, IonButton } from '@ionic/vue';

export default {
    name: 'ItemList',
    components: { ItemReports2, IonGrid, IonRow, IonCol, IonInput, IonTextarea, IonButton },
    data() {
        return {
            dateOptions: { year: 'numeric', month: 'long', day: 'numeric' },
            itemDateCreated: null,
            itemName: null,
            itemDesc: null,
            itemDateDue: null,
            itemTimeAllotted: null,
            timeTotal: 0,
            userName: null,
            itemList: [],
            newItem: '',
        }
    },
    created() {
        this.itemDateCreated = Date.now();
        this.itemDateCreated = new Date().toLocaleDateString('en-US', this.dateOptions);
    },
    methods: {
        // const dataBase = db.collection('items').doc();

        // Item List
        deleteItem(id) {
            this.itemList = this.itemList.filter(item => item.id !== id);
        },
        closeItem(id) {
            this.itemList = this.itemList.filter(item => item.id !== id);
        },
        calcTimeTotal() {
            this.timeTotal = 0;
            this.itemList.forEach(item => {
                this.timeTotal += item.itemTimeAllotted;
            });
        },
        // sendTimeTotalToReports() {
        //     this.$emit('sendTimeTotal', this.timeTotal);
        // },
    },
    // mounted() {
    //     this.sendTimeTotalToReports();
    // },
}
</script>