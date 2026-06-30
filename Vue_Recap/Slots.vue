<!--
  Slots: let you pass template content into a child component
-->

<script setup>
import BaseCard from './BaseCard.vue'
</script>

<template>
  <h2>Slots</h2>

  <BaseCard>
    <p>This content is projected via the default slot.</p>
  </BaseCard>

  <BaseCard>
    <h3>Custom Title</h3>
    <p>Any HTML or components can go inside slots.</p>
  </BaseCard>

  <BaseCard /> <!-- uses fallback/default slot content -->
</template>

<!--
  Must Understand:
  1. <slot> in the child is a placeholder for content passed from parent.
  2. Anything between the component tags goes into the default slot.
  3. If no content is provided, the slot's fallback content is shown.
  4. Slots make components flexible and reusable.
-->
