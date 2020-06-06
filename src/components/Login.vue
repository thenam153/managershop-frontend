<template>
<div class="dialog-overlay">
    <div class="dialog">
        <div class="title-with-btn">
            <span>Đăng nhập</span>
        </div>
        <div class="space-height-20px"></div>
        <form class="ng-pristine ng-valid">
            <div class="search-box-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                    <g id="01" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="Oval-Copy" stroke="#9E9EA7" stroke-width="2" cx="8" cy="6" r="4"></circle>
                        <circle id="Oval-Copy-2" stroke="#9E9EA7" stroke-width="2" cx="8" cy="17" r="7"></circle>
                    </g>
                </svg>
                <input type="text" placeholder="Username" name="username" v-model="username" >
            </div>
            <div class="space-height-20px"></div>
            <div class="search-box-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                    <g id="01-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <circle id="Oval" stroke="#9E9EA7" stroke-width="2" cx="4.5" cy="8" r="3.5"></circle>
                        <rect id="Rectangle" stroke="#9E9EA7" fill="#D8D8D8" x="7.5" y="7.5" width="8" height="1" rx="0.5"></rect>
                        <rect id="Rectangle" stroke="#9E9EA7" fill="#D8D8D8" x="14.5" y="7.5" width="1" height="3" rx="0.5"></rect>
                        <rect id="Rectangle" stroke="#9E9EA7" fill="#D8D8D8" x="11" y="7.5" width="1" height="3" rx="0.5"></rect>
                    </g>
                </svg>
                <input type="password" placeholder="Password" name="password" v-model="password">
            </div>
            <div class="space-height-20px"></div>
            <div class="i2g-button-submit" @click="login">
                <input type="submit" value="Login">
            </div>
        </form>
        <div class="space-height-20px"></div>
        <div style="display: flex; align-items: center;">
            <div style="flex: 1;" class="border-bottom-2px"></div>
            <div style="color: var(--text-inactive-color); margin: 0 10px;">OR</div>
            <div style="flex: 1;" class="border-bottom-2px"></div>
        </div>
        <div class="space-height-20px"></div>
        <div style="display: flex;">
            <div style="flex: 1;">
                <div class="button-text-with-icon-center" style="margin: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                        <g id="01-copy-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <circle id="Oval" stroke="#9E9EA7" stroke-width="2" cx="8" cy="8" r="6"></circle>
                            <rect id="Rectangle" stroke="#9E9EA7" fill="#D8D8D8" transform="translate(8.742641, 7.949747) rotate(-225.000000) translate(-8.742641, -7.949747) " x="6.24264069" y="7.44974747" width="5" height="1" rx="0.5"></rect>
                            <rect id="Rectangle" stroke="#9E9EA7" fill="#D8D8D8" transform="translate(6.621320, 8.656854) rotate(-225.000000) translate(-6.621320, -8.656854) " x="6.12132034" y="7.15685425" width="1" height="3" rx="0.5"></rect>
                        </g>
                    </svg>
                    <span>Register</span>
                </div>
            </div>
            <div class="space-20px"></div>
            <div style="flex: 1;">
                <div class="button-text-with-icon-center"  style="margin: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                        <g id="01-copy-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect id="Rectangle" stroke="#9E9EA7" stroke-width="2" x="1" y="3" width="14" height="10" rx="1"></rect>
                            <polyline id="Path" stroke="#9E9EA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(7.978721, 6.999629) rotate(1.000000) translate(-7.978721, -6.999629) " points="0.957438359 4.62217618 8.00000324 9.49962857 15.0000032 4.49962857"></polyline>
                        </g>
                    </svg>
                    <span>Contact</span>
                </div>
            </div>
        </div>

    </div>
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