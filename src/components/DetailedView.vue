<template>
  <div class="container py-4">
    <h2>{{ noteData.title }}</h2>
    <div class="d-flex">
      <div class="d-flex" style="opacity: 0.6">
        <p v-if="noteData.completed">Complete</p>
        <p v-else>Incomplete</p>
        <p v-if="noteData.edited" class="px-2"><i>Edited</i></p>
      </div>
      <div class="ml-auto" style="cursor: pointer">
        <b-icon
          v-if="noteData.stared"
          @click="starNote"
          icon="star-fill"
          scale="1.5"
          color="rgb(255,140,0)"
        ></b-icon>
        <b-icon v-else @click="starNote" icon="star" scale="1.5"></b-icon>
        <b-icon
          @click="
            $router.push({
              path: `/updatenote/${this.$route.params.id}`,
            })
          "
          icon="pencil"
          scale="1.5"
          class="px-5"
        ></b-icon>
      </div>
    </div>
    <p v-html="noteData.body"></p>
  </div>
</template>
<script>
import notes from "@/services/notes";
export default {
  name: "DetailedView",
  data() {
    return {
      noteData: {
        title: "",
        body: "",
        stared: false,
      },
    };
  },
  methods: {
    async starNote() {
      try {
        await notes.starNote(this.$route.params.id);
        this.noteData.stared = !this.noteData.stared;
      } catch (error) {
        this.$root.$bvToast.toast(error.response.data.message, {
          title: "Error",
          autoHideDelay: 2000,
          variant: "danger",
        });
      }
    },
  },
  async created() {
    try {
      const response = await notes.getNoteById(this.$route.params.id);
      this.noteData = response.data;
    } catch (error) {
      this.$root.$bvToast.toast(error.response.data.message, {
        title: "Error",
        autoHideDelay: 2000,
        variant: "danger",
      });
    }
  },
};
</script>