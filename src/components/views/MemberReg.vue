<template>
  <div>
    <v-responsive
    class="mx-auto"
    max-width="344"
  >
  </v-responsive>
  
  <br/>
  <br/>
  <br/>
  
  <v-sheet color="grey-lighten-3" class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="400">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
    
        <v-text-field 
          v-model="id" 
          :readonly="loading"
          :rules="[rules.required, rules.counter]"
          clearable 
          label="ID" 
          @click:clear="onClear"
          counter 
          maxlength="20"
          class="mb-2"
        ></v-text-field>
      
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[rules.required, rules.email]"
          clearable
          label="Email"
          counter
          maxlength="100"
          class="mb-2"
        ></v-text-field>
        

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[rules.required, rules.counter]"
          clearable
          label="Password"
          placeholder="Enter your password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          hint="At least 8 characters"
          @click:append="show1 = !show1"
        ></v-text-field>

        <br/>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>

      </v-form>
    </v-card>
  </v-sheet>
    
  </div>
  
</template>

<script>
//import axios from 'axios';
//const HOST = "http://localhost:8080";

export default {
  data : () => ({
    form: false,
    id: null,
    email: null,
    password: null,
    loading: false,
    show1: false,
    show2: true,
    rules: {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
  }
  }),
  methods: {
    //axios
    //https://ux.stories.pe.kr/138
    // 불러오기 : axios.get(url[, config])
    // 입력하기 : axios.post(url[, data[, config]])
    // 수정하기 : axios.patch(url[, data[, config]]) or put
    // 삭제하기 : axios.delete(url[, config])


      onClear () {
        //alert('User cleared the input')
      },
      
      onSubmit () {
        
        let saveData = {id: this.id, email: this.email, password: this.password};

        //https://ssjeong.tistory.com/entry/VUE-axios-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-get-post
        //# axios는 get, post를 지원함, load에는 get을 사용해야함, res.data에 찾는 데이터들이 있음
        this.axios.post(
            '/api/memberreg'
          , JSON.stringify(saveData)
          //, {id: "1", email: "2", password: "3"}
          , { headers: { 'Content-Type': 'application/json' } }) //JSON.stringify(jsonData),
          .then(res => {
            //# 통신 성공
            console.log(res.data)
          })
          .catch( error => { console.log(error) } )
          //.finally(() => {
          //  console.log("항상 마지막에 실행");
          //}); //https://elena90.tistory.com/entry/Vuejs-Axios-%EC%82%AC%EC%9A%A9

          //.then(err => {
          //  # 통신 실패
          //  console.log(err.data)
          //});


        console.log(this.form);
        
         if (!this.form) return

         this.loading = true
         setTimeout(() => (this.loading = false), 2000)

      },


      required (v) {
        return !!v || 'Field is required'
      },
      
    }
}
</script>

<style>
  #input-usage .v-input__prepend-outer,
  #input-usage .v-input__append-outer,
  #input-usage .v-input__slot,
  #input-usage .v-messages {
    border: 1px dashed rgba(0,0,0, .4);
  }
</style>