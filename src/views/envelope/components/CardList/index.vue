<template>
  <div class="">
    <Item
      v-for="(item, index) of list"
      :key="index"
      :item="item"
      class="my-8"
    ></Item>
  </div>
</template>

<script>
import Item from "./item";
export default {
  components: { Item },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
