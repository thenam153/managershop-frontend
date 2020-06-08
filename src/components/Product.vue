<template>
  <div class="container">
    <div class="main">
      <div class="title-main">{{title}}</div>
      <vue-table-dynamic :params="table" @cell-change="onCellChange" ref="table"></vue-table-dynamic>
    </div>
    <div class="setting">
      <div class="title-with-btn">
        Tạo sản phẩm
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
          <span>Tên sản phẩm:</span>
          <input v-model="name" type="search" />
        </label>
        <label>
          <span>Giá:</span>
          <input v-model="price" type="text" />
        </label>
        <label>
          <span>Số lượng:</span>
          <input v-model="quantily" type="text" />
        </label>
        <label>
          <span>Chi tiết:</span>
          <input v-model="description" type="text" />
        </label>
        <label>
          <span>Nhà cung cấp:</span>
          <select v-model="idProvider">
            <option
              v-for="provider in providers"
              v-bind:key="provider.id"
              :value="provider.id"
            >{{ decodeURI(provider.name) }}</option>
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
import axios from "axios";
import async from "async";

export default {
  name: "Product",
  props: ["title"],
  data: function() {
    return {
      name: "",
      price: 0,
      quantily: 0,
      description: "",
      idProvider: null,
      providers: [],
      product: null,
      header: [
        "STT",
        "Sản phẩm",
        "Giá",
        "Số lượng",
        "Chi tiết",
        "Nhà cung cấp"
      ],
      keys: ["name", "price", "quantily", "description"],
      table: {
        data: [],
        header: "row",
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
    };
  },
  created() {
    axios({
      method: "post",
      url: "http://localhost:1503/get/cung-cap"
    }).then(res => {
      console.log(res);
      this.providers = res.data;
      axios({
        method: "post",
        url: "http://localhost:1503/get/san-pham"
      }).then(res => {
        console.log(res);
        this.product = res.data;
      });
    });
    // fake
    this.providers = JSON.parse(
      '[{"name":"aaaaaaaaa","phone":"sdfsdf","address":"dfsdf","status":"0","description":"aaa","createat":"Jun 4, 2020 2:23:29 PM","updateat":"Jun 4, 2020 2:27:17 PM","idEmployee":6,"id":8,"listResult":[]},{"name":"provider","phone":"provider","address":"provider","status":"0","description":"provider","createat":"Jun 4, 2020 2:27:43 PM","updateat":"Jun 4, 2020 2:27:43 PM","idEmployee":6,"id":9,"listResult":[]},{"name":"%2525C3%2525A1dasdads","phone":"","address":"aaaa%C3%A1da%C3%A2sd","status":"0","description":"adsasdadsasd","createat":"Jun 4, 2020 2:27:44 PM","updateat":"Jun 4, 2020 4:50:20 PM","idEmployee":6,"id":10,"listResult":[]},{"name":"%C3%A1dasd","phone":"%C3%A1dads","address":"sdasd","status":"0","description":"%E1%BA%A5cdasdasd","createat":"Jun 4, 2020 2:27:50 PM","updateat":"Jun 4, 2020 2:27:50 PM","idEmployee":4,"id":11,"listResult":[]},{"name":"q%C6%B0eqe","phone":"q1231","address":"312312","status":"0","description":"12312313","createat":"Jun 5, 2020 9:20:20 PM","updateat":"Jun 5, 2020 9:20:20 PM","idEmployee":4,"id":12,"listResult":[]}]'
    );
    this.product = JSON.parse(
      '[{"idProvider":9,"idEmployee":4,"name":"q%25C6%25B0eqwe","price":111,"quantily":1111,"description":"%C6%B0dfsdfsqweqweq%20weqw%20qeqeqeqweqwe","sale":0,"createat":"Jun 4, 2020 2:42:02 PM","updateat":"Jun 4, 2020 3:14:36 PM","id":7,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqweqwe","price":1111,"quantily":1111,"description":"13413","sale":0,"createat":"Jun 4, 2020 2:42:45 PM","updateat":"Jun 4, 2020 2:42:45 PM","id":8,"listResult":[]},{"idProvider":8,"idEmployee":4,"name":"%C3%A1dasdad","price":111,"quantily":1111,"description":"qfasdfasf","sale":0,"createat":"Jun 4, 2020 2:43:20 PM","updateat":"Jun 4, 2020 2:43:20 PM","id":9,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe%60%60","price":1321,"quantily":98,"description":"%C3%A1dadas","sale":0,"createat":"Jun 4, 2020 3:15:49 PM","updateat":"Jun 5, 2020 9:22:57 PM","id":10,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqweqw%60","price":11,"quantily":100,"description":"123123","sale":0,"createat":"Jun 4, 2020 4:02:34 PM","updateat":"Jun 5, 2020 12:05:18 AM","id":11,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"123123","price":123,"quantily":123123,"description":"%C3%A1dada","sale":0,"createat":"Jun 5, 2020 9:10:24 PM","updateat":"Jun 5, 2020 9:10:24 PM","id":12,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":123,"quantily":123,"description":"123","sale":0,"createat":"Jun 5, 2020 9:13:21 PM","updateat":"Jun 5, 2020 9:13:21 PM","id":13,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":123,"quantily":123,"description":"1231","sale":0,"createat":"Jun 5, 2020 9:14:31 PM","updateat":"Jun 5, 2020 9:14:31 PM","id":14,"listResult":[]},{"idProvider":9,"idEmployee":4,"name":"q%C6%B0eqwe","price":12312,"quantily":12312,"description":"1231","sale":0,"createat":"Jun 5, 2020 9:20:03 PM","updateat":"Jun 5, 2020 9:20:03 PM","id":15,"listResult":[]}]'
    );
  },
  methods: {
    submitData() {
      axios({
        method: "post",
        url: "http://localhost:1503/create/san-pham",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        data: {
          name: encodeURI(this.name),
          price: encodeURI(this.price),
          quantily: encodeURI(this.quantily),
          description: encodeURI(this.description),
          idProvider: encodeURI(this.idProvider),
          idEmployee: this.$store.state.id
        }
      })
        .then(res => {
          console.log(res);
          this.product.push(res.data);
          this.name = "";
          this.price = 0;
          this.quantily = 0;
          this.description = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    onCellChange(row, col, data) {
      this.change[row] = Object.assign({}, this.product[row - 1]);
      this.change[row][this.keys[col - 1]] = data;
    },
    clickSave() {
      async.each(
        this.change,
        function(c, next) {
          axios({
            method: "post",
            url: "http://localhost:1503/edit/san-pham",
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            // data: c
            data: encodeData(c)
          })
            .then(() => {})
            .catch(err => {
              console.log(err);
            })
            .finally(() => {
              next();
            });
        },
        err => {
          console.log(err);
          this.change = {};
        }
      );
    },
    clickReset() {
      let data = (this.product || []).map((c, i) => {
        let provider = (this.providers || []).find(e => e.id == c.idProvider);
        console.log(provider);
        return [
          i + 1,
          decodeURI(c.name),
          decodeURI(c.price),
          decodeURI(c.quantily),
          decodeURI(c.description),
          decodeURI((provider || {}).name || c.idProvider)
        ];
      });
      this.table.data = [this.header, ...data];
      this.index = {};
    },
    clickDelete() {
      console.log("delete", this.$refs.table.getCheckedRowDatas(true));
      let product = this.product;
      async.eachOf(
        this.$refs.table.getCheckedRowDatas(true),
        function(c, index, next) {
          if (index == 0) return next();
          axios({
            method: "post",
            url: "http://localhost:1503/delete/san-pham",
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            // data: c
            data: {
              id: product[c[0] - 1].id
            }
          })
            .then(() => {})
            .catch(err => {
              console.log(err);
            })
            .finally(() => {
              next();
            });
        },
        () => {
          this.change = {};
          axios({
            method: "post",
            url: "http://localhost:1503/get/san-pham"
          }).then(res => {
            console.log(res);
            this.product = res.data;
          });
        }
      );
    }
  },
  watch: {
    product: function() {
      let data = (this.product || []).map((c, i) => {
        let provider = (this.providers || []).find(e => e.id == c.idProvider);
        console.log(provider);
        return [
          i + 1,
          decodeURI(c.name),
          decodeURI(c.price),
          decodeURI(c.quantily),
          decodeURI(c.description),
          decodeURI((provider || {}).name || c.idProvider)
        ];
      });
      this.table.data = [this.header, ...data];
    }
  }
};
function encodeData(data) {
  let dataCache = Object.assign({}, data);
  for (let key of Object.keys(dataCache)) {
    if (key === "listResult" || key === "updateat" || key === "createat")
      continue;
    dataCache[key] = encodeURI(dataCache[key]);
  }
  return dataCache;
}
</script>