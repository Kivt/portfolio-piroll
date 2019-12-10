<template>
  <div>
    <navbar :all-links="false"></navbar>

    <div class="container-fluid home" id="home">
      <div class="d-flex flex-row justify-content-center pb-3 title">
        <h1><b>Amelia Woods</b></h1>
      </div>

      <div class="d-flex flex-row desc mx-auto text-center">
        I am Graphic &amp; Web Designer based in New York,
        specializing in User Interface Design and Development.
      </div>
    </div>

    <work-statistics></work-statistics>

    <div class="container-fluid skills" id="about">
      <div class="d-flex flex-row">
        <div class="col-md-6 d-none d-md-block px-0 right-skills"></div>

        <div class="col-md-6 col-sm-12 left-skills px-0">
          <div class="about-content">
            <div class="d-flex justify-content-center mb-3">
              <h2>About Us</h2>
            </div>

            <div class="d-flex justify-content-center text-center mb-5">
              <span class="desc">
                Divide have don't man wherein air fourth. Own itself make have night wonk make.
                A you under Seed appear whick good give. Own give air without fowl moveth dry first
                heaven fruit, dominion she'd wont very all.
              </span>
            </div>

            <div class="d-flex justify-content-center">
              <div class="img-holder">
                <img
                  :src="require('@/assets/img/signature.png')"
                  alt="signature"
                  class="img-fluid"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container-fluid contact bg-white" id="contact">
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
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import WorkStatistics from '@/components/WorkStatistics.vue';

export default {
  name: 'About',

  components: {
    Navbar,
    AppFooter,
    WorkStatistics,
  },

  data: () => ({}),

  methods: {},
};
</script>
