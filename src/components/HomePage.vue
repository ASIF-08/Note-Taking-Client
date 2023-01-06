<template>
  <div>
    <!-- Cards -->
    <div class="container pt-5">
      <!-- <b-card-group> -->

      <b-row class="py-5">
        <b-col cols="3">
          <b-card
            bg-variant="dark"
            text-variant="white"
            header="Total Notes"
            align="center"
          >
            <b-card-text style="font-size: 50px">5</b-card-text>
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
            header="Pending Notes"
            align="center"
          >
            <b-card-text style="font-size: 50px">12</b-card-text>
            <b-icon icon="pen" scale="2.5" animation="throb" title="Pending"
              >sdda</b-icon
            >
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card
            bg-variant="dark"
            text-variant="white"
            header="Completed Notes"
            align="center"
            cols="5"
          >
            <b-card-text style="font-size: 50px">8</b-card-text>
            <b-icon
              icon="list-check"
              scale="2.5"
              animation="pulse"
              title="Completed"
            ></b-icon>
          </b-card>
        </b-col>
      
        <b-col cols="3">
          <router-link to="ListAll" style="text-decoration:none">
          <b-card
            path="/detailedview"
            bg-variant="dark"
            text-variant="white"
            header="View All"
            font-size="80px"
            align="center"
            
          >
            <b-card-text style="font-size: 50px">5</b-card-text>

            <b-icon to="detailedView" icon="card-list" scale="2.5"></b-icon>
          </b-card>
        </router-link>
        </b-col>
      
      </b-row>
      <!-- </b-card-group> -->

      <!-- Progress Bar -->
      <div class="pt-5 mt-5">
        <b-progress
          :max="max"
          height="3rem"
          style="width: 100%; border-style: solid; color: gray"
          variant="secondary"
        >
          <b-progress-bar :value="value">
            <span
              >Progress:
              <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
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
export default {
  name: "HomePage",
  data() {
    return {
      value: 25,
      max: 50,
    };
  },
};
</script>