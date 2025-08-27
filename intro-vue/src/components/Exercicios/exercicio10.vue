<script setup>
import { ref } from 'vue'
let inputValue = ref('')
function mensagem(){
        alert(`Você digitou: ${inputValue.value}`)
}
// Exemplo keydown
const textoKeydown = ref('')
function handleKeydown(e) {
    textoKeydown.value += `[${e.key}] `
}
// Exemplo keypress
const textoKeypress = ref('')
function handleKeypress(e) {
    textoKeypress.value += e.key
}
// Exemplo keyup
const ultimaTecla = ref('')
function handleKeyup(e) {
    ultimaTecla.value = e.key
}
</script>

<template>
    <h3>Exemplo original: Pressione Enter</h3>
    <input type="text" @keyup.enter="mensagem" v-model="inputValue" placeholder="Digite e pressione Enter">
    <hr>
    <h3>keydown: Mostra cada tecla pressionada (inclusive Shift, Ctrl, etc)</h3>
    <input @keydown="handleKeydown" placeholder="Digite algo (keydown)">
    <p>Teclas pressionadas: {{ textoKeydown }}</p>

    <h3>keypress: Mostra apenas caracteres digitados</h3>
    <input @keypress="handleKeypress" placeholder="Digite algo (keypress)">
    <p>Caracteres digitados: {{ textoKeypress }}</p>

    <h3>keyup: Mostra a última tecla solta</h3>
    <input @keyup="handleKeyup" placeholder="Solte uma tecla (keyup)">
    <p>Última tecla solta: {{ ultimaTecla }}</p>
</template>

<style scoped>
input {
    margin-bottom: 8px;
    display: block;
    padding: 6px 12px;
    font-size: 1rem;
}
p {
    margin-bottom: 18px;
}
</style>