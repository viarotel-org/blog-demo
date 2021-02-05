<template>
  <div class="relative">
    <ViaBanner />
    <ViaGraphicList />
    <ViaMaskNavigation v-model="isMaskNavigation" />
    <ViaToggleButton v-model="isMaskNavigation" />
    <ViaLogo />
  </div>
</template>

<script>
import ViaBanner from "@/views/home/components/ViaBanner";
import ViaGraphicList from "@/views/home/components/ViaGraphicList";
import ViaMaskNavigation from "@/views/home/components/ViaMaskNavigation";
import ViaToggleButton from "@/views/home/components/ViaToggleButton";
import ViaLogo from "@/views/home/components/ViaLogo";
export default {
  components: {
    ViaBanner,
    ViaGraphicList,
    ViaMaskNavigation,
    ViaToggleButton,
    ViaLogo,
  },
  data() {
    return {
      isMaskNavigation: false,
    };
  },
  computed: {},
  methods: {},
};
</script>
<style></style>
