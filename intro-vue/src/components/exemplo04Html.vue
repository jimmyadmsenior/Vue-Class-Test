<script setup>
import { ref } from 'vue'

// Corrigindo o nome da variável de 'text' para 'texto'
let texto = ref('<p style="color:var(--primary)">Testando a diretiva v-html</p>')
let codigoHTML = ref('<div class="alerta-seguranca"><h3>ALERTA DE SEGURANÇA</h3><p>Sistema detectou atividade suspeita</p><div class="codigo-barra"></div></div>')
let terminalOutput = ref('')

function adicionarComando() {
  terminalOutput.value += `<div class="terminal-line">
    <span class="prompt">root@hacker:~$</span>
    <span class="comando">accessing secure server...</span>
  </div>
  <div class="terminal-line">
    <span class="response">[${new Date().toLocaleTimeString()}] Access granted. Welcome back.</span>
  </div>`
}
</script>

<template>
  <div class="exemplo-container">
    <h3>Exemplo de uso da diretiva v-html</h3>
    
    <div class="exemplo-secao">
      <h4>Exemplo básico:</h4>
      <div v-html="texto" class="html-output"></div>
      <p class="codigo">Código HTML: {{ texto }}</p>
    </div>
    
    <div class="exemplo-secao">
      <h4>Exemplo com CSS complexo:</h4>
      <div v-html="codigoHTML" class="html-output"></div>
      <p class="codigo">Código HTML: {{ codigoHTML }}</p>
    </div>
    
    <div class="exemplo-secao">
      <h4>Terminal interativo:</h4>
      <div class="terminal-container">
        <div v-html="terminalOutput" class="terminal-output"></div>
        <button @click="adicionarComando" class="btn-comando">Executar Comando</button>
      </div>
    </div>
    
    <div class="nota">
      <p>Nota: O uso de v-html pode ser perigoso para conteúdo não confiável, pois pode resultar em vulnerabilidades XSS.</p>
      <p>Sempre sanitize o HTML ou use apenas com conteúdo seguro.</p>
    </div>
  </div>
</template>

<style scoped>
.exemplo-container {
  border: 1px solid var(--primary);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.exemplo-secao {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--primary);
}

.html-output {
  margin: 1rem 0;
  padding: 1rem;
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid var(--primary);
}

.codigo {
  font-family: monospace;
  background-color: #111;
  padding: 0.5rem;
  overflow: auto;
  white-space: pre-wrap;
  color: var(--secondary);
}

.terminal-container {
  background-color: #000;
  padding: 1rem;
  border: 1px solid var(--primary);
  margin-top: 1rem;
}

.terminal-output {
  min-height: 100px;
  margin-bottom: 1rem;
}

.terminal-line {
  margin: 5px 0;
  line-height: 1.4;
}

.prompt {
  color: var(--accent);
  margin-right: 8px;
}

.comando {
  color: var(--primary);
}

.response {
  color: var(--secondary);
}

.btn-comando {
  background-color: #111;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}

.btn-comando:hover {
  background-color: var(--primary);
  color: #000;
}

.nota {
  background-color: rgba(255, 204, 0, 0.1);
  padding: 0.5rem;
  border-left: 3px solid var(--warning);
  font-size: 0.9rem;
}

.alerta-seguranca {
  background-color: rgba(255, 0, 0, 0.2);
  padding: 15px;
  border: 2px solid red;
  text-align: center;
  font-family: monospace;
  position: relative;
  overflow: hidden;
}

.alerta-seguranca h3 {
  margin-top: 0;
  color: red;
  animation: blink 1s infinite;
}

.codigo-barra {
  height: 30px;
  background: repeating-linear-gradient(
    45deg,
    #000,
    #000 10px,
    #ff0000 10px,
    #ff0000 20px
  );
  margin-top: 10px;
}
</style>