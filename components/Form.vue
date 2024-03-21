<template>

  <form class="max-w-sm mx-auto" >
    <div class="mb-5" id="emailAddress" >
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required v-model="email" />
      <p class="errors" v-if="errorMess.emailError">Please enter  email address!</p>
      </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="password" />
      <p  class="errors" v-if="errorMess.passwordError">Please enter password!</p>
<!--///////////////////////////////////////choose gender below//////////////////////////////-->
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Choose Your Gender</label>
      <p class="errors" v-if="errorMess.genderError">Please select a gender!</p>
      <div id="selectGender">
      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="male" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="male" @click="toggleGenderMale($event)">
        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
      </div>
      <div class="flex items-center">
        <input checked id="checked-checkbox" type="checkbox" value="female" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="female" @click="toggleGenderFemale($event)">
        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
      </div>
        </div>
<!--//////////////////////////choose gender ends////////////////////////-->

<!--      //////////////////////choose framework//////////////////////-->
      <div id="frameWork">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">Choose Your Framework</label>
      <p class="errors" v-if="errorMess.frameWorkError">Please select min. one framework!</p>
      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="vue-checkbox-list" type="checkbox" v-model="frameWorks.vue" value="vue" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" @click="handelClick($event)">
            <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="react-checkbox-list" type="checkbox" v-model="frameWorks.react"  value="react" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" @click="handelClick($event)">
            <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="angular-checkbox-list" type="checkbox" v-model="frameWorks.angular" value="angular" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" @click="handelClick($event)">
            <label for="angular-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="laravel-checkbox-list" type="checkbox" v-model="frameWorks.laravel"  value="laravel" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" @click="handelClick($event)">
            <label for="laravel-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
          </div>
        </li>
      </ul>
    </div>
<!--//////////////////////choose framework ends/////////////////////////////////-->
    </div>
<!--///////////////agree terms///////////////////////////-->
    <div class="flex items-center" id="submit">
      <input id="link-checkbox" type="checkbox" @change="agreeTerms()"  v-bind="terms ? {'checked' : 'true'} : {}"   v-model="terms" value="yes" class=" mt-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
      <label for="link-checkbox" class=" mt-10 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
    </div>
<!--////////////////agree terms end//////////////////////////////////////////-->
    <button  v-if="terms" id="submitForm"  @click.prevent="submitForm()" class=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  >Submit</button>

    <button v-else disabled id="btndisabled" class=" mt-10 text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
  </form>

<!--/////////////////////////card////////////////////////-->
  <div v-if="showCard" class="sparsh">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email Id-</h5>
    <p>{{email}}</p>
    <h1 class="text-2xl font-bold  text-gray-700 dark:text-gray-400">Frame works selected:-</h1>
    <ul>
    <li v-for="item in frameworksSelected">{{item}}</li>
  </ul>
    <h1 class="text-2xl font-bold  text-gray-700 dark:text-gray-400">Gender-</h1>
    <p>{{gender}}</p>
  </div>
</template>


<script setup>
const male=ref(false);
const female=ref(false);
const gender=ref('');
const email=ref('');
const password=ref('');
const terms=ref(false);
const frameworksSelected=ref([]);
const frameWorks=reactive({
  vue:false,
  react:false,
  angular:false,
  laravel:false
})
const showCard=ref(false);
const errorMess=reactive({
  passwordError:false,
  emailError:false,
  genderError:false,
  frameWorkError:false
})
function handelClick(event){
 if(event.target.value==='vue'){
   frameWorks.vue=!frameWorks.vue
   if(frameWorks.vue) {
     frameworksSelected.value.push(event.target.value);
   }else{
     frameworksSelected.value=frameworksSelected.value.filter((value)=>{
       if(value!=='vue'){
         return true;
       }
     })
   }
 }

  if(event.target.value==='react'){
    frameWorks.react=!frameWorks.react
    if(frameWorks.react) {
      frameworksSelected.value.push(event.target.value);
    }else{
      frameworksSelected.value=frameworksSelected.value.filter((value)=>{
        if(value!=='react'){
          return true;
        }
      })
    }
  }

  if(event.target.value==='angular'){
    frameWorks.angular=!frameWorks.angular
    if(frameWorks.angular) {
      frameworksSelected.value.push(event.target.value);
    }else{
      frameworksSelected.value=frameworksSelected.value.filter((value)=>{
        if(value!=='angular'){
          return true;
        }
      })
    }
  }

  if(event.target.value==='laravel'){
    frameWorks.laravel=!frameWorks.laravel
    if(frameWorks.laravel) {
      frameworksSelected.value.push(event.target.value);
    }else{
      frameworksSelected.value=frameworksSelected.value.filter((value)=>{
        if(value!=='laravel'){
          return true;
        }
      })
    }
  }

}

function agreeTerms(){

  // terms.value=!terms.value;
  // alert(terms.value);
  return terms.value;
}

function submitForm(){
  if(email.value===''){
    errorMess.emailError=true;
  }else{
    errorMess.emailError=false;
  }
  if(password.value===''){
    errorMess.passwordError=true;
  }else{
    errorMess.passwordError=false;
  }

  if(gender.value===''){
    errorMess.genderError=true;
  }else{
    errorMess.genderError=false;
  }

  if(frameworksSelected.value.length===0){
    errorMess.frameWorkError=true;
  }else{
    errorMess.frameWorkError=false;
  }

  if(!errorMess.emailError&&!errorMess.passwordError&&!errorMess.genderError&&!errorMess.frameWorkError){
    showCard.value=true;
  }else{
    showCard.value=false;
  }
}

function toggleGenderMale(event){
male.value=!male.value;
female.value=false;
if(male.value){
  gender.value='male'
}else{
  gender.value=null;
}
}

function toggleGenderFemale(event){
  female.value=!female.value;
  male.value=false;
  if(female.value){
    gender.value='female'
  }else{
    gender.value=null;
  }
}

</script>


<style scoped>
.sparsh{
  border-color: black;
  border-style: solid;
  border-width: 2px;
  width:40%;
  margin: auto;
  background-color: gray;
  border-radius: 10px;
}

.errors{
  border-style: solid;
  border-width: 1px;
  background:linear-gradient(130deg,rosybrown,red);
  color: white;
}
</style>