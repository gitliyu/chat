<template>
    <div class="message-page">
        <mu-list>
            <mu-list-item title="小华" @click="onChat()">
                <img class="avatar" src="@/assets/image/avatar1.jpg" slot="leftAvatar">
                <span slot="describe">
                    周末没事干，要不要一起吃个饭呀
                </span>
            </mu-list-item>
            <mu-divider inset/>
        </mu-list>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        methods: {
            onChat () {
                this.$router.push('/chat');
            }
        }
    }
</script>

<style lang="scss">
.message-page{
    .avatar{
        width: 3rem;
        border-radius: 50%;
    }
}
</style>