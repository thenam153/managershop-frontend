<template>
  <div id="app">
    <div id="nav">
      <router-link to="/san-pham">Sản phẩm</router-link> |
      <router-link to="/khach-hang">Khách hàng</router-link>
      <router-link to="/cung-cap">Nhà cung cấp</router-link>
      <router-link to="/giao-dich">Giao dịch</router-link>
      <router-link to="/nhan-vien">Nhân viên</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
