<template>
  <div
    class="w-10 h-10 rounded-full bg-white hover:bg-black hover:text-white bg-opacity-25 hover:bg-opacity-95 flex fixed top-0 right-0 shadow mr-6 mt-8 backdrop-filter-blur-px-5 transition-all transform-gpu hover:scale-125 cursor-pointer z-20"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <via-svg-icon
      :name="modelValue ? 'exit-fullscreen' : 'fullscreen'"
      class="m-auto text-lg"
    ></via-svg-icon>
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
};
</script>

<style></style>
