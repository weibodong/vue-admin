<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css";     /*深色主题*/
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
  .clearfix:after{
    display: block;
    content:'';
    clear: both;
  }
</style>
