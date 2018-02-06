<template>
    <div class="friend-page">
        <mu-list>
            <mu-sub-header>群聊</mu-sub-header>
            <mu-list-item>
                暂无
            </mu-list-item>
            <mu-divider inset/>
            <mu-sub-header>好友</mu-sub-header>
            <mu-list-item v-for="item in friends" :key="item.id" :title="item.name" @click="onChat(item.id)">
                <img class="avatar" :src="'https://www.liyu.fun/img/' + item.avatar" slot="leftAvatar"/>
                <span slot="describe">
                   {{item.signature}}
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
                friends : []
            }
        },
        computed : {
            users : function(){
                return this.$store.state.users;
            },
            currentUser : function(){
                return this.$store.state.currentUser;
            }
        },
        mounted(){
            this.friends = this.users.filter(item => {
                return this.currentUser.friends.includes(item.id)
            })
        },
        methods: {
            onChat (id) {
                this.$router.push({
                    name   : 'chat',
                    params : {
                        id : id
                    }
                });
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