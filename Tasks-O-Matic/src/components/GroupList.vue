<!-- This component will list all groups and add functionality -->
<template>
    <ion-item>
        <ion-label>Group Name</ion-label>
        <!-- <ion-input v-model="groupState.group"></ion-input> -->
        <ion-button @click="onClickAddGroup()">Add</ion-button>
    </ion-item>
    <!-- Beautify the groups a list of cards -->
    <ion-label>Total Groups: {{ numberOfGroups }}</ion-label>
        <ion-list>
            <ion-card v-for="group in groups" :key="group.id">
                <ion-card-header>
                    <ion-card-title>{{ group.title }}</ion-card-title>
                    <ion-card-subtitle>{{ group.desc}}</ion-card-subtitle>
                </ion-card-header>
                <ion-button @click="onClickDeleteGroup(group)">Delete</ion-button>
            </ion-card>
        </ion-list>    
</template>

<script lang="ts">
import { ref } from 'vue';
import useGroupState from '@/stores/useGroupState';
import { IonLabel, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/vue'


export default {
    name: 'GroupList',
    components: { IonLabel, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton },
    setup: () => {
        // Groups store hook
        const { state: groupState, addGroup, deleteGroup } = useGroupState();

        const numberOfGroups = ref(groupState.groups.length);

        const onClickAddGroup = () => {
            addGroup({
                id: groupState.groups.length + 1,
                title: `Group Title ${groupState.groups.length + 1}`,
                desc: ''
            });
            numberOfGroups.value += 1;
        }

        const onClickDeleteGroup = (group: any) => {
            deleteGroup(group);
            numberOfGroups.value -= 1;
        }

        return {
            groups: groupState.groups,
            numberOfGroups,
            onClickAddGroup,
            onClickDeleteGroup
        }
    }
}

</script>

<style scoped>
</style>