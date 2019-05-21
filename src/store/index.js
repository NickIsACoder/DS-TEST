import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    word : '你好'
}

//监听state值的变化
const getters = {
    update_word(state){
        return state.word+'-来自getters';
    }
}
//改变state值
const mutations = {
    change_word(state,add){
        state.word =state.word+add;
    }
}
//理想的改变state值的方式
const actions = {
    good_change_way(context,add){
        context.commit('change_word',add);
    }
}
// 创建vuex实例
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;