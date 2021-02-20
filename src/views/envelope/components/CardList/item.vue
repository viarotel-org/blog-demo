<template>
  <div
    class="bg-white hover:shadow-lg rounded-lg px-6 pt-6 pb-4 md:px-10 md:pt-10 md:pb-6 transition-all transform-gpu duration-300 group"
  >
    <div
      class="truncate h-6 transition-all duration-300 group-hover:delay-200 scrollbar-beautiful group-hover:overflow-clip group-hover:whitespace-normal group-hover:overflow-y-auto group-hover:h-120"
    >
      {{ item.text }}
    </div>
    <div class="pt-6 text-right text-gray-500 text-sm">{{ item.date }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
