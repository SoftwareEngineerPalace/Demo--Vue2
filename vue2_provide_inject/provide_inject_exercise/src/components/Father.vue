
<template>
  <div class="hello">
    <h2>我是 Father</h2>
    <Mid></Mid>
  </div>
</template>

<script>
/* eslint-disable no-console */

import Vue from 'vue';
import Mid from './Mid';

export default Vue.extend({
  name: 'Father',
  components: { Mid },
  provide() {
    return {
      father: this,
      msg: 'Father msg',
      obj: this.obj,
    };
  },
  data() {
    return {
      obj: {
        message: 'Father obj message',
      },
    };
  },
  methods: {
    onMessage(msg) {
      console.log('Father onMessage 接受信息', msg);
    },
  },
  // beforeCreate() {
  //   console.log('Father beforeCreate');
  // },
  // beforeMount() {
  //   console.log('Father beforeMount');
  // },
  mounted() {
    console.log('Father mounted');
  },
});
</script>
