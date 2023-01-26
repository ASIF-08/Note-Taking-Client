<template>
  <div class="pt-5">
    <div class="container pt-5">
      <h1 align="center" style="">Sign Up</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col cols="6">
            <b-form-group
              id="input-group-1"
              label="First Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.firstname"
                type="text"
                placeholder="Enter Your First Name:"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="input-group-1"
              label="Last Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.lastname"
                type="text"
                placeholder="Enter Your Last Name:"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

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

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Enter Your Password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="pt-2">
          <b-button type="submit" variant="primary">Sign Up</b-button>
          <b-button type="reset" variant="danger" class="m-1">Cancel</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import auth from "@/services/auth";
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      try {
        event.preventDefault();
        await auth.register(this.form);
        this.$router.push("/login");
        this.$root.$bvToast.toast("Registration successful.", {
          title: "Success",
          autoHideDelay: 2000,
          variant: "success",
          appendToast: true,
        });
      } catch (error) {
        this.$root.$bvToast.toast(error.response.data.message, {
          title: "Error",
          autoHideDelay: 2000,
          variant: "danger",
          appendToast: true,
        });
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.from.firstname = "";
      this.from.lastname = "";
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
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