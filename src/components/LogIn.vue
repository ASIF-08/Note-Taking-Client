<template>
  <div class="pt-5">
    <div class="container pt-5">
      <h1 align="center" style="">Sign In</h1>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form
            name="from"
            @submit.prevent="onSubmit"
            @reset="onReset"
            v-if="show"
          >
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter Your E-mail ID"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                placeholder="Enter Your Password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="pt-2">
              <b-button type="submit" variant="primary">Login</b-button>
              <b-button type="reset" variant="danger" class="m-1"
                >Cancel</b-button
              >
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },

  methods: {
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async onSubmit() {
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.$router.push("/");
          this.$root.$bvToast.toast("Login successful", {
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
          });
        });
    },
    shouldAppendValidClass(field) {
      return !field.$invalid && field.$model && field.$dirty;
    },
    shouldAppendErrorClass(field) {
      return field.$error;
    },
  },
};
</script>

<style scoped>
/* .css {
  box-sizing: border-box;
  border: solid;
  background-color: #ffffff;
  border-color: #2554ff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  display: flex;
  font-weight: 500;
  width: 100%;
  height: 100%;
  justify-content: center;
} */
.container {
  background-color: #282828;
  border-radius: 10px;
  box-shadow: 0 5px 10px #484848;
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  color: #d0d0d0;
}
</style>