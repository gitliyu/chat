<template>
    <div class="chat-page">
        <mu-appbar title="小华">
            <i class="el-icon-arrow-left" @click="onBack" slot="left"></i>
        </mu-appbar>
        <div class="message-box">
            <div class="message-item">
                <div class="avatar">
                    <img src="@/assets/image/avatar1.jpg"/>
                </div>
                <div class="message">
                    周末没事干，要不要一起吃个饭呀
                </div>
            </div>
            <div class="message-item mine">
                <div class="avatar">
                    <img src="@/assets/image/avatar0.jpg"/>
                </div>
                <div class="message">
                    好的
                </div>
            </div>
        </div>
        <div class="input-box">
            <mu-text-field v-model="message" @keydown.native.enter="onSend" hintText="请输入聊天内容"/>
            <el-button type="primary" @click="onSend" size="small">发送</el-button>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                message : '',
                records : []
            }
        },
        methods: {
            onBack () {
                this.$router.push('/message')
            },
            onSend () {
                console.log(this.message)
            }
        }
    }
</script>

<style lang="scss">
.chat-page{
    .mu-appbar{
        position: fixed;
        top: 0;
        i{
            font-size: 1.5rem;
        }
        .mu-appbar-title{
            text-align: center;
        }
    }
    .message-box{
        padding: 70px 5px 48px;
        .message-item{
            display: flex;
            flex-direction: row;
            align-items: center;
            &.mine{
                float: right;
                flex-direction: row-reverse;
            }
            .avatar img{
                width: 4rem;
                border-radius: 50%;
            }
            .message{
                padding: 10px;
                background: #eee;
                border-radius: 10px;
                max-width: 16rem;
                word-break: break-all;
            }
        }
    }
    .input-box{
        width: 100%;
        position: fixed;
        bottom: 0;
        .mu-text-field{
            padding: 0 10px;
            margin: 0 0 0 2rem;
        }
        .mu-text-field-hint{
            color: #666;
        }
    }
}
</style>