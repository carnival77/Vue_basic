import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import todo from './modules/todo';
import post from './modules/post';


// Vue 객체가 Vuex 라는 middleware를 사용하겠다.
Vue.use(Vuex);
//VueAxios 와 axios middleware 를 사용
Vue.use(VueAxios, axios);

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     },
// };

// const api_url = `http://localhost:8888/devpro/api/todos`;

export const store = new Vuex.Store({
    modules:{
        todo,
        post
    }

    // state: {
    //     // todoItems: storage.fetch()
    //     // 로컬 스토리지에서 읽어 옴
    //     todoItems: []
    // },
    // actions: {
    //     loadTodoItems(context) {
    //         axios.get(`${api_url}`)
    //             .then(res => res.data)
    //             .then(items => (context.commit('setTodoItems', items)))
    //             .catch(error => console.error(error));
    //     },
    //     removeTodo(context, payload) {
    //         axios.delete(`${api_url}/${payload.id}`)
    //             .then(res => res.data)
    //             .then(items => (context.commit('setTodoItems', items)))
    //             .catch(error => console.error(error));
    //     },
    //     addTodo(context, payload) {
    //         axios.post(`${api_url}`, payload)
    //             .then(res => res.data)
    //             .then(items => (context.commit('setTodoItems', items)))
    //             .catch(error => console.error(error));
    //     },
    //     toggleTodo(context, payload) {
    //         axios.put(`${api_url}/${payload.id}`, payload)
    //             .then(res => res.data)
    //             .then(items => (context.commit('setTodoItems', items)))
    //             .catch(error => console.error(error));
    //     },
    //     clearTodo(context) {
    //         axios.delete(`${api_url}`)
    //             .then(res => res.data)
    //             .then(items => (context.commit('setTodoItems', items)))
    //             .catch(error => console.error(error));
    //     }
    // },
    // getters: {
    //     getTodoItems(state) {
    //         return state.todoItems;
    //     },
    // },
    // mutations: {
    //     setTodoItems(state, items) {
    //         state.todoItems = items;
    //     },
    //     addTodo(state, todoItem) {
    //         let todoObj = { completed: false, item: todoItem };
    //         localStorage.setItem(todoItem, JSON.stringify(todoObj));
    //         state.todoItems.push(todoObj);
    //     },
    //     removeTodo(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     toggleTodo(state, payload) {
    //         const todoObj = payload.todoItem;
    //         state.todoItems[payload.index].completed = !todoObj.completed;
    //         localStorage.removeItem(todoObj.item);
    //         localStorage.setItem(todoObj.item, JSON.stringify(todoObj));
    //     },
    //     clearTodo() {
    //         localStorage.clear();
    //         this.todoItems = [];
    //     },

    // },
});