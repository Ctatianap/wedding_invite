<script setup>
import ThePortada from './components/ThePortada.vue'
import CountdownClock from './components/CountdownClock.vue'
import InfoParty from './components/InfoParty.vue'
import ThePhotos from './components/ThePhotos.vue'
import TheRings from './components/TheRings.vue'
import FloatingMusic from './components/FloatingMusic.vue';
</script>

<template>
  <div>
    <ThePortada msg="El tiempo se detiene en el amor verdadero, y queremos que seas parte del instante en que nuestras almas se unen para siempre"/>
    <CountdownClock/>
    <ThePhotos />
    <InfoParty />
    <TheRings />
    <FloatingMusic />
  </div>
</template>
