<template>
  <div id="app">
    <el-menu width="100%" mode="horizontal" router>
      <el-menu-item index="/index">考勤系统首页</el-menu-item>
      <el-menu-item index="/name_list">考勤名单查看</el-menu-item>
      <el-menu-item index="/count">考勤统计</el-menu-item>
    </el-menu>
    <div class="banner" v-bind:style="backpic_img">
      <h1>18级移动应用技术高技班考勤系统</h1>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import backpic from "./back.jpg";
window.console.log(backpic);
export default {
  name: "app",
  data() {
    return {
      backpic_img: "background:url(" + backpic + ")",
      activeIndex: "/index"
    };
  }
};
</script>
<style>
.banner {
  display: block;
  background: orange;
  height: 200px;
  margin-bottom: 20px;
}
.banner h1 {
  padding-top: 20px;
  padding-left: 5px;
  color: #fff;
}
body {
  margin: 0;
  padding: 0;
}
</style>
