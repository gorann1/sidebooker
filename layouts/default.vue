<template>
  <div>
    <header class="shadow-sm bg-white">
      <NuxtLink to="/">SCUBAbooker</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Doma</NuxtLink></li>
        <li><NuxtLink to="/onama">O nama</NuxtLink></li>
        <li><NuxtLink to="/zones">Zone</NuxtLink></li>
        <li><NuxtLink to="/countries">Zemlje</NuxtLink></li>
        <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
        <li><NuxtLink to="/booking">Booking</NuxtLink></li>
      </ul>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
