<template>
    <div class="full-page">
        <header-bar></header-bar>
        <router-view/>
        <mu-paper class="bottom-nav">
            <mu-bottom-nav>
                <mu-bottom-nav-item to="/chat" title="消息" icon="textsms"/>
                <mu-bottom-nav-item to="/friend" title="联系人" icon="account_box"/>
                <mu-bottom-nav-item to="/personal" title="我" icon="perm_identity"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script type="text/javascript">
    export default {
        components: {
            'HeaderBar': () => System.import('./widget/HeaderBar')
        },
        data(){
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
.full-page{
    padding: 56px 0;
    .bottom-nav{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
}
</style>