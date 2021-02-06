import { windowSize } from "./windowSize";

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const breakpoint = Object.keys(screens).reduce((obj, key) => {
  obj[key] = false;
  return obj;
}, {});

export const screenResize = {
  mixins: [windowSize],
  data() {
    return {
      breakpoint_: { ...breakpoint },
    };
  },
  computed: {
    $_screen() {
      return this.breakpoint_;
    },
  },
  beforeMount() {
    this.$watch("$windowWidth", this.$_resizeHandler, { immediate: true });
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_resizeHandler(width) {
      // console.log("width", width);
      const breakpoint_ = this.breakpoint_;
      for (const key in breakpoint_) {
        if (Object.hasOwnProperty.call(breakpoint_, key)) {
          breakpoint_[key] = width >= screens[key];
        }
      }
    },
  },
};
export default {
  install: (app) => app.mixin(screenResize),
  screenResize,
};
