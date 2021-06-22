<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="danger">123</el-button>
    <el-date-picker type="daterange" v-model="daterange"></el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        daterange:[]
      };
    }
  };
</script>
