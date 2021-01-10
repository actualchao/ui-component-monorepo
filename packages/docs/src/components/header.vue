<style lang="scss" scoped>
.container {
  width: 1140px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid rgba($color: #444, $alpha: 0.2);
  .logo {
    display: inline-block;
    width: 61px;
    height: 50px;
    line-height: 80px;
    background: url("../assets/images/wujc.png") center center;
    background-size: 100% 100%;
  }
  .link-box {
    float: right;
  }
  .title {
    margin-left: 20px;
    font-size: 26px;
    font-weight: 700;
    line-height: 80px;
    display: inline-block;
    color: #555;
  }
}
</style>
<template>
  <div class="headerWrapper">
    <header class="header" ref="header">
      <div class="container">
        <div class="logo"></div>
        <span class="title">wujc-ui 前端组件库</span>
        <div class="link-box">
          <!-- <AlgoliaSearch></AlgoliaSearch> -->
        </div>

      </div>
    </header>
  </div>
</template>
<script>

// import AlgoliaSearch from './search.vue'

export default {

  data () {
    return {
    }
  },

  components: {
    // AlgoliaSearch
  },

  computed: {
  },
  mounted () {

  },
  methods: {
  },

  created () {
  }
}
</script>
