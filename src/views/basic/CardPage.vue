<template>
  <el-card class="box-card" style="width: 200px;" shadow="never" :body-style="{padding:'0px'}">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
  <el-card class="box-card" style="width: 200px;" shadow="hover">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>