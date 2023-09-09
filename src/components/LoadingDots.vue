<template>
  <div class="loading-dots">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingDots'
};
</script>

<style scoped>
.loading-dots {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 4px;
  height: 4px;
  background-color: rgba(67, 59, 229, 0.5);
  border-radius: 50%;
  margin: 0 2px;
}

.dot-1 {
  animation: dot-jump 1s infinite;
}

.dot-2 {
  animation: dot-jump 1s infinite;
  animation-delay: 0.2s;
}

.dot-3 {
  animation: dot-jump 1s infinite;
  animation-delay: 0.4s;
}

@keyframes dot-jump {
  0%,
  50%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(-5px);
  }
}
</style>
