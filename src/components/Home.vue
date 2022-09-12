<template>
  <div>
    <NavHome></NavHome>
    <router-view />
  </div>
</template>

<script>
import NavHome from "./common/NavHome.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { NavHome },
};
</script>

<style scoped></style>
