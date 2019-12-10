<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-light"
    :class="{'open': isMobileMenu}"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          :src="require('@/assets/img/logo.png')"
          alt="some image"
          class="img-fluid"
        />
      </router-link>

      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        :aria-expanded="isMobileMenu"
        aria-label="Toggle navigation"
        @click="toggleMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        ref="collapse"
        class="collapse navbar-collapse d-block"
        id="navbarNavAltMarkup"
      >
        <div
          class="navbar-nav justify-content-between"
          :class="{ 'small': !allLinks }"
        >
          <a
            v-if="allLinks"
            class="nav-item nav-link"
            @click="onNavLinkClick('about')"
            href="javascript:;"
          >
            About
          </a>

          <a
            v-if="allLinks"
            class="nav-item nav-link"
            @click="onNavLinkClick('work')"
            href="javascript:;"
          >
            Work
          </a>

          <a
            v-if="allLinks"
            class="nav-item nav-link"
            @click="onNavLinkClick('process')"
            href="javascript:;"
          >
            Process
          </a>

          <a
            v-if="allLinks"
            class="nav-item nav-link"
            @click="onNavLinkClick('quotes')"
            href="javascript:;"
          >
            Testimonials
          </a>

          <router-link
            to="/home"
            class="nav-item nav-link"
          >
            Home
          </router-link>

          <router-link
            to="/about"
            class="nav-item nav-link"
          >
            About
          </router-link>

          <router-link
            to="/contact"
            class="nav-item nav-link"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  props: {
    allLinks: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    isMobileMenu: false,
  }),

  methods: {
    toggleMobileMenu() {
      this.isMobileMenu = !this.isMobileMenu;
      this.$refs.collapse.style.height = this.isMobileMenu
        ? `${this.$refs.collapse.scrollHeight}px`
        : '0px';
    },

    onNavLinkClick(id) {
      const el = document.getElementById(id);
      const headerHeight = 56;
      window.scrollTo({
        top: el.offsetTop - headerHeight,
      });
    },
  },
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .collapse {
    height: 0;
    overflow: hidden;
    transition: height .5s ease;
  }

  .navbar.open {
    background-color: #dedddd;
    transition: background-color .5s ease;
  }
}
</style>
