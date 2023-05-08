import { reactive, computed, readonly } from 'vue'

const defaultState = {
    groups: [
        {id: 1, title: 'Group A', desc: 'Group A Description'},
        {id: 2, title: 'Group B', desc: 'Group B Description'},
        {id: 3, title: 'Group C', desc: 'Group C Description'},
        {id: 4, title: 'Group D', desc: 'Group D Description'},
        {id: 5, title: 'Group E', desc: 'Group E Description'},
    ],
    // count: 5,
}

const state = reactive(defaultState)

const getters = {}

const actions = {
    addGroup(newGroup) {
        state.groups.unshift(newGroup)
        // mutations.increase()
    },
    deleteGroup(group) {
        const index = state.groups.indexOf(group)
        if (index !== -1) {
            state.groups.splice(index, 1)
            // mutations.decrease()
        }
    }
}

// const mutations = {
//     increase() {
//         state.count.value++;
//     },
//     decrease() {
//         state.count.value--;
//     }
// };

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
    // ...mutations,
})