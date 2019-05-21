<template>
    <div class="body-content">
        <headTop @childFn="parentFn" title="管理系统" :state="state"><span>子传过来的值--{{childMsg}}</span></headTop>
        <Pgcontent></Pgcontent>
    </div>
</template>

<script>
    import headTop from '../components/head.vue'
    import Pgcontent from '../components/content.vue'

    export default {
        data() {
            return {
                state: 'dev',
                childMsg: '',
            }
        }, 
        components: {
            headTop, Pgcontent,
        },
        methods: {
            parentFn(payload) {
                this.childMsg = payload;
            }
        },
    }
</script>

<style>
</style>
