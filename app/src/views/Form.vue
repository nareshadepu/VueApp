<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-success mb-2" @click="addNewEmployeeForm">Add Form</button>
        <div class="card" v-for="(employee ,index) in employess" :key="employee.id">
          <div class="card-body">
            <h5 class="card-title">
              Employee (index: {{ index }})
              <span
                style="cursor:pointer"
                class="float-right"
                @click="deleteEmployeeForm(index)"
              >x</span>
            </h5>
            <div class="form-group">
              <input type="text" v-model="employee.name" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="text" v-model="employee.email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                v-model="employee.something"
                placeholder="Something"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <select v-model="category" v-on:change="onChange" id="select1" class="form-control">
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
        
        <select id="select2" v-model="list" class="form-control">
          <option
            v-for="option in options"
            v-bind:value="option.value"
            :key="option"
          >{{ option.text }}</option>
        </select>

        <div class="card mt-3" v-for="(item1 ,index) in itemss" :key="item1.id">
          <div class="card-body">
            <h5 class="card-title">
              <span style="cursor:pointer" class="float-right" @click="delete1(index)">x</span>
            </h5>
            <div class="form-group">
              <input type="text" v-model="item1.test1" class="form-control" placeholder="test1">
            </div>
            <div class="form-group">
              <input type="text" v-model="item1.test2" class="form-control" placeholder="test2">
            </div>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm mt-3" @click="addItem()">Add new item</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data: function() {
    return {
      itemss: [],
      employess: [],
      data: {
        employess: [
          {
            name: "",
            email: "",
            something: ""
          }
        ],
        itemss: [{ message: "Foo" }, { message: "Bar" }]
      },
      category: "fruits",

      list: "",

      optionsData: {
        fruits: [
          { text: "Orange", value: "orange" },
          { text: "Banane", value: "banana" }
        ],

        vegetables: [
          { text: "Brocolis", value: "brocolis" },
          { text: "Radish", value: "radish" }
        ]
      }
    };
  },
  computed: {
    options: function() {
      let options = "";

      switch (this.category) {
        case "fruits":
          options = this.optionsData.fruits;
          break;

        case "vegetables":
          options = this.optionsData.vegetables;
          break;

        default:
          options = this.optionsData.fruits;
      }

      return options;
    }
  },
  methods: {
    addItem() {
      this.itemss.push({
        test1: "",
        test2: ""
      });
    },
    addNewEmployeeForm() {
      this.employess.push({
        name: "",
        email: "",
        something: ""
      });
    },
    deleteEmployeeForm(index) {
      this.employess.splice(index, 1);
    },

    delete1(index) {
      this.itemss.splice(index, 1);
    },

    onChange: function() {
      this.options = this.options;
    }
  }
};
</script>
