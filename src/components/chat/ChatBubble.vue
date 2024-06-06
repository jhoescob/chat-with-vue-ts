<template>
  <div v-if="itsMe" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">
        {{ message }}
      </span>
    </div>
  </div>

  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">
        {{ message }}
      </span>
      <img
        v-if="image"
        :src="image"
        alt="Image for response"
        class="w-52 h-52 object-cover rounded-md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string
  itsMe: boolean
  image?: string
}

defineProps<Props>()
</script>
