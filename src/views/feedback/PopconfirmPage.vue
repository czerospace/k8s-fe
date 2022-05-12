<template>
  <el-popconfirm
      confirm-button-text="OK"
      cancel-button-text="No, Thanks"
      icon="Food"
      icon-color="red"
      title="Are you sure to delete this?"
      @confirm="handleConfirm"
      @cancel="handleCancel"
  >
    <template #reference>
      <el-button type="danger">Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      handleConfirm(){
          console.log("confirm")
      },
      handleCancel(){
          console.log("cancel")
      }
    }
  }
</script>