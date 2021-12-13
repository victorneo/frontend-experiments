import { createSlice } from "@reduxjs/toolkit";

export const COMPLETED_ONLY = 'completed';
export const INCOMPLETE_ONLY = 'incomplete';
export const ALL = 'all';

let counter = 3;
const initialState = {
    todos: [{id: 1, todo: 'Example Todo', done: false}, {id: 2, todo: 'Completed Todo', done: true}],
    currTodo: '',
    currFilter: ALL,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.currFilter = action.payload.filter;
        },
        updateCurrTodo: (state, action) => {
            state.currTodo = action.payload;
        },
        addTodo: (state, action) => {
            state.todos.push({
                id: counter++,
                todo: action.payload.todo,
                done: false,
            });
            state.currTodo = '';
        },
        markAsDone: (state, action) => {
            const id = parseInt(action.payload.id);
            state.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
            });
        },
    }
});

export const {addTodo, markAsDone, updateCurrTodo, changeFilter} = todoSlice.actions;
export default todoSlice.reducer;