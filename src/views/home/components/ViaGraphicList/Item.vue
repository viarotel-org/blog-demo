<template>
  <div
    ref="itemRefs"
    :class="[isReverse ? 'lg:flex-row-reverse' : '']"
    class="lg:flex lg:justify-center overflow-hidden py-12 lg:py-24"
  >
    <div
      class="md:px-12 lg:px-0 lg:hover:shadow-xl lg:transform-gpu lg:hover:scale-105 lg:transition cursor-pointer"
    >
      <img
        src="@/assets/images/bg-index-banner.png"
        alt=""
        class="w-full object-cover h-68 md:h-126 lg:h-88 xl:h-114 lg:w-138 xl:w-176 md:rounded-md lg:rounded-lg lg:transform-gpu lg:scale-110"
      />
    </div>

    <div
      class="flex flex-col justify-between px-6 md:px-12 lg:px-14 xl:px-24 lg:w-120 xl:w-144 py-12 lg:py-14 xl:py-24 border-b border-gray-200 bg-white lg:flex-shrink-0 lg:overflow-hidden lg:border lg:rounded-lg"
    >
      <div class="cursor-pointer">
        <div class="text-sm text-gray">一月 30, 2021</div>
        <div class="text-2xl lg:text-3xl mt-4">你凭什么上北大</div>
        <div class="mt-4 text-gray-800 clamp-2">
          未名湖边的桃花开了，我曾经无数次梦想过，花开时湖边折枝的人群里会有自己的身影。那个时候，我的心情和大家一样迫切，目光却比你们更加迷茫，那时我高三。
        </div>
      </div>
      <div class="flex mt-4 lg:mt-0">
        <div
          v-for="(item, index) of iconTextArr"
          :key="index"
          :class="item.class"
          class="flex items-center text-gray mr-3"
        >
          <via-svg-icon
            :name="item.icon"
            class="text-xl"
          ></via-svg-icon>
          <span class="pl-1 text-sm">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nodeIndex } from "@/utils";
export default {
  data() {
    return {
      isReverse: false,
      iconTextArr: [
        {
          text: 3407,
          icon: "font-size",
          class: "hover:text-red-500",
        },
        {
          text: 3407,
          icon: "browse",
          class: "hover:text-green-500",
        },
        {
          text: 3407,
          icon: "like",
          class: "hover:text-orange-500",
        },
      ],
    };
  },
  mounted() {
    this.isReverse = !!(nodeIndex(this.$refs.itemRefs) % 2);
  },
};
</script>

<style></style>
