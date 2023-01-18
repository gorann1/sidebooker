<template>
  <div>
    <p>Country details for {{ id }}</p>
    <div v-for="c in countries" :key="c.id">
      <p>{ c.description }</p>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
