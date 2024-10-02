<script setup>
const sizeScreen = screen.width
</script>

<template>
  <section class="bg-cream-default pb-20">
    <div class="">
      <div v-if="sizeScreen > 768" class="relative separator-footer mb-10">
        <img class="w-full mx-auto" src="../assets/images/footer.png" alt="">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 text-cream-default text-5xl font-cookie mt-40">
          <p class="mb-4 text-center"> Gracias por Ser Parte de Nuestra Historia</p>
          <p class="font-roboto font-light text-base text-center">Queremos ver nuestra boda a través de tus ojos. Comparte con nosotros las fotos que tomaste y ayúdanos a guardar recuerdos inolvidables desde tu perspectiva.</p>
        </div>
      </div>
      <div v-else class="relative separator-footer mb-10">
        <img class="w-full mx-auto" src="../assets/images/footer-mobile.png" alt="">
        <div class="absolute top-0 p-6 text-cream-default text-3xl md:text-5xl font-cookie mt-28 md:mt-40">
          <p class="mb-4 text-center"> Gracias por Ser Parte de Nuestra Historia</p>
          <p class="px-4 font-roboto font-light text-base text-center">Queremos ver nuestra boda a través de tus ojos. Comparte con nosotros las fotos que tomaste y ayúdanos a guardar recuerdos inolvidables desde tu perspectiva.</p>
        </div>
      </div>
    </div>
  </section>
</template>
