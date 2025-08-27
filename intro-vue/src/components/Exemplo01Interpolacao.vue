<script setup>
import { ref } from 'vue'

let nome = 'Jimmy'
let num1= 18
let num2 = 10
let resultado = ref(num1 + num2)
</script>

<template>
<div class="exemplo-container">
  <p>{{ `O seu nome é: ${nome}` }}</p>
  <p>A soma de {{ num1 }} + {{ num2 }} = <span class="highlight">{{ resultado }}</span></p>
  <p>O dobro da soma é: <span class="highlight">{{ resultado * 2 }}</span></p>
</div>
</template>

<style scoped>
.exemplo-container {
  border: 1px solid var(--primary);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
}
.highlight {
  color: var(--accent);
  font-weight: bold;
  text-shadow: 0 0 5px var(--accent);
}
</style>
