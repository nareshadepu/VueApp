<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6 mt-3 mb-3">
        <select class="form-control" v-model="selected">
          <option>Choose Option</option>
          <option
            v-for="option in options"
            v-bind:value="option.id"
            :key="option.id"
          >{{option.name}}</option>
        </select>

        <div v-if="selected === 1" class="mt-2">You selected Option A</div>
        <div v-if="selected === 2" class="mt-2">You selected Option B</div>
        <hr>
        <select class="form-control" v-model="selected2" required>
          <option>No</option>
          <option v-for="no in nos" v-bind:value="no.id" :key="no.id">{{no.name}}</option>
        </select>

        <div v-if="selected === 3" class="mt-2">You selected Option Yes</div>

        <hr>
        <select class="form-control" v-model="choice">
          <option value>No</option>
          <option>Yes</option>
        </select>
        <div v-if="choice">You selected Option Yes</div>
      </div>

      <div class="col-6 mt-3 mb-3">
        <h6>Dynamically change select input options in vuejs 2</h6>
        <pre>https://jsfiddle.net/aj6g87dh/1/</pre>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Select",
  data() {
    return {
     
      choice: undefined,
      selected2: "No",
      nos: [{ id: 3, name: "Yes" }],
      selected: "Choose Option",
      options: [{ id: 1, name: "A" }, { id: 2, name: "B" }],
      data: {
       
      },

    };
  }
};
</script>

