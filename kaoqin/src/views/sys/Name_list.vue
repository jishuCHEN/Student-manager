<!-- 一个标准的VUE组件由3部分组成 -->
<!-- template 试图模板 -->
<template>
  <div class="about">
  <el-alert
      title="正在考勤 18级移动互联网应用技术高技班"
      type="warning"
      show-icon
    >
  </el-alert>
  <p style="margin:10px 20px;">
    <el-button type="primary" round @click="sel_ok">批量操作签到</el-button>
  </p>
  <el-table style="width: 100%;margin:5px 20px" :data="data"  @selection-change="handleSelectionChange">
   <el-table-column      type="selection"      width="55">    </el-table-column>
    <el-table-column        prop="no"        label="序号"        width="100">      </el-table-column>
    <el-table-column        prop="id"        label="学号"        width="180">      </el-table-column>
      <el-table-column        prop="name"        label="姓名"        width="120">      </el-table-column>
      <el-table-column        prop="ok"        label="签到状态"        width="120">      </el-table-column>
  </el-table>
  </div>
</template>

<!-- javascript 脚本 -->
<script>
import data_json from './18移动班级名单.json'

export default {
  name: 'app',
  data(){
    return{
      data: this.add_ok(data_json),
      multipleSelection: [],
    }
  },
  methods:{
    add_ok: function(data){
      for(var i=0;i<data.length;i++){
        data[i].ok = '无'
      }
      return data;
    },
    sel_ok: function(){
      window.console.log(this.multipleSelection)
      var list = []
      for(var i=0; i<this.multipleSelection.length; i++){
        list.push(this.multipleSelection[i].no)
      }
      for(var j=0; j<list.length; j++){
        for(var k=0; k<this.data.length; k++){
          if(this.data[k].no == list[j]) this.data[k].ok = "已签到";
        }
      }
      this.$notify({
          title: '成功',
          message: this.multipleSelection.length +' 人 签到成功！',
          type: 'success'
        });

        this.$store.commit('add',this.multipleSelection.length)
      window.console.log(this.multipleSelection)
    },
    handleSelectionChange: function(val){
      this.multipleSelection = val;
    }
  }
}
</script>

<!-- CSS样式 -->
<style>

</style>
