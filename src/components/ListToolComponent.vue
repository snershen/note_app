<template>
  <div class="flex justify-between p-6">
    <div class="flex gap-6">
      <button type="button"><IconListRows /></button>
      <button type="button"><IconListSquare /></button>
    </div>
    <div class="flex gap-6">
      <button type="button"><IconDelete /></button>
      <button type="button"><IconStar class="w-6 h-6" /></button>
      <button type="button"><IconPlus /></button>
    </div>
  </div>
</template>

<script setup>
import IconListRows from '@/components/icons/IconListRows.vue'
import IconListSquare from '@/components/icons/IconListSquare.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
</script>
