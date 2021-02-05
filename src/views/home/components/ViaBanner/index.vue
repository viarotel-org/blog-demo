<template>
  <div class="h-screen relative">
    <ViaParallax
      :src="require('@/assets/images/bg-index-banner.png')"
      class="w-full h-full"
    />
    <MaskContent />
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
