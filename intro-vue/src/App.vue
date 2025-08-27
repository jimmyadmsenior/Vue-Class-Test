<script setup>
import { ref, defineAsyncComponent } from 'vue'
// Exercícios (arquivos com 'Exercise' no nome)
const exercises = [
  { name: 'Exemplo 01.1', file: 'Exercicio1.vue' },
  { name: 'Exemplo 01.2', file: 'exercicio1condicional.vue' },
  { name: 'Exemplo 01.3', file: 'exercicio2condicional.vue' },
  { name: 'Exemplo 02.1', file: 'exercicio3.vue' },
  { name: 'Exemplo 02.2', file: 'exercicio5.vue' },
  { name: 'Exemplo 03', file: 'exercicio6.vue' },
  { name: 'Exemplo 03.1', file: 'exercicio7.vue' },
  { name: 'Exemplo 04.1', file: 'exercicio8.vue' },
  { name: 'Exemplo 04.2', file: 'exercicio9.vue' },
  { name: 'Exemplo 05', file: 'exercicio10.vue' }
]
const selectedExercise = ref(exercises[0].file)
const getExerciseComponent = (file) => defineAsyncComponent(() => import(`./components/Exercises/${file}`))
const mainMenu = ref('exercicios')
// Testes (arquivos sem 'Exercise' no nome)
import Exemplo01Interpolacao from './components/Exemplo01Interpolacao.vue'
import Exemplo02Condicional from './components/Exemplo02Condicional.vue'


const pagina = ref('02.1')
</script>

<template>
  <nav style="text-align:center; margin-bottom:2rem;">
    <button :class="{selected: mainMenu === 'exercicios'}" @click="mainMenu = 'exercicios'">Exercícios</button>
    <button :class="{selected: mainMenu === 'aula'}" @click="mainMenu = 'aula'">Aula</button>
  </nav>
  <div v-if="mainMenu === 'exercicios'">
    <div v-for="ex in exercises" :key="ex.file" class="exercicio-card">
      <h2>{{ ex.name }}</h2>
      <component :is="getExerciseComponent(ex.file)" />
    </div>
  </div>
  <div v-else>
    <div class="exercicio-card">
      <h2>Teste: Exemplo 01 Intepolação</h2>
      <Exemplo01Interpolacao />
    </div>
    <div class="exercicio-card">
      <h2>Teste: Exemplo 02 Condicional</h2>
      <Exemplo02Condicional />
    </div>
  </div>
</template>

<style>
.selected {
  background: #222;
  color: #64b5ff;
  border: 2px solid #64b5ff;
}
</style>