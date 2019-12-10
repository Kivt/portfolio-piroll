<template>
  <div>
    <div
      v-for="(row, index) in images"
      :key="index"
      class="d-flex flex-row flex-wrap"
    >
      <div
        v-for="(image, i) in row"
        :key="`image${i}`"
        class="col-12 col-md-6 col-lg text-center p-0 position-relative"
      >
        <div class="square">
          <img
            :src="image"
            alt="work1"
            class="img-fluid work-image w-100"
          />

          <router-link to="/project">
            <div class="hover d-flex position-absolute justify-content-center align-items-center">
              <i class="pe-7s-look work-icon"></i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',

  props: {
    rows: {
      type: Number,
      required: true,
    },

    perRow: {
      type: Number,
      required: true,
    },

    startImageIndex: {
      type: Number,
      default: 1,
    },
  },

  data: () => ({
    imageIndex: 1,
    images: [],
  }),

  created() {
    this.imageIndex = this.startImageIndex;
    this.fillImagesArray();
  },

  methods: {
    fillImagesArray() {
      for (let i = 1; i <= this.rows; i += 1) {
        const arr = [];
        for (let img = 0; img < this.perRow; img += 1) {
          arr.push(`https://picsum.photos/400?random=${this.imageIndex}`);
          this.imageIndex += 1;
        }
        this.images.push(arr);
      }
    },
  },
};
</script>
