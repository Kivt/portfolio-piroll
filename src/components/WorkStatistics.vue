<template>
  <div class="container-fluid feedbacks">
    <div class="flex-row justify-content-between d-none d-sm-flex">
      <div class="d-flex ml-3">
        <div class="mr-4">
          <i class="pe-7s-portfolio"></i>
        </div>

        <div class="item-desc">
          <span class="number">548</span>
          <div class="align-self-end">PROJECTS COMPLETED</div>
        </div>
      </div>

      <div class="d-flex ml-3">
        <div class="mr-4">
          <i class="pe-7s-clock"></i>
        </div>

        <div class="item-desc">
          <span class="number">1465</span>
          <div class="align-self-end">WORKING HOURS</div>
        </div>
      </div>

      <div class="d-flex ml-3">
        <div class="mr-4">
          <i class="pe-7s-star"></i>
        </div>

        <div class="item-desc">
          <span class="number">612</span>
          <div class="align-self-end">POSITIVE FEEDBACKS</div>
        </div>
      </div>

      <div class="d-flex ml-3">
        <div class="mr-4">
          <i class="pe-7s-like"></i>
        </div>

        <div class="item-desc">
          <span class="number">735</span>
          <div class="align-self-end">HAPPY CLIENTS</div>
        </div>
      </div>
    </div>

    <carousel
      :per-page="1"
      :paginationEnabled="false"
      loop
      autoplay
      class="d-md-none"
    >
      <slide>
        <div class="d-flex justify-content-center">
          <div class="d-flex">
            <div class="mr-4">
              <i class="pe-7s-portfolio"></i>
            </div>

            <div class="item-desc">
              <span class="number">548</span>
              <div class="align-self-end">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>
      </slide>

      <slide>
        <div class="d-flex justify-content-center">
          <div class="d-flex">
            <div class="mr-4">
              <i class="pe-7s-clock"></i>
            </div>

            <div class="item-desc">
              <span class="number">1465</span>
              <div class="align-self-end">WORKING HOURS</div>
            </div>
          </div>
        </div>
      </slide>

      <slide>
        <div class="d-flex justify-content-center">
          <div class="d-flex">
            <div class="mr-4">
              <i class="pe-7s-like"></i>
            </div>

            <div class="item-desc">
              <span class="number">735</span>
              <div class="align-self-end">HAPPY CLIENTS</div>
            </div>
          </div>
        </div>
      </slide>

      <slide>
        <div class="d-flex justify-content-center">
          <div class="d-flex">
            <div class="mr-4">
              <i class="pe-7s-star"></i>
            </div>

            <div class="item-desc">
              <span class="number">612</span>
              <div class="align-self-end">POSITIVE FEEDBACKS</div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Statistics',

  components: {
    Carousel,
    Slide,
  },
};
</script>
