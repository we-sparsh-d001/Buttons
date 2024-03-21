<template>

  <button v-bind="$attrs"  type="button" class="text-red-700 hover:text-white border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" :class="[props.color==='red' ?'border-red-700' : 'border-red-700', props.round===''?'rounded-full' : 'rounded-lg', props.color==='gray' ?'border-gray-700' : 'border-red-700', props.color==='green' ?'border-green-700' : 'border-red-700',props.color==='yellow' ?' border-yellow-400' : 'border-red-700',props.color==='purple' ?'border-purple-700' : 'border-black-700',props.color==='white' ?'border-white text-black' : 'border-red-700']"  @click="handleClick()"><Icon v-if="props.imagePosition!=='right'" v-bind="$attrs"/>{{props.value}}<Icon v-if="props.imagePosition==='right'" v-bind="$attrs"/></button>
</template>

<script setup lang="ts">
interface propsType{
  value:string,
  corner:string,
  imagePosition:string,
  round:string,
  color:Color
}
enum Color{
  red='red',
  grey='grey',
  blue='blue',
  yellow='yellow',
  green='green',
  pink='pink',
  orange='orange',
  white='white'
}
const props=defineProps<propsType>()

defineOptions({
inheritAttrs: false
})


function handleClick():void{
alertify.notify(props.value, 'success', 5, function(){  console.log('dismissed'); });
}

</script>