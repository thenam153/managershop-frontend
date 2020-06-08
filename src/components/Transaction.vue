<template>
  <div class="container">
    <div class="main">
      <div class="title-main">{{title}}</div>
      <div class="tableeee">
        <div v-for="(item, index) in inCart" :key="index">
            <div style="width: 250px;"><div>Tên: {{item.name}}</div></div>
            <div style="width: 100px;"><div>Id: {{item.id}}</div></div>
            <div style="width: 150px;"><div>Giá {{item.price}}</div></div>
            <div style="width: 150px; display: flex; align-items: center">Số lượng:<input type="text" v-model="item.number" style="margin-left: 10px;" /></div>
            <div style="width: 350px; display: flex; align-items: center">Mô tả:<input type="text" v-model="item.detail" style="margin-left: 10px;" /></div>
            <div style="width: 50px; padding: unset; justify-content: center;"><div @click="deleteCart(index)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="curentColor" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path></svg>
                </div></div>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="title-with-btn">
        Abc
     
      </div>

      <form>
        <label>
          <span>Khách hàng</span>
          <input v-if="!selected" type="text" v-model.trim="search" @focus="optionsShown = true; optionsShownProduct = false" ref="input" @keypress.enter="onEnter('customer')"    >
                <div class="edit-input" v-else @click="resetInput('customer')">
                    {{decodeURI(selected.name)}}
                </div>
                <div v-if="optionsShown" class="dropmenu">
                     <div @click="onSelect(customer)" v-for="customer in listCustomer" v-bind:key="customer.id">
                            {{ decodeURI(customer.name) }} - {{ decodeURI(customer.phone) }}
                    </div>
                </div>
                <div v-if="selected" style="background-color: var(--input-bg); padding: 16px; border-radius: 8px; margin-top: 20px;">
                    {{ decodeURI(selected.name) }}
                    {{ decodeURI(selected.phone) }}
                    {{ decodeURI(selected.address) }}
                </div>
        </label>
        
        <label>
          <span>Sản phẩm</span>
           <input v-if="!selectedProduct" type="text" v-model.trim="searchProduct" @focus="optionsShownProduct = true; optionsShown = false" ref="inputProduct" @keypress.enter="onEnter('product')"    >
                <div class="edit-input" v-else @click="resetInput('product')">
                    {{decodeURI(selectedProduct.name)}}
                </div>
                <div v-if="optionsShownProduct" class="dropmenu">
                     <div @click="onSelectProduct(product)" v-for="product in listProduct" v-bind:key="product.id">
                            {{ decodeURI(product.name) }} - {{product.id}}
                    </div>
                </div>
        </label>
<div class="button-text-with-icon-center" @click="addProduct">
    <span>Thêm sản phẩm</span>
  </div>
        <div class="total">
            Tổng tiền:
            <div>{{totalPrice}}</div>
 
        </div>
             

        <input type="submit" value="Thanh toán" @click="onPayment" style="margin-top: 30px;" />
      </form>
    </div>
  </div>
   <!-- <div>
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
    </div> -->
</template>

<script>
import axios from "axios";
import async from "async";

export default {
  name: "Transaction",
  props: ["title"],
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
    };
  },
  created() {
    axios({
      method: "post",
      url: "http://localhost:1503/get/khach-hang"
    }).then(res => {
      console.log(res);
      this.customers = res.data;
    });
    axios({
      method: "post",
      url: "http://localhost:1503/get/san-pham"
    }).then(res => {
      console.log(res);
      this.products = res.data;
    });
    // init
    this.customers = JSON.parse(
      '[{"name":"Nguyen%20Van%20C%C4%83n%20c%C6%B0%E1%BB%9Bc","dateofbirth":"20/20/2000","phone":"099999999","id":6,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":7,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":8,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":9,"listResult":[]},{"name":"qweqwe`wewrwer`qer``","dateofbirth":"sdfsfd","phone":"sdfsdfsdfsdfs","id":10,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"15/03/1999","phone":"0999998992","id":11,"listResult":[]},{"name":"ádadsasd","dateofbirth":"ádadsad","phone":"asdadasdasasd","id":13,"listResult":[]},{"name":"ádasdasdasd","dateofbirth":"22/04/2010","phone":"0909292929","id":14,"listResult":[]},{"name":"q?eqwe","dateofbirth":"`eweqwfq","phone":"?dadsads","id":15,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"123123","phone":"12312313","id":16,"listResult":[]},{"name":"q?eqwe","dateofbirth":"qweqweqw ","phone":"Nguy?n V?n Nam","id":17,"listResult":[]},{"name":"nguy?n v?n nam","dateofbirth":"nguy?n v?n nam","phone":"nguy?n v?n nam","id":19,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":20,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":21,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":22,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":23,"listResult":[]},{"name":"q%C6%B0eqwe","dateofbirth":"q%C6%B0eqwe","phone":"q%C6%B0eqeqw","id":25,"listResult":[]}]'
    );
    this.products = JSON.parse(
      '[{"idProvider":9,"idEmployee":4,"name":"q%25C6%25B0eqwe","price":111,"quantily":1111,"description":"%C6%B0dfsdfsqweqweq%20weqw%20qeqeqeqweqwe","sale":0,"createat":"Jun 4, 2020 2:42:02 PM","updateat":"Jun 4, 2020 3:14:36 PM","id":7,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqweqwe","price":1111,"quantily":1111,"description":"13413","sale":0,"createat":"Jun 4, 2020 2:42:45 PM","updateat":"Jun 4, 2020 2:42:45 PM","id":8,"listResult":[]},{"idProvider":8,"idEmployee":4,"name":"%C3%A1dasdad","price":111,"quantily":1111,"description":"qfasdfasf","sale":0,"createat":"Jun 4, 2020 2:43:20 PM","updateat":"Jun 4, 2020 2:43:20 PM","id":9,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe%60%60","price":1321,"quantily":98,"description":"%C3%A1dadas","sale":0,"createat":"Jun 4, 2020 3:15:49 PM","updateat":"Jun 5, 2020 9:22:57 PM","id":10,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqweqw%60","price":11,"quantily":100,"description":"123123","sale":0,"createat":"Jun 4, 2020 4:02:34 PM","updateat":"Jun 5, 2020 12:05:18 AM","id":11,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"123123","price":123,"quantily":123123,"description":"%C3%A1dada","sale":0,"createat":"Jun 5, 2020 9:10:24 PM","updateat":"Jun 5, 2020 9:10:24 PM","id":12,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":123,"quantily":123,"description":"123","sale":0,"createat":"Jun 5, 2020 9:13:21 PM","updateat":"Jun 5, 2020 9:13:21 PM","id":13,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":123,"quantily":123,"description":"1231","sale":0,"createat":"Jun 5, 2020 9:14:31 PM","updateat":"Jun 5, 2020 9:14:31 PM","id":14,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":12312,"quantily":12312,"description":"1231","sale":0,"createat":"Jun 5, 2020 9:20:03 PM","updateat":"Jun 5, 2020 9:20:03 PM","id":15,"listResult":[]}]'
    );
  },
  methods: {
    onSelect(customer) {
      this.selected = customer;
      this.optionsShown = false;
    },
    resetInput(string) {
      if (string === "customer") {
        this.selected = null;
        this.optionsShown = true;
        this.$nextTick(() => this.$refs.input.focus());
      }
      if (string === "product") {
        this.selectedProduct = null;
        this.optionsShownProduct = true;
        this.$nextTick(() => this.$refs.inputProduct.focus());
      }
    },
    onEnter(string) {
      if (string === "customer") {
        this.selected = this.listCustomer ? this.listCustomer[0] : null;
        this.optionsShown = false;
      }
      if (string === "product") {
        this.selectedProduct = this.listProduct ? this.listProduct[0] : null;
        this.optionsShownProduct = false;
      }
    },
    onSelectProduct(product) {
      this.selectedProduct = product;
      this.optionsShownProduct = false;
    },
    addProduct() {
      if (this.selectedProduct == null) return;
      this.inCart.push(Object.assign({}, this.selectedProduct));
      this.selectedProduct = null;
      this.searchProduct = "";
    },
    onPayment() {
      axios({
        method: "post",
        url: "http://localhost:1503/create/giao-dich",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        data: {
          idCustomer: (this.selected || {}).id,
          idEmployee: this.$store.state.id
        }
      }).then(res => {
        let data = res.data;
        async.each(
          this.inCart,
          (p, next) => {
            axios({
              method: "post",
              url: "http://localhost:1503/create/giao-dich/chi-tiet",
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
            }).finally(() => {
              next();
            });
          },
          function(err) {
            console.log("pay thành cồng");
          }
        );
      });
    },
    deleteCart(index) {
      this.inCart.splice(index, 1);
    }
  },
  computed: {
    listCustomer() {
      if (!this.search || !this.search.length) {
        return this.customers;
      }
      return this.customers.filter(c => {
        return (
          decodeURI(c.name.toLowerCase()).includes(this.search.toLowerCase()) ||
          decodeURI(c.phone.toLowerCase()).includes(this.search.toLowerCase())
        );
      });
    },
    listProduct() {
      if (!this.searchProduct || !this.searchProduct.length) {
        return this.products;
      }
      return this.products.filter(c => {
        return (
          decodeURI(c.name.toLowerCase()).includes(
            this.searchProduct.toLowerCase()
          ) ||
          decodeURI(c.id.toString().toLowerCase()).includes(
            this.searchProduct.toLowerCase()
          )
        );
      });
    },
    totalPrice() {
      let total = 0;
      this.inCart.forEach(i => {
        if (!isNaN(Number.parseInt(i.number))) {
          total += Number.parseInt(i.number) * Number.parseInt(i.price);
        }
      });
      return total;
    }
  }
};
</script>