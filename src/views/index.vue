<template>
  <router-view v-slot="{ Component }">
    <via-fade-transform>
      <keep-alive>
        <component
          :is="Component"
          :key="key"
        />
      </keep-alive>
    </via-fade-transform>
  </router-view>
</template>
<script>
import ViaFadeTransform from "@/components/ViaFadeTransform";
export default {
  components: { ViaFadeTransform },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
<style></style>
