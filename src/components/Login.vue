<template>
    <div>
        Đăng nhập
        <div>
            <label>
                <input type="text" name="username" v-model="username">
            </label>
            <label>
                <input type="password" name="password" v-model="password">
            </label>
        </div>
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
            username: "",
            password: ""
        }
    },
    methods: {
        login() {
            axios({
                method: "POST",
                url: "http://localhost:1503/dangnhap",
                data: {
                    username: this.username,
                    password: this.password
                }
            })
            .then(res => {
                console.log(res);
                if(res.data.code == 200) {
                    this.$store.commit('acceptLogin')
                    this.$store.commit('setId', res.data.status)
                    this.$router.push({path: '/san-pham'})
                }else {
                    this.password = ""
                }
            })
            
        }
    }
}

</script>