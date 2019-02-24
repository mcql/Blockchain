<template>
    <div class="part2">
        <input type="text" placeholder="输入你的邮箱或者手机号">
        <p>注册</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.part2{
    text-align: center;
}
.part2 input{
    width: 490px;
    height: 56px;
    line-height: 56px;
    color: #999;
    text-indent: 28px;
    background: #fff;
    border-radius: 4px;
    margin-right: 20px;
    border: 1px solid #cbcbcb;
    box-shadow: none;
    letter-spacing: 1px;
    font-size: 16px;
}
.part2 input::-webkit-input-placeholder{
    font-size: 12px;
}
.part2 p{
    height: 56px;
    line-height: 56px;
    padding: 0 43px;
    color: #fff;
    background: #3eb87d;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
}
</style>
