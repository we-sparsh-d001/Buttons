<template>
  <slot>
  <button v-bind="$attrs" @click="handelClick()">{{value}}</button>
  <div class="label101">
  <slot name="label101"></slot>
  </div>

  </slot>
</template>


<script setup>
defineOptions({
  inheritAttrs:false
})

const emits=defineEmits(['clicked'])
const props=defineProps(['value'])
const handelClick=()=>{
  emits('clicked',props.value)
}
</script>


<style scoped>
.label101{
  background-color: green;
}

</style>