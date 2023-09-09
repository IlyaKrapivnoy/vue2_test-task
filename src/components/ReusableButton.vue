<template>
  <button
    :aria-busy="isBusy"
    v-if="showLoadMoreButton"
    @click="handleLoadMore"
    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'ReusableButton',
  props: {
    isBusy: Boolean,
    buttonText: String,
    showLoadMoreButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleLoadMore() {
      this.$emit('loadMore');
    }
  }
};
</script>
