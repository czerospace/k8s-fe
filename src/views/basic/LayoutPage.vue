<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple" >1</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple" >2</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple" >3</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple" >4</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple" >5</div></el-col>
  </el-row>
</template>

<style>
  .bg-purple{
    background-color: mediumpurple;
    color:white;
    text-align: center;
    height: 100px;
    margin-bottom: 10px;
  }
</style>
