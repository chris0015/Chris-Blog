<template>
  <div class="wrapper">
    <span class="text">1232321</span>
    loading {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss">
.wrapper {
  padding: 20px;
  .text {
    color: red;
  }
}
</style>
