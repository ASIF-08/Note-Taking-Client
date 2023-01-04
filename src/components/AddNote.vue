<template>
  <div class="container pt-5">
    <b-form-group
      label="Title:"
      label-for="input-formatter"
      class="p-1"
      style="font-family:Times"
      
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your Title"
        :formatter="formatter"
        type="text"
        style="font-family:Times New Roman;"
       
      ></b-form-input>
    </b-form-group>

    <ckeditor v-model="content"></ckeditor>
    <b-btn @click="foo()">ewrfwef</b-btn>
  </div>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      content: "Helluuu"
    }
  },
  // computed: {
  //   content() {
  //     console.log(this.content);
  //   }
  // }
  methods: {
    foo() {
      console.log(this.content);
    }
  }
};
</script>