<template>
  <div
    class="relative flex h-[calc(100vh)] w-[15rem] flex-col bg-gray-50 bg-clip-border text-gray-700"
  >
    <div class="mb-6 px-6">
      <h1
        class="logo pt-7 block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
      >
        BLANK
      </h1>
    </div>
    <nav class="flex flex-col grow font-sans text-base font-normal text-blue-gray-700">
      <div class="flex flex-col gap-12 px-6">
        <div>
          <div role="button">
            <h2 class="text-sm font-bold uppercase flex justify-between items-center">
              starred<IconArrow />
            </h2>
          </div>
          <ul>
            <li class="py-2 truncate w-100" role="button">
              <IconStar class="me-2 inline-block align-text-top" />Note with star dsdasasdadsd
              saddsadas...
            </li>
          </ul>
        </div>
        <div>
          <div role="button">
            <h2 class="text-sm py-1 font-bold uppercase flex justify-between items-center">
              collections<IconArrow />
            </h2>
          </div>
          <ul>
            <li class="py-2 truncate" role="button">
              <IconDocument class="me-2 inline-block align-text-top" />Home
            </li>
          </ul>
        </div>
        <div>
          <div role="button">
            <h2 class="text-sm py-1 font-bold uppercase flex justify-between items-center">
              trash<IconArrow />
            </h2>
          </div>
          <ul>
            <li class="py-2 truncate" role="button">
              <IconDocument class="me-2 inline-block align-text-top" />Home
            </li>
          </ul>
        </div>
      </div>
      <button type="button" class="uppercase py-6 border-t px-6 flex font-bold mt-auto">
        <IconAddCollection class="me-2" />New Collection
      </button>
    </nav>
  </div>
</template>

<script setup>
import IconStar from '@/components/icons/IconStar.vue'
import IconDocument from '@/components/icons/IconDocument.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import IconAddCollection from '@/components/icons/IconAddCollection.vue'
</script>

<style scoped>
.logo {
  font-family: Rockwell, Courier, Georgia, Times, 'Times New Roman', serif;
  letter-spacing: 2px;
}
</style>
