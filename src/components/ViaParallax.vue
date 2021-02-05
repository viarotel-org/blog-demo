<template>
  <div
    :ref="imgRef"
    class="overflow-hidden h-full"
  >
    <div
      data-depth="0.4"
      class="h-full"
    >
      <slot>
        <img
          :src="src"
          alt=""
          class="object-cover w-full h-full transform-gpu scale-110"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";
import { uuid } from "@/utils";
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      imgRef: "parallax-id-" + uuid(),
    };
  },
  mounted() {
    this.initParallax();
  },
  methods: {
    initParallax() {
      return new Parallax(this.$refs[this.imgRef]);
    },
  },
};
</script>

<style lang="postcss"></style>
