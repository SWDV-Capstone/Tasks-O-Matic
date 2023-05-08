<template>
    <p>Total Groups: {{ groupCount }}</p>
</template>

<script>
import { computed } from 'vue';
import store from '@/stores/useGroupState';

export default {
  name: 'GroupCounter',
  components: { },
  setup: () => {
    const groupCount = computed(() => store.state.count)

      return {
        //   groupCount: groupState.count,
        groupCount
      }
    }
}
</script>