<script setup>
  import { ref, reactive } from 'vue'
  import axios from 'axios'

  const props = defineProps({
    guestCode: {
        type: String,
        required: true
    },
    guestName: {
        type: String,
        required: true
    },
  })

  const loading = ref(false)
  const data = ref(null)
  const error = ref(null)
  const showThanks = ref(false)
  const dressCodeDialog = ref(false)
  const attendanceDialog = ref(false)
  const form = reactive({
    attendance: '',
    comment: '',
  })

  const onSubmit = async() => {
    loading.value = true
    try {
  
      const response = await axios.post('https://us-central1-refined-area-437318-p8.cloudfunctions.net/updateAttendance', 
        {
          Code: props.guestCode,
          Attendance: form.attendance,
          Comments: form.comment,
        },
        {
          headers: {
          'Content-Type': 'application/json',
          }
        }
      )
      data.value = response.data
      showThanks.value = true
    } catch (err) {
        error.value = 'Ups!, ocurrió un error con tu confirmación'
    } finally {
        loading.value = false
    }
}
const goToUrl = () => {
  window.open('https://maps.app.goo.gl/3RpyLKip3csA8uyP7', '_blank')
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
          <el-button class="my-4" round @click="dressCodeDialog = true">Código de vestimenta</el-button>
        </div>
        <div class="w-full lg:w-1/3 text-center mb-6">
          <p class="text-purple-default text-4xl font-cookie mb-6">Lugar</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">La Reserva Centro De Eventos</p>
          <el-button class="my-4" round @click="attendanceDialog = true">Confirmar asistencia</el-button>
        </div>
        <div class="w-full lg:w-1/3 text-center mb-6">
          <p class="text-purple-default text-4xl font-cookie">Dirección</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">calle 9 # 114 frente EPSA</p>
          <p class="text-secondary-200 text-lg font-roboto font-light">Ciudad Jardín, Cali, Valle del Cauca</p>
          <el-button class="my-4" round @click="goToUrl">Cómo llegar</el-button>
        </div>
      </div>
    </div>
  </section>

  <el-dialog v-model="dressCodeDialog" title="" center>
    <p class=" text-primary-100 text-3xl font-cookie text-center mb-4">Código de vestuario</p>
    <div class="mx-auto w-10/12 text-center">
      <span class="font-cookie text-2xl text-primary-100">Mujeres:</span>
      <p> vestido vaporoso largo</p>
      <span class="font-cookie text-2xl text-primary-100">Hombre:</span>
      <p class="mb-4">guayabera blanca manga larga</p>
      <a href="" class="text-xs text-primary-300 mb-4">Mira aquí algunas referencias</a><br>
      <div class="text-xs text-purple-default mt-8">Recuerda que el blanco está <br> reservado para la novia ♥</div>
    </div>
  </el-dialog>

  <el-dialog v-model="attendanceDialog" title="" center>
    <div v-loading="loading">
      <div v-if="showThanks" class="text-center mt-20">
        <p class="font-cookie text-3xl text-primary-100 mb-6">{{ guestName }}</p>
        <span v-if="form.attendance == 'si'">Gracias por confirmar tu asistencia <br> Te esperamos!</span>
        <span v-else>Sentimos que no puedas acompañarnos<br> Gracias!</span>
      </div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <p class="font-cookie text-3xl text-primary-100 text-center">
          {{ guestName }} <br>
        </p>
        <p class="text-center mb-4">
          Deseas confirmar asistencia?
        </p>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <div class="flex justify-center">
            <el-form-item>
              <el-radio-group v-model="form.attendance">
                <el-radio value="si">Si! Confirmo </el-radio>
                <el-radio value="No">No puedo :(  </el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="md:w-1/2 flex flex-col justify-center items-center mx-auto">
            <p class="text-center mb-4">¿Algún dato importante?<br>  Ej: Soy vegetariano</p>
            <el-form-item>
              <el-input v-model="form.comment" type="textarea" />
            </el-form-item>
          </div>
          <div class="flex justify-center">
            <el-form-item>
              <el-button type="primary" round @click="onSubmit">Enviar</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </el-dialog>
</template>
