<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red"
  >
    <el-menu-item v-for="item in SideList" :key="item.i" :index="item.i">
      <el-icon><DArrowRight /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { DArrowRight } from "@element-plus/icons";
export default {
  name: "SideBar",
  components: { DArrowRight },
  data() {
    return {
      SideList: [
        { i: "0", name: "全部" },
        { i: "1", name: "经济" },
        { i: "2", name: "历史" },
        { i: "3", name: "政治" },
        { i: "4", name: "科技" },
        { i: "5", name: "文学" },
      ],
    };
  },
};
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -600px;
  top: 100px;
  width: 150px;
}
</style>
