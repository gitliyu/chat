<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import * as socket from 'socket.io-client';
    import config from '../config';
    export default {
        name: 'App',
        created () {
            if (this.$route.fullPath.indexOf('login') < 0) {
                this.$router.push('/login');
            }
        },
        mounted(){
            let port = config.dev.serverPort;
            window.io = socket.connect('http://localhost:' + port);
            io.on('private chat', (data) => {
                this.$store.dispatch('setRecord', data);
            })
        }
    }
</script>

<style lang="scss">
    @import './assets/css/global.scss';
</style>