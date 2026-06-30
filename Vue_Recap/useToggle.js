/*
  Composable: a reusable function that uses Vue's Composition API
  Extracts stateful logic so components stay clean
*/

import { ref } from 'vue'

export function useToggle(initial = false) {
  const isOn = ref(initial)

  function toggle() {
    isOn.value = !isOn.value
  }

  function setOn() {
    isOn.value = true
  }

  function setOff() {
    isOn.value = false
  }

  return { isOn, toggle, setOn, setOff }
}

/*
  Must Understand:
  1. A composable is just a function that uses Composition API (ref, reactive, etc.).
  2. It returns the reactive state and methods.
  3. Each component that calls useToggle() gets its own independent state.
  4. Composables are the Vue 3 way to share logic — replacing mixins.
*/
