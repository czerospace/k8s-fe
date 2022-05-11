<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<style>
  .el-container{
    height: 100vh;
  }
  .el-header{
    text-align: center;
    background-color: #42b983;
  }
  .el-aside{
    text-align: center;
    background-color: chartreuse;
  }
  .el-main{
    text-align: center;
    background-color: aquamarine;
  }
  .el-footer{
    text-align: center;
    background-color: #1f8b38;
  }
</style>