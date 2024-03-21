
<template>

  <button   v-bind="$attrs"  type="button" class="text-white hover:bg-red-300 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " :class="[props.color==='red' ?'bg-red-700' : 'bg-blue-700', props.round===''?'rounded-full' : 'rounded-lg', props.color==='gray' ?'bg-gray-800' : 'bg-black-700', props.color==='green' ?'bg-green-700' : 'bg-black-700',props.color==='yellow' ?' bg-yellow-400' : 'bg-black-700',props.color==='purple' ?'bg-purple-700' : 'bg-black-700',props.color==='white' ?'bg-white text-black' : 'bg-black-700']"  @click="handleClick()"><Icon v-if="props.imagePosition!=='right'" v-bind="$attrs"/>{{props.value}}<Icon v-if="props.imagePosition==='right'" v-bind="$attrs"/></button>


</template>

<script setup lang="ts">

// interface Props {
//   value:string,
//       corner:string,
//       imagePosition:string,
//       round:string,
//       color:color
// }

type Props = {
  value:string,
      corner:string,
      imagePosition:string,
      round:string,
      color:Color
}


enum Color {
  red='red',
  grey='grey',
  blue='blue',
  yellow='yellow',
  green='green',
  pink='pink',
  orange='orange',
  white='white'
}

const props= defineProps<Props>()

defineOptions({
  inheritAttrs: false
})
function handleClick():void {
   alertify.notify(props.value, 'success', 5, function(){  console.log('dismissed'); });
}
</script>
