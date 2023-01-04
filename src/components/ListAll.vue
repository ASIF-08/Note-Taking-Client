<template>
  <div class="container">
    <b-table striped hover :items="items" @click.prevent="selectedPage ='DetailedView.vue'"> </b-table>
        
    <b-icon to="detailedview" icon="card-list" scale="1.75"></b-icon>
  </div>
</template>

<script>
export default {
  name: "ListAll",

  data() {
    return {
      items: [
        { SrNo: 1, Title: "Dickerson" , },
        { SrNo: 2, Title: "Larsen" },
        { SrNo: 3, Title: "Geneva" },
        { SrNo: 4, Title: "Jami" },
      ],
    };
  },
};
</script>