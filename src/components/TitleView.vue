<template>
  <h1
    class="flex justify-center mt-2 mb-10 sm:text-3xl font-bold uppercase text-green-500 tracking-wider"
  >
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
