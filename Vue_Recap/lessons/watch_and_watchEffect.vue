<!--
  watch = explicitly tell Vue which data to watch
  watchEffect = automatically tracks whatever data is used inside it
-->

<script setup>
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)
const name = ref('Vue')

function increment() {
  count.value++
}

function changeName() {
  name.value = name.value === 'Vue' ? 'Nuxt' : 'Vue'
}

watch(count, (newVal, oldVal) => {
  console.log(`watch: count changed from ${oldVal} to ${newVal}`)
})

watchEffect(() => {
  console.log(`watchEffect: count is now ${count.value}`)
})
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>

  <p>Name: {{ name }}</p>
  <button @click="changeName">Change Name</button>
  <p><small>Open the browser console to see log output.</small></p>
</template>

<!--
  Must Understand:
  1. watch() needs you to specify which reactive value to watch.
  2. watchEffect() automatically tracks any reactive value used inside it.
  3. watch gives you both old and new values.
  4. watchEffect runs immediately, watch does not (by default).
  5. Use watch when you need the previous value; use watchEffect for side-effects.
-->
