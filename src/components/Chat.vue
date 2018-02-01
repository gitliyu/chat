<template>
    <div class="chat">

    </div>
</template>

<script type="text/javascript">
    import Server from '@/server';
    export default {
        data(){
            return {

            }
        },
        mounted(){
            let socket = new Server();
            socket.send('test', "hi");
        },
        methods : {

        }
    }
</script>

<style lang="scss">

</style>