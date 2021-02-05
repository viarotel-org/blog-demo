<template>
  <div
    class="w-full h-full clip-path-polygon bg-black absolute inset-0 bg-opacity-70 backdrop-filter-blur-px-5"
  >
    <img
      :src="logo"
      alt=""
      class="h-10 ml-6 mt-8"
    />

    <div
      class="absolute bottom-18 left-6 text-white w-3/4 md:w-1/2 md:left-12 lg:left-18 lg:w-1/3 lg:bottom-1/2 lg:transform lg:translate-y-1/2 duration-300 transition-all"
    >
      <div class="text-shadow-lg">
        一月 23, 2020
      </div>
      <div class="mt-4 md:mt-8 text-3xl lg:text-4xl text-shadow-lg">
        要么孤独，要么庸俗
      </div>
      <div class="clamp-3 mt-4 md:mt-8 text-shadow-lg">
        愿所有的美好如约而至，愿所有的黑暗都能看到希望，我们都能微笑前行，人生没有完美，有些遗憾才美...
      </div>
    </div>
  </div>
</template>

<script>
import { logo } from "@/config";
export default {
  data() {
    return {
      logo: logo(),
    };
  },
};
</script>

<style lang="postcss">
@screen md {
  .clip-path-polygon {
    clip-path: polygon(0 0, 25% 0, 60% 100%, 0 100%);
  }
}
</style>
