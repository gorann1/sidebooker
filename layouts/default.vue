<template>
  <div>
    <header class="shadow-sm bg-white">
      <NuxtLink to="/">SCUBAbooker</NuxtLink>
      <p>
        Go to
        <NuxtLink to="/light"> light page </NuxtLink>
      </p>
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
      <ColorModePicker />
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
