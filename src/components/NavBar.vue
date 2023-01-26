<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <b-icon-stack v-b-toggle.sidebar-backdrop></b-icon-stack>
          </b-nav-item>
          <b-navbar-brand class="px-3" to="/">NavBar</b-navbar-brand>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto px-2">
          <b-nav-item v-if="!authenticated" to="login" v-b-modal.modal-center
            >Login</b-nav-item
          >
          <b-nav-item v-if="!authenticated" to="SignUp">SignUp</b-nav-item>
          <b-nav-item v-if="authenticated" @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div>
      <b-sidebar
        id="sidebar-backdrop"
        backdrop-variant="dark"
        backdrop
        shadow
        no-header
        bg-variant="dark"
        text-variant="light"
      >
        <!-- Side Bar -->
        <div>
          <div class="d-flex">
            <b-avatar
              style="width: 8em; height: 8em"
              class="mx-auto"
            ></b-avatar>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active to="/">Dashboard</b-nav-item>
              <b-nav-item to="/listall">View All</b-nav-item>
              <b-nav-item to="/favourite">Favourite</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    authenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
          this.$root.$bvToast.toast("Logout successful", {
            title: "Success",
            autoHideDelay: 2000,
            variant: "success",
            appendToast: true,
          });
        })
        .catch((error) => {
          this.$root.$bvToast.toast(error.response.data.message, {
            title: "Error",
            autoHideDelay: 2000,
            variant: "danger",
            appendToast: true,
          });
        });
    },
  },
};
</script>