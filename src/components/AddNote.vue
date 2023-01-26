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
        v-model="noteData.title"
        placeholder="Title"
        :formatter="formatter"
        type="text"
        style="font-family: Times New Roman"
      ></b-form-input>
    </b-form-group>
    <ckeditor v-model="noteData.body" class="px-1"></ckeditor>

    <b-form-checkbox
        v-model="noteData.completed"
        class="p-1"
      >
        Complete
      </b-form-checkbox>
      <div class="p-1">
        Status: <strong>{{ noteData.completed ? "Completed" : "Incomplete" }}</strong>
      </div>

    <b-btn @click="saveNote()" variant="dark" class="m-1">Submit</b-btn>
    <b-button @click="$router.push('/listall')" variant="danger" class="m-1">Cancel</b-button>
  </div>
</template>

<script>
import notes from "@/services/notes";
export default {
  name: "AddNote",
  data() {
    return {
      noteData: {
        title: "",
        body: "",
        completed: false
      },
    };
  },
  methods: {
    async saveNote() {
      try {
        if(this.noteData._id){
          await notes.updateNote(this.noteData);
        } else {
          await notes.createNote(this.noteData);
        }
        this.$router.push({path: "/listall"});
        this.$root.$bvToast.toast("Saved successfully", {
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
          });
      }
    },
  },
  watch: {
    $route: {
      immediate: true,
      async handler() {
        if (this.$route.name === "UpdateNote") {
          const response = await notes.getNoteById(this.$route.params.id);
          this.noteData = response.data;
        }
      },
    },
  },
};
</script>
<style scoped>
</style>