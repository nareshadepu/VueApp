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
        </select
        >
        <div v-if="choice">You selected Option Yes</div>
      </div>

      <div class="col-6 mt-3 mb-3">
        <h6>Dynamically change select input options in vuejs 2</h6>
        <pre>https://jsfiddle.net/aj6g87dh/1/</pre>

        <v-suggest :data="example" show-field="name" ></v-suggest>
<hr>
<v-select v-model="selected" :options="['foo','bar']"></v-select>

<hr>
 <pre>https://moreta.github.io/vue-search-select/#/Basic</pre>
<div>
         <model-select :options="options"
                                v-model="item"
                                placeholder="select item">
         </model-select>
      </div>
      <div class="flex-result">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>value</th>
          <th>text</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{item.value}}</td>
          <td>{{item.text}}</td>
        </tr>
        </tbody>
      </table>
    </div>

      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
  import { ModelSelect } from 'vue-search-select'

export default {
  name: "Select",

  data() {
    return {
      list:"",
      info: null,
      choice: undefined,
      selected2: "No",
      nos: [{ id: 3, name: "Yes" }],
      selected: "Choose Option",
      options2: [{ id: 1, name: "A" }, { id: 2, name: "B" }],
      example: [
                {id:1 ,name:'Chicago Bulls'},
                {id:2 ,name:'Cleveland Cavaliers'},
               
            ],

 options: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' },
          { value: '6', text: 'ef' + ' - ' + '6' },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'down case' + ' - ' + 'testcase' },
          { value: '14', text: 'camel case' + ' - ' + 'testCase' },
          { value: '15', text: 'Capitalize case' + ' - ' + 'Testcase' },
          { value: '16', text: 'more a' + ' - ' + '1' },
          { value: '17', text: 'more a' + ' - ' + '2' },
          { value: '18', text: 'more a' + ' - ' + '3' },
          { value: '19', text: 'more a' + ' - ' + '4' },
          { value: '20', text: 'more a' + ' - ' + '5' },
          { value: '21', text: 'more a' + ' - ' + '6' },
          { value: '22', text: 'more a' + ' - ' + '7' },
          { value: '23', text: 'more a' + ' - ' + '8' },
          { value: '24', text: 'more a' + ' - ' + '9' }
        ],
        searchText: '', // If value is falsy, reset searchText & searchItem
        item: {
          value: '',
          text: ''
        },



      data: {
       // options5: [{ id: 1, name: "A5" }, { id: 2, name: "B5" }]
      }
    };
  
  },
   
methods: {
      onSelect (item) {
        this.item = item
      },
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      }
    },
    components: {
      ModelSelect
    },
    mounted () {
    axios
      .get('http://country.io/names.json')
      .then(response => (this.info = response))
  }
};
</script>

