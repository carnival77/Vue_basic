import axios from 'axios';

let api_url = process.env.VUE_APP_APIURL;
// const api_url = `http://localhost:8888/devpro/api/todos`;
api_url = `${api_url}/api/todos`;


const state = {
    todoItems: []
};

// const state = {
//     // todoItems: storage.fetch()
//     // 로컬 스토리지에서 읽어 옴
//     todoItems: []
// },
const actions = {
    loadTodoItems(context) {
        axios.get(`${api_url}`)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    removeTodo(context, payload) {
        axios.delete(`${api_url}/${payload.id}`)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    addTodo(context, payload) {
        axios.post(`${api_url}`, payload)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    toggleTodo(context, payload) {
        axios.put(`${api_url}/${payload.id}`, payload)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    },
    clearTodo(context) {
        axios.delete(`${api_url}`)
            .then(res => res.data)
            .then(items => (context.commit('setTodoItems', items)))
            .catch(error => console.error(error));
    }
}; // actions
const getters = {
    getTodoItems(state) {
        return state.todoItems;
    },
}; //getter
const mutations = {
    setTodoItems(state, items) {
        state.todoItems = items;
    },
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

}; //mutations

export default {
    state,actions,getters,mutations
}