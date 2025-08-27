<script setup>
import { ref } from 'vue'

let exibir = false
let media = ref(8)
let nome = ref('Estudante')
let disciplina = ref('Desenvolvimento Web')

function alterarMedia(valor) {
  media.value = valor
}
</script>

<template>
<div class="exemplo-container">
  <h1 v-if="exibir">Testando a diretiva V-if</h1>
  
  <div class="resultado-container">
    <p>Aluno: <span class="highlight">{{ nome }}</span></p>
    <p>Disciplina: <span class="highlight">{{ disciplina }}</span></p>
    <p>Média: <span class="highlight">{{ media }}</span></p>
    
    <div class="status-container">
      <p v-if="media>=7" class="status aprovado">
        <span class="status-icon">✓</span> Aprovado - Parabéns! Você foi aprovado com excelência.
      </p>
      <p v-else-if="media>=5 && media<7" class="status alerta">
        <span class="status-icon">!</span> Aprovado com ressalvas - Precisa melhorar.
      </p>
      <p v-else-if="media<5" class="status recuperacao">
        <span class="status-icon">⚠</span> Em recuperação - Estude mais para a prova final.
      </p>
      <p v-else class="status reprovado">
        <span class="status-icon">✗</span> Reprovado - Procure ajuda do professor.
      </p>
    </div>
  </div>
  
  <div class="controls">
    <p>Altere a média para testar os diferentes resultados:</p>
    <button @click="alterarMedia(9)">Média 9</button>
    <button @click="alterarMedia(6)">Média 6</button>
    <button @click="alterarMedia(4)">Média 4</button>
    <button @click="alterarMedia(2)">Média 2</button>
  </div>
</div>
</template>

<style scoped>
.exemplo-container {
  border: 1px solid var(--primary);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.resultado-container {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px dashed var(--primary);
}

.highlight {
  color: var(--accent);
  font-weight: bold;
}

.status-container {
  margin-top: 1rem;
  padding: 0.5rem;
}

.status {
  padding: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
}

.status-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
}

.aprovado {
  color: var(--success);
  border-left: 4px solid var(--success);
}

.alerta {
  color: var(--warning);
  border-left: 4px solid var(--warning);
}

.recuperacao {
  color: var(--warning);
  border-left: 4px solid var(--warning);
}

.reprovado {
  color: var(--danger);
  border-left: 4px solid var(--danger);
}

.controls {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.controls button {
  background-color: #111;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}

.controls button:hover {
  background-color: var(--primary);
  color: #000;
}
</style>