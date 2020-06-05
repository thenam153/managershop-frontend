<template>
    <div>
        {{title}}
        <button @click="clickLogout">
            Đăng xuất
        </button>
        <form>
                <label>
                    <span>
                        Tên sản phẩm: 
                    </span>
                    <input v-model="name" type="text">
                </label>
                <label>
                    <span>
                        Giá: 
                    </span>
                    <input v-model="price" type="text">
                </label>
                <label>
                    <span>
                        Số lượng: 
                    </span>
                    <input v-model="quantily" type="text">
                </label>
                <label>
                    <span>
                        Chi tiết: 
                    </span>
                    <input v-model="description" type="text">
                </label>
                <label>
                    <span>
                        Nhà cung cấp: 
                    </span>
                    <select v-model="idProvider" >
                        <option v-for="provider in providers" v-bind:key="provider.id" :value="provider.id">
                            {{ decodeURI(provider.name) }}
                        </option>
                    </select>
                </label>
                <button @click.prevent="submitData">
                    Tạo thông tin sản phẩm
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
            price: 0,
            quantily: 0,
            description: "",
            idProvider: null,
            providers: [],
            product: null,
            header: ["STT","Sản phẩm", "Giá", "Số lượng", "Chi tiết", "Nhà cung cấp"],
            keys: ["name", "price", "quantily", "description"],
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
            url: 'http://localhost:1503/get/cung-cap'
        })
        .then(res => {
            console.log(res)
            this.providers = res.data
            axios({
                method: 'post',
                url: 'http://localhost:1503/get/san-pham'
            })
            .then(res => {
                console.log(res)
                this.product = res.data
            })
        })
    },
    methods: {
        submitData() {
            axios({
                    method: 'post',
                    url: 'http://localhost:1503/create/san-pham',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    data: {
                        name: encodeURI(this.name),
                        price: encodeURI(this.price),
                        quantily: encodeURI(this.quantily),
                        description: encodeURI(this.description),
                        idProvider: encodeURI(this.idProvider),
                        idEmployee: 4
                    }
            })
            .then(res => {  
                console.log(res)
                this.product.push(res.data);
                this.name = "";
                this.price = 0;
                this.quantily = 0;
                this.description = "";          
            })
            .catch(err => {
                console.log(err)
            })
        }, 
        onCellChange(row, col, data) {
            this.change[row] = Object.assign({}, this.product[row - 1]);
            this.change[row][this.keys[col - 1]] = data;
        }, 
        clickSave() {
            async.each(this.change, function(c, next) {
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/edit/san-pham',
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
            let data = (this.product || []).map((c, i) => {
                let provider = (this.providers || []).find(e => e.id == c.idProvider);
                console.log(provider)
                return [i + 1, decodeURI(c.name), decodeURI(c.price), decodeURI(c.quantily), decodeURI(c.description), decodeURI((provider || {}).name || c.idProvider)]
            })
            this.table.data = [this.header, ...data]
            this.index = {}
        },
        clickDelete() {
            console.log("delete", this.$refs.table.getCheckedRowDatas(true))
            let product = this.product
            async.eachOf(this.$refs.table.getCheckedRowDatas(true), function(c, index, next) {
                if(index == 0) return next()
                axios({
                    method: 'post',
                    url: 'http://localhost:1503/delete/san-pham',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    // data: c
                    data: {
                        id : product[c[0] - 1].id
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
                    url: 'http://localhost:1503/get/san-pham'
                })
                .then(res => {
                    console.log(res)
                    this.product = res.data
                })
            })
        },
        clickLogout() {
            localStorage.authenticate = false;
            this.$router.push('/dang-nhap')
        }
    },
    watch: {
        'product': function() {
            let data = (this.product || []).map((c, i) => {
                let provider = (this.providers || []).find(e => e.id == c.idProvider);
                console.log(provider)
                return [i + 1, decodeURI(c.name), decodeURI(c.price), decodeURI(c.quantily), decodeURI(c.description), decodeURI((provider || {}).name || c.idProvider)]
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