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
        let res = {}
        res.data = JSON.parse('{"transactionsDetailsModels":[{"idTransaction":5,"idProduct":10,"quantily":222,"price":1321,"total":293262,"createat":"Jun 4, 2020 11:59:00 PM","id":2,"listResult":[]},{"idTransaction":5,"idProduct":8,"quantily":111,"price":1111,"total":123321,"createat":"Jun 4, 2020 11:59:00 PM","id":3,"listResult":[]},{"idTransaction":6,"idProduct":11,"quantily":11,"price":11,"total":121,"createat":"Jun 5, 2020 12:05:18 AM","id":4,"listResult":[]},{"idTransaction":6,"idProduct":10,"quantily":11,"price":1321,"total":14531,"createat":"Jun 5, 2020 12:05:18 AM","id":5,"listResult":[]},{"idTransaction":7,"idProduct":9,"quantily":12312,"price":111,"total":1366632,"createat":"Jun 5, 2020 9:20:30 PM","id":6,"listResult":[]},{"idTransaction":8,"idProduct":9,"quantily":12312,"price":111,"total":1366632,"createat":"Jun 5, 2020 9:21:28 PM","id":7,"listResult":[]},{"idTransaction":9,"idProduct":10,"quantily":11,"price":1321,"total":14531,"createat":"Jun 5, 2020 9:22:34 PM","id":8,"listResult":[]},{"idTransaction":10,"idProduct":10,"quantily":111,"price":1321,"total":146631,"createat":"Jun 5, 2020 9:22:49 PM","id":9,"listResult":[]},{"idTransaction":11,"idProduct":10,"quantily":111,"price":1321,"total":146631,"createat":"Jun 5, 2020 9:22:53 PM","id":10,"listResult":[]},{"idTransaction":12,"idProduct":10,"quantily":11,"price":1321,"total":14531,"createat":"Jun 5, 2020 9:22:57 PM","id":11,"listResult":[]}],"transactionsModels":[{"idCustomer":8,"idEmployee":4,"createat":"Jun 4, 2020 10:06:02 PM","id":2,"listResult":[]},{"idCustomer":8,"idEmployee":4,"createat":"Jun 4, 2020 11:58:08 PM","id":3,"listResult":[]},{"idCustomer":8,"idEmployee":4,"createat":"Jun 4, 2020 11:58:45 PM","id":4,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 4, 2020 11:59:00 PM","id":5,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 12:05:18 AM","id":6,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 9:20:30 PM","id":7,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 9:21:28 PM","id":8,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 9:22:34 PM","id":9,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 9:22:49 PM","id":10,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 9:22:53 PM","id":11,"listResult":[]},{"idCustomer":7,"idEmployee":4,"createat":"Jun 5, 2020 9:22:57 PM","id":12,"listResult":[]}],"productsModels":[{"idProvider":9,"idEmployee":4,"name":"q%25C6%25B0eqwe","price":111,"quantily":1111,"description":"%C6%B0dfsdfsqweqweq%20weqw%20qeqeqeqweqwe","sale":0,"createat":"Jun 4, 2020 2:42:02 PM","updateat":"Jun 4, 2020 3:14:36 PM","id":7,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqweqwe","price":1111,"quantily":1111,"description":"13413","sale":0,"createat":"Jun 4, 2020 2:42:45 PM","updateat":"Jun 4, 2020 2:42:45 PM","id":8,"listResult":[]},{"idProvider":8,"idEmployee":4,"name":"%C3%A1dasdad","price":111,"quantily":1111,"description":"qfasdfasf","sale":0,"createat":"Jun 4, 2020 2:43:20 PM","updateat":"Jun 4, 2020 2:43:20 PM","id":9,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe%60%60","price":1321,"quantily":98,"description":"%C3%A1dadas","sale":0,"createat":"Jun 4, 2020 3:15:49 PM","updateat":"Jun 5, 2020 9:22:57 PM","id":10,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqweqw%60","price":11,"quantily":100,"description":"123123","sale":0,"createat":"Jun 4, 2020 4:02:34 PM","updateat":"Jun 5, 2020 12:05:18 AM","id":11,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"123123","price":123,"quantily":123123,"description":"%C3%A1dada","sale":0,"createat":"Jun 5, 2020 9:10:24 PM","updateat":"Jun 5, 2020 9:10:24 PM","id":12,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":123,"quantily":123,"description":"123","sale":0,"createat":"Jun 5, 2020 9:13:21 PM","updateat":"Jun 5, 2020 9:13:21 PM","id":13,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":123,"quantily":123,"description":"1231","sale":0,"createat":"Jun 5, 2020 9:14:31 PM","updateat":"Jun 5, 2020 9:14:31 PM","id":14,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":12312,"quantily":12312,"description":"1231","sale":0,"createat":"Jun 5, 2020 9:20:03 PM","updateat":"Jun 5, 2020 9:20:03 PM","id":15,"listResult":[]}],"customersModels":[{"name":"Nguyen%20Van%20C%C4%83n%20c%C6%B0%E1%BB%9Bc","dateofbirth":"20/20/2000","phone":"099999999","id":6,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":7,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":8,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":9,"listResult":[]},{"name":"qweqwe`wewrwer`qer``","dateofbirth":"sdfsfd","phone":"sdfsdfsdfsdfs","id":10,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"15/03/1999","phone":"0999998992","id":11,"listResult":[]},{"name":"ádadsasd","dateofbirth":"ádadsad","phone":"asdadasdasasd","id":13,"listResult":[]},{"name":"ádasdasdasd","dateofbirth":"22/04/2010","phone":"0909292929","id":14,"listResult":[]},{"name":"q?eqwe","dateofbirth":"`eweqwfq","phone":"?dadsads","id":15,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"123123","phone":"12312313","id":16,"listResult":[]},{"name":"q?eqwe","dateofbirth":"qweqweqw ","phone":"Nguy?n V?n Nam","id":17,"listResult":[]},{"name":"nguy?n v?n nam","dateofbirth":"nguy?n v?n nam","phone":"nguy?n v?n nam","id":19,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":20,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":21,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":22,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":23,"listResult":[]},{"name":"q%C6%B0eqwe","dateofbirth":"q%C6%B0eqwe","phone":"q%C6%B0eqeqw","id":25,"listResult":[]}]}')
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