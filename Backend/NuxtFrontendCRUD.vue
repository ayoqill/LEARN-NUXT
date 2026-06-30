<!--

Nuxt has useFetch, useAsyncData, and $fetch for data fetching. 
useFetch is good for loading data in a page, 
while $fetch is simple for button actions like submit, update, and delete.


Important thing to remember

    For CRUD in Nuxt + Django REST:

        useFetch = read/load data
        $fetch   = create/update/delete after button click
        refresh  = reload latest data

    Your main CRUD API pattern:

        GET     /api/tasks/       → get all tasks
        POST    /api/tasks/       → create task
        PATCH   /api/tasks/:id/   → update task
        DELETE  /api/tasks/:id/   → delete task
-->>