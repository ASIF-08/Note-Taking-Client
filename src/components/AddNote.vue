<template>
  <div class="container p-5">
    <b-form-group
      label="Title:"
      label-for="input-formatter"
      class="p-1"
      style="font-family: Times; font-size: 30px"
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your Title"
        :formatter="formatter"
        type="text"
        style="font-family: Times New Roman "
        background-color:aqua
      ></b-form-input>
    </b-form-group>

    <ckeditor v-model="content" style="font-family: Times New Roman " ></ckeditor>
    <b-btn @click="foo()" variant="dark">Submit</b-btn>
    <b-button type="reset" variant="danger" class="m-1">Cancel</b-button>
  </div>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      content: "",
    };
  },
  // computed: {
  //   content() {
  //     console.log(this.content);
  //   }
  // }
  methods: {
    foo() {
      console.log(this.content);
    },
  },
};
</script>
<style scoped>

</style>