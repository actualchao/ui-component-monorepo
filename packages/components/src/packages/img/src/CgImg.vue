<template>
  <img :src="fullUrl" :alt="alt" :sizes="sizes" style="width:120px;" :srcset="srcset" />
</template>
<script>
export default {
  name: 'CoImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    sizes: {
      type: String,
      default: ''
    },
    srcset: {
      type: String,
      default: ''
    },
    baseUrl: {
      type: String,
      default: '/file/'
    }
  },
  computed: {
    fullUrl () {
      // const rx = /^https?:\/\//i
      // const src = this.src
      // return rx.test(src) ? src : this.baseUrl + src
      return this.src
    }
  }
}
</script>
