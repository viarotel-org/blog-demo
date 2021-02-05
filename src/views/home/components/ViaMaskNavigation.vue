<template>
  <div
    :class="[modelValue ? '-translate-y-0' : '-translate-y-h-screen']"
    class="fixed inset-0 bg-white bg-opacity-95 backdrop-filter-blur-px-5 overflow-hidden z-10 transform-gpu transition-all duration-300 flex flex-col"
    @touchmove.prevent="close"
    @mousewheel.prevent="close"
  >
    <div
      class="flex md:flex-wrap flex-col md:justify-center md:flex-row tracking-widest m-auto text-2xl leading-loose text-gray-700 max-w-5xl max-h-150 overflow-y-scroll scrollbar-beautiful"
      @touchmove.stop
      @mousewheel.stop
    >
      <span
        v-for="(item, index) of menuArr"
        :key="index"
        class="mx-8 hover:text-black text-shadow-md flex-shrink-0 cursor-pointer"
        @click="skip"
      >{{ item.text }}</span>
    </div>
    <div class="text-center pb-8 text-gray-500">
      我忘了许多事，偶尔想起偶尔庆幸。
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    menuArr() {
      return [
        {
          id: "article",
          text: "文章",
        },
        {
          id: "message",
          text: "信封",
        },
        {
          id: "about",
          text: "简介",
        },
      ];
    },
  },
  methods: {
    skip() {
      this.close();
    },
    close() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>

<style></style>