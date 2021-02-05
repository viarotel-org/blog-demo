<template>
  <img
    :src="logo"
    alt=""
    class="h-10 ml-6 mt-8 absolute top-0 left-0 z-20"
  />
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

<style></style>
