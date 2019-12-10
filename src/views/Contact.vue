<template>
  <div>
    <navbar :all-links="false"></navbar>

    <div class="container-fluid info">
    <div class="row">
      <div class="col-sm-12 col-md-6 pb-5">
        <div class="info-content">
          <h2 class="mb-4"><b>Light Breakfast</b></h2>

          <div class="d-flex flex-row desc pb-4">
            To the give beginning divide, cattle. Give moving won't,
            there the abudantly she'd brought air upon. Light hath subdue.
            Life days creature upon first heaven gathering dry.
          </div>

          <p class="mb-1">
            <b>Adress:</b> <span class="desc"> 10111 Santa Monica Boulevard, LA</span>
          </p>

          <p class="mb-1">
            <b class="mr-2">Phone:</b> <span class="desc"> +44 0987 065 908</span>
          </p>

          <p class="mb-1">
            <b>Email:</b> <span class="desc"> info@Example.com</span>
          </p>

          <p class="mb-1">
            <b>Fax:</b> <span class="desc"> +44 0987 065 909</span>
          </p>
        </div>
      </div>

      <div class="col-sm-12 col-md-6">
        <contact-form></contact-form>
      </div>
    </div>
  </div>

  <div class="container-fluid map">
    <div id="map"></div>
  </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',

  components: {
    Navbar,
    AppFooter,
    ContactForm,
  },

  data: () => ({}),

  mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      const myLatLng = { lat: 34.056787, lng: -118.241229 };

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12,
      });

      // eslint-disable-next-line no-new
      new window.google.maps.Marker({
        position: myLatLng,
        map,
      });
    },
  },
};
</script>
