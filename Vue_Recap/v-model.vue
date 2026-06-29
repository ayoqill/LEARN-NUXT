
<!-- use v-model to connect an input field with a variable 
  -- use for input fields -->
  

  <script setup>
    import {ref} from 'vue'

    const message = ref('Hello Vue World')
  </script>

  <template>
    input field: <input v-model="message" type="text"/> <!-- HERE: the is the user type input -->
    <p>message: {{ message }}</p>
  </template>


/*
    Must Understand:
        When user types in input, the Vue data changes.
        When Vue data changes, the input display changes too.
*/

