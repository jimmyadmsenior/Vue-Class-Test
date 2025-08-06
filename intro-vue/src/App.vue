
<script setup>
import { ref } from 'vue'
import Exemplo01Intepolacao from './components/Exemplo01Intepolacao.vue'
import Exemplo01_1Exercise from './components/Exemplo01.1Exercise.vue'
import Exemplo01_2Exercise from './components/Exemplo01.2Exercise.vue'
import Exemplo01_3Exercise from './components/Exemplo01.3Exercise.vue'
import Exemplo02_1Exercise from './components/Exemplo02.1Exercise.vue'
import Exemplo02_2Exercise from './components/Exemplo02.2Exercise.vue'

const pagina = ref('02.1')
</script>

<template>
  <div class="exercicio-card">
    <h2>Exemplo 01 - Interpolação</h2>
    <Exemplo01Intepolacao />
  </div>
  <div class="exercicio-card">
    <h2>Exercício 01.1</h2>
    <Exemplo01_1Exercise />
  </div>
  <div class="exercicio-card">
    <h2>Exercício 01.2</h2>
    <Exemplo01_2Exercise />
  </div>
  <div class="exercicio-card">
    <h2>Exercício 01.3</h2>
    <Exemplo01_3Exercise />
  </div>
  <div class="exercicio-card">
    <h2>Exercício 02.1</h2>
    <Exemplo02_1Exercise />
  </div>
  <div class="exercicio-card">
    <h2>Exercício 02.2</h2>
    <Exemplo02_2Exercise />
  </div>
</template>