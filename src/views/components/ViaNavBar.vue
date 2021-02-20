<template>
  <div
    v-bind="$attrs"
    ref="headerRef"
    class="bg-white bg-opacity-75 backdrop-filter-blur-px-5 flex px-4 py-2 fixed inset-x-0 top-0 z-50 shadow-sm"
  >
    <div class="flex items-center w-1 flex-grow">
      <img
        :src="logo"
        alt=""
        class="w-10 h-10 cursor-pointer opacity-90 hover:opacity-100"
        @click="$router.push({ name: 'home' })"
      />
      <via-svg-icon
        :name="isMusicPause ? 'pause' : 'play'"
        class="text-gray-600 text-lg ml-4 cursor-pointer hover:text-black"
        @click="handleMusic"
      ></via-svg-icon>
    </div>
    <div
      :class="isTitle ? 'opacity-100' : 'opacity-0'"
      class="truncate w-1 flex-grow text-center my-auto cursor-pointer transition-opacity duration-300"
      @click="$emit('click-title')"
    >
      {{ title }}
    </div>
    <div class="w-1 flex-grow flex items-center justify-end">
      <via-svg-icon
        v-if="isWx"
        v-click-away="() => (isQRCode = false)"
        name="wx"
        :class="isQRCode ? 'text-green-500' : 'text-gray-600'"
        class=" text-2xl ml-4 cursor-pointer lg:hover:text-green-500"
        @click="isQRCode = !isQRCode"
      ></via-svg-icon>

      <via-svg-icon
        v-if="isLike"
        name="like"
        :class="
          likeValue
            ? 'text-red-500 lg:hover:text-red-500'
            : 'text-gray-600 lg:hover:text-gray-600'
        "
        class="text-2xl ml-4 cursor-pointer  lg:hover:animate-bounce"
        @click="$emit('update:likeValue', !likeValue)"
      ></via-svg-icon>
      <img
        v-if="isAvatar"
        src="@/assets/images/avatar.gif"
        title="查看主页"
        alt=""
        class="w-8 h-8 rounded-full ml-4 cursor-pointer border border-gray-300 opacity-70 hover:opacity-100 hover:animate-spin"
      />
    </div>

    <div
      class="absolute inset-y-0 left-0 bg-gray-200 bg-opacity-70 backdrop-filter-blur-px-5"
      :style="{ zIndex: -1, width: musicPlayProgress }"
    ></div>

    <audio
      ref="bgMusicRef"
      class="absolute"
    >
      <source
        src="@/assets/musics/bg-music.mp3"
        type="audio/mpeg"
      />
    </audio>
    <img
      src="@/assets/images/QRCode.jpg"
      alt=""
      :class="
        isQRCode
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-18 scale-0'
      "
      class="w-30 h-30 fixed top-0 right-0 mt-18 mr-4 z-50 transition-all duration-300 transform-gpu border-4 border-white rounded-md"
    />
  </div>
  <div class="py-8"></div>
</template>

<script>
import { logo } from "@/config";
import Headroom from "headroom.js";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    isTitle: {
      type: Boolean,
    },
    isWx: {
      type: Boolean,
      default: true,
    },
    isLike: {
      type: Boolean,
      default: true,
    },
    isAvatar: {
      type: Boolean,
      default: true,
    },
    likeValue: {
      type: Boolean,
    },
  },
  emits: ["click-title", "update:likeValue"],
  data() {
    return {
      logo: logo(),
      isMusicPause: false,
      musicPlayProgress: "",
      isQRCode: false,
    };
  },
  mounted() {
    this.initHeadroom();
  },
  methods: {
    initHeadroom() {
      const headerRef = this.$refs.headerRef;
      const headroom = new Headroom(headerRef, {
        onUnpin: () => {
          this.isQRCode = false;
        },
      });
      headroom.init();
    },
    handleMusic() {
      const musicEl = this.$refs.bgMusicRef;
      this.isMusicPause = !this.isMusicPause;
      if (this.isMusicPause) {
        musicEl.play();
        this.timer = setInterval(() => {
          const n = (100 * (musicEl.currentTime / musicEl.duration)).toFixed(2);
          if (n >= 100) clearInterval(this.timer);
          this.musicPlayProgress = n + "%";
        }, 60);
      } else {
        musicEl.pause();
        clearInterval(this.timer);
      }
    },
  },
};
</script>

<style lang="postcss">
.headroom {
  will-change: transform;
  @apply transition-transform duration-200 ease-linear transform-gpu;
}
.headroom--pinned {
  @apply translate-y-0;
}
.headroom--unpinned {
  @apply -translate-y-full;
}
</style>
