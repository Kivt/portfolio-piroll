<template>
  <form
    novalidate="novalidate"
    @submit.prevent="onFormSubmit"
  >
      <div class="d-flex flex-row flex-wrap pb-4">
        <div class="col-12 col-lg pb-4 pb-lg-0 px-0 pr-lg-2">
          <input
            ref="name"
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Your Name"
            @focus="removeWarning('name')"
          >
        </div>

        <div class="col-12 col-lg px-0 pl-lg-2">
          <input
            ref="email"
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Your Email"
            @focus="removeWarning('email')"
          >
        </div>
      </div>

      <div class="d-flex flex-row pb-4">
        <input
          ref="formTitle"
          type="text"
          name="title"
          id="form-title"
          placeholder="Your Title"
          class="form-control"
          @focus="removeWarning('formTitle')"
        >
      </div>

      <div class="d-flex flex-row pb-4">
        <textarea
          ref="comment"
          class="form-control w-100"
          placeholder="Your Comment"
          @focus="removeWarning('comment')"
        ></textarea>
      </div>

      <div class="d-flex flex-row justify-content-center">
        <button
          type="submit"
          class="btn btn-lg btn-info"
          id="send-button"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'ContactForm',

  methods: {
    removeWarning(type) {
      this.$refs[type].classList.remove('warning');
    },

    onFormSubmit() {
      const nameRegExp = /^[a-zA-Z]+$/;
      const emailRegExp = /\S+@\S+\.\S+/;
      const name = this.$refs.name.value;
      const email = this.$refs.email.value;
      const title = this.$refs.formTitle.value;
      const comment = this.$refs.comment.value;

      if (!nameRegExp.test(name)) {
        this.$refs.name.classList.add('warning');
      } else {
        this.$refs.name.classList.remove('warning');
      }

      if (!emailRegExp.test(email)) {
        this.$refs.email.classList.add('warning');
      } else {
        this.$refs.email.classList.remove('warning');
      }

      if (!title.length) {
        this.$refs.formTitle.classList.add('warning');
      } else {
        this.$refs.formTitle.classList.remove('warning');
      }

      if (!comment.length) {
        this.$refs.comment.classList.add('warning');
      } else {
        this.$refs.comment.classList.remove('warning');
      }
    },
  },
};
</script>
