<!-- 一个标准的VUE组件由3部分组成 -->
<!-- template 试图模板 -->
<template>
  <div class="about">
    <h1><input type="text" v-model="data"/></h1>
    <h1>{{data}}</h1>
    <h1>本系统总使用次数：{{count}}</h1>

    <p>出勤情况</p>
    <el-progress :text-inside="true" :stroke-width="26" 
    :percentage="parseInt((sum_count.ok/sum_count.sum)*100)"></el-progress>


  </div>
</template>

<!-- javascript 脚本 -->
<script>
export default {
  name: 'app',
  data(){
    return {
      data: '姓名',
      count:this.$store.state.count,
      sum_count:this.$store.state.sum_count
    }
  },
  mounted:function(){
    this.$store.commit('increment')
    window.console.log("提交")
  },
  beforeUpdate: function(){
      //alert("修改前")
      window.console.log("在修改之前："+this.data)
  },
  updated: function(){
      window.console.log(this.data)
      window.console.log(this.$store)
      window.console.log(this.$store.state.count)
  }
}
</script>

<!-- CSS样式 -->
<style>

</style>
