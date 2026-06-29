/*

Example use of array and v-for in Vue.js

*/

<script setup>
import { ref } from 'vue'

const messages = ref([
  { id: 1, text: 'Hello', sender: 'user' },
  { id: 2, text: 'Hi there', sender: 'bot' }
])
</script>

<template>
  <div v-for="msg in messages" :key="msg.id">
    {{ msg.sender }}: {{ msg.text }}
  </div>
</template>


/*
    Summary:
        messages = list of chat messages
        msg = one message from the list
        v-for = repeat the div for every message
        msg.sender = who sent it
        msg.text = the message
        :key = unique identity for each item
*/