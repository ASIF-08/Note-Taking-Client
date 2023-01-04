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
        <b-navbar-nav class="ms-auto px-2">
          <b-form-input
            class="my-1 mx-2"
            style="width: 35em; height: 2em"
            placeholder="Search"
            v-model="query"
            @keyup.enter="search"
          >
          </b-form-input>
          <b-nav-item to="LogIn">Login</b-nav-item>
          <b-nav-item to="SignUp">SignUp</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div>
      <b-sidebar
        id="sidebar-backdrop"
        :backdrop-variant="variant"
        backdrop
        shadow
        no-header
        bg-variant="dark"
        text-variant="light"
      >
        <!-- <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select id="backdrop-variant" v-model="variant" :options="variants"></b-form-select>
        </b-form-group>
      </div> -->
      <!-- Side Bar -->
        <div>
          <b-avatar
            style="width: 100px; height: 100px; margin-left: 100px"
          ></b-avatar>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active to="/">Dashboard</b-nav-item>
              <b-nav-item to="ListAll">View All</b-nav-item>
              <b-nav-item href="#link-2">Favourite</b-nav-item>
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
  
  methods: {
    search() {
      console.log(this.query);
      this.query = "";
    },
  },
};
</script>

<style>

</style>