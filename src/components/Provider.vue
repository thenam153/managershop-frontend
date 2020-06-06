<template>
 <div class="container">
    <div class="main">
      <div class="title-main">{{title}}</div>
      <vue-table-dynamic :params="table" @cell-change="onCellChange" ref="table"></vue-table-dynamic>
    </div>
    <div class="setting">
      <div class="title-with-btn">
        Thêm nhà cung cấp
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
        // init 
        this.employees = JSON.parse('[{"name":"aaaa","phone":"sssss","dateofbirth":"sssss","identification":"sssss","address":"ssssdss","username":"namthe153","password":"123456","level":0,"id":4,"listResult":[]},{"name":"qeqweqwe","phone":"vqeqweqwe","dateofbirth":"qeqweqwe","identification":"qeqweqwe","address":"qeqweqwe","username":"qeqweqwe","password":"qeqweqwe","level":0,"id":6,"listResult":[]}]');
        this.provider = JSON.parse('[{"name":"aaaaaaaaa","phone":"sdfsdf","address":"dfsdf","status":"0","description":"aaa","createat":"Jun 4, 2020 2:23:29 PM","updateat":"Jun 4, 2020 2:27:17 PM","idEmployee":6,"id":8,"listResult":[]},{"name":"provider","phone":"provider","address":"provider","status":"0","description":"provider","createat":"Jun 4, 2020 2:27:43 PM","updateat":"Jun 4, 2020 2:27:43 PM","idEmployee":6,"id":9,"listResult":[]},{"name":"%2525C3%2525A1dasdads","phone":"","address":"aaaa%C3%A1da%C3%A2sd","status":"0","description":"adsasdadsasd","createat":"Jun 4, 2020 2:27:44 PM","updateat":"Jun 4, 2020 4:50:20 PM","idEmployee":6,"id":10,"listResult":[]},{"name":"%C3%A1dasd","phone":"%C3%A1dads","address":"sdasd","status":"0","description":"%E1%BA%A5cdasdasd","createat":"Jun 4, 2020 2:27:50 PM","updateat":"Jun 4, 2020 2:27:50 PM","idEmployee":4,"id":11,"listResult":[]},{"name":"q%C6%B0eqe","phone":"q1231","address":"312312","status":"0","description":"12312313","createat":"Jun 5, 2020 9:20:20 PM","updateat":"Jun 5, 2020 9:20:20 PM","idEmployee":4,"id":12,"listResult":[]}]')
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