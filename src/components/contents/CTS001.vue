<template>
  <div>
  </div>
</template>

<script>
//import { ref } from 'vue'
//const input = ref('')

export default {
  //props: ['value'],
  
  

  data() {
    return {
      input:''
    }
  },
  methods: {
    updateInput: function(event) {
      this.$emit('input', event.target.value);
    },

    addTodo: function(){
      console.log('111');
      this.$emit('ee', this.value);
      this.value='';

    }
  }
}
</script>


<style>

</style>