<template>
<div class="container">
    <div class="main">
      <div class="title-main">{{title}}</div>
      <vue-table-dynamic :params="table" @cell-change="onCellChange" ref="table"></vue-table-dynamic>
    </div>
    <div class="setting">
      <div class="title-with-btn">
        Thêm nhân viên
        <div>
          <div @click="clickSave">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                  <path d="M3,14 L13,14 C13.5522847,14 14,14.4477153 14,15 C14,15.5522847 13.5522847,16 13,16 L3,16 C2.44771525,16 2,15.5522847 2,15 C2,14.4477153 2.44771525,14 3,14 Z" id="Path"  fill-rule="nonzero"/>
                  <path d="M8,1 C8.55228475,1 9,1.44771525 9,2 L9,11 C9,11.5522847 8.55228475,12 8,12 C7.44771525,12 7,11.5522847 7,11 L7,2 C7,1.44771525 7.44771525,1 8,1 Z" id="Path"  fill-rule="nonzero"/>
                  <path d="M5.87867966,6.32842712 C6.43096441,6.32842712 6.87867966,6.77614237 6.87867966,7.32842712 L6.87867966,13.3284271 C6.87867966,13.8807119 6.43096441,14.3284271 5.87867966,14.3284271 C5.32639491,14.3284271 4.87867966,13.8807119 4.87867966,13.3284271 L4.87867966,7.32842712 C4.87867966,6.77614237 5.32639491,6.32842712 5.87867966,6.32842712 Z" id="Path"  fill-rule="nonzero" transform="translate(5.878680, 10.328427) rotate(-45.000000) translate(-5.878680, -10.328427) "/>
                  <path d="M7.12132034,9.32842712 L13.1213203,9.32842712 C13.6736051,9.32842712 14.1213203,9.77614237 14.1213203,10.3284271 C14.1213203,10.8807119 13.6736051,11.3284271 13.1213203,11.3284271 L7.12132034,11.3284271 C6.56903559,11.3284271 6.12132034,10.8807119 6.12132034,10.3284271 C6.12132034,9.77614237 6.56903559,9.32842712 7.12132034,9.32842712 Z" id="Path"  fill-rule="nonzero" transform="translate(10.121320, 10.328427) rotate(-45.000000) translate(-10.121320, -10.328427) "/>
           </svg>
          </div>
          <div @click="clickReset">
            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                                <path
                                    d="M12.6233804,6.08608223 C12.8678466,6.67561497 13.0027741,7.32205048 13.0027741,8 L15.0027741,8 C15.0027741,7.05087067 14.8138756,6.14586096 14.4716229,5.32051512 C15.521423,7.85780063 15.0150559,10.8872132 12.9525216,12.9497475 C10.2188516,15.6834175 5.78669671,15.6834175 3.05302667,12.9497475 L4.46724023,11.5355339 C6.41986169,13.4881554 9.58568658,13.4881554 11.538308,11.5355339 C13.0027741,10.0710678 13.3688907,7.92417477 12.6366576,6.1184952 C11.850808,4.25919913 10.0738419,3 8.00277414,3 C5.24135039,3 3.00277414,5.23857625 3.00277414,8 L1.00277414,8 C1.00277414,4.13400675 4.13678089,1 8.00277414,1 C9.93577074,1 11.6857707,1.78350167 12.9525216,3.05025249 L11.538308,4.46446609 C12.0176907,4.9438488 12.3793815,5.49635589 12.6233804,6.08608223 Z"
                                    id="Combined-Shape" fill-rule="nonzero" />
                                <path
                                    d="M12.4142136,4 L13.7071068,2.70710678 C14.0976311,2.31658249 14.0976311,1.68341751 13.7071068,1.29289322 C13.3165825,0.902368927 12.6834175,0.902368927 12.2928932,1.29289322 L10.2928932,3.29289322 C9.90236893,3.68341751 9.90236893,4.31658249 10.2928932,4.70710678 L12.2928932,6.70710678 C12.6834175,7.09763107 13.3165825,7.09763107 13.7071068,6.70710678 C14.0976311,6.31658249 14.0976311,5.68341751 13.7071068,5.29289322 L12.4142136,4 Z"
                                    id="Line-2" fill-rule="nonzero"
                                    transform="translate(12.000000, 4.000000) rotate(-135.000000) translate(-12.000000, -4.000000) " />
                                <path
                                    d="M5.20710678,10.7071068 C5.59763107,10.3165825 5.59763107,9.68341751 5.20710678,9.29289322 C4.81658249,8.90236893 4.18341751,8.90236893 3.79289322,9.29289322 L1.79289322,11.2928932 C1.40236893,11.6834175 1.40236893,12.3165825 1.79289322,12.7071068 L3.79289322,14.7071068 C4.18341751,15.0976311 4.81658249,15.0976311 5.20710678,14.7071068 C5.59763107,14.3165825 5.59763107,13.6834175 5.20710678,13.2928932 L3.91421356,12 L5.20710678,10.7071068 Z"
                                    id="Line-2" fill-rule="nonzero"
                                    transform="translate(3.500000, 12.000000) rotate(-315.000000) translate(-3.500000, -12.000000) " />
                            </svg>
          </div>
          <div @click="clickDelete">
             <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                <path d="M4,5 C4.55228475,5 5,5.44771525 5,6 L5,14 C5,14.5522847 4.55228475,15 4,15 C3.44771525,15 3,14.5522847 3,14 L3,6 C3,5.44771525 3.44771525,5 4,5 Z" id="Path" fill-rule="nonzero"/> <path d="M8,5 C8.55228475,5 9,5.44771525 9,6 L9,14 C9,14.5522847 8.55228475,15 8,15 C7.44771525,15 7,14.5522847 7,14 L7,6 C7,5.44771525 7.44771525,5 8,5 Z" id="Path" fill-rule="nonzero"/> <path d="M4,13 L12,13 C12.5522847,13 13,13.4477153 13,14 C13,14.5522847 12.5522847,15 12,15 L4,15 C3.44771525,15 3,14.5522847 3,14 C3,13.4477153 3.44771525,13 4,13 Z" id="Path" fill-rule="nonzero"/> <path d="M5,1 L11,1 C11.5522847,1 12,1.44771525 12,2 C12,2.55228475 11.5522847,3 11,3 L5,3 C4.44771525,3 4,2.55228475 4,2 C4,1.44771525 4.44771525,1 5,1 Z" id="Path" fill-rule="nonzero"/> <path d="M2,4 L14,4 C14.5522847,4 15,4.44771525 15,5 C15,5.55228475 14.5522847,6 14,6 L2,6 C1.44771525,6 1,5.55228475 1,5 C1,4.44771525 1.44771525,4 2,4 Z" id="Path" fill-rule="nonzero"/> <path d="M12,5 C12.5522847,5 13,5.44771525 13,6 L13,14 C13,14.5522847 12.5522847,15 12,15 C11.4477153,15 11,14.5522847 11,14 L11,6 C11,5.44771525 11.4477153,5 12,5 Z" id="Path" fill-rule="nonzero"/>
            </svg>
          </div>
        </div>
      </div>

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
        <input
          type="submit"
          value="Hoàn thành"
          @click.prevent="submitData"
          style="margin-top: 30px;"
        />
      </form>

    </div>
  </div>

</template>

<script>
import axios from 'axios'
import async from 'async'

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
            level: 0, 
            employee: null,
            header: ["STT","Họ và tên", "Ngày sinh", "Số điện thoại", "CMND / CCCD", "Địa chỉ", "Tài khoản"],
            keys: ["name", "dateofbirth", "phone", "identification", "address", "username"],
            table: {
                data: [],
                header: 'row',
                border: true,
                stripe: true,
                showCheck: true,
                enableSearch: true,
                pagination: true,
                pageSize: 10,
                pageSizes: [10, 20, 50],
                edit: { 
                    column: [1, 2, 3]
                }
            },
            change: {}
        }
    },
    created() {
        axios({
            method: 'post',
            url: 'http://localhost:1503/get/nhan-vien'
        })
        .then(res => {
            console.log(res)
            this.employee = res.data
        })
        this.employee = JSON.parse('[{"name":"aaaa","phone":"sssss","dateofbirth":"sssss","identification":"sssss","address":"ssssdss","username":"namthe153","password":"123456","level":0,"id":4,"listResult":[]},{"name":"qeqweqwe","phone":"vqeqweqwe","dateofbirth":"qeqweqwe","identification":"qeqweqwe","address":"qeqweqwe","username":"qeqweqwe","password":"qeqweqwe","level":0,"id":6,"listResult":[]}]')
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
                this.employee.push(res.data);
                this.name = "";
                this.phone = "";
                this.dateofbirth = "";
                this.identification = "";
                this.username = "";
                this.password = "";
                this.level = 0;
            })
            .catch(err => {
                console.log(err)
            })
        },
        onCellChange(row, col, data) {
            this.change[row] = Object.assign({}, this.employee[row - 1]);
            this.change[row][this.keys[col - 1]] = data;
        },
        clickSave() {
            async.each(this.change, function(c, next) {
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/edit/nhan-vien',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    // data: c
                    data: encodeData(c)
                })
                .then(() => {  
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    next()
                })
            }, (err) => {
                console.log(err)
                this.change = {}
            })
        },
        clickReset() {
            let data = (this.employee || []).map((c, i) => {
                return [i + 1, decodeURI(c.name), decodeURI(c.dateofbirth), decodeURI(c.phone), decodeURI(c.identification), decodeURI(c.address), decodeURI(c.username)]
            })
            this.table.data = [this.header, ...data]
            this.index = {}
        },
        clickDelete() {
            console.log("delete", this.$refs.table.getCheckedRowDatas(true))
            let employee = this.employee
            async.eachOf(this.$refs.table.getCheckedRowDatas(true), function(c, index, next) {
                if(index == 0) return next()
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/delete/nhan-vien',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    // data: c
                    data: {
                        id : employee[c[0] - 1].id
                    }
                })
                .then(() => {   
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    next()
                })
            }, () => {
                this.change = {}
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/get/nhan-vien'
                })
                .then(res => {
                    console.log(res)
                    this.employee = res.data
                })
            })
        }
    },
    watch: {
        'employee': function() {
            let data = (this.employee || []).map((c, i) => {
                return [i + 1, decodeURI(c.name), decodeURI(c.dateofbirth), decodeURI(c.phone), decodeURI(c.identification), decodeURI(c.address), decodeURI(c.username)]
            })
            this.table.data = [this.header, ...data]
        }
    }
}
function encodeData(data) {
    let dataCache = Object.assign({}, data)
    for(let key of Object.keys(dataCache)) {
        if(key === 'listResult') continue   
        dataCache[key] = encodeURI(dataCache[key])
    }
    return dataCache
}
</script>