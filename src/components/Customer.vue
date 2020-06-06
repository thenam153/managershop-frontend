<template>
  <div class="container">
    <div class="main">
      <div class="title-main">{{title}}</div>
      <vue-table-dynamic :params="table" @cell-change="onCellChange" ref="table"></vue-table-dynamic>
    </div>
    <div class="setting">
      <div class="title-with-btn">
        Thêm khách hàng
        <div>
          <div @click="clickSave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              role="img"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              />
            </svg>
          </div>
          <div @click="clickReset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              role="img"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              />
            </svg>
          </div>
          <div @click="clickDelete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              role="img"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <form>
        <label>
          <span>Họ và tên:</span>
          <input v-model="name" type="text" />
        </label>
        <label>
          <span>Ngày sinh:</span>
          <input v-model="birthday" type="text" />
        </label>
        <label>
          <span>Số điện thoại:</span>
          <input v-model="phone" type="text" />
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
  name: "Customer",
  props: ["title"],
  data: function() {
    return {
      name: "",
      birthday: "",
      phone: "",
      customer: null,
      header: ["STT", "Họ và tên", "Ngày sinh", "Số điện thoại"],
      keys: ["name", "dateofbirth", "phone"],
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
          column: [1, 2, 3]
        }
      },
      change: {}
    };
  },
  created() {
    axios({
      method: "post",
      url: "http://localhost:1503/get/khach-hang"
    }).then(res => {
      console.log(res);
      this.customer = res.data;
    });
    // init
    this.customer = JSON.parse(
      '[{"name":"Nguyen%20Van%20C%C4%83n%20c%C6%B0%E1%BB%9Bc","dateofbirth":"20/20/2000","phone":"099999999","id":6,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":7,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":8,"listResult":[]},{"name":"ádasdada","dateofbirth":"ádaasdad","phone":"ádasdadsd","id":9,"listResult":[]},{"name":"qweqwe`wewrwer`qer``","dateofbirth":"sdfsfd","phone":"sdfsdfsdfsdfs","id":10,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"15/03/1999","phone":"0999998992","id":11,"listResult":[]},{"name":"ádadsasd","dateofbirth":"ádadsad","phone":"asdadasdasasd","id":13,"listResult":[]},{"name":"ádasdasdasd","dateofbirth":"22/04/2010","phone":"0909292929","id":14,"listResult":[]},{"name":"q?eqwe","dateofbirth":"`eweqwfq","phone":"?dadsads","id":15,"listResult":[]},{"name":"Nguy?n Th? Nam","dateofbirth":"123123","phone":"12312313","id":16,"listResult":[]},{"name":"q?eqwe","dateofbirth":"qweqweqw ","phone":"Nguy?n V?n Nam","id":17,"listResult":[]},{"name":"nguy?n v?n nam","dateofbirth":"nguy?n v?n nam","phone":"nguy?n v?n nam","id":19,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":20,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":21,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":22,"listResult":[]},{"name":"nguy%E1%BB%85n%20v%C4%83n%20nam","dateofbirth":"nguy%E1%BB%85n%20v%C4%83n%20nam","phone":"nguy%E1%BB%85n%20v%C4%83n%20nam","id":23,"listResult":[]},{"name":"q%C6%B0eqwe","dateofbirth":"q%C6%B0eqwe","phone":"q%C6%B0eqeqw","id":25,"listResult":[]}]'
    );
  },
  methods: {
    submitData() {
      axios({
        method: "post",
        url: "http://localhost:1503/create/khach-hang",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        data: {
          name: encodeURI(this.name),
          dateofbirth: encodeURI(this.birthday),
          phone: encodeURI(this.phone)
        }
      })
        .then(res => {
          this.customer.push(res.data);
          this.name = "";
          this.birthday = "";
          this.phone = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    onCellChange(row, col, data) {
      this.change[row] = Object.assign({}, this.customer[row - 1]);
      this.change[row][this.keys[col - 1]] = data;
    },
    clickSave() {
      async.each(
        this.change,
        function(c, next) {
          axios({
            method: "post",
            url: "http://localhost:1503/edit/khach-hang",
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
      let data = (this.customer || []).map((c, i) => {
        return [
          i + 1,
          decodeURI(c.name),
          decodeURI(c.dateofbirth),
          decodeURI(c.phone)
        ];
      });
      this.table.data = [this.header, ...data];
      this.index = {};
    },
    clickDelete() {
      console.log("delete", this.$refs.table.getCheckedRowDatas(true));
      let customer = this.customer;
      async.eachOf(
        this.$refs.table.getCheckedRowDatas(true),
        function(c, index, next) {
          if (index == 0) return next();
          axios({
            method: "post",
            url: "http://localhost:1503/delete/khach-hang",
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            // data: c
            data: {
              id: customer[c[0] - 1].id
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
            url: "http://localhost:1503/get/khach-hang"
          }).then(res => {
            console.log(res);
            this.customer = res.data;
          });
        }
      );
    }
  },
  watch: {
    customer: function() {
      let data = (this.customer || []).map((c, i) => {
        return [
          i + 1,
          decodeURI(c.name),
          decodeURI(c.dateofbirth),
          decodeURI(c.phone)
        ];
      });
      this.table.data = [this.header, ...data];
    }
  }
};
function encodeData(data) {
  let dataCache = Object.assign({}, data);
  for (let key of Object.keys(dataCache)) {
    if (key === "listResult") continue;
    dataCache[key] = encodeURI(dataCache[key]);
  }
  return dataCache;
}
</script>