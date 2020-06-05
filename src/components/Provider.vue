<template>
    <div>
        {{title}}
            <form>
                <label>
                    <span>
                        Tên nhà cung cấp: 
                    </span>
                    <input v-model="name" type="text">
                </label>
                <label>
                    <span>
                        Số điện thoại: 
                    </span>
                    <input v-model="phone" type="text">
                </label>
                <label>
                    <span>
                        Địa chỉ: 
                    </span>
                    <input v-model="address" type="text">
                </label>
                <label>
                    <span>
                        Chi tiết: 
                    </span>
                    <input v-model="description" type="text">
                </label>
                <button @click.prevent="submitData">
                    Tạo thông tin nhà cung cấp
                </button>
            </form>
            <div>
                <button @click="clickSave">Save Change</button>
                <button @click="clickReset" >Reset</button>
                <button @click="clickDelete" >Delete</button>
            </div>
            <div style="width: 800px">
                <vue-table-dynamic 
                    :params="table"  
                    @cell-change="onCellChange" 
                    ref="table">
                </vue-table-dynamic>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import async from 'async'
export default {
    name: 'Product',
    props: ['title'],
    data:  function() {
        return {
            name: "",
            phone: "",
            address: "",
            description: "",
            employees: [],
            provider: null,
            header: ["STT","Họ và tên", "Số điện thoại", "Địa chỉ", "Chi tiết", "Nhân viên"],
            keys: ["name", "phone", "address", "description"],
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
                    column: [1, 2, 3, 4]
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
            this.employees = res.data
            axios({
                method: 'post',
                url: 'http://localhost:1503/get/cung-cap'
            })
            .then(res => {
                console.log(res)
                this.provider = res.data
            })
        })
    },
    methods: {
        submitData() {
            axios({
                    method: 'post',
                    url: 'http://localhost:1503/create/cung-cap',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    data: {
                        name: encodeURI(this.name),
                        phone: encodeURI(this.phone),
                        address: encodeURI(this.address),
                        description: encodeURI(this.description),
                        idEmployee: this.$store.state.id
                    }
            })
            .then(res => {  
                console.log(res)
                this.provider.push(res.data);
                this.name = "";
                this.phone = "";
                this.address = "";
                this.description = "";          
            })
            .catch(err => {
                console.log(err)
            })
        },
        onCellChange(row, col, data) {
            this.change[row] = Object.assign({}, this.provider[row - 1]);
            this.change[row][this.keys[col - 1]] = data;
        }, 
        clickSave() {
            async.each(this.change, function(c, next) {
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/edit/cung-cap',
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
            let data = (this.provider || []).map((c, i) => {
                let employee = (this.employees || []).find(e => e.id == c.idEmployee);
                console.log(employee)
                return [i + 1, decodeURI(c.name), decodeURI(c.phone), decodeURI(c.address), decodeURI(c.description), decodeURI((employee || {}).name || c.idEmployee)]
            })
            this.table.data = [this.header, ...data]
            this.index = {}
        },
        clickDelete() {
            console.log("delete", this.$refs.table.getCheckedRowDatas(true))
            let provider = this.provider
            async.eachOf(this.$refs.table.getCheckedRowDatas(true), function(c, index, next) {
                if(index == 0) return next()
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/delete/cung-cap',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    // data: c
                    data: {
                        id : provider[c[0] - 1].id
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
                    url: 'http://localhost:1503/get/cung-cap'
                })
                .then(res => {
                    console.log(res)
                    this.provider = res.data
                })
            })
        }
    },
    watch: {
        'provider': function() {
            let data = (this.provider || []).map((c, i) => {
                let employee = (this.employees || []).find(e => e.id == c.idEmployee);
                console.log(employee)
                return [i + 1, decodeURI(c.name), decodeURI(c.phone), decodeURI(c.address), decodeURI(c.description), decodeURI((employee || {}).name || c.idEmployee)]
            })
            this.table.data = [this.header, ...data]
        }
    }
}
function encodeData(data) {
    let dataCache = Object.assign({}, data)
    for(let key of Object.keys(dataCache)) {
        if(key === 'listResult' || key === 'updateat' || key === 'createat') continue   
        dataCache[key] = encodeURI(dataCache[key])
    }
    return dataCache
}
</script>