<!--
 * @Description: 登录界面
 * @Author: 滇西
 * @Date: 2022-08-13 13:56:30
 * @LastEditors: 滇西
 * @LastEditTime: 2022-08-13 15:35:01
-->
<template>
  <div class="container">
    <div class="container_loginBox">
      <setting class="setting"></setting>
      <login class="login"></login>
    </div>
  </div>
</template>

<script setup lang="ts">
import setting from "./setting.vue";
import login from "./login.vue";
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  &_loginBox {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("@/assets/login.jpg");
    background-size: 100% 100%;
    border-radius: 20px;
    .setting {
      flex: 1;
    }
    .login {
      flex: 1;
    }
  }
}
</style>