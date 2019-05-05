<template>
  <ul class="my-footer">
    <router-link
    v-for='nav in navs'
    :key="nav.name"
    :to="nav.path"
    tag="li"
  >
    <span class="icon" v-html="nav.meta.icon"></span>
    <span class="title">{{nav.meta.title}}</span>
  </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  data () {
    return {
      navs: routes.filter(route => route.meta.istabitem === true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-footer{
    display: flex;
    border-top:1px solid #dedede;
    height: 52px;

    li{
      flex: 1;
      text-align: center;
      color: #9C9C9C;

      span{
        display: block;

        &.icon{
          font-family: 'iconfont';
          font-size: 25px;
          height: 35px;
          line-height: 35px;
        }
        &.title{
          font-size: 12px;
        }
      }
      &.router-link-exact-active,
      &.router-link-active {
        color: rgb(255,96,96);
      }
    }
  }
</style>
