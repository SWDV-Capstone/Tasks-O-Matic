import { reactive } from 'vue'

export const taskGroups= reactive([
    {
    title: 'Wash Car',
    tasks: [
        {text: 'Clean interior', completed: true, due: '2021-08-01', priority: true, complete: true },
        {text: 'Vaccume all rugs', completed: true, due: '2021-08-01', priority: true, complete: true },
    ],
    complete: true,
    },
    {
    title: 'Buy Groceries',
    tasks: [
        {text: 'Chicken', completed: false, due: '2021-08-10', priority: false, complete: false},
        {text: 'Milk', completed: true, due: '2021-08-10', priority: false, complete: true},
        {text: 'Bread', completed: false, due: '2021-08-10', priority: false, complete: false},
    ],
    complete: false,
    },
    {
    title: 'Study for Exam',
    tasks: [
        {text: 'Read text', completed: true, due: '2021-12-010', priority: true, complete: false},
        {text: 'Practice', completed: true, due: '2021-12-010', priority: true, complete: false},
        {text: 'Sleep early', completed: false, due: '2021-12-010', priority: true, complete: false},
    ],
    complete: false,
    },
])