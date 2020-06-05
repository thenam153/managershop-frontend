<template>
    <div>
        {{title}}
        <div>
            Khách hàng:
            <div style="position: relative">
                <input v-if="!selected" type="text" v-model.trim="search" @focus="optionsShown = true; optionsShownProduct = false" ref="input" @keypress.enter="onEnter('customer')"    >
                <div v-else @click="resetInput('customer')">
                    {{decodeURI(selected.name)}}
                </div>
                <div v-if="optionsShown" style="height: 100px; overflow:auto; position: absolute; ">
                     <div @click="onSelect(customer)" v-for="customer in listCustomer" v-bind:key="customer.id">
                            {{ decodeURI(customer.name) }} - {{ decodeURI(customer.phone) }}
                    </div>
                </div>
                <div v-if="selected">
                    {{ decodeURI(selected.name) }}
                    {{ decodeURI(selected.phone) }}
                    {{ decodeURI(selected.address) }}
                </div>
            </div>
        </div>
        <div>
            Sản phẩm: 
            <button @click="addProduct">
                Thêm sản phẩm
            </button>
            Tổng tiền: {{totalPrice}} 
            <div>
                <input v-if="!selectedProduct" type="text" v-model.trim="searchProduct" @focus="optionsShownProduct = true; optionsShown = false" ref="inputProduct" @keypress.enter="onEnter('product')"    >
                <div v-else @click="resetInput('product')">
                    {{decodeURI(selectedProduct.name)}}
                </div>
                <div v-if="optionsShownProduct" style="height: 100px; overflow:auto; position: absolute; ">
                     <div @click="onSelectProduct(product)" v-for="product in listProduct" v-bind:key="product.id">
                            {{ decodeURI(product.name) }} - {{product.id}}
                    </div>
                </div>
            </div>
            <div>
                <div v-for="(item, index) in inCart" :key="index">
                    Tên: {{item.name}} Id: {{item.id}} Giá {{item.price}}
                    Số lượng: <input type="text" v-model="item.number" />
                    Mô tả: <input type="text" v-model="item.detail" />
                    <div @click="deleteCart(index)">
                        X
                    </div>
                </div>
            </div>
        </div>
        <div @click="onPayment">
            Thanh toán
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import async from 'async'

export default {
    name: 'Transaction',
    props: ['title'],
    data() {
        return {
            search: "",
            searchProduct: "",
            customers: null,
            products: null,
            selected: null,
            optionsShown: false,
            selectedProduct: null,
            optionsShownProduct: false,
            inCart: []
        }
    },
    created() {
        axios({
            method: 'post',
            url: 'http://localhost:1503/get/khach-hang'
        })
        .then(res => {
            console.log(res)
            this.customers = res.data
        })
        axios({
            method: 'post',
            url: 'http://localhost:1503/get/san-pham'
        })
        .then(res => {
            console.log(res)
            this.products = res.data
        })
    },
    methods: {
        onSelect(customer) {
            this.selected = customer;
            this.optionsShown = false;
        },
        resetInput(string) {
            if(string === 'customer'){
                this.selected = null;
                this.optionsShown = true;
                this.$nextTick( () => this.$refs.input.focus() )
            }
            if(string === 'product'){
                this.selectedProduct = null;
                this.optionsShownProduct = true;
                this.$nextTick( () => this.$refs.inputProduct.focus() )
            }
        },
        onEnter(string) {
            if(string === 'customer'){
                this.selected = this.listCustomer ? this.listCustomer[0] : null
                this.optionsShown = false;
            }
            if(string === 'product') {
                this.selectedProduct = this.listProduct ? this.listProduct[0] : null
                this.optionsShownProduct = false;
            }
        },
        onSelectProduct(product) {
            this.selectedProduct = product;
            this.optionsShownProduct = false;
        },
        addProduct() {
            if(this.selectedProduct == null) return;
            this.inCart.push(Object.assign({},this.selectedProduct));
            this.selectedProduct = null;
            this.searchProduct = ""
        },
        onPayment() {
            axios({
                method: 'post',
                url: 'http://localhost:1503/create/giao-dich',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    idCustomer: (this.selected || {}).id,
                    idEmployee: this.$store.state.id
                }
            })
            .then(res => {
                let data = res.data;
                async.each(this.inCart, (p, next) => {
                    axios({
                        method: 'post',
                        url: 'http://localhost:1503/create/giao-dich/chi-tiet',
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        },
                        data: {
                            idTransaction: data.id,
                            idProduct: p.id,
                            quantily: p.number,
                            price: p.price,
                            total: Number.parseInt(p.number) * Number.parseInt(p.price) 
                        }
                    })
                    .finally(() => {
                        next()
                    })
                }, function(err) {
                    console.log("pay thành cồng")
                })
            })
        },
        deleteCart(index) {
            this.inCart.splice(index, 1)
        }
    },
    computed: {
        listCustomer() {
            if(!this.search || !this.search.length) {
                return this.customers;
            }
            return this.customers.filter(c => {
                return decodeURI(c.name.toLowerCase()).includes(this.search.toLowerCase()) || decodeURI(c.phone.toLowerCase()).includes(this.search.toLowerCase())
            }); 
        },
        listProduct() {
            if(!this.searchProduct || !this.searchProduct.length) {
                return this.products;
            }
            return this.products.filter(c => {
                return decodeURI(c.name.toLowerCase()).includes(this.searchProduct.toLowerCase()) || decodeURI(c.id.toString().toLowerCase()).includes(this.searchProduct.toLowerCase())
            }); 
        },
        totalPrice() {
            let total = 0;
            this.inCart.forEach(i => {
                if(!isNaN(Number.parseInt(i.number))) {
                    total += Number.parseInt(i.number) * Number.parseInt(i.price)
                }
            })
            return total
        }
    }
}
</script>