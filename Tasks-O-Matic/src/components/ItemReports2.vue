<template>
    <div>
        <h2>Allotted Hours Report</h2>
        <h4>How many hours remain for incomplete tasks</h4>
        <p>Allotted hours to complete: {{ timeTotal }}</p>
    </div>
</template>

<script>
export default {
    name: 'ItemReports2',
    props: {
        timeTotal: {
            type: Number,
            default: 0
        }
    }
}
</script>