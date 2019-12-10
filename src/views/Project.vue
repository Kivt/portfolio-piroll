<template>
  <div>
    <navbar :all-links="false"></navbar>

    <div class="container-fluid skills" id="home">
      <carousel
        ref="carousel"
        :per-page="1"
        :pagination-enabled="false"
      >
        <slide
          v-for="i in pages"
          :key="i"
        >
          <div class="d-flex flex-row left-skills w-100">
            <div class="d-flex align-items-center mx-auto">
              <div class="p-2 px-5 d-flex justify-content-center flex-column description">
                <h2 class="mb-4 mb-xl-5"><b>Light Breakfast</b></h2>

                <div class="d-flex flex-row desc pb-4">
                  Light his can't a creeping. Be, bring blessed night.
                  Replenish blesed creature good. Saw earth every creepth lights day,
                  divided abudantly form. In. Said given lights. Sixth the male.
                  Upon their multuply. Kind beast. Him three upon.
                </div>

                <div class="d-flex flex-row desc pb-4 pb-xl-5">
                  Cattle. Dominion day herb she'd creeping divide darkness. Which. Subdue had.
                </div>


                <p class="mb-1">
                  <b>Client:</b> <span class="desc"> Emma Morris</span>
                </p>
                <p class="mb-1">
                  <b class="mr-2">Date:</b> <span class="desc"> 25.06.2017</span>
                </p>
                <p class="mb-1">
                  <b>Share:</b> <span class="desc"> Facebook, Twitter, Pinterest</span>
                </p>
              </div>
            </div>

            <div class="d-none d-md-block px-0 slider-image ml-auto">
              <img
                :src="`https://picsum.photos/700?random=${i}`"
                class="img-fluid"
                alt="protfolio"
              >
            </div>
          </div>
        </slide>
      </carousel>

      <div
        class="
          d-flex flex-row justify-content-between align-items-center
          single-navigation bg-white
        "
      >
        <button
          class="btn btn-link d-flex align-items-center"
          @click="onPrevClick"
        >
          <i class="pe-7s-angle-left"></i>
          <span class="d-none d-md-block">PREVIOUS PROJECT</span>
        </button>

        <span class="d-flex align-items-center">
          <img :src="require('@/assets/img/menu.png')" class="img-fluid">
        </span>

        <button
          class="btn btn-link d-flex align-items-center justify-content-end"
          @click="onNextClick"
        >
          <span class="d-none d-md-block">NEXT PROJECT</span>
          <i class="pe-7s-angle-right"></i>
        </button>
      </div>
    </div>

    <div class="container-fluid contact" id="contact">
      <div class="d-flex flex-row justify-content-center pb-4">
        <h2> Need a Project ?</h2>
      </div>

      <div class="d-flex flex-row justify-content-center desc mx-auto pb-5">
        <span class="d-block text-center">
          Let us know what you're looking for in an agency.
          We'll take a look and see if this could be the start of something beautiful.
        </span>
      </div>

      <div class="d-flex flex-row justify-content-center">
        <div class="d-flex flex-row justify-content-center">
          <router-link
            role="button"
            to="/contact"
            class="btn btn-lg btn-info"
          >
            LET'S TALK
          </router-link>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'Project',

  components: {
    Navbar,
    AppFooter,
    Carousel,
    Slide,
  },

  data: () => ({
    pages: 4,
  }),

  computed: {
    currentPage() {
      return this.$refs.carousel.currentPage;
    },
  },

  methods: {
    onNextClick() {
      this.$refs.carousel.advancePage();
    },

    onPrevClick() {
      if (this.currentPage !== 0) {
        this.$refs.carousel.goToPage(this.currentPage - 1);
      }
    },
  },
};
</script>

<style scoped>
  .skills {
    margin-top: 56px;
  }

  .slider-image,
  .description {
    max-width: 700px;
  }

  .contact {
    padding: 100px 0;
  }

  span.d-md-block {
    transform: translateY(1px);
  }
</style>
