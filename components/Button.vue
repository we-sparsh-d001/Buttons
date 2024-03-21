<template>
<!-- default slot or fall back content-->
  <div >
  <slot>
  <div class="sparsh">
    <button v-bind="$attrs" @click="handleClick" >
      {{props.value}}
    </button>
  </div>
  </slot>
  </div>

<!--  //named slots-->
  <div  class="coolMan">
    <slot name="label"> </slot>
  </div>


<!--  //named slots-->
  <div class="coolMan2">
    <slot name="label2" > </slot>
  </div>


</template>

<script setup>
const props = defineProps(['value'])

const emit = defineEmits(['sparsh'])

defineOptions({
  inheritAttrs: false
})

const handleClick = () => {
  emit('sparsh', props.value)
}
</script>

<style scoped>
.sparsh{

}
.coolMan2{
  background-color: greenyellow;
}
.coolMan{
  background-color: purple;
}
</style>