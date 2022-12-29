<template>
    <input v-bind:value="value" v-on:input="updateInput">
  </template>
  
  <script>
  //https://joshua1988.github.io/web-development/vuejs/v-model-usage/
  
  export default {
    props: ['value'],
    methods: {
      updateInput: function(event) {
        this.$emit('input', event.target.value);
      }
    }
  }
  </script>