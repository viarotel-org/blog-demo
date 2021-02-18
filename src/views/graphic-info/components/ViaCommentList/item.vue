<template>
  <div class="show-reply border-t border-gray-100 pt-8">
    <div class="flex items-center justify-between single">
      <div class="flex items-center">
        <img
          :src="$via.tempImage(100)"
          alt=""
          class="rounded-full w-14 h-14 border border-gray-100"
        />
        <div class="text-deep-orange-600 ml-2 hover:underline">
          {{ item.name }}
        </div>
      </div>
      <div class="text-sm">
        <span
          class="hover:underline text-deep-orange-600 cursor-pointer hidden"
        >回复</span>
        <span class="text-gray-500 pl-4">11:04 十月一 2021</span>
      </div>
    </div>
    <div class="ml-16 pt-2 pb-8">
      在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人在跟着你的项目一点一点的学习，希望我也能成为像你一样厉害的人
    </div>
    <div
      v-if="item.children && item.children.length"
      class="pl-16"
    >
      <Item
        v-for="(iItem, iIndex) of item.children"
        :key="iIndex"
        :item="iItem"
      ></Item>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.show-reply:hover > .single .hidden {
  display: inline !important;
}
</style>
