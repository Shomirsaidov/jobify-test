<template>
  <router-view class="h-full"/>
</template>
<script>
  export default {
    // methods: {
    //   full() {
    //     document.documentElement.requestFullscreen()
    //   }
    // }
  }
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
