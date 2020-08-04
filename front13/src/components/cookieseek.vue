<template>
    <div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
export default {
    date:{
    num:0,
    },
    created(){
    this.num=Cookies.set('seek1',0);
    this.$router.push('/foodsearch')
    }
}
</script>
<style scoped>

</style>