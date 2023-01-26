<template>
  <div class="container">
    <h1>Your notes</h1>
    <hr class="m-0" />
    <div v-if="notes.length === 0" class="text-center pt-5"><h4>You don't have any note.</h4></div>
    <b-row v-for="(note, idx) in notes" :key="note._id" class="m-0">
      <b-col align="center" cols="1" class="h5 my-3">{{ idx + 1 }}</b-col>
      <b-col
        cols="7"
        class="my-3 pointer-cursor d-flex"
        @click="
          $router.push({
            path: `/note/${note._id}`,
          })
        "
        ><p class="h5 m-0">{{ note.title }}</p>
        &nbsp;&nbsp;
        <p v-if="note.edited" class="m-0" style="opacity: 0.6">(edited)</p>
      </b-col>
      <b-col align="center" cols="1" class="my-3">
        <b-icon
          v-if="note.stared"
          @click="starNote(note._id)"
          icon="star-fill"
          scale="1.25"
          color="rgb(255,140,0)"
          class="pointer-cursor"
        ></b-icon>
        <b-icon
          v-else
          @click="starNote(note._id)"
          icon="star"
          scale="1.25"
          class="pointer-cursor"
        ></b-icon>
      </b-col>
      <b-col align="center" cols="1" class="my-3"
        ><b-icon
          class="pointer-cursor"
          @click="updateNote(note._id)"
          icon="pencil"
          scale="1.25"
        ></b-icon
      ></b-col>
      <b-col align="center" cols="1" class="my-3"
        ><b-icon
          class="pointer-cursor"
          @click="deleteNote(note._id)"
          icon="trash-fill"
          scale="1.25"
        ></b-icon
      ></b-col>
      <b-col align="center" cols="1" class="my-3"
        ><b-icon
          v-if="note.completed"
          icon="check-circle-fill"
          color="green"
          scale="1.25"
        ></b-icon
      ></b-col>
    </b-row>
  </div>
</template>
<script>
import notes from "@/services/notes";
export default {
  name: "ListAll",

  data() {
    return {
      notes: [],
    };
  },
  methods: {
    async getNotes() {
      try {
          if (this.$route.name === "ListAll") {
            const response = await notes.getNotes();
            this.notes = response.data;
          } else if (this.$route.name === "FavouriteNotes") {
            const response = await notes.getStaredNotes();
            this.notes = response.data;
          }
        } catch (error) {
          this.$root.$bvToast.toast(error.response.data.message, {
            title: "Error",
            autoHideDelay: 2000,
            variant: "danger",
          });
        }
    },
    async starNote(id) {
      try {
        await notes.starNote(id);
        this.getNotes();
      } catch (error) {
        this.$root.$bvToast.toast(error.response.data.message, {
          title: "Error",
          autoHideDelay: 2000,
          variant: "danger",
        });
      }
    },
    updateNote(id) {
      this.$router.push({
        name: "UpdateNote",
        params: {
          id: id,
        },
      });
    },
    async deleteNote(id) {
      try {
        await notes.deleteNote(id);
        this.getNotes();
        this.$root.$bvToast.toast("Deleted successfully", {
          title: "Success",
          autoHideDelay: 2000,
          variant: "success",
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
      handler() {
        this.getNotes();
      },
    },
  },
};
</script>
<style>
.pointer-cursor {
  cursor: pointer;
}
</style>