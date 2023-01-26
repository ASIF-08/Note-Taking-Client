<template>
  <div>
 
    <!-- Cards -->
    <div class="container">
      
      <b-row class="py-5 align-self-stretch">
        <b-col cols="3">
          <b-card
            bg-variant="dark"
            text-variant="white"
            align="center"
            class="h-100"
          >
            <b-card-title>Total Notes</b-card-title>
            <b-card-text style="font-size: 50px">{{ total }}</b-card-text>
            <b-icon
              icon="hand-thumbs-up-fill"
              scale="2.5"
              title="Totals"
            ></b-icon>
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card
            bg-variant="dark"
            text-variant="white"
            align="center"
            class="h-100"
          >
            <b-card-title>Pending Notes</b-card-title>
            <b-card-text style="font-size: 50px">{{ pending }}</b-card-text>
            <b-icon icon="pen" scale="2.5" animation="throb" title="Pending"
              >sdda</b-icon
            >
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card
            bg-variant="dark"
            text-variant="white"
            align="center"
            class="h-100"
          >
            <b-card-title>Completed Notes</b-card-title>
            <b-card-text style="font-size: 50px">{{ completed }}</b-card-text>
            <b-icon
              icon="list-check"
              scale="2.5"
              animation="pulse"
              title="Completed"
            ></b-icon>
          </b-card>
        </b-col>

        <b-col cols="3">
          <router-link to="ListAll" class="decoration-none">
            <b-card
              path="/detailedview"
              bg-variant="dark"
              text-variant="white"
              font-size="80px"
              align="center"
              class="h-100"
            >
              <b-card-title>View All</b-card-title>
              <b-card-text style="font-size: 50px">{{ total }}</b-card-text>
              <b-icon to="detailedView" icon="card-list" scale="2.5"></b-icon>
            </b-card>
          </router-link>
        </b-col>
      </b-row>

      <!-- Progress Bar -->
      <div class="pt-5 mt-5">
        <b-progress
          max="100"
          height="3rem"
          style="width: 100%; border-style: solid; color: gray"
          variant="secondary"
        >
          <span v-if="completed === 0" class="m-auto"
            >Progress: <strong>0%</strong></span
          >
          <b-progress-bar v-else :value="(completed / total) * 100">
            <span
              >Progress:<strong
                >{{ ((completed / total) * 100).toFixed(2) }}%</strong
              ></span
            >
          </b-progress-bar>
        </b-progress>
      </div>
      <!-- Add Notes -->
      <div class="pt-5">
        <b-button
          block
          style="width: 100%; height: 6rem; text: 100px; font-size: 45px"
          class="h1"
          variant="dark"
          to="AddNote"
          >Add Notes</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import notes from "@/services/notes";
export default {
  name: "HomePage",
  data() {
    return {
      total: 0,
      completed: 0,
      pending: 0,
    };
  },
  watch: {
    "$store.getters.isAuthenticated": function (logedIn) {
      if (!logedIn) {
        this.total = 0;
        this.completed = 0;
        this.pending = 0;
      }
    },
  },
  async created() {
    if (this.$store.getters.isAuthenticated) {
      const response = await notes.getNotes();
      this.total = response.data.length;
      this.completed = response.data.filter(
        (note) => note.completed === true
      ).length;
      this.pending = this.total - this.completed;
    }
  },
};
</script>