<template>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <button @click="handelUpperClick()"  class="mr-10"><Icon name="i-cib:buysellads" size="3em"/></button>
      <button @click="handelLowerClick()" class="mr-10"><Icon name="i-fa6-brands:amilia" size="3em"  class="" /></button>
      <button @click="handelUnderClick()" class="mr-10"><Icon name="i-devicon:unix" size="3em" /></button>
      <button @click="handelItalicClick()"><Icon name="i-foundation:social-zerply" size="3em" /></button>

        <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required v-model="userInput" :class="[userOptions.underline&&'underline', userOptions.italic && 'italics']"  />
    </div>
  ////////////////////////////

</template>

<script setup>
///////////////////////////////////
const userInput=ref('');
const name=`<u>hello</u>`
const userOptions=reactive({
  underline:false,
  italic:false
})

function handelUpperClick(){
  let string1='';
  let editor = document.getElementById("editor");
  for(let x=0;x<userInput.value.length;x=x+1) {
    if (x>=editor.selectionStart && x<= editor.selectionEnd-1) {
      string1=string1+userInput.value[x].toUpperCase();
    }else{
      string1=string1+userInput.value[x];
    }
  }
  userInput.value=string1;
}

function handelLowerClick(){
  let string1='';
  let editor = document.getElementById("editor");
  for(let x=0;x<userInput.value.length;x=x+1) {
    if (x>=editor.selectionStart && x<= editor.selectionEnd-1) {
      string1=string1+userInput.value[x].toLowerCase();
    }else{
      string1=string1+userInput.value[x];
    }
  }
  userInput.value=string1;
}
function handelUnderClick(){
   let result=document.getElementById('sparsh')

  // result.appendChild(span);
  let string1='';
   let string2='';
  let editor = document.getElementById("editor");
  for(let x=0;x<userInput.value.length;x=x+1) {
    if (x>=editor.selectionStart && x<= editor.selectionEnd-1) {
      let span=document.createElement('span');
      span.innerHTML=`<u>${userInput.value[x]}</u>`;
      console.log(span);
      // const temp = editor.value
      // console.log(temp, 'temp')
      // const a = temp.slice(editor.selectionStart, editor.selectionEnd)
      // editor.innerHTML = temp.replace(a, `<u>${a}</u>`)
      // userInput.value[x].style.textDecoration = 'underline'

    string1=string1+userInput.value[x];
      //  let span=document.createElement('span');
      //   span.className='under';
      //   x.surroundContents(span)
      // string1=string1+userInput.value[x];
    }else{
      string1=string1+userInput.value[x];
    }
  }
console.log(string2);
userInput.value=string1;

  // userOptions.underline=!userOptions.underline;
}
function handelItalicClick(){
  userOptions.italic=!userOptions.italic;
}

</script>


<style scoped>
.underline{
  text-decoration: underline;
}
.italics{
  font-style: italic;
}

.buttons{
  background-color: gray;
}
.under{
  text-decoration: underline;
}
</style>