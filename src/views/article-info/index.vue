<template>
  <div class="">
    <ViaNavBar
      v-model:like-value="likeValue"
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
import ViaContent from "@/views/components/ViaContent";
import ViaTitle from "@/views/article-info/components/ViaTitle";
import ViaMavonEditor from "@/components/ViaMavonEditor";
import ViaComment from "@/views/article-info/components/ViaComment";
import ViaCommentList from "@/views/article-info/components/ViaCommentList";
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
      likeValue: true,
    };
  },
};
</script>

<style></style>
