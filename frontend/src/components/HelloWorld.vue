<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
      <br>
      <h1 class="text-h2 font-weight-bold"><s>Vuetify lol</s><br>
        Toto World<br><br>
      <button @click="fetchData">Get Data</button>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>

      <img src="https://i.ibb.co/8YbFFpP/18743762b82372fc51e3293745f67f4.png" alt="18743762b82372fc51e3293745f67f4" border="0"><br />
      </h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:5000/data')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  },
  // Fetch data when the component is mounted
  mounted() {
    this.fetchData();
  }
}
</script>
