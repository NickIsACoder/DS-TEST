<template>
    <div class="page-vuex">
        <h1>VUEX</h1>
        <h1>{{ this.$store.state.word }}</h1>
        <h1>{{ this.$store.getters.update_word }}</h1>
        <h1 @click="changeVal">点我改变word的值</h1>
        <h1 @click="actionsChangeVal">通过actions改变word的值</h1>
    </div>
</template>

<script>
    export default{
        methods: {
            changeVal() {
               this.$store.commit('change_word','【已修改】');
            },
            actionsChangeVal(){
                this.$store.dispatch('good_change_way','【actions】')
            }
        },
    }
</script>

<style scoped>
    .page-vuex{
        font-size: 20px;
        text-align: center;
        background: #23527C;
        color: white;
        height: 100%;
    }
</style>
