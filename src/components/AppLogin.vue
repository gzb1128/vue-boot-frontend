<template>
  <body id="body">
    <el-form class="login_container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="userInfo.userName" placeholder="用户名">
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          type="password"
          v-model="userInfo.password"
          placeholder="密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%; border: none"
          @click="login"
          >登录
        </el-button>
      </el-form-item>
      <div v-if="fail">登录失败，用户名或密码错误，请重试</div>
    </el-form>
  </body>
</template>

<style scoped>
#body {
  width: 100%;
  height: 100%;
  margin: 0px;
}
.login_container {
  border-radius: 15px;
  background-clip: padding-box;
  width: 350px;
  margin: 90px auto;
  padding: 35px 35px 15px 35px;
  background-clip: padding-box;
  border: 1px solid #eaeaea;
}
.login_title {
  text-align: center;
  margin: 0px auto 25px auto;
  font-weight: bold;
}
body {
  margin: 0px;
}
</style>

<script>
export default {
  data() {
    return {
      userInfo: {
        userName: "",
        password: "",
        Auth: false,
      },
      fail: false,
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/login", {
          name: this.userInfo.userName,
          pwd: this.userInfo.password,
        })
        .then((success) => {
          let data = success.data;
          if (data.status == "100") {
            this.userInfo.Auth = true;
            this.$store.commit("loginState", this.userInfo);
            var path = this.$route.query.redirect;
            this.$router.replace({
              path: path == "/" || path == undefined ? "/index" : path,
            });
          } else {
            this.fail = true;
          }
        });
    },
  },
};
</script>
