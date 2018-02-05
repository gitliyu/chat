<template>
    <div class="friend-page">
        <mu-list>
            <mu-sub-header>群聊</mu-sub-header>
            <mu-list-item>
                暂无
            </mu-list-item>
            <mu-divider inset/>
            <mu-sub-header>好友</mu-sub-header>
            <mu-list-item title="小华" @click="onChat()">
                <img class="avatar" src="@/assets/image/avatar1.jpg" slot="leftAvatar"/>
                <span slot="describe">
                    明月几时后，把酒问青天
                </span>
            </mu-list-item>
            <mu-divider inset/>
        </mu-list>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        },
        methods: {
            onChat () {
                this.$router.push('/chat');
            }
        }
    }
</script>

<style lang="scss">
.friend-page{
    .avatar{
        width: 3rem;
        border-radius: 50%;
    }
}
</style>