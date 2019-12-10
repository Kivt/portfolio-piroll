<template>
  <div>
    <navbar></navbar>

    <div class="container-fluid header" id="header">
      <div class="container">

          <div class="col-12 px-1 px-md-4">
            <div class="d-flex flex-row-reverse mb-3 mr-md-5">
              <h1>We Design And Develop</h1>
            </div>

            <div class="d-flex flex-row-reverse">
              <div class="col-sm-12 col-md-6 px-0">
                <p class="desc">
                  We are a new design studio based in USA. We have over 20 years of
                  combined experience, and know a thing or two about designing websites
                  and mobile apps.
                </p>
              </div>
            </div>

            <div class="d-flex flex-row-reverse">
              <div class="col-sm-12 col-md-6 px-0">
                <button
                  class="btn"
                >
                  contact us
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="container-fluid about" id="about">
      <div class="d-flex flex-row justify-content-center mb-3">
        <a href="http://piroll.da4.info/about.html"><h2>About Us</h2></a>
      </div>

      <div class="d-flex flex-row justify-content-center text-center mb-5">
        <span class="desc">
          Divide have don't man wherein air fourth. Own itself make have night wonk make.
          A you under Seed appear whick good give. Own give air without fowl moveth dry first
          heaven fruit, dominion she'd wont very all.
        </span>
      </div>

      <div class="d-flex flex-row justify-content-center text-center">
        <div class="img-holder">
          <img src="@/assets/img/signature.png" alt="signature" class="img-fluid"/>
        </div>
      </div>
    </div>

    <div class="container-fluid skills" id="skills" ref="skills">
      <div class="d-flex flex-row">
        <div class="col-md-6 col-sm-12 left-skills px-0">
          <div class="content">
            <h2 class="mb-5"><b>Professional Skills</b></h2>

            <p class="mb-1"><b>UI/UX DESIGN<span class="ml-3">75%</span></b></p>

            <div class="bar pr-5 mb-5">
              <div class="progress" style="height: 4px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="transition-delay: 0.1s"
                ></div>
              </div>
            </div>

            <p class="mb-1"><b>WEB DEVELOPMENT<span class="ml-3">90%</span></b></p>

            <div class="bar pr-5 mb-5">
              <div class="progress" style="height: 4px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="transition-delay: 0.4s"
                ></div>
              </div>
            </div>

            <p class="mb-1"><b>MARKETING<span class="ml-3">65%</span></b></p>

            <div class="bar pr-5 mb-5">
              <div class="progress" style="height: 4px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="transition-delay: 0.7s"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 d-none d-md-block px-0 right-skills"></div>
      </div>
    </div>

    <div id="work">
      <work-statistics></work-statistics>
    </div>

    <div class="container-fluid works position-relative" id="works">
      <image-gallery
        :rows="2"
        :per-row="4"
      ></image-gallery>

      <div ref="thirdRow" class="third-row">
        <image-gallery
          :rows="1"
          :per-row="4"
          :start-image-index="9"
        ></image-gallery>
      </div>

      <button
        ref="toggleBtn"
        class="btn btn-link load-work d-flex justify-content-center btn-block more-work"
        :class="{'open': isVisible}"
        @click="toggleProjects"
      >
        <i class='pe-7s-angle-up-circle' style='font-size: 40px'></i>
      </button>
    </div>

    <div class="process" id="process">
      <div class="d-flex flex-row justify-content-center pb-4">
        <h2 class="text-center">Our Work Process</h2>
      </div>

      <div class="d-flex flex-row justify-content-center pb-5">
        <span class="desc text-center" >
          Was years it seasons was there from he in them together over that,
          third sixth gathered female creepinf beading behold years
        </span>
      </div>

      <div class="d-flex flex-row">
        <iframe
          src="https://www.youtube.com/embed/MB80ZuIJATI"
          frameborder="0"
          class="process-video"
          allowfullscreen="allowfullscreen"
          width="100%"
        ></iframe>
      </div>
    </div>

    <div class="container-fluid services" id="services">
      <div class="row pb-5">
        <div class="col text-center">
          <i class="pe-7s-diamond"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            UI / UX DESIGN
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Be set fourth land god darkness make it wherein own
          </div>
        </div>

        <div class="col text-center">
          <i class="pe-7s-arc"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            WEB DEVELOPMENT
          </div>

          <div class="d-flex justify-content-center icon-desc">
            A she'd them bring void moving third she'd kind fill
          </div>
        </div>

        <div class="col text-center d-none d-md-block">
          <i class="pe-7s-phone"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            APP / MOBILE
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Dominion man second spirit he, earth they're creeping
          </div>
        </div>

        <div class="col text-center d-none d-md-block">
          <i class="pe-7s-joy"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            GAME DESIGN
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Morning his saying moveth it multiply appear life be
          </div>
        </div>
      </div>

      <div class="row d-flex d-md-none pb-5">
        <div class="col text-center">
          <i class="pe-7s-phone"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            APP / MOBILE
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Dominion man second spirit he, earth they're creeping
          </div>
        </div>

        <div class="col text-center">
          <i class="pe-7s-joy"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            GAME DESIGN
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Morning his saying moveth it multiply appear life be
          </div>
        </div>
      </div>

      <div class="row pb-5">
        <div class="col text-center">
          <i class="pe-7s-plane"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            SEO / MARKETING
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Give won't after land fill creeping meat you, may
          </div>
        </div>

        <div class="col text-center">
          <i class="pe-7s-star"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            PHOTOGRAPHY
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Creepeth one seas cattle grass give moving saw give
          </div>
        </div>

        <div class="col text-center d-none d-md-block">
          <i class="pe-7s-magic-wand"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            GRAPHIC DESIGN
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Open, great whales air rule for, four live whales
          </div>
        </div>

        <div class="col text-center d-none d-md-block">
          <i class="pe-7s-paint-bucket"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            ILLUSTRATIONS
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Whales likeness hath, man kind for them air two won't
          </div>
        </div>
      </div>

      <div class="row d-flex d-md-none">
          <div class="col text-center">
            <i class="pe-7s-magic-wand"></i>

            <div class="d-flex justify-content-center icon-title pb-3">
              GRAPHIC DESIGN
            </div>

            <div class="d-flex justify-content-center icon-desc">
              Open, great whales air rule for, four live whales
            </div>
          </div>

        <div class="col text-center">
          <i class="pe-7s-paint-bucket"></i>

          <div class="d-flex justify-content-center icon-title pb-3">
            ILLUSTRATIONS
          </div>

          <div class="d-flex justify-content-center icon-desc">
            Whales likeness hath, man kind for them air two won't
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid quotes" id="quotes">
      <carousel
        :per-page="1"
        loop
        autoplay
        class="carousel"
      >
        <slide>
          <div class="mx-auto slide text-center">
            <div class="d-flex flex-row justify-content-center quote pb-3">
              "Outstaning job and exceeded all expectations.
              It was a pleasure to work with them on a sizable project
              and I am looking foward to start next one asap "
            </div>

            <div class="d-flex flex-row justify-content-center author">
              MICHAEL HOPKINS
            </div>
          </div>
        </slide>

        <slide>
          <div class="mx-auto slide text-center">
            <div class="d-flex flex-row justify-content-center quote pb-3">
              "Outstaning job and exceeded all expectations.
              It was a pleasure to work with them on a sizable project
              and I am looking foward to start next one asap "
            </div>

            <div class="d-flex flex-row justify-content-center author">
              MICHAEL HOPKINS
            </div>
          </div>
        </slide>

        <slide>
          <div class="mx-auto slide text-center">
            <div class="d-flex flex-row justify-content-center quote pb-3">
              "Outstaning job and exceeded all expectations.
              It was a pleasure to work with them on a sizable project
              and I am looking foward to start next one asap "
            </div>

            <div class="d-flex flex-row justify-content-center author">
              MICHAEL HOPKINS
            </div>
          </div>
        </slide>
      </carousel>
    </div>

    <div class="container-fluid clients">
      <div class="d-none d-md-flex flex-row">
        <div class="col text-center">
          <img src="@/assets/img/logo1.png" class="img-fluid"/>
        </div>

        <div class="col text-center">
          <img src="@/assets/img/logo2.png" class="img-fluid"/>
        </div>

        <div class="col text-center">
          <img src="@/assets/img/logo3.png" class="img-fluid"/>
        </div>

        <div class="col text-center">
          <img src="@/assets/img/logo4.png" class="img-fluid"/>
        </div>

        <div class="col text-center">
          <img src="@/assets/img/logo5.png" class="img-fluid"/>
        </div>
      </div>

      <carousel
        :per-page="1"
        :paginationEnabled="false"
        loop
        autoplay
        class="carousel d-md-none"
      >
        <slide
          v-for="i in 4"
          :key="i"
        >
          <img
            :src="require(`@/assets/img/logo${i + 1}.png`)"
            class="img-fluid"
          />
        </slide>
      </carousel>
    </div>

    <div ref="contact" class="contact" id="contact">
      <div class="container">
        <div class="d-flex flex-row justify-content-center pb-4">
          <h2> Need a Project ?</h2>
        </div>

        <div class="d-flex flex-row justify-content-center desc mx-auto pb-5">
          <span class="d-block text-center">
            Let us know what you're looking for in an agency.
            We'll take a look and see if this could be the start of something beautiful.
          </span>
        </div>

        <contact-form></contact-form>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Navbar from '@/components/Navbar.vue';
import ImageGallery from '@/components/ImageGallery.vue';
import WorkStatistics from '@/components/WorkStatistics.vue';
import ContactForm from '@/components/ContactForm.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'home',

  components: {
    AppFooter,
    Carousel,
    Slide,
    ImageGallery,
    WorkStatistics,
    ContactForm,
    Navbar,
  },

  data: () => ({
    isVisible: false,
  }),

  mounted() {
    window.addEventListener('scroll', this.onWindowScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll);
  },

  methods: {
    onWindowScroll() {
      if (this.isInViewport(this.$refs.skills)) {
        this.animateSkillBars();
        window.removeEventListener('scroll', this.onWindowScroll);
      }
    },

    toggleProjects() {
      this.isVisible = !this.isVisible;

      this.$refs.thirdRow.style.height = this.isVisible
        ? `${this.$refs.thirdRow.scrollHeight}px`
        : '0px';

      // when last row is hidden - scroll to gallery on mobile
      if (!this.isVisible && window.innerWidth < 991) {
        setTimeout(() => {
          this.$refs.toggleBtn.scrollIntoView(false);
        }, 501);
      }
    },

    animateSkillBars() {
      const bars = document.getElementsByClassName('progress-bar');
      Array.from(bars).forEach((el, i) => {
        bars[i].style.width = `${el.getAttribute('aria-valuenow')}%`;
      });
    },

    isInViewport(el) {
      const bounding = el.getBoundingClientRect();
      return (
        bounding.top >= 0
        && bounding.left >= 0
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
};
</script>
