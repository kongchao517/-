<template>
<div>
    <div class="Box">
        <header></header>
        <main></main>
        <aside></aside>
        <footer></footer>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Box {
    width: 100%;
    height: 100%;

}

header {
    width: 90%;
    height: 50px;
    margin-left: 10%;
    background-color: red;
}

main {
    width: 90%;
    height: 800px;
    margin-left: 10%;
    background-color: blueviolet;
}

aside {
    width: 10%;
    height: 850px;
    position: relative;
    margin-top: -67.1%;
    background-color: burlywood;
}

footer {
    width: 100%;
    height: 100px;
    background-color: cyan;
}
</style>
