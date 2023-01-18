<script setup lang="ts">
const { data: countries } = useFetch("/api/countries");
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="c in countries" :key="c.id">
        <NuxtLink :to="`/countries/${c.name}`">{{ c.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
