<template>
    <div class="part1">
        <h2>超级粉丝指数</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
        <p>查看超级粉丝计划</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.part1 h2{
    font-size: 40px;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    text-align: center;
    margin-top: 30px;
}
.part1 ul{
    text-align: center;
}
.part1 li{
    line-height: 68px;
    height: 68px;
    margin: 0 3px 0 2px;
    width: 50px;
    background: #32355c;
    border-radius: 5px;
    color: #fff;
    font-size: 50px;
    display: inline-block;
    text-align: center;
}
.part1 p{
    width: 195px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #cbcbcb;
    border-radius: 24px;
    color: #f6ecdc;
    display: block;
    margin: 28px auto;
    transition: all .3s ease;
}
.part1 p:hover{
    background: #5065bd;
    border-color: #5065bd;
    color: #fff;
}
</style>
