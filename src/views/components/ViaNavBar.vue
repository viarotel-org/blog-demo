<template>
  <div
    v-bind="$attrs"
    ref="headerRef"
    class="border-b border-gray-100 bg-white flex px-4 py-2 fixed inset-x-0 top-0 z-50"
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
    <div class="truncate w-1 flex-grow text-center my-auto">如此，安好</div>
    <div class="w-1 flex-grow flex items-center justify-end">
      <via-svg-icon
        name="wx"
        class="text-gray-600 text-2xl ml-4 cursor-pointer hover:text-green-500"
      ></via-svg-icon>
      <via-svg-icon
        name="like"
        class="text-gray-600 text-2xl ml-4 cursor-pointer hover:text-red-500"
      ></via-svg-icon>
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
  </div>
  <div class="py-8"></div>
</template>

<script>
import { logo } from "@/config";
import Headroom from "headroom.js";
export default {
  data() {
    return {
      logo: logo(),
      isMusicPause: false,
      musicPlayProgress: "",
    };
  },
  mounted() {
    this.initHeadroom();
  },
  methods: {
    initHeadroom() {
      const headerRef = this.$refs.headerRef;
      const headroom = new Headroom(headerRef);
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

<style>
.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}
.headroom--pinned {
  transform: translate3d(0, 0%, 0);
}
.headroom--unpinned {
  transform: translate3d(0, -100%, 0);
}
</style>
