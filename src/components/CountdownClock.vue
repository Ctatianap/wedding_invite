<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const targetDate = new Date('2024-12-07T16:00:00'); // Fecha objetivo
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});
const sizeScreen = screen.width

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    countdown.value.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdown.value.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    countdown.value.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  } else {
    // Si la fecha ya pasó, establecer todo en cero
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
}

let interval;
onMounted(() => {
  updateCountdown(); // Actualiza al cargar el componente
  interval = setInterval(updateCountdown, 1000); // Actualiza cada segundo
});

onUnmounted(() => {
  clearInterval(interval); // Limpia el intervalo cuando se desmonte el componente
});
</script>

<template>
  <section>
    <div class="banner-opacity mx-auto relative">
      <div class="relative w-[380px] md:w-full h-[150px] max-w-[500px] md:h-[500px] mx-auto">
          <img class="" src="../assets/images/heart.png" alt="">
      </div>  
      <div class="absolute top-20 md:mt-8 left-1/2 transform -translate-x-1/2 circle-clock rounded-full text-center w-[180px] h-[180px] md:w-[215px] md:h-[215px] flex flex-col items-center justify-center p-3">
        <span class="text-5xl mb-4 text-primary-100 font-cookie">Falta</span>
        <div id="clock" class="clock w-11/12 mb-6">
          <div id="days" class="w-1/4 flex flex-col border-r ">
            <span class="number">{{ countdown.days }}</span>
            <span class="font-light">días</span>
          </div>
          <div id="hours" class="w-1/4 flex flex-col border-r">
            <span class="number">{{ countdown.hours }}</span>
            <span class="font-light">hs</span>
          </div>
          <div id="minutes" class="w-1/4 flex flex-col border-r">
            <span class="number">{{ countdown.minutes }}</span>
            <span class="font-light">min</span>
          </div>
          <div id="seconds" class="w-1/4 flex flex-col no-border">
            <span class="number">{{ countdown.seconds }}</span>
            <span class="font-light">seg</span>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <font-awesome-icon class="beats icon" icon="fa-solid fa-heart" />

          <!-- Corazon -->
          <!-- <div class="corazon-falta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="38" height="32" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_111"><rect width="38" height="32" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_111)"><g transform="matrix(0.8882499933242798,0,0,0.8882499933242798,2.1445674896240234,1.7293758392333984)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"><path fill="rgb(129,148,139)" fill-opacity="1" d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"></path></g></g></g></svg></div> -->

        </div>

      </div>
      <img v-if="sizeScreen > 768" class="separator-countdown" src="../assets/images/separator.png" alt="">
      <div class="bg-cream-default h-[320px] flex items-end -mt-2"> 
        <img class="" src="../assets/images/separator-photos.png" alt="">
      </div>
    </div>
  </section>
</template>
<style scoped>

  .icon {
    font-size: 20px;
    @apply text-primary-200
  }

  /* Animación al reproducir */
  .beats {
    animation: fadeAndScale 3s infinite ease-in-out;
  }

  @keyframes fadeAndScale {
    0%, 100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
}
</style>
