import Vue from 'vue';
import Vuex from 'vuex';


// Vue 객체가 Vuex 라는 middleware를 사용하겠다.
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters:{
        getTodoItems(state){
            return state.todoItems;
        },
    },
    mutations: {
        addTodo(state, todoItem) {
            let todoObj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(todoObj));
            state.todoItems.push(todoObj);
        },
        removeTodo(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleTodo(state, payload) {
            const todoObj = payload.todoItem;
            state.todoItems[payload.index].completed = !todoObj.completed;
            localStorage.removeItem(todoObj.item);
            localStorage.setItem(todoObj.item, JSON.stringify(todoObj));
        },
        clearTodo() {
            localStorage.clear();
            this.todoItems = [];
        },

    },
});