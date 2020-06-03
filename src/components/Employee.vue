<template>
    <div>
        {{title}}
        <div>
            <form>
                <label>
                    <span>
                        Họ và tên: 
                    </span>
                    <input v-model="name" type="text">
                </label>
                <label>
                    <span>
                        Ngày sinh: 
                    </span>
                    <input v-model="dateofbirth" type="text">
                </label>
                <label>
                    <span>
                        Số điện thoại: 
                    </span>
                    <input v-model="phone" type="text">
                </label>
                <label>
                    <span>
                        Số CMTND / CCCD: 
                    </span>
                    <input v-model="identification" type="text">
                </label>
                <label>
                    <span>
                        Địa chỉ: 
                    </span>
                    <input v-model="address" type="text">
                </label>
                <label>
                    <span>
                        Tài khoản: 
                    </span>
                    <input v-model="username" type="text">
                </label>
                <label>
                    <span>
                        Mật khẩu: 
                    </span>
                    <input v-model="password" type="text">
                </label>
                <label>
                    <span>
                        Chức vụ: 
                    </span>
                    <select v-model="level" >
                        <option value="0">Nhân viên</option>
                        <option value="1">Quản lý</option>
                    </select>
                </label>
                <button @click.prevent="submitData">
                    Tạo thông tin khách hàng
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Employee',
    props: ['title'],
    data:  function() {
        return {
            name: "",
            phone: "",
            dateofbirth: "",
            identification: "",
            address: "",
            username: "",
            password: "",
            level: 0
        }
    },
    methods: {
        submitData() {
            axios({
                    method: 'post',
                    url: 'http://localhost:1503/create/nhan-vien',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    data: {
                        name: encodeURI(this.name),
                        dateofbirth: encodeURI(this.dateofbirth),
                        phone: encodeURI(this.phone),
                        identification: encodeURI(this.identification),
                        address: encodeURI(this.address),
                        username: encodeURI(this.username),
                        password: encodeURI(this.password),
                        level: this.level
                    }
            })
            .then(res => {  
                console.log(res)
                this.name = "";
                this.phone = "";
            })
            .catch(err => {
                console.log(err)
            })
        },
    }
}
</script>