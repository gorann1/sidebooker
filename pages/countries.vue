<script setup lang="ts">
const { data: countries } = useFetch("/api/countries");
</script>

<template>
  <div>
    <div>
      <ul>
        <li v-for="country in countries" :key="country.id">
          {{ country.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
