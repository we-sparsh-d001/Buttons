<template>
  <div class="buttons">
  <button :class="buttons.underline&&'activeButton'" @click="underlineText()"  class="mr-10"><Icon  name="i-devicon:unix"   size="3em"/></button>
  <button :class="buttons.italic&&'activeButton'" @click="italicizeText()" class="mr-10"><Icon name="i-foundation:social-zerply"  size="3em"  class="" /></button>
  <button :class="buttons.capital&&'activeButton'" @click="capitalizeText()" class="mr-10"><Icon  name="i-cib:buysellads" size="3em" /></button>
  <button :class="buttons.small&&'activeButton'" @click="makeTextSmall()"><Icon size="3em" name="i-fa6-brands:amilia" /></button>
  </div>
  <div class="editable" contenteditable="true" id="editableDiv">
    Select and underline and italicize this text.
  </div>

</template>

<script setup>
const buttons=reactive({
  capital:false,
  small:false,
  italic:false,
  underline:false
})

function underlineText() {
  document.execCommand('underline', false, null);
}

function italicizeText() {
  document.execCommand('italic', false, null);
}

function capitalizeText() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const text = range.toString();
    range.deleteContents();
    range.insertNode(document.createTextNode(text.toUpperCase()));
  }
}
function checkText(){
  const isUnderlined = isTextUnderlined();
  if(window.getSelection().toString()){
    if(window.getSelection().toString()===window.getSelection().toString().toLowerCase()){
      buttons.small=true;
      buttons.capital=false;
      buttons.underline=false;
    }
  if(window.getSelection().toString()===window.getSelection().toString().toUpperCase()){
    buttons.capital=true;
    buttons.small=false;
    buttons.underline=false;
  }
  if(isUnderlined){
    buttons.underline=true;
    buttons.small=false;
    buttons.capital=false;
  }
  if(isUnderlined && window.getSelection().toString()===window.getSelection().toString().toUpperCase()){
    buttons.underline=true;
    buttons.small=false;
    buttons.capital=true;
  }

    if(isUnderlined && window.getSelection().toString()===window.getSelection().toString().toLowerCase()){
      buttons.underline=true;
      buttons.small=true;
    }

  }else{
    buttons.capital=false;
    buttons.small=false;
    buttons.underline=false;
  }
}
function isTextUnderlined() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    const parentElement = range.commonAncestorContainer.parentElement;

    // Check if the parent element or any ancestor has underline style
    let isUnderlined = false;
    let currentElement = parentElement;
    while (currentElement) {
      const computedStyle = window.getComputedStyle(currentElement);
      if (computedStyle.textDecoration.includes('underline')) {
        isUnderlined = true;
        break;
      }
      currentElement = currentElement.parentElement;
    }

    return isUnderlined;
  }
  return false;
}
onMounted(() => {
  document.addEventListener('mouseup', function() {
    checkText();
  });
})

function makeTextSmall() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const text = range.toString();
    range.deleteContents();
    const span = document.createElement('span');
    span.style.fontSize = '16px'; // You can adjust the font size as needed
    span.appendChild(document.createTextNode(text));
    range.insertNode(span);
  }
}

</script>


<style scoped>

.editable{
  height:200px;
  border-style: solid;
  border-width: 2px;
}

.buttons{
  background: linear-gradient(130deg,gray,lightgreen);
  width: 50%;
  border-radius: 5px;

}
.activeButton{
  background-color:red;
}
</style>
  webdriver io
  VITEEST
