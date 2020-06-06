<template>
  <div id="app">
    <div id="nav" v-if="$store.state.login">
      <router-link to="/san-pham">
        <div class="icon-nav product"></div>
      </router-link>
      <router-link to="/khach-hang">
        <div class="icon-nav customer"></div>
      </router-link>
      <router-link to="/cung-cap">
        <div class="icon-nav provider"></div>
      </router-link>
      <router-link to="/tao-giao-dich">
        <div class="icon-nav trading"></div>
      </router-link>
      <router-link to="/nhan-vien">
        <div class="icon-nav employee"></div>
      </router-link>
      <router-link to="/giao-dich">
        <div class="icon-nav detail"></div>
      </router-link>
      <div
        class="icon-nav logout"
        v-if="$store.state.login"
        @click="$store.dispatch('rejectLogin');$store.commit('setId', -1); $router.push('/dang-nhap');"
      ></div>
    </div>

    <router-view />
  </div>
</template>
<style lang="less">
:root {
  --primary-color: #3f84ff;
  --primary-dark-color: #2f6fdf;
  --third-color: #3ab778;
  --second-color: #9e9ea7;
  --body-bg-color: #f3f3f4;
  --toolbar-bg-color: #ffffff;
  //button
  --button-bg-color: #f3f3f4;
  --button-icon-color: #9e9ea7;
  --button-icon-hover-color: #3f84ff;
  --button-bg-hover-color: rgba(63, 133, 255, 0.103);
  //text
  --text-primary-color: #0d0b22;
  --text-inactive-color: #9e9ea7;
  --text-white-color: #fff;
  //toast
  --toast-noti: #3f84ff;
  --toast-success: #68d049;
  --toast-warning: #f89c4b;
  --toast-error: #e26464;
  //select
  --select-bg: #f3f3f4;
  --select-border: #f3f3f4;
  //input
  --input-check-bg: #ffffff;
  --input-bg: #f3f3f4;
  --input-border: #9e9ea7;
  --input-bg-hover: #fff;
  --input-border-hover: rgba(0, 0, 0, 0.1);
  --input-border-active: rgba(0, 0, 0, 0.1);
  --input-border-focus: #3f84ff;
  --input-shadow-hover: #3f84ff1f;
  --input-bg-hover: #fff;

  --box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
  --box-shadow-2: 0 30px 28px 0 rgba(0, 0, 0, 0.089),
    0 2px 4px 0 rgba(0, 0, 0, 0.12);
}
body {
  overflow: hidden;
  margin: 0;
  background-color: var(--body-bg-color);
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome !important;
}
* {
  font-family: Roboto, system-ui, sans-serif !important;
  line-height: 1.2;
  font-size: 14px;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  background-color: transparent !important;
  width: 5px !important;
  height: 5px !important;
}

::-webkit-scrollbar-button {
  display: none !important;
}

::-webkit-scrollbar-track {
  background-color: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: #dadada69;
  border-radius: 5px;
}
label {
  margin: 0 !important;
}
.btn-default-focus {
  outline: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
  border: none !important;
}
input,
label,
select,
button,
textarea {
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  box-sizing: border-box !important;
}
select {
  width: auto !important;
  background-color: var(--select-bg) !important;
  padding: 10px 32px 10px 16px !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  border: 1px solid var(--select-border) !important;
  color: var(--text-primary-color) !important;
  background-repeat: no-repeat !important;
  background-position: calc(100% - 16px) 50% !important;
  background-size: 10px 6px !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12.828' height='7.828' viewBox='0 0 12.828 7.828'%3E%3Cpath id='Path_15' data-name='Path 15' d='M1014.566,219.5l5,5,5-5' transform='translate(-1013.152 -218.086)' fill='none' stroke='%239e9ea7' stroke-linecap='round' stroke-width='2'/%3E%3C/svg%3E") !important;
}

input:hover[type="checkbox"],
input:hover[type="radio"] {
  cursor: pointer;
}
input:focus[type="checkbox"],
input:focus[type="radio"] {
  outline: none;
}
input:hover[type="text"],
input:hover[type="search"],
input:hover[type="password"],
input:hover[type="email"],
input:hover[type="url"],
input:hover[type="tel"],
.selectize-input:hover,
.ql-container .ql-editor:hover,
select:hover,
.input-with-prefix:hover {
  background-color: var(--input-bg-hover) !important;
  border-color: var(--input-border-hover) !important;
  -webkit-box-shadow: 0 0 0 4px var(--input-shadow-hover) !important;
  box-shadow: 0 0 0 4px var(--input-shadow-hover) !important;
}
input[type="text"],
input[type="search"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="tel"],
.selectize-input {
  border: 1px solid transparent !important;
}
input:active[type="text"],
input:hover[type="checkbox"],
input:hover[type="radio"],
input:active[type="search"],
input:active[type="password"],
input:active[type="email"],
input:active[type="url"],
input:active[type="tel"],
.selectize-input:active,
.ql-container .ql-editor:active,
select:active,
.input-with-prefix:active {
  background-color: var(--input-bg-hover);
  border-color: var(--input-border-active);
  -webkit-box-shadow: none;
  box-shadow: none;
}
input:focus[type="text"],
input:hover[type="checkbox"],
input:hover[type="radio"],
input:focus[type="search"],
input:focus[type="password"],
input:focus[type="email"],
input:focus[type="url"],
input:focus[type="tel"],
.selectize-input:focus,
.ql-container .ql-editor:focus,
select:focus,
.input-with-prefix:focus {
  background-color: var(--input-bg-hover);
  border-color: var(--input-border-focus) !important;
  -webkit-box-shadow: 0 0 0 4px var(--input-shadow-hover) !important;
  box-shadow: 0 0 0 4px var(--input-shadow-hover) !important;
}
input[type="file"]:focus,
input[type="checkbox"]:focus,
input[type="radio"]:focus {
  outline: none !important;
}
input[type="text"],
input[type="search"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="tel"],
.selectize-input,
.ql-container .ql-editor,
select,
.input-with-prefix {
  font-weight: 400 !important;
  // line-height: 24px;
  width: 100% !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  max-height: 40px !important;
  min-height: 40px !important;
  padding: 11px 16px;
  outline: none !important;
  border-radius: 8px !important;
  -webkit-transition: background-color 200ms ease, outline 200ms ease,
    color 200ms ease, -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  color: var(--text-primary-color) !important;
  background-color: var(--input-bg) !important;
}
input:hover[type="submit"] {
  background-color: var(--primary-dark-color);
  border-color: var(--input-border-focus);
  -webkit-box-shadow: 0 0 0 4px var(--input-shadow-hover);
  box-shadow: 0 0 0 4px var(--input-shadow-hover);
}
input[type="submit"] {
  width: 100% !important;
  background-color: var(--primary-color);
  height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: transparent;
  border-radius: 8px;
  color: var(--text-white-color);
  user-select: none;
  transition: all ease-in 0.1s;
  cursor: pointer;
}

input:checked[type="checkbox"],
input:checked[type="radio"] {
  background-color: var(--input-border-focus);
  border-color: var(--input-border-focus);
}

input[type="checkbox"],
input[type="radio"] {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  padding: 0;
  position: relative;
  margin: 0 12px 0 0 !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--input-check-bg);
  border: 1px solid var(--input-border);
  outline: none;
  -webkit-transition: background 200ms ease, border 200ms ease,
    -webkit-box-shadow 200ms ease;
  transition: background 200ms ease, border 200ms ease,
    -webkit-box-shadow 200ms ease;
  transition: box-shadow 200ms ease, background 200ms ease, border 200ms ease;
  transition: box-shadow 200ms ease, background 200ms ease, border 200ms ease,
    -webkit-box-shadow 200ms ease;
}
input[type="radio"] {
  border-radius: 50%;
}
input[type="checkbox"]:checked:after {
  content: "";
  position: absolute;
  width: 12px;
  height: 8px;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12.665' height='8.84' viewBox='0 0 12.665 8.84'%3E%3Cpath id='Path_14' data-name='Path 14' d='M424.834,219.6l3.41,3.41,6.426-6.426' transform='translate(-423.42 -215.174)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}
input[type="radio"]:checked:after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--input-check-bg);
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
}
input[type="text"]::-webkit-text-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid var(--input-border-focus) !important;
  -webkit-text-fill-color: var(--text-primary-color) !important;
  -webkit-box-shadow: 0 0 0px 1000px var(--input-bg) inset !important;
  transition: background-color 5000s ease-in-out 0.2s !important;
}
</style>
<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh;
  width: 100vw;
}

#nav {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  padding: 30px;
  position: relative;
  & > a {
    opacity: 0.3;
  }
  & > .router-link-exact-active {
    opacity: 1 !important;
  }
}
.container {
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.main {
  flex: 1;
  padding: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.title-main {
  height: 40px;
  display: flex;
  font-weight: bold;
  font-size: 17px;
}
.title-with-btn {
  height: 40px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 17px;
  & > div {
    height: 40px;
    display: flex;
    & > div {
      & > svg {
        fill: var(--text-inactive-color);
        margin-left: 20px;
        cursor: pointer;
        &:hover {
          fill: var(--primary-color);
        }
      }
    }
  }
}
.setting {
  min-width: 350px;
  flex-basis: 350px;
  background: #fff;
  padding: 30px;
  border-left: 2px solid var(--button-bg-color);
  & > form {
    display: flex;
    flex-direction: column;
    & > label > span {
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
}
.tools-search {
  width: 100% !important;
  margin: 0 !important;
}
.v-table-dynamic {
  width: unset !important;
  padding: 5px;
  margin: -5px;
  height: 100%;
  padding-bottom: 5px !important;
  & > div {
    height: 100%;
    & > *:nth-child(2) {
      height: calc(100% - 125px);
      border-top: none !important;
      margin-top: 25px;
      margin-bottom: 15px;
      overflow: hidden;
    }
  }
  .v-table-body {
    height: 100% !important;
  }
  .vue-input.prefix {
    padding-left: 40px !important;
  }
  .iconsearch {
    height: 100%;
    width: 30px !important;
    transition: all 0.3s;
    line-height: 28px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    font-weight: 400;
  }
  .table-cell {
    border-left: none !important;
  }
  .v-table-tools {
    // margin-left: 200px;
    padding: 0 !important;
  }
  .v-table-row {
    height: 60px !important;
    border-bottom: none !important;
    border-radius: 8px;
  }
  .v-table-left-line {
    border: none !important;
  }
  .v-table:before {
    border: none !important;
  }
  .v-table-right-line {
    border: none !important;
  }
  .table-check-all {
    margin-right: 0 !important;
  }
  .table-check {
    border: none !important;
  }
  .table-check-all,
  .table-check-row {
    width: 20px !important;
    height: 20px !important;
    min-width: 20px !important;
    min-height: 20px !important;
    border-radius: 50% !important;
    padding: 0 !important;
    position: relative !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    background: var(--input-check-bg);
    border: 1px solid var(--input-border);
    outline: none;
    -webkit-transition: background 200ms ease, border 200ms ease,
      -webkit-box-shadow 200ms ease;
    transition: background 200ms ease, border 200ms ease,
      -webkit-box-shadow 200ms ease;
    transition: box-shadow 200ms ease, background 200ms ease, border 200ms ease;
    transition: box-shadow 200ms ease, background 200ms ease, border 200ms ease,
      -webkit-box-shadow 200ms ease;
  }
  .table-check-all.is-checked,
  .table-check-row.is-checked {
    background-color: var(--input-border-focus) !important;
    border-color: var(--input-border-focus) !important;
  }
  .table-check-all:hover,
  .table-check-row:hover {
    background-color: var(--input-bg-hover);
    border-color: var(--input-border-focus);
    -webkit-box-shadow: 0 0 0 4px var(--input-shadow-hover);
    box-shadow: 0 0 0 4px var(--input-shadow-hover);
  }
}
.icon-nav {
  background-color: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin-bottom: 30px;
}
.logout {
  position: absolute;
  bottom: 0;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.page-item.is-activated {
  background-color: var(--primary-color) !important;
}
.page-item {
  height: 40px !important;
  width: 40px !important;
  border: none !important;
}
.page-item.is-disabled,
.page-item.is-disabled:active,
.page-item.is-disabled:focus,
.page-item.is-disabled:hover {
  background-color: var(--input-bg) !important;
}
.page-item.page-forward {
  border-bottom-left-radius: 8px !important;
  border-top-left-radius: 8px !important;
}
.pagination-size .size-options {
  display: flex;
  flex-direction: column;
  padding: 20px 0 !important;
  background: var(--toolbar-bg-color);
  border-radius: 10px !important;
  box-shadow: var(--box-shadow);
  border: none !important;
  .size-item {
    user-select: none;
    height: 40px;
    padding: 0 15px !important;
    display: flex;
    align-items: center;
    color: var(--text-primary-color);
  }
}
.page-item.page-next {
  border-right: 1px solid #dcdfe6;
  border-bottom-right-radius: 8px !important;
  border-top-right-radius: 8px !important;
}
.pagination-size {
  height: 40px !important;
  border-radius: 8px;
  padding: 0 15px !important;
  border: none !important;
  background-color: var(--input-bg);
}
.edit-input {
  font-weight: 400 !important;
  // line-height: 24px;
  width: 100% !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  max-height: 40px !important;
  min-height: 40px !important;
  padding: 11px 16px;
  outline: none !important;
  border-radius: 8px !important;
  -webkit-transition: background-color 200ms ease, outline 200ms ease,
    color 200ms ease, -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  color: var(--text-primary-color) !important;
  background-color: var(--input-bg) !important;
  &:hover {
    background-color: var(--input-bg-hover) !important;
    border-color: var(--input-border-hover) !important;
    -webkit-box-shadow: 0 0 0 4px var(--input-shadow-hover) !important;
    box-shadow: 0 0 0 4px var(--input-shadow-hover) !important;
  }
}
.dropmenu {
  position: absolute;
  max-height: 400px;
  max-width: 300px;
  overflow: auto;
  animation: drop-menu-tab 0.2s;
  animation-fill-mode: both;
  transition: all cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s;
  min-width: 200px;
  padding: 20px 0;
  background: var(--toolbar-bg-color);
  z-index: 100;
  border-radius: 10px;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  & > div {
    user-select: none;
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    color: var(--text-primary-color);
    &:hover {
      cursor: pointer;
      background-color: var(--button-bg-color);
      transition: all ease-in 0.1s;
    }
  }
}
.button-text-with-icon-center {
  margin-top: 30px;
  background-color: var(--button-bg-color);
  height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 10px;
  color: var(--button-icon-color);
  user-select: none;
  transition: all ease-in 0.1s;
}
.total {
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  margin-top: 30px;
  & > div {
    color: var(--primary-color);
    font-size: 17px;
    font-weight: bold;
  }
}
.tableeee {
  height: 100%;
  overflow: auto;
  margin: -5px;
  padding: 5px;
  & > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--button-bg-color);
    & > div {
      display: flex;
      align-items: center;
      height: 50px;
      padding-right: 10px;
    }
  }
}
@keyframes zoom-dialog {
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes drop-notification {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }

  70% {
    opacity: 0.7;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes close-notification {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  100% {
    opacity: 0;
    transform: scale(0.5) translateY(-40px);
  }
}
@keyframes drop-menu-tab {
  0% {
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
