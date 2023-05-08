<!-- This component will list all groups and add functionality -->
<template>
    <!-- Beautify the groups a list of cards -->
    <!-- <ion-label>Total Groups: {{ numberOfGroups }}</ion-label> -->
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
import { IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/vue'

export default {
    name: 'GroupList',
    components: { IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton },
    setup: () => {
        // Groups store hook
        const { state: groupState, deleteGroup } = useGroupState();

        const numberOfGroups = ref(groupState.groups.length);

        const onClickDeleteGroup = (group: any) => {
            deleteGroup(group);
            numberOfGroups.value -= 1;
        }

        return {
            groups: groupState.groups,
            numberOfGroups,
            onClickDeleteGroup
        }
    }
}

</script>

<style scoped>
</style>