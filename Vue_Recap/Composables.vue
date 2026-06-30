<!--
  Composables: reusable stateful logic extracted into a function
  Import and use them just like any other function
-->

<script setup>
import { useToggle } from './useToggle.js'

const { isOn, toggle } = useToggle(false)
</script>

<template>
  <h2>Composables</h2>
  <p>Status: {{ isOn ? 'ON' : 'OFF' }}</p>
  <button @click="toggle">Toggle</button>
</template>

<!--
  Must Understand:
  1. Composables let you extract and reuse logic across components.
  2. Call a composable in <script setup> and destructure what you need.
  3. Each component gets an isolated instance — state is not shared.
  4. This pattern is heavily used in Nuxt (e.g., useFetch, useState).
-->
