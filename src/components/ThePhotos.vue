<script setup>
  import CardPhoto from './CardPhoto.vue'
  const sizeScreen = screen.width
</script>

<template>
  <section class="bg-cream-300 -mt-2 -mb-20">
    <div class="text-center py-20 px-4">
      <h1 class="text-primary-300 text-6xl font-cookie mb-6">Nuestro Viaje Juntos</h1>
      <p class="text-gray-400 text-lg font-roboto">
        Acompáñanos a revivir nuestros momentos más especiales.
      </p>
      <p class="text-gray-400 text-lg font-roboto">
        Cada imagen cuenta un capítulo de nuestra historia. <br>
        ¡Estamos emocionados de compartir este hermoso viaje con ustedes!"
      </p>
    </div>
    <div class="p-4">
      <el-carousel 
        :interval="6000" 
        :type="sizeScreen > 645 ? 'card' : null" 
        height="500px" 
        :autoplay="false" 
        indicator-position="none"
        arrow="always">
        <el-carousel-item v-for="(photo, index) in 11" :key="photo">
          <div class="flex justify-center">
            <CardPhoto :url-img="`photo-${index}.jpeg`" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="h-[120px] md:h-[200px] flex items-start -mt-2"> 
      <img class="" src="../assets/images/separator-lines.png" alt="">
    </div>
  </section>
</template>

<style scoped>
.el-carousel__item h3 {
  opacity: 0.8;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}

</style>
