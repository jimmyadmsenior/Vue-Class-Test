<script setup>
import{ref}from 'vue'
let inputValue = ref('')
function mensagem(){
    alert(`Você digitou: ${inputValue.value}`)
}
</script>

<template>
    <input type="text" @keyup.enter="mensagem" v-model="inputValue">
</template>