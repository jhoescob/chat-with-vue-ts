<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue'
import ChatInput from '@/components/chat/ChatInput.vue'

import { useChat } from '@/assets/composables/useChat'

const { messages, onMessage } = useChat()
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Wife...</span>
    </div>

    <!-- Chat Messages with the messages v- bind-->

    <ChatMessages :messages="messages" />

    <!-- Chat Input -->

    <ChatInput @send-message="onMessage" />
  </div>
</template>
