<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        created () {
            if(this.$route.fullPath.indexOf('login') < 0){
                this.$router.push('/login');
            }
        }
    }
</script>

<style lang="scss">
  @import './assets/css/global.scss';
</style>