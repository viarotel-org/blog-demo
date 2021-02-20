<template>
  <div class="p-4 border border-gray-300 rounded-lg">
    <div class="flex text-sm mt-4">
      <input
        type="text"
        placeholder="昵称"
        class="border-b border-gray-300 border-dashed focus:border-gray-500 pb-3 placeholder-gray-600 w-1 flex-grow mr-2 pl-2"
      />
      <input
        type="text"
        placeholder="邮箱"
        class="border-b border-gray-300 border-dashed focus:border-gray-500 pb-3 placeholder-gray-600 w-1 flex-grow ml-2 pl-2"
      />
    </div>
    <textarea
      class="border border-dashed border-gray-300 focus:border-gray-500 placeholder-gray-600 rounded-lg p-4 mt-4 w-full h-40 md:h-54"
      placeholder="说点什么..."
    ></textarea>
    <div class="flex items-center mt-2">
      <button
        class="bg-gray-300 text-gray-600 py-2 px-8 tracking-widest text-sm rounded-md hover:text-white hover:bg-blue-500"
      >
        提交
      </button>
      <div
        v-if="true"
        class="text-gray-500 ml-4 text-sm"
      >
        ~认真和用心是一种态度, 感谢支持~
      </div>
      <div
        v-else
        class="flex items-center ml-4 text-red-600"
      >
        <via-svg-icon
          name="tips"
          class="font-bold"
        ></via-svg-icon>
        <span class="ml-2">您的名字是第一印象哦～</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
