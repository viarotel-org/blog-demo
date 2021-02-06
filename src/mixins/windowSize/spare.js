const { body } = document;

export const windowSize = {
  data() {
    return {
      windowWidth_: 0,
      windowHeight_: 0,
    };
  },
  computed: {
    $windowWidth() {
      return this.windowWidth_;
    },
    $windowHeight() {
      return this.windowHeight_;
    },
  },
  beforeMount() {
    window.addEventListener("resize", this.$_getBoundingClientRect);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.$_getBoundingClientRect);
  },
  mounted() {
    this.$_getBoundingClientRect();
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_getBoundingClientRect() {
      if (document.hidden) return;
      const { width, height } = body.getBoundingClientRect();
      this.windowWidth_ = width;
      this.windowHeight_ = height;
    },
  },
};
export default {
  install: (app) => app.mixin(windowSize),
  windowSize,
};
