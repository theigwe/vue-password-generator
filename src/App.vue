<template>
  <div id="app">
    <password-generator />
  </div>
</template>

<script>
import PasswordGenerator from "./components/PasswordGenerator";

export default {
  name: "app",
  components: {
    PasswordGenerator
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #418d53;
  min-height: 100vh;
  width: 100vw;
}

.el-imput-number {
  &.d-block {
    .el-input {
      width: 100%!important;
    }
  }
}
</style>
