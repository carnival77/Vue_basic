import axios from 'axios';

let api_url = process.env.VUE_APP_APIURL;
// const api_url = `http://localhost:8888/devpro/api/todos`;
api_url = `${api_url}/api/posts`;


const state = {
    posts: [],
    post:{}
};

const actions = {
    loadPosts(context) {
        axios.get(`${api_url}`)
            .then(res => res.data)
            .then(items => (context.commit('setPosts', items)))
            .catch(error => console.error(error));
    },
    loadPost(context,payload){
        axios.get(`${api_url}/${payload.id}`)
            .then(res => res.data)
            .then(item => (context.commit('setPost', item)))
            .catch(error => console.error(error));
    },
    ㅁㅇㅇPost(context,payload){
        axios.get(`${api_url}`,payload)
            .then(res => res.data)
            .then(items => (context.commit('setPosts', items)))
            .catch(error => console.error(error));
    }
};

const getters = {
    getPosts(state) {
        return state.posts;
    },
    getPost(state){
        return state.post;
    }
}; //getter
const mutations = {
    setPosts(state, items) {
        state.posts = items;
    },
    setPost(state,item){
        state.post = item;
    }
};

export default {
    state, actions, getters, mutations
}