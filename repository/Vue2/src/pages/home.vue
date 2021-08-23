<template>
  <div>
    <button @click="alert('这是一个提示', '标题')">alert</button>
    <hr />
    <form novalidate autocomplete="off" ref="loginform">
      <div class="login-view">
        <h2>登录页面</h2>
        <div>
          <label>姓名</label>
          <input
            name="姓名（username）"
            type="text"
            v-model="param.username"
            v-input-check="[param.username, 'required']"
          />
        </div>
        <div>
          <label>号码</label>
          <input
            name="号码（phone）"
            type="text"
            v-model="param.phone"
            v-input-check="[param.phone, 'yourvalidatename']"
          />
        </div>
        <div>
          <label>密码</label>
          <input
            name="密码（password）"
            type="password"
            v-model="param.password"
            v-input-check="[param.password, 'required']"
          />
        </div>

        <button @click.prevent="doSubmit">提交</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: {
        username: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    doSubmit() {
      this.$validateCheck(
        this.$refs.loginform,
        () => {
          //   表单合法，跳转
          this.alert("表单合法了");
        },
        (error) => {
          //   表单非法提示
          this.alert(error.$error, "错误提示", () => {
            // 然后在第一个方法的输入框聚焦
            error.$el.focus();
          });
        }
      );
    },
  },
};
</script>
<style>
/* 表单合法提示 */
form.v-valid button {
  background-color: rgb(12, 84, 218);
}

/* 非法提示 */
input.v-invalid {
  border: 1px solid red;
}
</style>
