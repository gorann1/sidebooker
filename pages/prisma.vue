<script setup lang="ts">
const { data: zones } = useFetch("/api/zones");
</script>

<template>
  <div>
    <div>
      <ul>
        <li v-for="zone in zones" :key="zone.id">{{ zone.name }}</li>
      </ul>
    </div>
  </div>
</template>
