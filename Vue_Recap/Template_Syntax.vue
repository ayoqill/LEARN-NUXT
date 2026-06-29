<!-- How Vue displays data -->

<template>
    <h1>{{ title }}</h1>
</template>

<script setup>
    const title = 'Hello Vue World'
</script>

----------------------------------------------
<p v-if="typewritersInStock">
  in stock
</p>

<p v-else>
  not in stock
</p>

----------------------------------------------
<p v-for="(x, index) in manyFoods">
      {{ index }}: "{{ x.name }}", url: "{{ x.url }}" <br>
</p>

----------------------------------------------
<div v-for="(img, index) in images" :key="index">
  <img
    :src="img.url"
    @click="select(index)"
    :class="{ selClass: img.sel }"
  >
</div>

/*
    :class="{ selClass: img.sel }"

    This means:
        Add the CSS class selClass only when img.sel is true.
        Think of it like an if condition.
*/


-----------------------------------------------------------------------------------------------

/*
    Must Understand:
    1. Vue uses double curly braces {{ }} to display data in the template.
    2. v-if is used to conditionally render elements for boolean expression.
    3. v-else is used to provide an alternative template when the v-if condition is false.
    4. v-for is used for list of items by iterating over an array or object.
    5. :class is used to bind a class to an element dynamically.
    6. :src is used to bind a source attribute to an element dynamically.
*/