<template>
  <div class="container">
    <!-- <b-table striped hover :items="items" @click.prevent="selectedPage ='DetailedView.vue'"> </b-table> -->

    <!-- <b-icon to="detailedview" icon="pencil" scale="1.25"></b-icon>
    <b-icon to="detailedview" icon="star" scale="1.25"></b-icon>
    <b-icon to="detailedview" icon="trash-fill" scale="1.25"></b-icon> -->
    <b-row>
      <b-col align="center" cols="4" v-for="item in items" :key="item.title">
        <b-card
          :title="item.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="my-4"
          @click="foo(item.title)"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-row align="center">
            <b-col
              ><b-icon to="detailedview" icon="star" scale="1.25"></b-icon
            ></b-col>
            <b-col
              ><b-icon to="detailedview" icon="pencil" scale="1.25"></b-icon
            ></b-col>
            <b-col
              ><b-icon to="detailedview" icon="trash-fill" scale="1.25"></b-icon
            ></b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ListAll",

  data() {
    return {
      items: [
        { srno: 1, title: "Dickerson" },
        { srno: 2, title: "Larsen" },
        { srno: 3, title: "Geneva" },
        { srno: 4, title: "Jami" },
        { srno: 1, title: "Dickerson" },
        { srno: 2, title: "Larsen" },
        { srno: 3, title: "Geneva" },
        { srno: 4, title: "Jami" },
      ],
    };
  },
  methods: {
    foo(title) {
      console.log(title);
    },
  },
};
</script>