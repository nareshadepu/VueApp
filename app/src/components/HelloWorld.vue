
<template>
  <div class="container">
    <vue-bootstrap-typeahead
      class="mb-4"
      v-model="query"
      :data="users"
      @keydown.enter="search"
      :serializer="item => item.login"
      placeholder="Search GitHub Users"
    >
      <template slot="append">
        <button @click="searchRepositories" class="btn btn-primary">Search</button>
      </template>
    </vue-bootstrap-typeahead>

    <div class="row">
      <div class="col-6">
        <b-form-group label="Name">
          <b-form-input type="text" v-model="userRepositories.total_count" required></b-form-input>
        </b-form-group>
        <b-form-group label="Name">
          <b-form-input type="text" v-model="userRepositories.incomplete_results" required></b-form-input>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group label="Name">
          <b-form-input type="text" v-model="userRepositories.total_count" required></b-form-input>
        </b-form-group>
        <b-form-group label="Name">
          <b-form-input type="text" v-model="userRepositories.total_count" required></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
  name: "HelloWorld",
  components: {
    VueBootstrapTypeahead
  },
  data() {
    return {
      query: "",
      userRepositories: {},
      users: []
    };
  },
  methods: {
    searchUsers(newQuery) {
      axios
        .get(`https://api.github.com/search/users?q=${newQuery}`)
        .then(res => {
          this.users = res.data.items;
        });
    },
    searchRepositories() {
      axios
        .get(`https://api.github.com/search/repositories?q=user:${this.query}`)
        .then(res => {
          this.userRepositories = res.data;
        });
    }
  },

  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2);
    }
  }
};
</script>


<style>
</style>
