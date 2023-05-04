import { reactive, readonly, computed } from 'vue'

const defaultState = {
    users: [
        {userName: '4SarahM', passWord: 'MMMM', email: 'mmm@mmm.com', isActive: false},
        {userName: '4MikeyB', passWord: 'BBBB', email: 'bbb@bbb.com', isActive: true},
        {userName: '4BobbyH', passWord: 'HHHH', email: 'hhh@hhh.com', isActive: false},
        {userName: '4FrankZ', passWord: 'ZZZZ', email: 'zzz@zzz.com', isActive: false},
    ],
}

// const defaultState = {
//     userData: {
//         userName: '',
//         passWord: '',
//         // email: '',
//     }
// }
const state = reactive(defaultState)

const getters = {
    // getIsActive: () => {
    //     return computed(() => state.isActive)
    // },
    // getUserName: () => {
    //     return state.users.userName
    // }
}

const actions = {
    updateIsActive: (isActive) => {
        state.isActive = isActive
    },
    // updateUserData: ({ userName, passWord }) => {
    //     state.users.userName = userName,
    //     state.users.passWord = passWord
    // }
}

export default () => {
    if (localStorage.getItem('userState') === null) {
        localStorage.setItem('userState', JSON.stringify(state.users))
    }
    
    return {
        state: readonly(state),
        ...getters,
        ...actions,
    }
}