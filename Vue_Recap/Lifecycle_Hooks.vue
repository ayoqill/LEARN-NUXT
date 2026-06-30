<!--
  Lifecycle Hooks: functions that run at specific points in a component's life
-->

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('onMounted: component added to the DOM')
})

onUpdated(() => {
  console.log('onUpdated: component re-rendered, count =', count.value)
})

onUnmounted(() => {
  console.log('onUnmounted: component removed from DOM')
})

function increment() {
  count.value++
}
</script>

<template>
  <h2>Lifecycle Hooks</h2>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
  <p><small>Open the browser console to see hook logs.</small></p>
</template>

<!--
  Must Understand:
  1. onMounted — runs once after the component is first added to the DOM.
  2. onUpdated — runs after every re-render due to reactive changes.
  3. onUnmounted — runs when the component is removed (cleanup timers, listeners).
  4. Hooks are called in order: onMounted -> onUpdated -> onUnmounted.
  5. These are the most common ones; onBeforeMount, onBeforeUnmount also exist.
-->
