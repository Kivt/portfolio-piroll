<template>
  <div>
    <navbar :all-links="false"></navbar>

    <div class="container-fluid home" id="home-header">
      <div class="d-flex flex-row justify-content-center pb-3 title">
        <h1 class="text-center"><b>UI/UX Graphic Designer</b></h1>
      </div>

      <p class="d-flex desc mx-auto text-center mb-0 px-2">
        I am Graphic &amp; Web Designer based in New York,
        specializing in User Interface Design and Development.
      </p>
    </div>

    <div class="container-fluid works position-relative" id="works">
      <image-gallery
        :rows="4"
        :per-row="4"
      ></image-gallery>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ImageGallery from '@/components/ImageGallery.vue';

export default {
  name: 'Home',

  components: {
    Navbar,
    AppFooter,
    ImageGallery,
  },
};
</script>
