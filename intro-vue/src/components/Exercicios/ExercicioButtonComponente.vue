<script setup>
import { ref } from 'vue';
import ButtonComponente from '../ButtonComponente.vue';

// Demonstração de diferentes tipos de botões
const contadorCliques = ref(0);

function incrementarContador() {
  contadorCliques.value++;
}

function resetarContador() {
  contadorCliques.value = 0;
}
</script>

<template>
  <div class="exercicio-container">
    <h2 class="titulo">Exercício: Componente ButtonComponente</h2>
    
    <div class="descricao">
      <p>Este exercício demonstra o uso do componente ButtonComponente que recebe conteúdo através de slots.</p>
      <p>O componente ButtonComponente aceita um slot padrão para definir o texto do botão.</p>
    </div>
    
    <div class="secao-demo">
      <h3 class="subtitulo">Exemplos de Uso</h3>
      
      <div class="botoes-exemplos">
        <div class="exemplo">
          <h4>Botão Básico</h4>
          <ButtonComponente>Clique Aqui</ButtonComponente>
        </div>
        
        <div class="exemplo">
          <h4>Botão com Contador</h4>
          <div class="contador-info">
            <p>Contagem de cliques: <span class="contador">{{ contadorCliques }}</span></p>
          </div>
          <div class="botoes-grupo">
            <ButtonComponente @click="incrementarContador">Incrementar</ButtonComponente>
            <ButtonComponente @click="resetarContador">Resetar</ButtonComponente>
          </div>
        </div>
      </div>
    </div>
    
    <div class="secao-codigo">
      <h3 class="subtitulo">Código do Componente</h3>
      <div class="codigo-container">
        <pre class="codigo">
&lt;script setup&gt;
// ButtonComponente.vue - Componente de botão com slot para o texto
&lt;/script&gt;

&lt;template&gt;
  &lt;button class="custom-button"&gt;
    &lt;!-- Slot padrão para o conteúdo do botão --&gt;
    &lt;slot&gt;Botão&lt;/slot&gt;
  &lt;/button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.custom-button {
  background-color: #111;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.75rem 1.5rem;
  font-family: 'Courier New', monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  /* ... outros estilos ... */
}
&lt;/style&gt;
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exercicio-container {
  border: 1px solid var(--primary);
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.titulo {
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.descricao {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px dashed var(--primary);
  background-color: rgba(0, 0, 0, 0.2);
}

.descricao p {
  margin-bottom: 0.5rem;
}

.subtitulo {
  color: var(--accent);
  margin: 1.5rem 0 1rem;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.5rem;
}

.secao-demo {
  margin-bottom: 2rem;
}

.botoes-exemplos {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.exemplo {
  flex: 1;
  min-width: 250px;
  padding: 1rem;
  border: 1px solid var(--primary);
  background-color: rgba(0, 255, 0, 0.05);
}

.exemplo h4 {
  margin-bottom: 1rem;
  color: var(--secondary);
}

.contador-info {
  margin-bottom: 1rem;
}

.contador {
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
}

.botoes-grupo {
  display: flex;
  gap: 1rem;
}

.secao-codigo {
  margin-top: 2rem;
}

.codigo-container {
  background-color: #0a0a0a;
  border: 1px solid var(--primary);
  border-radius: 4px;
  padding: 1rem;
}

.codigo {
  color: var(--primary);
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .botoes-exemplos {
    flex-direction: column;
  }
  
  .exemplo {
    width: 100%;
  }
}
</style>
