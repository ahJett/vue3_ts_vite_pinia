<!--
 * @Description: 登录功能区域
 * @Author: 滇西
 * @Date: 2022-08-13 15:23:21
 * @LastEditors: 滇西
 * @LastEditTime: 2022-08-13 16:59:32
-->
<template>
  <div class="login_box">
    <p>欢迎访问XXX管理系统</p>
    <div class="login_box_form">
      <div class="form">
        <div>
          <label for="">账号:</label>
          <el-input v-model="form.name"></el-input>
        </div>
        <div>
          <label for="">密码：</label>
          <el-input type="password" v-model="form.password"></el-input>
        </div>
        <div>
          <label for="">确认密码：</label>
          <el-input v-model="form.confirmPsw"></el-input>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>

    <div>
      <a href="#" @click.prevent="register(status ? 'redister' : 'login')">{{
        status ? "没有账号？去注册" : "已有账号，去登录"
      }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { reactive, ref } from "vue";
type form = {
  name: string;
  password: string;
  confirmPsw?: string;
};
const form = reactive<form>({
  name: "",
  password: "",
  confirmPsw: "",
});

// 修改登录 注册状态
const status = ref(true);
const register = (type: string): void => {
  status.value = !status.value;
  console.log(type);
};

// 处理登录 注册事件
const login = () => {
  router.replace({
    name: "home",
  });
};
</script>

<style scoped lang="less">
.login_box {
  background-color: white;
  background-color: rgba(255, 255, 255, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    font-size: 20px;
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 10px 0;
  }
  &_form {
    width: 80%;
    display: flex;
    flex-direction: column;
    label {
      font-size: 16px;
      color: white;
    }
    > div {
      margin: 10px 0;
      .el-input {
        height: 40px;
        margin-top: 5px;
      }
    }
    .form {
      > div {
        margin: 10px 0;
      }
    }
  }
  .el-button {
    margin-left: 50%;
    width: 80%;
    height: 40px;
    transform: translateX(-50%);
  }
}
</style>