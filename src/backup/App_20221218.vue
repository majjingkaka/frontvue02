<template>     
<div id="app">
  <CommonHeader></CommonHeader>
  <!-- <CommonInput></CommonInput> -->
  <!-- <CommonList></CommonList> -->
  <div class="wrap">
    <CommonMenu></CommonMenu>
    <CommonContent></CommonContent>
  </div>
  <CommonFooter></CommonFooter>
</div>
</template>

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

<style>
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
justify-content: flex-start;
/* justify-content: flex-end; */
/* justify-content: center; */
/* justify-content: space-between; */
/* justify-content: space-around; */
/* justify-content: space-evenly; */
/* https://studiomeal.com/archives/197 */

/* align-items: stretch; */
/* align-items: flex-start; */
/* align-items: flex-end; */
/* align-items: center; */
/* align-items: baseline; */
}
</style>
