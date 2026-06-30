<!--
  Component Basics: import a child component and use it in the template
-->

<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const label = ref('Click Me')
const clickCount = ref(0)

function onButtonClick() {
  clickCount.value++
}
</script>

<template>
  <h2>Component Basics</h2>
  <p>Button clicked {{ clickCount }} times</p>

  <BaseButton :label="label" @click="onButtonClick" />
</template>

<!--
  Must Understand:
  1. Import the .vue file like any other module.
  2. Use it as a custom HTML tag in the template.
  3. Pass props and listen to events just like native elements.
-->
