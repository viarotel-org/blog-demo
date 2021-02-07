<template>
  <div class="flex flex-col h-screen">
    <ViaNavBar class="flex-shrink-0" />
    <div class="overflow-y-scroll-smooth h-full flex-grow scrollbar-beautiful">
      <div
        v-for="item of 100"
        :key="item"
        class="p-3 border-b"
      >
        item
      </div>
    </div>
  </div>
</template>

<script>
import ViaNavBar from "@/views/components/ViaNavBar";
export default {
  components: { ViaNavBar },
};
</script>

<style></style>
