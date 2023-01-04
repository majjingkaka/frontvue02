<!-- <template>
<v-app>
  <v-navigation-drawer app>
    <common-menu></common-menu>
  </v-navigation-drawer>

  <v-app-bar app>
    <common-header></common-header>
  </v-app-bar>
  <v-main>
    <v-container fluid>

      <common-content></common-content>
    </v-container>
  </v-main>

  <v-footer app>
    <common-footer></common-footer>
  </v-footer>
</v-app>
</template> -->

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" >
      <common-menu></common-menu>
    </v-navigation-drawer>

    <v-app-bar title="doodooroom" :elevation="10">
      
      <v-btn icon elevation="0" to="/logIn">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon elevation="0" to="/memberReg">
        <v-icon>mdi-account-cog</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <common-header></common-header>
      
      <!-- <v-toolbar-title>Application</v-toolbar-title> -->
    </v-app-bar>

    <v-main>
      <common-content></common-content>
    </v-main>

    <v-footer app>
      <common-footer></common-footer>
    </v-footer>

  </v-app>
</template>



<!-- <template>
  <div id="app">
    <common-header></common-header>
    <div class="wrap">
      <common-menu></common-menu>
      <common-content></common-content>
    </div>
    <common-footer></common-footer>
  </div>
</template> -->


<!-- <template>
  <div id="app">
    <div class="common-layout">
      <el-container>
        <el-aside width="20%">
          <common-menu></common-menu>
        </el-aside>
        <el-container width="80%">
          <el-header><common-header></common-header></el-header>
          <el-main><common-content></common-content></el-main>
          <el-footer><common-footer></common-footer></el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
   -->



  <script>



  import CommonHeader from './components/layouts/CommonHeader.vue'
  // import CommonInput from './components/layouts/CommonInput.vue'
  // import CommonList from './components/layouts/CommonList.vue'
  
  import CommonMenu from './components/layouts/CommonMenu.vue'
  import CommonContent from './components/layouts/CommonContent.vue'
  import CommonFooter from './components/layouts/CommonFooter.vue'
  //보시면 ”@/components/Content" 와 같은 식으로 경로를 설정해 놓은 것을 볼 수 있습니다. 
  //@ 는 절대 경로 (src 아래) 를 가리킵니다. ./ 같은 상대 경로로 가져올 수 도 @ 같은 절대 경로로도 가져올 수 있습니다.
  

  export default {

    data: () => ({ 
      drawer: null
    }),
  //   data: () => ({
  //   //
  // }),
  
  name : 'App',
  components:{
       'CommonHeader' : CommonHeader
      // ,'CommonInput' : CommonInput
      // ,'CommonList' : CommonList
      
      ,'CommonMenu' : CommonMenu
      ,'CommonContent' : CommonContent
      ,'CommonFooter' : CommonFooter
  }
  }
  
  </script>
  
  <style scoped>
  body {
  text-align: center;
  background-color: #F6F6F8;
  }
  input {
  border-style: groove;
  width: 200px;
  }
  button {
  border-style: groove;
  }
  .shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
  .wrap {
  display: flex;
}
  </style>
  