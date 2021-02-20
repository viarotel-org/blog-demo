<template>
  <div class="">
    <div class="">
      <span class="text-xl">评论列表</span>
      <span class="text-gray ml-2">(13)</span>
    </div>
    <div class="mt-4">
      <Item
        v-for="(item, index) of commentArr"
        :key="index"
        :item="item"
        class=""
      />
    </div>
  </div>
</template>

<script>
import Item from "./item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      commentArr: [
        {
          name: "via",
          children: [{ name: "rotel" }, { name: "rotel" }],
        },
        {
          name: "via",
          children: [{ name: "rotel" }],
        },
      ],
    };
  },
};
</script>

<style></style>
