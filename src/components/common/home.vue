<template>
  <div>
    <vheader :toChange="isWidthChange"></vheader>
    <vaside></vaside>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import vheader from './vheader'
  import vaside from './vaside'
  export default{
    components:{vheader,vaside},
    data(){
      return{
        isWidthChange:false
      }
    }
  }
</script>
