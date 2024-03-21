<template>

  <button type="button" class="text-white hover:bg-red-300 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " :class="[props.color==='red' ?'bg-red-700' : 'bg-blue-700', props.corner==='round'?'rounded-full' : 'rounded-lg', props.color==='gray' ?'bg-gray-800' : 'bg-blue-700', props.color==='green' ?'bg-green-700' : 'bg-blue-700',props.color==='yellow' ?' bg-yellow-400' : 'bg-blue-700',props.color==='purple' ?'bg-purple-700' : 'bg-blue-700',props.color==='white' ?'bg-white text-black' : 'bg-blue-700' ]" @click="handleClick">{{props.value}}</button>



</template>

<script setup>

const props=defineProps(['corner','color','value']);
const emit = defineEmits(['sparsh'])
const handleClick = () => {
  emit('sparsh', props.value)
}
</script>


<style scoped>


</style>