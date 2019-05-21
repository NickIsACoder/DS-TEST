<template>
    <div class="mpoint-container">
        <div class="btn-box">
            <el-button class="mpoint-btn d_jump" @click="jump(0)" type="primary">第一</el-button>
            <el-button class="mpoint-btn d_jump" @click="jump(1)" type="primary">第二</el-button>
            <el-button class="mpoint-btn d_jump" @click="jump(2)" type="primary">第三</el-button>
        </div>

        <div class="box">
            <div class="innerbox" index="1">第一</div>
            <div class="innerbox" index="2">第二</div>
            <div class="innerbox" index="3">第三</div>
            <div class="innerbox" index="4">第四</div>
            <div class="innerbox" index="5">我是锚点区</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            jump(index) {
                // 用 class="d_jump" 添加锚点
                let jump = document.querySelectorAll('.innerbox')
                let total = jump[index].offsetTop-180
                let _ele = document.querySelectorAll('.box')[0]
                let distance = _ele.scrollTop
                // console.log(distance)
                
                let smoothDown = ()=>{
                    if (distance < total) {
                        distance += step
                        _ele.scrollTop = distance
                        setTimeout(smoothDown, 10)
                    } else {
                        _ele.scrollTop = total
                    }
                }
                let smoothUp = ()=>{
                    if (distance > total) {
                        distance -= step
                        _ele.scrollTop = distance
                        setTimeout(smoothUp, 10)
                    } else {
                        _ele.scrollTop = total
                    }
                }
                
                // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let step = total / 30
                if (total > distance) {
                    smoothDown()
                } else {
                    let newTotal = distance - total
                    step = newTotal /30
                    smoothUp()
                }

            }
        }
    }
</script>

<style>
    .btn-box {
        text-align: center;
    }

    .box {
        width: 80%;
        margin: 0 auto;
        height: 400px;
        overflow-y: scroll;
        color: white;
        font-size: 20px;
        text-align: center;
    }

    .mpoint-btn {
        margin: 20px auto;
        display: inline-block;
    }

    .innerbox {
        width: 100%;
        height: 300px;
        background: #008855;
        margin: 20px auto;
    }
</style>
