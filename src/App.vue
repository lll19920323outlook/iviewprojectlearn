<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import './assets/css/common.css'

export default {
  name: 'App',
  mounted() {
    //app被挂载或者替换时调用，可以理解为app渲染完成以后
    document.getElementById('v-loading-container').style.display = 'none'
  }
}
</script>


<style>
.el-loading {
  z-index: 999999;
}
/* 解决element-ui的table表格控件表头与内容列不对齐问题 */
/* .el-table th.gutter{
    display: table-cell !important;
  } */
.el-table th {
  display: table-cell !important;
}
.el-loading .el-loading-spinner {
  padding: 7px;
  background: #ececec;
  width: 200px;
  color: red;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #a0a0a0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50; /* margin-top: 60px; */
}
#nprogress .bar {
  background: white;
  height: 2px; /* filter: blur(0.5px) */
}
.ivu-form .ivu-form-item-label {
  color: #2e2e2f;
}
/* 2021.03.20修复明细表格错位 */
.grid-detail .el-table__fixed-body-wrapper {
  top: 41px !important;
}
html,
body,
#app {
  height: 100%;
}
</style>
