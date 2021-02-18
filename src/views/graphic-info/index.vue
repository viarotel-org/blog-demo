<template>
  <div class="">
    <ViaNavBar class="" />
    <ViaContent>
      <ViaTitle class="mt-4 md:mt-20" />
      <ViaMavonEditor class="mt-8 md:mt-24" />
      <ViaComment class="mt-8" />
      <ViaCommentList class="mt-8" />
    </ViaContent>
  </div>
</template>

<script>
import ViaNavBar from "@/views/components/ViaNavBar";
import ViaContent from "@/views/graphic-info/components/ViaContent";
import ViaTitle from "@/views/graphic-info/components/ViaTitle";
import ViaMavonEditor from "@/components/ViaMavonEditor";
import ViaComment from "@/views/graphic-info/components/ViaComment";
import ViaCommentList from "@/views/graphic-info/components/ViaCommentList";
export default {
  components: {
    ViaNavBar,
    ViaContent,
    ViaTitle,
    ViaMavonEditor,
    ViaComment,
    ViaCommentList,
  },
};
</script>

<style></style>
