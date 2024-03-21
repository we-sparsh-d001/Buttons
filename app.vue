<template>

  <div>
    <Button class="element"  value="sparsh"/>
    <Button class="two" value="dahiya" @sparsh="handleClick"/>
    <Button value="hello" />
    <Button value="cool"  disabled/>
    <Button value="great" @sparsh="handleClick"/>
    <Button class="two" value="hiii"/>
    <Button value="sandeep" class="four"/>
  </div>

<!--  // slot=label-->
  <Button value="great2" @sparsh="handleClick">
    <template v-slot:label>
      <h1>changed content by button 2</h1>
    </template>
  </Button>

<!--//slot label2-->
  <Button value="great3" @sparsh="handleClick" disabled>
    <template v-slot:label2>
      <h1>this is great 3 button</h1>
    </template>
  </Button>

  <Button value="great3" @sparsh="handleClick">
    <template v-slot:label2>
      <h1>this is great 3 button</h1>
    </template>
  </Button>

  <Button2  value="button2" @clicked="handelB2"/>
  <Button2 value="sparshDahiya"></Button2>
  <Button2 value="dahiya3" @clicked="handelB2">
    <template v-slot:label101>
      <h1>this is dahiya3 button</h1>
    </template>
  </Button2>




  <Button3  color="gray" corner="round"  value="sparsh" @sparsh="handleClick"/>
  <Button3 corner="round" color="green" value="sparsh2" @sparsh="handleClick"/>
  <Button3 corner="round" color="red" value="sparsh2" @sparsh="handleClick"/>

  <Button3 corner="round" color="purple" value="sparsh3" @sparsh="handleClick"/>
  <Button3  color="green" value="sparsh4" @sparsh="handleClick"/>
<br/>




  <Button4  color="gray"  name="i-gg:bmw" size="2em" value="sparsh1" />

    <Button4  color="red"  name="i-vscode-icons:file-type-bats" size="3em" value="sparsh2" imagePosition="right" round/>

  <Button4    name="i-vscode-icons:file-type-bats" size="3em" value="sparsh2"    round />
  <Button4    name="i-vscode-icons:file-type-bats" size="3em" value="sparsh2" color="xyz"  imagePosition="right"  round />

<Button5 value="sparsh" name="i-vscode-icons:file-type-bats" size="3em"    color="xyz"/>
  <Button5 value="sparsh dahiya" name="i-vscode-icons:file-type-bats" size="3em"    color="yellow" round/>
  <br/>
  <Form/>
  
<!--<editor/>-->
<!--//////////////////////////////////////////////////-->
  <newEditor/>

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})

function handleClick(value){
  console.log(value);
}
function handelB2(value){
  console.log(value)
}
</script>

<style scoped>
.one{
  color: red;
  width:200px
}
.two{
  background-color: yellow;
}
.three{
  background-color: grey;
}
.four{
  background-color: red;
}
.hello{
  color:pink
}
</style>


