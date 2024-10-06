<script setup>
  import TheCode from './components/TheCode.vue'
  import ThePortada from './components/ThePortada.vue'
  import CountdownClock from './components/CountdownClock.vue'
  import InfoParty from './components/InfoParty.vue'
  import ThePhotos from './components/ThePhotos.vue'
  import TheRings from './components/TheRings.vue'
  import FloatingMusic from './components/FloatingMusic.vue'
  import TheFooter from './components/TheFooter.vue'
  import { ref } from 'vue'

  const showSectionCode = ref(true)
  const guestName = ref(true)
  const guestCode = ref(true)

  const showInvitation = (data) => {
    showSectionCode.value = false
    guestCode.value = data.Code
    guestName.value = data.Name
    console.log('Datos recibidos del hijo:', data)
  }
</script>

<template>
  <div v-if="showSectionCode">
    <TheCode @dataReceived="showInvitation"/>
  </div>
  <div v-else>
    <FloatingMusic />
    <ThePortada msg="El tiempo se detiene en el amor verdadero, y queremos que seas parte del instante en que nuestras almas se unen para siempre"/>
    <CountdownClock/>
    <ThePhotos />
    <InfoParty :guest-code="guestCode" :guest-name="guestName"/>
    <TheRings />
    <TheFooter />
  </div>
</template>
