<script setup>

useHead({
  title: 'Unified Nuxt Confetti',
});

useSeoMeta({
  description: 'Easily add confetti to your Nuxt app.',
});


onMounted(() => {
  confettiOnPageSides(2000);
});

</script>


<template>
  <div class="min-h-screen flex flex-col items-center justify-center">

    <h1 class="text-2xl font-bold mb-6">
      Welcome to Unified Nuxt Confetti
    </h1>

    <div class="flex flex-col md:flex-row gap-2 w-full md:w-auto px-4">
      <u-btn
        label="On Page Sides"
        class="justify-center"
        :click-handler="() => confettiOnPageSides()"
      />
      <u-btn
        label="On Page Sides Longer"
        class="justify-center"
        :click-handler="() => confettiOnPageSides(4000)"
      />
      <u-btn
        label="On Center"
        class="justify-center"
        :click-handler="() => confettiOnCenter()"
      />
      <u-btn
        label="On Bottom"
        class="justify-center"
        :click-handler="() => confettiOnBottom()"
      />
      <u-btn
        label="On Top"
        class="justify-center"
        :click-handler="() => confettiOnTop()"
      />
    </div>

  </div>
</template>


<style>
  :root {
    color: theme('colors.on-surface');
    background-color: theme('colors.surface');
  }
</style>