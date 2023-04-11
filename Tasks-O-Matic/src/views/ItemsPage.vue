<template>
    <h1>Items Page</h1>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Your {{ $route.params.id }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                <ion-title size="large">Your {{ $route.params.id }}</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-card-header>
                <ion-card-title>Task Items Title</ion-card-title>
                <ion-card-subtitle>Task Item Instructions</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    Task Items Choices here
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>

</template>