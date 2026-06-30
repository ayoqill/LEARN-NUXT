<!--
  Parent: passes data down via props, listens for events from child via emits
-->

<script setup>
import { ref } from 'vue'
import PropsAndEmitsChild from './Props_and_Emits_Child.vue'

const parentMessage = ref('Hello from Parent!')
const childResponse = ref('')

function handleReply(msg) {
  childResponse.value = msg
}
</script>

<template>
  <h2>Parent Component</h2>
  <p>Child says: "{{ childResponse }}"</p>

  <PropsAndEmitsChild
    :message="parentMessage"
    @reply="handleReply"
  />
</template>

<!--
  Must Understand:
  1. :message="..." passes a reactive prop down to the child.
  2. @reply="handleReply" listens for the 'reply' event emitted by the child.
  3. Parent and child are independent — data flows one way (props down, events up).
-->
