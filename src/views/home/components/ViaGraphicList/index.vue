<template>
  <div class="relative line-y py-12 lg:py-24">
    <Item
      v-for="item in 10"
      :key="item"
      @click="$router.push({ name: 'article-info' })"
    ></Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: { Item },
};
</script>

<style>
.line-y::before {
  content: "";
  width: 1px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  background-color: rgba(238, 238, 238, 1);
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
</style>
