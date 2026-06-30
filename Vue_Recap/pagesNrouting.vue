<!--

In Nuxt, you do not manually create routes most of the time.

Nuxt automatically creates routes based on files inside:

    Nuxt routing is based on Vue Router, 
    and it generates routes from every component inside app/pages/.

    /        → index.vue
    /about   → about.vue
    /tasks   → tasks.vue

----------------------------------------------------------------------------------------

Moving between pages

Use <NuxtLink> instead of normal <a>.

<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/tasks">Tasks</NuxtLink>
  </div>
</template>

it moves between pages without fully refreshing the website.

----------------------------------------------------------------------------------------

Dynamic routing

Dynamic route means the URL can change based on data.


----------------------------------------------------------------------------------------


-->