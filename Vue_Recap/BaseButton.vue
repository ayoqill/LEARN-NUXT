<!--
  Reusable button component — receives a label prop and emits click
-->

<script setup>
const props = defineProps({
  label: { type: String, default: 'Button' }
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <button @click="handleClick" style="padding:0.5rem 1rem;">
    {{ label }}
  </button>
</template>
