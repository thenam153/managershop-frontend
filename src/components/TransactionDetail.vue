<template>
    <div>
        {{title}}
           
            <div style="width: 800px">
                <vue-table-dynamic 
                    :params="table"  
                    ref="table">
                </vue-table-dynamic>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import async from 'async'

export default {
    name: 'TransactionDetail',
    props: ['title'],
    data:  function() {
        return {
            products: null,
            customers: null,
            transactions: null,
            details: null,
            dataTable: null,
            header: ["STT","ID Giao dịch", "Khách hàng","Sản phẩm", "Số lượng", "Tổng"],
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
            }
        }
    },
    created() {
        axios({
            method: 'post',
            url: 'http://localhost:1503/get/giao-dich/chi-tiet'
        })
        .then(res => {
            console.log(res)
            this.products = res.data.productsModels
            this.customers = res.data.customersModels
            this.transactions = res.data.transactionsModels
            this.details = res.data.transactionsDetailsModels
            let data = this.details.map((d, index) => {
                d.product = this.products.find(p => p.id === d.idProduct)
                let transaction = this.transactions.find(p => p.id === d.idTransaction)
                d.customer = this.customers.find(p => p.id == transaction.idCustomer)
                return [index + 1, d.idTransaction, decodeURI(d.customer.name), decodeURI(d.product.name), decodeURI(d.quantily), decodeURI(d.total)];
            })
            this.table.data = [this.header, ...data]
        })
    },
    methods: {
        
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

</script>