<template>
  <div class="bg">
    <div class="content">
      <div class="l-left">
        <div class="desc">
          公司简介或名称
          <!-- <div class="title">vol.vue</div>
          <p>后台</p>
          <p>.NetCore、EntityFrameWorkCore、Dapper、Redis</p>
          <p>Vue、Promise、Vuex、IView、Element-UI</p>
          <p>演示帐号：admin666 密码:123456</p>
          <p>本地帐号：admin &nbsp; &nbsp; &nbsp; 密码:123456</p>
          <div style="margin-top: 30px">
            <a
              href="https://github.com/cq-panda/Vue.NetCore"
              target="_blank"
              style="color: #ffff; border: 1px solid #ffff;width: 80px;margin-right: 5px;"
              class="index-btn ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-ghost"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://gitee.com/x_discoverer/Vue.NetCore"
              target="_blank"
              style="color: #ffff; border: 1px solid #ffff; width: 80px;margin-right: 5px;"
              class="index-btn ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-ghost"
            >
              <span>Gitee</span>
            </a>
            <a
              href="http://www.volcore.xyz/app/guide"
              target="_blank"
              style="color: #ffff; border: 1px solid #ffff; width: 80px;margin-right: 5px;"
              class="index-btn ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-ghost"
            >
              <span>H5/App</span>
            </a>
            <a
              href="http://www.volcore.xyz/document/guide"
              target="_blank"
              style="color: #ffff; border: 1px solid #ffff"
              class="index-btn ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-ghost"
            >
              <span>Document</span>
            </a>
          </div>
          -->
        </div>
      </div>
      <div class="login">
        <div class="login-contianer">
          <div class="login-form">
            <h2 style="padding: 20px 0px;font-weight: 500;">帐号登陆</h2>
            <div
              class="form-user"
              @keypress="loginPress"
            >
              <div class="item">
                <div class="f-text">
                  <label>
                    <!-- <Icon type="ios-people"
                    :size="20" />-->
                    用户名：
                  </label>
                </div>
                <div class="f-input">
                  <input
                    type="text"
                    v-focus
                    v-model="userInfo.userName"
                    placeholder="输入用户"
                  />
                </div>
                <div
                  class="f-remove"
                  @click="userInfo.userName = ''"
                >
                  <!-- <Icon type="ios-close-circle" /> -->
                </div>
              </div>
              <div class="item">
                <div class="f-text">
                  <label>
                    <!-- <Icon type="ios-lock"
                    :size="20" />-->
                    密&nbsp;&nbsp;&nbsp;码：
                  </label>
                </div>
                <div class="f-input">
                  <input
                    type="password"
                    v-focus
                    v-model="userInfo.passWord"
                    placeholder="输入密码"
                  />
                </div>
                <div
                  v-focus
                  class="f-remove"
                  @click="userInfo.passWord = ''"
                >
                  <Icon type="ios-close-circle" />
                </div>
              </div>
              <div class="item">
                <div class="f-text">
                  <label>
                    <!-- <Icon type="md-images"
                          v-focus
                    :size="20" />-->
                    验证码：
                  </label>
                </div>
                <div class="f-input">
                  <input
                    v-focus
                    type="text"
                    v-model="userInfo.verificationCode"
                    placeholder="输入验证码"
                  />
                </div>
                <div
                  class="code"
                  @click="
                    () => {
                      getVierificationCode();
                    }
                  "
                >
                  <img
                    v-show="codeImgSrc != ''"
                    :src="codeImgSrc"
                  />
                </div>
              </div>
            </div>
            <div style="loging-btn">
              <Button
                size="large"
                :loading="loading"
                type="info"
                @click="login"
                long
              >
                <span v-if="!loading">登陆</span>
                <span v-else>正在登陆...</span>
              </Button>
            </div>
            <!-- <div class="action">
              <a @click="() => {}">注册</a>
              <a @click="() => {}">忘记密码</a>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="l-bg"></div>
    <div class="r-bg"></div>
    <div class="c-bg">
      <div class="c-bg-item"></div>
      <div class="c-bg-item"></div>
      <div class="c-bg-item"></div>
      <div class="c-bg-item"></div>
    </div>
    <div class="login-footer">
      <!-- <a @click="toGitHub"> -->
      <!-- <Icon type="logo-github" /> -->
      <!-- GitHub -->
      <!-- </a> -->
      <!-- <a>QQ群：45221949</a> -->
      中环/晋科 版权所有
    </div>
  </div>
</template>

<script>
export default {
  name: 'IviewProjectLearnLogin',

  components: {},

  directives: {},

  data() {
    return {
      userInfo: {
        userName: '',
        passWord: '',
        verificationCode: ''
      }
    }
  },

  mounted() {},

  methods: {
    loginPress(e) {
      if (event.keyCode == 13) {
        this.login()
      }
    },

    login() {
      if (this.userInfo.userName == '' || this.userInfo.userName.trim() == '') {
        return this.$Message.error('请输入用户名')
      }
      if (this.userInfo.passWord == '' || this.userInfo.passWord.trim() == '') {
        return this.$Message.error('请输入密码')
      }

      //TODO：添加验证码功能
      
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: none;
}
</style>