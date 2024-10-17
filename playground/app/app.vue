<script setup>

</script>


<template>
  <div style="text-align: center;">

    <h1>
      Welcome to Unified Nuxt Confetti
    </h1>
  
    <button type="button" @click="confettiOnPageSides()" style="padding: 4px 16px; margin: 8px;">
      On Page Sides
    </button>
  
    <button type="button" @click="confettiOnPageSides(4000)" style="padding: 4px 16px; margin: 8px;">
      On Page Sides Longer
    </button>

    <button type="button" @click="confettiOnCenter()" style="padding: 4px 16px; margin: 8px;">
      On Center
    </button>

    <button type="button" @click="confettiOnBottom()" style="padding: 4px 16px; margin: 8px;">
      On Bottom
    </button>

    <button type="button" @click="confettiOnTop()" style="padding: 4px 16px; margin: 8px;">
      On Top
    </button>

  </div>
</template>