<template>
  <div class="">
    <div
      v-observer="onObserver"
      class="text-3xl md:text-4xl font-bold"
    >
      你凭什么上北大
    </div>
    <div class="text-gray-600 text-sm md:text-base mt-4 md:mt-6">
      <span
        class="mr-4"
      >一月三十<span class="ml-1 text-xs md:text-sm">2021</span></span>
      <span
        class="mr-4"
      >阅读<span class="ml-1 text-xs md:text-sm">199</span></span>
      <span
        class="mr-4"
      >字数<span class="ml-1 text-xs md:text-sm">3407</span></span>
      <span
        class="mr-4"
      >评论<span class="ml-1 text-xs md:text-sm">0</span></span>
      <span
        class="mr-4"
      >喜欢<span class="ml-1 text-xs md:text-sm">8</span></span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["isIntersecting"],
  methods: {
    onObserver([entrie]) {
      const { isIntersecting } = entrie;
      console.log("isIntersecting", isIntersecting);
      this.$emit("isIntersecting", isIntersecting);
    },
  },
};
</script>

<style></style>
