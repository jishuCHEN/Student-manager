<template>
  <div class="about">
    <el-alert title="考勤系统正在运行！" type="success" show-icon></el-alert>

    <el-row :gutter="20" class="card-group">
      <el-col v-for="item in class_list" v-bind:key="item" :span="8" style="margin-bottom:10px;">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{item.class}}</span>
          </div>
          <div class="line-box">
            <el-tag effect="dark">班级人数</el-tag>
            <el-tag>{{item.num}}</el-tag>
          </div>
          <div class="line-box">
            <el-tag type="success" effect="dark">班主任名</el-tag>&nbsp;
            <el-tag type="success">{{item.teacher}}</el-tag>
            <p>
              <el-button type="warning" style="width:100%;" round @click="go(item.class)">立即考勤</el-button>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../../router/index.js";

export default {
  name: "app",
  data() {
    return {
      class_list: null
    };
  },
  methods: {
    go: function(id = 1) {
      window.console.log("/name_list/" + id);
      this.$router.push({ path: "/name_list/" });
    },
    get_class_list: function() {
      var t = this;
      this.$axios
        .get("http://127.0.0.1:5000/")
        .then(resonse => {
          window.console.log(resonse);
          t.class_list = resonse.data.data;
        })
        .catch(function(error) {
          t.$message("班级读取错误,请检查接口服务器");
          t.get_class_list();
          window.console.log(error);
        });
    }
  },

  mounted: function() {
    this.get_class_list();
  }
};
</script>
<style>
.card-group {
  margin-top: 20px;
}
.line-box {
  margin: 10px 0;
}
.box-card {
  margin: 0 20px;
}
</style>
