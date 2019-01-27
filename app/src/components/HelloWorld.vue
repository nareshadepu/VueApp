
<template>
  <div class="container">
    <div class="text-center mt-5">
      <img src="@/assets/logo.png">
      <h1>Welcome to Vue Application</h1>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      selected: "Choose Option",
      options: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
    };
  }
};
</script>


<style>
</style>
