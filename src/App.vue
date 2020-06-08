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
    // height: 40px;
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
  height: 25px;
  width: 25px;
  margin-bottom: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.product {
  transform: scale(1.4);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48.426' height='46.541' viewBox='0 0 48.426 46.541'%3E%3Cg id='Group_107' data-name='Group 107' transform='translate(-35.903 -139.797)'%3E%3Cg id='Group_106' data-name='Group 106' transform='translate(-5.405 -5.195)'%3E%3Cg id='Polygon_3' data-name='Polygon 3' transform='translate(41.309 163.659) rotate(-30)' fill='none'%3E%3Cpath d='M26.273,0a3,3,0,0,1,2.6,1.495l7.594,13.093a3,3,0,0,1,0,3.01L28.868,30.69a3,3,0,0,1-2.6,1.495H11.062a3,3,0,0,1-2.6-1.495L.873,17.6a3,3,0,0,1,0-3.01L8.467,1.495A3,3,0,0,1,11.062,0Z' stroke='none'/%3E%3Cpath d='M 11.06182479858398 2.5 C 10.88417434692383 2.5 10.71843528747559 2.595468521118164 10.62930488586426 2.749149322509766 L 3.035564422607422 15.8417797088623 C 2.945816040039062 15.99651908874512 2.945816040039062 16.18877029418945 3.035564422607422 16.34349822998047 L 10.62930488586426 29.43615913391113 C 10.71843528747559 29.58983993530273 10.88416481018066 29.68529891967773 11.06181526184082 29.68529891967773 L 26.27312469482422 29.68529891967773 C 26.45077514648438 29.68529891967773 26.61650466918945 29.58983993530273 26.70563507080078 29.43614959716797 L 34.29938507080078 16.34350967407227 C 34.38912582397461 16.18877983093262 34.38912582397461 15.99654006958008 34.29937362670898 15.84178924560547 L 26.70563507080078 2.749139785766602 C 26.61650466918945 2.595458984375 26.45077514648438 2.5 26.27312469482422 2.5 L 11.06182479858398 2.5 M 11.06182479858398 0 L 26.27312469482422 0 C 27.34279441833496 0 28.33154487609863 0.569549560546875 28.86821365356445 1.494838714599609 L 36.46195602416992 14.58749961853027 C 37.00183486938477 15.51830863952637 37.00183486938477 16.66698837280273 36.46195602416992 17.59780883789062 L 28.86821365356445 30.69044876098633 C 28.33154487609863 31.61574935913086 27.34279441833496 32.18529891967773 26.27312469482422 32.18529891967773 L 11.06181526184082 32.18529891967773 C 9.992145538330078 32.18529891967773 9.003395080566406 31.61574935913086 8.466724395751953 30.69044876098633 L 0.87298583984375 17.59779930114746 C 0.3331146240234375 16.6669807434082 0.3331146240234375 15.51830863952637 0.87298583984375 14.58749008178711 L 8.466724395751953 1.494850158691406 C 9.00340461730957 0.569549560546875 9.992155075073242 0 11.06182479858398 0 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3Cpath id='Path_27' data-name='Path 27' d='M805.917,1845.033l14.487,8.485,14.291-8.223' transform='translate(-754.875 -1685.104)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5'/%3E%3Cpath id='Path_28' data-name='Path 28' d='M818.046,1853.378V1836.1' transform='translate(-752.615 -1667.794)' fill='none' stroke='%23fff' stroke-width='2.5'/%3E%3Cpath id='Path_29' data-name='Path 29' d='M818.046,1851.468l15.324-8.716' transform='translate(-760.339 -1687.77)' fill='none' stroke='%23fff' stroke-width='2.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.customer {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.63' height='26.631' viewBox='0 0 26.63 26.631'%3E%3Cg id='Group_112' data-name='Group 112' transform='translate(-46.185 -189.337)'%3E%3Cg id='Group_82' data-name='Group 82' transform='translate(72.815 189.337) rotate(90)'%3E%3Cg id='Path_21' data-name='Path 21' transform='translate(0)' fill='none'%3E%3Cpath d='M13.315,0A13.315,13.315,0,1,1,0,13.315,13.315,13.315,0,0,1,13.315,0Z' stroke='none'/%3E%3Cpath d='M 13.31524658203125 1.499996185302734 C 10.15927696228027 1.499996185302734 7.192207336425781 2.728996276855469 4.960607528686523 4.960607528686523 C 2.728996276855469 7.192207336425781 1.499996185302734 10.15927696228027 1.499996185302734 13.31524658203125 C 1.499996185302734 16.47121620178223 2.728996276855469 19.43828582763672 4.960607528686523 21.66988754272461 C 7.192207336425781 23.90149688720703 10.15927696228027 25.13049697875977 13.31524658203125 25.13049697875977 C 16.47121620178223 25.13049697875977 19.43828582763672 23.90149688720703 21.66988754272461 21.66988754272461 C 23.90149688720703 19.43828582763672 25.13049697875977 16.47121620178223 25.13049697875977 13.31524658203125 C 25.13049697875977 10.15927696228027 23.90149688720703 7.192207336425781 21.66988754272461 4.960607528686523 C 19.43828582763672 2.728996276855469 16.47121620178223 1.499996185302734 13.31524658203125 1.499996185302734 M 13.31524658203125 -3.814697265625e-06 C 20.6690559387207 -3.814697265625e-06 26.63049697875977 5.961437225341797 26.63049697875977 13.31524658203125 C 26.63049697875977 20.6690559387207 20.6690559387207 26.63049697875977 13.31524658203125 26.63049697875977 C 5.961437225341797 26.63049697875977 -3.814697265625e-06 20.6690559387207 -3.814697265625e-06 13.31524658203125 C -3.814697265625e-06 5.961437225341797 5.961437225341797 -3.814697265625e-06 13.31524658203125 -3.814697265625e-06 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3Cg id='Group_109' data-name='Group 109' transform='translate(64.16 195.992) rotate(90)'%3E%3Cg id='Path_21-2' data-name='Path 21' transform='translate(0)' fill='none'%3E%3Cpath d='M4.66,0A4.66,4.66,0,1,1,0,4.66,4.66,4.66,0,0,1,4.66,0Z' stroke='none'/%3E%3Cpath d='M 4.65972900390625 1.499999046325684 C 2.917448997497559 1.499999046325684 1.499999046325684 2.917448997497559 1.499999046325684 4.65972900390625 C 1.499999046325684 6.402009010314941 2.917448997497559 7.819458961486816 4.65972900390625 7.819458961486816 C 6.402009010314941 7.819458961486816 7.819458961486816 6.402009010314941 7.819458961486816 4.65972900390625 C 7.819458961486816 2.917448997497559 6.402009010314941 1.499999046325684 4.65972900390625 1.499999046325684 M 4.65972900390625 -9.5367431640625e-07 C 7.23322868347168 -9.5367431640625e-07 9.319458961486816 2.086228847503662 9.319458961486816 4.65972900390625 C 9.319458961486816 7.23322868347168 7.23322868347168 9.319458961486816 4.65972900390625 9.319458961486816 C 2.086228847503662 9.319458961486816 -9.5367431640625e-07 7.23322868347168 -9.5367431640625e-07 4.65972900390625 C -9.5367431640625e-07 2.086228847503662 2.086228847503662 -9.5367431640625e-07 4.65972900390625 -9.5367431640625e-07 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3Cg id='Intersection_1' data-name='Intersection 1' transform='translate(804.185 1862.337)' fill='none'%3E%3Cpath d='M-753.349-1649.573a9.135,9.135,0,0,1,8.664-6.242,9.133,9.133,0,0,1,8.663,6.242,13.263,13.263,0,0,1-8.663,3.2A13.264,13.264,0,0,1-753.349-1649.573Z' stroke='none'/%3E%3Cpath d='M -744.684326171875 -1647.869140625 C -742.2214965820312 -1647.869140625 -739.8269653320312 -1648.639526367188 -737.8360595703125 -1650.056030273438 C -739.1049194335938 -1652.640258789062 -741.7422485351562 -1654.315551757812 -744.684326171875 -1654.315551757812 C -747.6265869140625 -1654.315551757812 -750.2640991210938 -1652.640258789062 -751.5332641601562 -1650.05615234375 C -749.5421752929688 -1648.639526367188 -747.1474609375 -1647.869140625 -744.684326171875 -1647.869140625 M -744.684326171875 -1646.369140625 C -747.9927368164062 -1646.369140625 -751.019775390625 -1647.576171875 -753.3485107421875 -1649.573364257812 C -752.139892578125 -1653.200317382812 -748.7174682617188 -1655.815551757812 -744.684326171875 -1655.815551757812 C -740.6515502929688 -1655.815551757812 -737.2293090820312 -1653.200561523438 -736.0209350585938 -1649.5732421875 C -738.349609375 -1647.576049804688 -741.3762817382812 -1646.369140625 -744.684326171875 -1646.369140625 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.provider {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22.491' height='23.909' viewBox='0 0 22.491 23.909'%3E%3Cg id='Group_105' data-name='Group 105' transform='translate(-48.753 -205.223)'%3E%3Cg id='Group_104' data-name='Group 104' transform='translate(1.757 1.868)'%3E%3Cg id='Path_26' data-name='Path 26' transform='translate(47 211)' fill='none'%3E%3Cpath d='M.194-.775A3.2,3.2,0,0,1,1.225-1.8L9.961-7.144a2.553,2.553,0,0,1,1.31-.5,2.574,2.574,0,0,1,1.314.5L20.908-2A3.83,3.83,0,0,1,22.127-.892,3,3,0,0,1,22.486.593V14.535a1.73,1.73,0,0,1-1.73,1.73H1.729A1.73,1.73,0,0,1,0,14.535V.739A4.19,4.19,0,0,1,.194-.775Z' stroke='none'/%3E%3Cpath d='M 11.27075672149658 -6.143232345581055 C 11.18073749542236 -6.127894401550293 10.99001216888428 -6.036342620849609 10.86781215667725 -5.949235916137695 L 10.82435989379883 -5.914050102233887 L 10.74357986450195 -5.864650726318359 L 2.020360946655273 -0.5307903289794922 C 1.850042343139648 -0.4204797744750977 1.635095596313477 -0.2381992340087891 1.555612564086914 -0.1386041641235352 C 1.51341438293457 0.01632213592529297 1.486196517944336 0.388636589050293 1.498470306396484 0.6638994216918945 L 1.500339508056641 0.7013497352600098 L 1.500339508056641 0.7388396263122559 L 1.499488830566406 14.53488922119141 C 1.499488830566406 14.66157913208008 1.602560043334961 14.76464939117432 1.729249954223633 14.76464939117432 L 20.7565803527832 14.76464939117432 C 20.88327026367188 14.76464939117432 20.9863395690918 14.66157913208008 20.9863395690918 14.53488922119141 L 20.9863395690918 0.5934696197509766 L 20.9863395690918 0.5615596771240234 L 20.98769950866699 0.5296792984008789 C 20.99100875854492 0.4519100189208984 20.96255874633789 0.07938957214355469 20.84533882141113 -0.1136102676391602 C 20.72695159912109 -0.3085269927978516 20.37998199462891 -0.5767278671264648 20.17142486572266 -0.6982278823852539 L 20.15409851074219 -0.7075901031494141 L 20.12009048461914 -0.7285900115966797 L 11.79611968994141 -5.868060111999512 L 11.74594974517822 -5.894969940185547 L 11.68127727508545 -5.946358680725098 C 11.55681896209717 -6.034794807434082 11.3622407913208 -6.127817153930664 11.27075672149658 -6.143232345581055 M 11.2706298828125 -7.644411087036133 C 11.92639923095703 -7.644411087036133 12.58415985107422 -7.144380569458008 12.58415985107422 -7.144380569458008 L 20.90812873840332 -2.004910469055176 C 20.90812873840332 -2.004910469055176 21.73283004760742 -1.541890144348145 22.12738037109375 -0.8923006057739258 C 22.52192878723145 -0.2427005767822266 22.4863395690918 0.5934696197509766 22.4863395690918 0.5934696197509766 L 22.4863395690918 14.53488922119141 C 22.4863395690918 15.49020957946777 21.71189880371094 16.2646484375 20.7565803527832 16.2646484375 L 1.729249954223633 16.2646484375 C 0.7739295959472656 16.2646484375 -0.00051116943359375 15.49020957946777 -0.00051116943359375 14.53488922119141 L 0.000339508056640625 0.7387495040893555 C 0.000339508056640625 0.7387495040893555 -0.04870986938476562 -0.2430105209350586 0.1935386657714844 -0.7753200531005859 C 0.4357986450195312 -1.30763053894043 1.224859237670898 -1.802570343017578 1.224859237670898 -1.802570343017578 L 9.961079597473145 -7.144380569458008 C 9.961079597473145 -7.144380569458008 10.61485958099365 -7.644411087036133 11.2706298828125 -7.644411087036133 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3Cg id='Rectangle_150' data-name='Rectangle 150' transform='translate(54.243 213.132)' fill='none' stroke='%23fff' stroke-width='1.5'%3E%3Cpath d='M2,0H6A2,2,0,0,1,8,2V14a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z' stroke='none'/%3E%3Cpath d='M2,.75H6A1.25,1.25,0,0,1,7.25,2V12.5a.75.75,0,0,1-.75.75h-5a.75.75,0,0,1-.75-.75V2A1.25,1.25,0,0,1,2,.75Z' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.trading {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27.131' height='20.844' viewBox='0 0 27.131 20.844'%3E%3Cg id='Group_103' data-name='Group 103' transform='translate(-45.685 -288.406)'%3E%3Cg id='Group_101' data-name='Group 101'%3E%3Cg id='Union_1' data-name='Union 1' transform='translate(802.75 1960.75)' fill='none'%3E%3Cpath d='M-752.206-1651.5a1,1,0,0,1-1-1V-1663h-2.858a1,1,0,0,1-.8-1.6l5.563-7.344a1,1,0,0,1,1.595,0l5.563,7.344a1,1,0,0,1-.8,1.6h-2.858v10.5a1,1,0,0,1-1,1Z' stroke='none'/%3E%3Cpath d='M -749.2947387695312 -1653 L -749.2947387695312 -1663.000244140625 L -749.2947387695312 -1664.500244140625 L -747.7947387695312 -1664.500244140625 L -745.9429931640625 -1664.500244140625 L -750.5001220703125 -1670.516479492188 L -755.0572509765625 -1664.500244140625 L -753.2055053710938 -1664.500244140625 L -751.7055053710938 -1664.500244140625 L -751.7055053710938 -1663.000244140625 L -751.7055053710938 -1653 L -749.2947387695312 -1653 M -748.7946166992188 -1651.5 L -752.2056274414062 -1651.5 C -752.7582397460938 -1651.5 -753.2055053710938 -1651.947387695312 -753.2055053710938 -1652.5 L -753.2055053710938 -1663.000244140625 L -756.0639038085938 -1663.000244140625 C -756.89013671875 -1663.000244140625 -757.3599243164062 -1663.945190429688 -756.8604125976562 -1664.60400390625 L -751.2975463867188 -1671.947998046875 C -751.0972900390625 -1672.212158203125 -750.7987060546875 -1672.34423828125 -750.5001220703125 -1672.34423828125 C -750.2015380859375 -1672.34423828125 -749.9029541015625 -1672.212158203125 -749.7026977539062 -1671.947998046875 L -744.1398315429688 -1664.60400390625 C -743.6403198242188 -1663.945190429688 -744.110107421875 -1663.000244140625 -744.9363403320312 -1663.000244140625 L -747.7947387695312 -1663.000244140625 L -747.7947387695312 -1652.5 C -747.7947387695312 -1651.947387695312 -748.2420043945312 -1651.5 -748.7946166992188 -1651.5 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3Cg id='Group_102' data-name='Group 102' transform='translate(118.5 597.656) rotate(180)'%3E%3Cg id='Union_1-2' data-name='Union 1' transform='translate(802.75 1960.75)' fill='none'%3E%3Cpath d='M-752.206-1651.5a1,1,0,0,1-1-1V-1663h-2.858a1,1,0,0,1-.8-1.6l5.563-7.344a1,1,0,0,1,1.595,0l5.563,7.344a1,1,0,0,1-.8,1.6h-2.858v10.5a1,1,0,0,1-1,1Z' stroke='none'/%3E%3Cpath d='M -749.2947387695312 -1653 L -749.2947387695312 -1663.000244140625 L -749.2947387695312 -1664.500244140625 L -747.7947387695312 -1664.500244140625 L -745.9429931640625 -1664.500244140625 L -750.5001220703125 -1670.516479492188 L -755.0572509765625 -1664.500244140625 L -753.2055053710938 -1664.500244140625 L -751.7055053710938 -1664.500244140625 L -751.7055053710938 -1663.000244140625 L -751.7055053710938 -1653 L -749.2947387695312 -1653 M -748.7946166992188 -1651.5 L -752.2056274414062 -1651.5 C -752.7582397460938 -1651.5 -753.2055053710938 -1651.947387695312 -753.2055053710938 -1652.5 L -753.2055053710938 -1663.000244140625 L -756.0639038085938 -1663.000244140625 C -756.89013671875 -1663.000244140625 -757.3599243164062 -1663.945190429688 -756.8604125976562 -1664.60400390625 L -751.2975463867188 -1671.947998046875 C -751.0972900390625 -1672.212158203125 -750.7987060546875 -1672.34423828125 -750.5001220703125 -1672.34423828125 C -750.2015380859375 -1672.34423828125 -749.9029541015625 -1672.212158203125 -749.7026977539062 -1671.947998046875 L -744.1398315429688 -1664.60400390625 C -743.6403198242188 -1663.945190429688 -744.110107421875 -1663.000244140625 -744.9363403320312 -1663.000244140625 L -747.7947387695312 -1663.000244140625 L -747.7947387695312 -1652.5 C -747.7947387695312 -1651.947387695312 -748.2420043945312 -1651.5 -748.7946166992188 -1651.5 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.employee {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m511.996094 489.445312c-.003906-18.070312-10.75-34.320312-27.378906-41.394531l-127.546876-54.265625v-31.800781c13.503907-16.953125 22.042969-37.144531 24.902344-58.824219h26.074219c24.8125 0 45-20.1875 45-45v-64.511718c0-22.6875-16.882813-41.496094-38.742187-44.554688-3.242188-97.597656-57.808594-149.09375-158.304688-149.09375s-155.0625 51.496094-158.304688 149.09375c-21.859374 3.058594-38.742187 21.867188-38.742187 44.554688v64.511718c0 24.8125 20.1875 45 45 45h26.074219c2.859375 21.683594 11.398437 41.875 24.902344 58.824219v31.800781l-127.542969 54.265625c-16.632813 7.074219-27.3789065 23.324219-27.386719 41.398438v7.542969c0 3.980468 1.578125 7.796874 4.394531 10.609374 2.8125 2.8125 6.628907 4.394532 10.605469 4.394532h482c3.980469 0 7.796875-1.582032 10.609375-4.394532 2.8125-2.816406 4.390625-6.632812 4.390625-10.609374zm-184.910156-85.136718c.011718.359375.851562 36.765625-20.652344 59.160156-11.808594 12.292969-28.777344 18.523438-50.433594 18.523438-21.578125 0-38.503906-6.1875-50.304688-18.390626-21.761718-22.511718-20.789062-58.976562-20.78125-59.292968.011719-.203125.015626-.402344.015626-.605469v-14.851563c20.539062 12.996094 45.039062 19.976563 71.070312 19.976563s50.53125-6.980469 71.070312-19.976563v14.851563c0 .203125.003907.402344.015626.605469zm25.960937-124.175782-28.535156 19.027344c-9.0625 6.042969-19.613281 9.238282-30.511719 9.238282h-25.371094c-8.28125 0-15 6.714843-15 15 0 8.285156 6.71875 15 15 15h25.371094c16.839844 0 33.148438-4.9375 47.15625-14.28125l5.742188-3.828126c-13.535157 34.925782-48.152344 58.539063-90.898438 58.539063-55.324219 0-97.046875-39.550781-97.046875-92v-121.605469c5.914063-27.492187 14.480469-44.964844 24.808594-50.566406 10.285156-5.585938 25.230469.222656 39.683593 5.835938 11.261719 4.371093 21.898438 8.503906 32.554688 8.503906 10.753906 0 21.261719-4.175782 32.390625-8.59375 14.46875-5.75 28.136719-11.179688 38.261719-5.898438 7.378906 3.847656 17.898437 15.828125 26.394531 50.910156zm70-86.484374v64.511718c0 8.269532-6.730469 15-15 15h-25v-94.511718h25c8.269531 0 15 6.730468 15 15zm-268.609375-126.902344c20.773438-24.382813 54.941406-36.746094 101.5625-36.746094s80.789062 12.363281 101.5625 36.746094c16.355469 19.199218 25.316406 46.726562 26.703125 81.902344h-4.601563c-9.058593-32.171876-21.628906-51.613282-39.140624-60.746094-22.308594-11.632813-44.988282-2.625-63.210938 4.617187-8.015625 3.183594-16.304688 6.476563-21.316406 6.476563-5.035156 0-13.503906-3.289063-21.691406-6.46875-18.867188-7.332032-42.351563-16.453125-64.855469-4.242188-16.96875 9.210938-29.253907 29.019532-37.390625 60.363282h-4.324219c1.382813-35.175782 10.347656-62.703126 26.703125-81.902344zm-65.484375 191.414062v-64.511718c0-8.269532 6.730469-15 15-15h25v94.511718h-25c-8.269531 0-15-6.730468-15-15zm-49.824219 217.496094 117.519532-50c2.632812 16.277344 9.171874 38.425781 25.203124 56.339844h-149.867187c1.589844-2.777344 4.066406-5.03125 7.144531-6.339844zm291.019532 6.339844c16.03125-17.914063 22.570312-40.0625 25.203124-56.339844l117.519532 50c3.078125 1.308594 5.550781 3.5625 7.144531 6.339844zm0 0'/%3E%3C/svg%3E");
  filter: invert(1);
}
.detail {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='28' viewBox='0 0 23 28'%3E%3Cg id='Group_108' data-name='Group 108' transform='translate(-45 -338)'%3E%3Cg id='Rectangle_151' data-name='Rectangle 151' transform='translate(45 338)' fill='none' stroke='%23fff' stroke-width='1.5'%3E%3Crect width='23' height='28' rx='2' stroke='none'/%3E%3Crect x='0.75' y='0.75' width='21.5' height='26.5' rx='1.25' fill='none'/%3E%3C/g%3E%3Cline id='Line_1' data-name='Line 1' x2='5' transform='translate(50.5 344.5)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='1.5'/%3E%3Cline id='Line_2' data-name='Line 2' x2='12' transform='translate(50.5 349.5)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='1.5'/%3E%3Cline id='Line_3' data-name='Line 3' x2='12' transform='translate(50.5 354.5)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='1.5'/%3E%3Cline id='Line_4' data-name='Line 4' x2='12' transform='translate(50.5 359.5)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E");
}
.logout {
  position: absolute;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='27.885' viewBox='0 0 22 27.885'%3E%3Cg id='Group_97' data-name='Group 97' transform='translate(-45 -1013.301)'%3E%3Cg id='Group_84' data-name='Group 84' transform='translate(67 1019.187) rotate(90)'%3E%3Cg id='Path_21' data-name='Path 21' transform='translate(0)' fill='none'%3E%3Cpath d='M11,0A11,11,0,1,1,0,11,11,11,0,0,1,11,0Z' stroke='none'/%3E%3Cpath d='M 11 1.5 C 5.761680603027344 1.5 1.5 5.761680603027344 1.5 11 C 1.5 16.23831939697266 5.761680603027344 20.5 11 20.5 C 16.23831939697266 20.5 20.5 16.23831939697266 20.5 11 C 20.5 5.761680603027344 16.23831939697266 1.5 11 1.5 M 11 0 C 17.07513046264648 0 22 4.924869537353516 22 11 C 22 17.07513046264648 17.07513046264648 22 11 22 C 4.924869537353516 22 0 17.07513046264648 0 11 C 0 4.924869537353516 4.924869537353516 0 11 0 Z' stroke='none' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3Cg id='Rectangle_147' data-name='Rectangle 147' transform='translate(55 1016.801)' fill='%23fff' stroke='%233f84ff' stroke-width='3.5'%3E%3Crect width='2' height='14' rx='1' stroke='none'/%3E%3Crect x='-1.75' y='-1.75' width='5.5' height='17.5' rx='2.75' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
.dialog-overlay {
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background: rgba(32, 33, 36, 0.83);
}
.dialog {
  background-color: var(--toolbar-bg-color);
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--body-bg-color);
  animation: drop-menu-tab 0.5s;
  animation-fill-mode: both;
}
.button-text-with-icon-center > *:nth-child(1) {
  margin-right: 10px;
}
.title-with-btn {
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;

  & > span {
    color: var(--text-primary-color);
    font-weight: 500;
    white-space: nowrap;
  }

  & > div {
    display: flex;
    // width          : 100%;
    justify-content: flex-end;
  }
}
.search-box-with-icon {
  position: relative;
  color: var(--button-icon-color);

  & > svg {
    position: absolute;
    fill: currentColor;
    top: 12px;
    left: 12px;
    margin: 0;
    width: unset;
  }

  & > input {
    padding-left: 40px !important;
    text-overflow: ellipsis;
  }
}
.border-bottom-2px {
  border-bottom: 2px solid var(--button-bg-color);
}

.space-20px {
  width: 20px;
  min-width: 20px;
}

.space-10px {
  width: 10px;
  min-width: 10px;
}

.space-height-20px {
  height: 20px;
  min-height: 20px;
}

.space-height-10px {
  height: 10px;
  min-height: 10px;
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
