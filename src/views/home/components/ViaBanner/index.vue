<template>
  <div class="h-screen relative">
    <ViaParallax
      :src="require('@/assets/images/bg-index-banner.png')"
      class="w-full h-full"
    />
    <MaskContent />
    <div
      class="w-10 h-10 rounded-full bg-white hover:bg-black hover:text-white bg-opacity-25 hover:bg-opacity-95 flex absolute top-0 right-0 shadow mr-6 mt-8 backdrop-filter-blur-px-5 transition-all transform-gpu hover:scale-125 cursor-pointer"
    >
      <via-svg-icon
        name="fold"
        class="m-auto text-lg"
      ></via-svg-icon>
    </div>
  </div>
</template>

<script>
import ViaParallax from "@/components/ViaParallax";
import MaskContent from "./MaskContent";
export default {
  name: "ViaBanner",
  components: { ViaParallax, MaskContent },
};
</script>
<style></style>
