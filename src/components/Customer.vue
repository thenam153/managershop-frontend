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
                    <input v-model="birthday" type="text">
                </label>
                <label>
                    <span>
                        Số điện thoại: 
                    </span>
                    <input v-model="phone" type="text">
                </label>
                <button @click.prevent="submitData">
                    Tạo thông tin khách hàng
                </button>
            </form>
        </div>
        <div>
            <button @click="clickSave">Save Change</button>
            <button @click="clickReset" >Reset</button>
            <button @click="clickDelete" >Delete</button>
        </div>
         <div style="width: 600px">
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
    name: 'Customer',
    props: ['title'],
    data:  function() {
        return {
            name: "",
            birthday: "",
            phone: "",
            customer: null,
            header: ["STT","Họ và tên", "Ngày sinh", "Số điện thoại"],
            keys: ["name", "dateofbirth", "phone"],
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
            url: 'http://localhost:1503/get/khach-hang'
        })
        .then(res => {
            console.log(res)
            this.customer = res.data
        })
        // init 
        this.customer = JSON.parse('[{"name":"Nguyen%20Van%20C%C4%83n%20c%C6%B0%E1%BB%9Bc","dateofbirth":"20/20/2000","phone":"099999999","id":6,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":7,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":8,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":9,"listResult":[]},{"name":"qweqwe`wewrwer`qer``","dateofbirth":"sdfsfd","phone":"sdfsdfsdfsdfs","id":10,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"15/03/1999","phone":"0999998992","id":11,"listResult":[]},{"name":"ádadsasd","dateofbirth":"ádadsad","phone":"asdadasdasasd","id":13,"listResult":[]},{"name":"ádasdasdasd","dateofbirth":"22/04/2010","phone":"0909292929","id":14,"listResult":[]},{"name":"q?eqwe","dateofbirth":"`eweqwfq","phone":"?dadsads","id":15,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"123123","phone":"12312313","id":16,"listResult":[]},{"name":"q?eqwe","dateofbirth":"qweqweqw ","phone":"Nguy?n V?n Nam","id":17,"listResult":[]},{"name":"nguy?n v?n nam","dateofbirth":"nguy?n v?n nam","phone":"nguy?n v?n nam","id":19,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":20,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":21,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":22,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":23,"listResult":[]},{"name":"q%C6%B0eqwe","dateofbirth":"q%C6%B0eqwe","phone":"q%C6%B0eqeqw","id":25,"listResult":[]}]')
    },
    methods: {
        submitData() {
            axios({
                    method: 'post',
                    url: 'http://localhost:1503/create/khach-hang',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    data: {
                        name: encodeURI(this.name),
                        dateofbirth: encodeURI(this.birthday),
                        phone: encodeURI(this.phone),
                    }
            })
            .then(res => {  
                this.customer.push(res.data);
                this.name = "";
                this.birthday = "";
                this.phone = "";
            })
            .catch(err => {
                console.log(err)
            })
        },
        onCellChange(row, col, data) {
            this.change[row] = Object.assign({}, this.customer[row - 1]);
            this.change[row][this.keys[col - 1]] = data;
        },
        clickSave() {
            async.each(this.change, function(c, next) {
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/edit/khach-hang',
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
            let data = (this.customer || []).map((c, i) => {
                return [i + 1, decodeURI(c.name), decodeURI(c.dateofbirth), decodeURI(c.phone)]
            })
            this.table.data = [this.header, ...data]
            this.index = {}
        },
        clickDelete() {
            console.log("delete", this.$refs.table.getCheckedRowDatas(true))
            let customer = this.customer
            async.eachOf(this.$refs.table.getCheckedRowDatas(true), function(c, index, next) {
                if(index == 0) return next()
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/delete/khach-hang',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    // data: c
                    data: {
                        id : customer[c[0] - 1].id
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
                    url: 'http://localhost:1503/get/khach-hang'
                })
                .then(res => {
                    console.log(res)
                    this.customer = res.data
                })
            })
        }
    },
    watch: {
        'customer': function() {
            let data = (this.customer || []).map((c, i) => {
                return [i + 1, decodeURI(c.name), decodeURI(c.dateofbirth), decodeURI(c.phone)]
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