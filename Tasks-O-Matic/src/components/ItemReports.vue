<template>
    <div>
        <h2>Item Reports</h2>
        <item-list @sendTimeTotal="captureTimeTotal" />
        <p>{{ showTimeTotal }} hours remaining!</p>
        <!-- <item-list ref="itemlist" />
        {{ timeTotal }} -->
    </div>
</template>

<script>
import ItemList from './components/ItemList.vue'
export default {
    name: 'ItemReports',
    data() {
        return {
            showTimeTotal: '',
        }
    },
    components: {
        ItemList
    },
    methods: {
        captureTimeTotal(total) {
            this.showTimeTotal = total;
    }
    },
}

// import ItemList from './components/ItemList.vue'
// export default {
//     name: 'ItemReports',
//     data() {
//         return {
//             timeTotal: '',
//         }
//     },
//     components: {
//         ItemList
//     },
//     mounted() {
//         this.timeTotal = this.$refs.itemlist.timeTotal;
//     },
// }
</script>