<template>
  <el-container>
    <el-aside style="width: 200px; margin-top: 20px">
      <switch></switch>
      <SideBar></SideBar>
    </el-aside>
  </el-container>
</template>

<script>
import SideBar from "./SideBar.vue";
console.log(SideBar);
export default {
  name: "AppLibrary",
  components: { SideBar },
};
</script>

<style scoped></style>
