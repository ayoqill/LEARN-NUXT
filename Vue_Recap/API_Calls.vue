<!--
  API Calls: fetch data from an API using fetch() + await
  Handles loading, error, and success states
-->

<script setup>
import { ref, onMounted } from 'vue'

const data = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchTodos() {
  loading.value = true
  error.value = null

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    data.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchTodos)
</script>

<template>
  <h2>API Calls</h2>

  <button @click="fetchTodos" :disabled="loading">
    {{ loading ? 'Loading...' : 'Refresh' }}
  </button>

  <p v-if="loading">Fetching data...</p>
  <p v-else-if="error" style="color:red;">Error: {{ error }}</p>
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">
      <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
        {{ todo.title }}
      </span>
    </li>
  </ul>
</template>

<!--
  Must Understand:
  1. Use fetch() + await to call any REST API.
  2. Track loading, error, and data as separate ref values.
  3. onMounted is the natural place to fetch data on page load.
  4. v-if / v-else-if / v-else handles the three states cleanly.
  5. Nuxt provides useFetch() which simplifies this pattern further.
-->
