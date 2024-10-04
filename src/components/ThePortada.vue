<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })
 /*  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#mainPage')
    if (section) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const images = document.querySelectorAll('.flowers img');
            images.forEach((img, index) => {
              img.style.animation = `slideDown 2s ease-in-out forwards ${index * 2}s`
            });
          }
        });
      }, { threshold: 0.5 });

      observer.observe(section)
    } 
  })*/
</script>

<template>
  <section id="mainPage">
    <div class="banner-opacity">
      <div class="flowers f-top">
        <img class="" src="../assets/images/animation/top/anim-top-left-1.png" alt="leaf 1">
        <img class="" src="../assets/images/animation/top/anim-top-left-2.png" alt="leaf 2">
        <img class="" src="../assets/images/animation/top/anim-top-left-3.png" alt="leaf 3">
        <img class="" src="../assets/images/animation/top/anim-top-left-4.png" alt="leaf 4">
        <img class="" src="../assets/images/animation/top/anim-top-left-5.png" alt="leaf 5">
        <img class="" src="../assets/images/animation/top/anim-top-left-6.png" alt="leaf 6">
      </div>

      <div class="container mx-auto p-4 md:px-10 lg:px-20">
        <div class="mb-20 flex flex-col justify-center items-center">
          <div class="box-bride-and-groom-names w-11/12 md:w-3/4 text-center lg:p-10">
            <div class="flex justify-center items-center">
              <span class="border-gradient w-full lg:w-1/3 mr-5"></span>
              <span class="font-semibold w-full lg:w-1/3">07 . 12 . 2024</span>
              <span class="border-gradient w-full lg:w-1/3 ml-5"></span>
            </div>
            <div class="flex flex-col md:flex-row justify-center py-5 md:py-10 lg:py-20 border-gradient">
              <p class="w-full md:w-1/3 text-6xl md:text-8xl lg:text-9xl">
                Stepha
              </p>
              <div class="mt-4 md:mt-12 mx-auto flex justify-center items-center text-primary-300 rounded-full w-8 h-8 md:w-10 lg:w-14 md:h-10 lg:h-14 bg-union mx-8"> 
                <p class="w-full md:w-1/3 text-xl md:text-3xl lg:text-4xl font-extrabold">&</p>  
              </div>  
              <p class="w-full md:w-1/3 text-6xl md:text-8xl lg:text-9xl">
                Alejo
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center text-center py-10">
            
              <!-- /*<i class="fas fa-coffee"></i>*/ -->
              <img class="h-8 w-8 mb-2" src="https://www.fixdate.io/modelo-invitacion/30/img/comilla-cierre.svg" alt="">

              <p class="text-lg font-light">{{ msg }}</p>

              <img class="h-8 w-8 mt-2" src="https://www.fixdate.io/modelo-invitacion/30/img/comilla-cierre.svg" alt="">
            
          </div>
          <!-- <div class="flex justify-content-center align-items-center">
            <div class="flecha-continuar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 607 607" width="607" height="607" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_111"><rect width="607" height="607" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_111)"><g transform="matrix(-1,0,0,-1,303.50799560546875,441.7010192871094)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d=" M-210.9709930419922,120.15899658203125 C-210.9709930419922,120.15899658203125 -0.00800000037997961,-120.33300018310547 -0.00800000037997961,-120.33300018310547 C-0.00800000037997961,-120.33300018310547 210.9709930419922,120.33300018310547 210.9709930419922,120.33300018310547"></path></g></g><g style="display: none;" transform="matrix(-1,0,0,-1,426,323.91998291015625)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d=" M102.42900085449219,244.19000244140625 C107.41100311279297,244.593994140625 112.43499755859375,244.8489990234375 117.49600219726562,244.9499969482422"></path></g></g><g style="display: none;" transform="matrix(-1,0,0,-1,181,323.91998291015625)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d=" M-102.42900085449219,244.19000244140625 C-107.41100311279297,244.593994140625 -112.43499755859375,244.8489990234375 -117.49600219726562,244.9499969482422"></path></g></g><g style="display: none;" transform="matrix(-0.6474335193634033,-0.9598596692085266,0.9598596692085266,-0.6474335193634033,219.33364868164062,163.1382598876953)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="5" d=" M126.25299835205078,-44.22999954223633 C127.17500305175781,-38.849998474121094 127.93199920654297,-33.415000915527344 128.51800537109375,-27.92799949645996"></path></g></g><g style="display: none;" transform="matrix(0.9484142065048218,0.6640867590904236,-0.6640867590904236,0.9484142065048218,422.7938537597656,382.2122802734375)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="5" d=" M-85.7699966430664,-256.25299072265625 C-91.1500015258789,-257.17498779296875 -96.58499908447266,-257.9320068359375 -102.0719985961914,-258.51800537109375"></path></g></g><g style="display: none;" transform="matrix(-1,0,0,-1,303.50799560546875,304.2050476074219)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d=" M-210.9709930419922,120.15899658203125 C-210.9709930419922,120.15899658203125 -0.00800000037997961,-120.33300018310547 -0.00800000037997961,-120.33300018310547 C-0.00800000037997961,-120.33300018310547 205.0749969482422,113.60700225830078 210.8470001220703,120.19100189208984"></path></g></g></g></svg></div>
          </div> -->

        </div>

      </div>
      <div class="flowers f-rigth">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-1.png" alt="leaf-right 1">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-2.png" alt="leaf-right 2">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-3.png" alt="leaf-right 3">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-4.png" alt="leaf-right 4">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-5.png" alt="leaf-right 5">
        <img class="" src="../assets/images/animation/right/anim-bottom-right-6.png" alt="leaf-right 6">
      </div>
      
    </div>
  </section>
</template>
<style scoped>
  #mainPage {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .f-top {
    position: relative;
    height: 400px;
    max-width: 678px;
    max-height: 570;
    @apply w-[200px] h-[168px] md:w-[400px] md:h-[336px]  2xl:w-[600px] 2xl:h-[504px] 
  }
  .f-top img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: slideDown 2s ease-in-out forwards;
    opacity: 0;
  }

  .f-rigth {
    position: relative;
    width: 100%;
  }

  .f-rigth img {
    position: absolute;
    bottom: 0;
    right: 0;
    animation: slideInFromRight 2s ease-in-out forwards;
    opacity: 0;
    max-width: 678px;
    max-height: 705;
    @apply w-[200px] h-[208px] md:w-[400px] md:h-[416px]  2xl:w-[600px] 2xl:h-[624px] 
  }

  .flowers img:nth-child(1) {
    animation-delay: 0s;
  }

  .flowers img:nth-child(2) {
    animation-delay: 0.5s;
  }

  .flowers img:nth-child(3) {
    animation-delay: 1s;
  }

  .flowers img:nth-child(4) {
    animation-delay: 1.5s;
  }

  .flowers img:nth-child(5) {
    animation-delay: 2s;
  }

  .flowers img:nth-child(6) {
    animation-delay: 2.5s;
  }

  @keyframes slideDown {
    0% {
      top: -100%;
      opacity: 0;
    }
    50% {
      top: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes slideInFromRight {
  0% {
    transform: translateX(100%); 
    opacity: 0; 
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
}

  
</style>