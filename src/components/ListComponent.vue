<template>
  <div class="relative">
    <div class="bg-white">
      <ListToolComponent class="border-b-2 bg-white" />
      <ul class="overflow-auto h-[calc(100vh-144px)]">
        <li class="p-6 border-b-2" role="button">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-bold text-xl">Note with star</h3>
            <button type="button"><IconStar class="w-6 h-6" /></button>
          </div>
          <p class="text-gray-400 truncate">
            The note with a star would be organized to the category named “STARRED”.
          </p>
        </li>
      </ul>
    </div>
    <div
      class="absolute bottom-0 w-full bg-white shadow-[0_100px_40px_30px_rgba(0,0,0,0.2) shadow-xl"
    >
      <IconSearch class="absolute top-1/2 -translate-y-1/2 ms-6" />
      <input
        type="search"
        placeholder="SEARCH"
        class="peer w-full !border !border-gray-300 border-t-transparent bg-transparent ps-14 pe-3 py-6 font-sans font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-black placeholder:font-bold placeholder:text-black placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
      />
    </div>
  </div>
</template>

<script setup>
import ListToolComponent from '@/components/ListToolComponent.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
</script>
