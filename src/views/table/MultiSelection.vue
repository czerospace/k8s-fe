<template>
  <el-card shadow="never" :body-style="{padding:'0px'}">
    <el-table
        :data="tableData"
        @selection-change="handleSelection"
        style="width: 100%">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-card>
</template>

<script>
export default {
  methods:{
    handleSelection(rows){
        console.log(rows)
    }
  },
  data(){
    return{
      tableData:[
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  }
}
</script>