<script setup>
  import { ref, reactive } from 'vue'
  const centerDialogVisible = ref(false)
  const form = reactive({
  name: '',
  assist: '',
  comment: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <section class="bg-cream-default pb-20">
    <div class="">
      <div class="relative separator-lines mb-20 md:mb-28">
        <img class="w-full mx-auto max-w-[500px]" src="../assets/images/header-party.png" alt="">
        <p class="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-primary-100 text-5xl font-cookie">Ceremonia</p>
      </div>
      <div class="flex flex-wrap mb-20">
        <div class="w-full lg:w-1/3 text-center mb-8">
          <p class="text-purple-default text-4xl font-cookie">Día</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">Sábado 07 de Diciembre</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">16:00 hs</p>
          <el-button class="my-4" round @click="centerDialogVisible = true">Código de vestimenta</el-button>
        </div>
        <div class="w-full lg:w-1/3 text-center mb-6">
          <p class="text-purple-default text-4xl font-cookie mb-6">Lugar</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">La Reserva Centro De Eventos</p>
          <el-button class="my-4" round @click="centerDialogVisible = true">Confirmar asistencia</el-button>
        </div>
        <div class="w-full lg:w-1/3 text-center mb-6">
          <p class="text-purple-default text-4xl font-cookie">Dirección</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">calle 9 # 114 frente EPSA</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">Ciudad Jardín, Cali, Valle del Cauca</p>
          <el-button class="my-4" round @click="centerDialogVisible = true">Cómo llegar</el-button>
        </div>
      </div>
    </div>
  </section>

  <el-dialog v-model="centerDialogVisible" title="" width="500" center>
    <p class="text-center mb-8">
      ¿Hola {name}!, Deseas confirmar asistencia?
    </p>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item>
        <el-radio-group v-model="form.assist">
          <el-radio value="Sponsor">Si! Confirmo </el-radio>
          <el-radio value="Venue">No puedo :(  </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <p>Ingrese algún dato importante, Ej: Soy vegetariano</p>
        <el-input v-model="form.comment" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Enviar</el-button>
        <el-button>Cancelar</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
