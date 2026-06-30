<!--
  Child: receives props from parent, emits events back to parent
-->

<script setup>
const props = defineProps({
  message: String
})

const emit = defineEmits(['reply'])

function sendBack() {
  emit('reply', 'Thanks Parent!')
}
</script>

<template>
  <div style="border:1px solid #ccc; padding:1rem; margin-top:0.5rem;">
    <h3>Child Component</h3>
    <p>Received from parent: "{{ message }}"</p>
    <button @click="sendBack">Reply to Parent</button>
  </div>
</template>

<!--
  Must Understand:
  1. defineProps declares what props the child accepts (with types).
  2. defineEmits declares which events the child can emit.
  3. emit('reply', data) sends data back to the parent.
  4. Props are read-only — child should never mutate props directly.
-->
