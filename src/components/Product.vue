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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" > <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" />
            </svg>
          </div>
          <div @click="clickReset">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" > <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" />
            </svg>
          </div>
          <div @click="clickDelete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" > <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" />
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