import { reactive, readonly } from 'vue'

const defaultState = {
    groups: [
        {id: 1, title: 'Group A', desc: 'Group A Description'},
        {id: 2, title: 'Group B', desc: 'Group B Description'},
        {id: 3, title: 'Group C', desc: 'Group C Description'},
        {id: 4, title: 'Group D', desc: 'Group D Description'},
        {id: 5, title: 'Group E', desc: 'Group E Description'},
    ],
}

const state = reactive(defaultState)

const getters = {}

const actions = {
    addGroup(newGroup) {
        state.groups.unshift(newGroup)
    },
    deleteGroup(group) {
        const index = state.groups.indexOf(group)
        if (index !== -1) {
            state.groups.splice(index, 1)
        }
    }
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions,
})