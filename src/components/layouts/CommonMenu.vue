<!-- <template>
    <div>
        <nav>
          <h1><router-link to="/home">home</router-link></h1>
          <h1><router-link to="/about">about1</router-link></h1>
          <h1><router-link to="/user/12">user</router-link></h1>
          <h1><router-link to="/user2/HAHA">user2</router-link></h1>
          <h1><router-link to="/cts001">cts001</router-link></h1>
          <h1><router-link to="/about">about5</router-link></h1>
          <h1><router-link to="/about">about6</router-link></h1>
          <h1><router-link to="/about">about7</router-link></h1>
          <h1><router-link to="/about">about8</router-link></h1>
        </nav>
    </div>
</template> -->

<template>
  
  <v-card class="mx-auto" width="270">

    <!-- <v-list v-model:opened="open"> -->
    <v-list density="compact"
            nav>
      <v-list-subheader>MENU</v-list-subheader>
      
      <!-- <v-list-group value="Homes"> -->
        <!-- <template v-slot:activator="{ props }"> -->
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/home">
            <!-- <router-link to="/home">home</router-link> -->
          </v-list-item>
          <!-- <v-list-item v-bind="props" prepend-icon="mdi-home" title="Home"></v-list-item> -->
        <!-- </template> -->
        
      <!-- </v-list-group> -->
      
      <v-list-item prepend-icon="mdi-school" title="about" value="about" to="/about">
        <!-- <router-link to="/about">about</router-link> -->
      </v-list-item>
      

      <v-list-group value="Members">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Members"></v-list-item>
        </template>
        <v-list-item
            v-for="([title,,name], i) in members"
            :key="i"
            :title="name"
            :prepend-icon=null
            :value="title"
            :to="title"
          ></v-list-item>

      </v-list-group>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin"></v-list-item>
          </template>

          <v-list-item
            v-for="([title,,], i) in users"
            :key="i"
            :title="title"
            :prepend-icon=null
            :value="title"
            :to="title"
            class="st2"
            style="padding-inline-start: calc(-40px + var(--indent-padding))!important;"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title,,], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon=null
            :to="title"
            class="st2"
            style="padding-inline-start: calc(-40px + var(--indent-padding))!important;"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
      // open: ['Home','Users'],
      members:[
        ['memberList', 'mdi-account-multiple-outline','조회'],
        ['memberReg', 'mdi-cog-outline','등록'],
      ],
      users: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    })
}
</script>

<style scoped>
/*https://ux.stories.pe.kr/137 
케밥형식 카멜형식관련
*/

h1 {
  color: #03a9f4;
}
div {
  flex: 1;
  border-right: 1px solid #ebebeb;
}
.st2{
  padding-inline-start: calc(-40px + var(--indent-padding))!important;
}

</style>