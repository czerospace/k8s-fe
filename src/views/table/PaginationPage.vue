<template>
  <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="40"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</template>

<script>
  export default {
    data(){
      return {
        currentPage:1,
        pageSize:10,
      }
    },
    methods:{
      handleSizeChange(pageSize){
        this.pageSize=pageSize
      },
      handleCurrentChange(currentPage){
        this.currentPage=currentPage
        console.log(currentPage)
      }
    }
  }
</script>