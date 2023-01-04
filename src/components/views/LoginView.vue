<template>
   <v-sheet class="pa-12" rounded>
     <v-card class="mx-auto px-6 py-8" max-width="400">
       <v-form
         v-model="form"
         @submit.prevent="onSubmit"
       >
       <!-- action = "/login_proc" -->
         <!-- method= "post" -->
       <!-- @submit.prevent="onSubmit" -->
         <v-text-field
           v-model="id"
           :readonly="loading"
           :rules="[required]"
           class="mb-2"
           clearable
           label="ID"
           name="username"
         ></v-text-field>
 
         <v-text-field
           v-model="password"
           :readonly="loading"
           :rules="[required]"
           clearable
           label="Password"
           placeholder="Enter your password"
           name="password"
         ></v-text-field>
 
         <br>
 
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

         <!-- <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"></input> -->
         <!-- <v-text-field id="_csrf" v-show="false" name="${_csrf.parameterName}" value="${_csrf.token}">111</v-text-field> -->

       </v-form>
     </v-card>
   </v-sheet>
 </template>

<script>
import VueCookies from 'vue-cookies'
const cookie = VueCookies.get('XSRF-TOKEN');

// import $ from 'jquery'

//const csrfToken = this.getCookie('XSRF-TOKEN');
// const headers = new Headers({
//    'X-XSRF-TOKEN': csrfToken
// });

// import $ from 'jquery';
//const token = $("meta[name='_csrf']").attr("content");
//const header = $("meta[name='_csrf_header']").attr("content");

//const token = $("#_csrf").attr("value");
console.log(cookie)
//console.log(token)

// $(function () {
//    // var token = $("meta[name='_csrf']").attr("content");
//    // var header = $("meta[name='_csrf_header']").attr("content");

//    $(document).ajaxSend(function(e, xhr, options) {
//          //console.log('ajaxSend');
//          //xhr.setRequestHeader(header, token);
//          console.log(e)
//          console.log(options)
//          xhr.setRequestHeader('X-XSRF-TOKEN', cookie);
//    });
// });

export default {
   data : () => ({
    form: false,
    id: null,
    email: null,
    password: null,
    loading: false,
    show1: false,
    show2: true,
    cookie:cookie,
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
        
         let saveData = {
            auth: {
               username: this.id, 
               password: this.password
            }
         };

         let headers = {
            'Content-Type':'application/json',
            'X-XSRF-TOKEN':this.cookie
         };

         //https://ssjeong.tistory.com/entry/VUE-axios-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-get-post
         //# axios는 get, post를 지원함, load에는 get을 사용해야함, res.data에 찾는 데이터들이 있음
         // const api = this.axios.create({
         //    baseURL:'http//localhost:8080'
         // });

         this.axios.post(
            '/login_proc'
            //, JSON.stringify(saveData)
            , JSON.stringify(saveData)
            //, {id: "1", email: "2", password: "3"}
            , headers) //JSON.stringify(jsonData),
         .then(res => {
            //# 통신 성공
            console.log(res.data)
         })
         .catch( error => { 
            console.log(error) 
         })
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

<style></style>
