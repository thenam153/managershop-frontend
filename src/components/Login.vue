<template>
    <div>
        Đăng nhập
        <button @click="login">
            Đăng nhập
        </button>
    </div>
</template>

<script>
import axios from 'axios'
import async from 'async'
export default {
    name: 'Login',
    props: ['title'],
    data:  function() {
        return {
        }
    },
    methods: {
        login() {
            localStorage.authenticate = true;
            this.$router.push({path: '/san-pham'})
        }
    }
}

</script>