
<!-- ref means reactive variable -->

<script setup>
    import {ref} from 'vue'

    const message = ref('Hello Vue World')

    function changeMessage() {
    message.value = 'Message changed!'
    }
</script>

<template>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
</template>

/*
    Must Understand:
    1. ref is used to create a reactive variable in Vue.
    2. The value of the reactive variable can be accessed using .value.
    3. When the value of the reactive variable changes, the template will automatically update to reflect the new value.
*/

/*
    Example:
    const message = ref('Hello Vue World')
    message.value = 'Hello Vue Universe' // This will update the template to display 'Hello Vue Universe'
*/

/*
    Note:
    1. ref is a function that takes an initial value and returns a reactive reference to that value.
    2. The reactive reference can be used in the template to display the value and will automatically update when the value changes.
*/

/*
    Simple memory:
    ref() = make data reactive
    {{ }} = show data on screen
    .value = access/change ref value inside script
*/