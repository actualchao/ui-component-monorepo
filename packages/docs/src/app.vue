
<template>
  <div class="app-box">
    <Header></Header>
    <div class="component-container">
      <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
        <div class="page-container page-component">
          <el-scrollbar class="page-component__nav">
             <SideNav :data="navConfig"></SideNav>
          </el-scrollbar>
          <div class="page-component__content">
            <router-view class="content"></router-view>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
/*
 * @Author: cgone
 * @Date: 2020-11-29 17:06:14
 * @Last Modified by: cgone
 * @Last Modified time: 2021-01-10 15:27:02
 */
import Vue from 'vue'
import hljs from 'highlight.js'
import SideNav from './components/side-nav'
import Header from './components/header'
import { navConfig } from './nav.config.json'

export default {
  data () {
    return { navConfig }
  },
  components: {
    Header, SideNav
  },
  watch: {
    '$route' () {
      Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)')
        Array.prototype.forEach.call(blocks, hljs.highlightBlock)
      })
    }
  }
}
</script>

<style lang="scss">
.app-box {
  height: 100%;
  overflow: hidden;
}
.component-container {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  height: calc(100% - 80px);

  .page-component__scroll {
    height: 100%;

    > .el-scrollbar__wrap {
      overflow-x: auto;
    }
  }

  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top 0.3s;

    > .el-scrollbar__wrap {
      height: 100%;
      overflow-x: auto;
    }

    &.is-extended {
      padding-top: 0;
    }
  }
  .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }

  .content {
    padding-top: 50px;

    > {
      h3 {
        margin: 55px 0 20px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }

        td {
          color: #606266;
        }

        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }

      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }
}
</style>
