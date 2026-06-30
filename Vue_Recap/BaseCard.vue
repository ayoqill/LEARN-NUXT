<!--
  Card wrapper with a slot — parent content fills the slot area
-->

<script setup>
</script>

<template>
  <div style="border:1px solid #ccc; border-radius:8px; padding:1rem; margin:0.5rem 0;">
    <slot>
      <p><em>Default content — shown when no slot content is provided.</em></p>
    </slot>
  </div>
</template>
