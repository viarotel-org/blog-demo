<template>
  <div class="">
    <ViaNavBar
      class=""
      title="你凭什么上北大"
      :is-title="isTitle"
      @click-title="$via.scrollToTop()"
    />
    <ViaContent>
      <ViaTitle
        class="mt-4 md:mt-20 via-title"
        @is-intersecting="(value) => (isTitle = !value)"
      />
      <ViaMavonEditor class="mt-8 md:mt-24" />
      <ViaComment class="mt-16" />
      <ViaCommentList class="mt-16" />
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
  data() {
    return {
      isTitle: false,
    };
  },
};
</script>

<style></style>
