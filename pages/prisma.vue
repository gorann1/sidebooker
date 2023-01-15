<script setup lang="ts">
const { data: zones } = useFetch('/api/zones')
</script>

<template>
  <div>
    <p>Prisma ORM Data from the database, received {{ zones?.length || 0 }} records: <pre>{{ zones }}</pre></p>
  </div>
</template>
