<template>
  <div>
    <input type="button" @click="decrement" value="点击减少">
    <input type="button" @click="increment" value="点击增加">
    <!-- <div>当前的计数为：{{count}}</div> -->
    <div>当前的计数为：{{doneCount}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      doneCount: 'count',
    }),
  },
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement',
    }),
  },
};
</script>

<style scoped>
</style>
