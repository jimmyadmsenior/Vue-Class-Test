<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import ProductTerm from './components/productterm.vue';

// Exercícios (arquivos na pasta Exercicios)
const exercises = [
  'Exercicio1.vue',
  'exercicio1condicional.vue',
  'exercicio2condicional.vue',
  'exercicio3.vue',
  'exercicio5.vue',
  'exercicio6.vue',
  'exercicio7.vue',
  'exercicio8.vue',
  'exercicio9.vue',
  'exercicio10.vue',
  'exercicio11.vue',
];
const getExerciseComponent = (file) => defineAsyncComponent(() => import(`./components/Exercicios/${file}`));

// Exemplos (arquivos na pasta components, exceto Exercicios)
const examples = [
  'Exemplo01Interpolacao.vue',
  'Exemplo02Condicional.vue',
  'exemplo03for.vue',
  'exemplo04Html.vue',
  'exemplo05model.vue',
  'exemplo06classe.vue',
  'exemplo07.vue',
  'exemplo08teclado.vue',
  'Exemplo10propsWrapper.vue',
  'Exemplo11Emits.vue',
  'exemplo2.vue',
  'exemplo3.vue',
];
const getExampleComponent = (file) => defineAsyncComponent(() => import(`./components/${file}`));

const mainMenu = ref('exercicios');
const message = ref('');
const cursorVisible = ref(true);

// Produtos para o exercício de lista de produtos
const products = [
  { name: 'Smartphone Galaxy S25', price: 3999.99 },
  { name: 'Notebook Pro', price: 5499.00 },
  { name: 'Smart TV 65"', price: 4299.90 }
];

// Função para alternar entre exercícios e exemplos com animação
function switchTab(tab) {
  mainMenu.value = tab;
}

function handleBuy(productName) {
  console.log(`Você comprou ${productName}`);
  message.value = `Você comprou ${productName}!`;
  
  // Limpar a mensagem após alguns segundos
  setTimeout(() => {
    message.value = '';
  }, 3000);
}

const exercisesExpanded = ref(true);
const examplesExpanded = ref(true);
const selectedExercise = ref(null);
const selectedExample = ref(null);
const uptimeDisplay = ref('00:00:00');
const startTime = new Date();
const randomMemoryUsage = ref(Math.floor(Math.random() * 2000) + 2000);

// Alternar exibição de diretórios
function toggleExercisesDir() {
  exercisesExpanded.value = !exercisesExpanded.value;
}

function toggleExamplesDir() {
  examplesExpanded.value = !examplesExpanded.value;
}

// Seleção de arquivos
function selectExercise(index) {
  selectedExercise.value = index;
}

function selectExample(index) {
  selectedExample.value = index;
}

// Efeito de cursor personalizado e uptime
onMounted(() => {
  // Criar cursor personalizado
  const customCursor = document.getElementById('custom-cursor');
  
  document.addEventListener('mousemove', (e) => {
    if (customCursor) {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    }
    
    // Criar efeito de código binário ao movimento do mouse (efeito hacker)
    if (Math.random() > 0.97) {
      const binary = document.createElement('div');
      binary.className = 'binary-code';
      
      // Texto binário aleatório
      const binText = Math.random() > 0.5 ? '1' : '0';
      binary.innerText = binText;
      
      // Posição baseada no cursor
      binary.style.left = `${e.clientX + (Math.random() * 40 - 20)}px`;
      binary.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
      
      document.body.appendChild(binary);
      
      // Remover após a animação
      setTimeout(() => {
        binary.remove();
      }, 1000);
    }
  });
  
  // Piscar cursor
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
  
  // Atualizar uptime
  setInterval(() => {
    const now = new Date();
    const diff = now - startTime;
    const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
    uptimeDisplay.value = `${hours}:${minutes}:${seconds}`;
    
    // Atualizar uso de memória aleatoriamente às vezes
    if (Math.random() > 0.8) {
      randomMemoryUsage.value = Math.floor(Math.random() * 2000) + 2000;
    }
  }, 1000);
  
  // Iniciar com o primeiro exercício selecionado
  selectedExercise.value = 0;
  selectedExample.value = 0;
  
  // Aplicar efeito de glitch ocasionalmente em elementos com classe .glitch-text
  setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch-text');
    glitchElements.forEach(el => {
      el.classList.add('glitching');
      setTimeout(() => {
        el.classList.remove('glitching');
      }, 200);
    });
  }, 3000);
});
</script>

<template>
  <div class="app-container">
    <div id="custom-cursor"></div>
    
    <header>
      <h1 class="title glitch-text">TERMINAL_<span class="highlight blink">VUE.JS</span></h1>
      <div class="terminal-info">
        <span class="status">STATUS: ONLINE</span>
        <span class="connection">SECURE_CONNECTION: ESTABLISHED</span>
        <span class="uptime">UPTIME: {{ uptimeDisplay }}</span>
      </div>
      
      <div class="command-line">
        <span class="prompt">root@vue:~$</span>
        <span class="command">ls -la /modules</span>
      </div>
      
      <nav class="terminal-menu">
        <button :class="{selected: mainMenu === 'exercicios'}" @click="switchTab('exercicios')">
          <span class="icon">[EX]</span> EXECUTAR_EXERCICIOS.sh
        </button>
        <button :class="{selected: mainMenu === 'exemplos'}" @click="switchTab('exemplos')">
          <span class="icon">[MOD]</span> CARREGAR_EXEMPLOS.js
        </button>
      </nav>
    </header>

    <main>
      <transition name="glitch" mode="out-in">
        <div v-if="mainMenu === 'exercicios'" key="exercicios" class="content-container">
          <div class="terminal-header">
            <span class="access-code">ACCESS_CODE: 0xFF1A7</span>
            <span class="file-path">/root/exercises/</span>
          </div>
          
          <h2 class="section-title">> MÓDULOS DE EXERCÍCIOS</h2>
          
          <div class="terminal-selector">
            <div class="file-system">
              <div class="directory">
                <div class="directory-header" @click="toggleExercisesDir">
                  <span class="dir-icon">{{ exercisesExpanded ? '▼' : '►' }}</span>
                  <span class="dir-name">exercicios/</span>
                </div>
                
                <div v-if="exercisesExpanded" class="directory-contents">
                  <div 
                    v-for="(file, index) in exercises" 
                    :key="file" 
                    class="file-entry"
                    :class="{ active: selectedExercise === index }"
                    @click="selectExercise(index)"
                  >
                    <span class="file-icon">></span>
                    <span class="file-name">{{ file }}</span>
                  </div>
                  <div 
                    class="file-entry"
                    :class="{ active: selectedExercise === exercises.length }"
                    @click="selectExercise(exercises.length)"
                  >
                    <span class="file-icon">></span>
                    <span class="file-name">produtos.vue</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="terminal-output">
              <div v-if="selectedExercise !== null" class="output-window">
                <div class="window-header">
                  <span class="window-title">{{ selectedExercise < exercises.length ? 
                    exercises[selectedExercise].replace('.vue', '').replace('exercicio', 'Exercício ').replace(/\b\w/g, char => char.toUpperCase()) : 
                    'Exercício: Lista de Produtos' }}</span>
                  <span class="window-controls">
                    <span class="control">_</span>
                    <span class="control">□</span>
                    <span class="control">×</span>
                  </span>
                </div>
                <div class="window-content">
                  <template v-if="selectedExercise < exercises.length">
                    <component :is="getExerciseComponent(exercises[selectedExercise])" />
                  </template>
                  <template v-else>
                    <div class="products-list">
                      <div v-for="product in products" :key="product.name">
                        <ProductTerm :name="product.name" :price="product.price" @buy="handleBuy" />
                      </div>
                    </div>
                    <div v-if="message" class="message-container">
                      <p class="message">{{ message }}</p>
                    </div>
                  </template>
                </div>
              </div>
              <div v-else class="empty-state">
                <p class="blink">> SELECIONE UM ARQUIVO PARA EXECUTAR</p>
              </div>
            </div>
          </div>
        </div>

        <div v-else key="exemplos" class="content-container">
          <div class="terminal-header">
            <span class="access-code">ACCESS_CODE: 0xA7F19</span>
            <span class="file-path">/root/examples/</span>
          </div>
          
          <h2 class="section-title">> MÓDULOS DE EXEMPLOS</h2>
          
          <div class="terminal-selector">
            <div class="file-system">
              <div class="directory">
                <div class="directory-header" @click="toggleExamplesDir">
                  <span class="dir-icon">{{ examplesExpanded ? '▼' : '►' }}</span>
                  <span class="dir-name">exemplos/</span>
                </div>
                
                <div v-if="examplesExpanded" class="directory-contents">
                  <div 
                    v-for="(file, index) in examples" 
                    :key="file" 
                    class="file-entry"
                    :class="{ active: selectedExample === index }"
                    @click="selectExample(index)"
                  >
                    <span class="file-icon">></span>
                    <span class="file-name">{{ file }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="terminal-output">
              <div v-if="selectedExample !== null" class="output-window">
                <div class="window-header">
                  <span class="window-title">{{ examples[selectedExample].replace('.vue', '').replace(/exemplo/i, 'Exemplo ').replace(/\b\w/g, char => char.toUpperCase()) }}</span>
                  <span class="window-controls">
                    <span class="control">_</span>
                    <span class="control">□</span>
                    <span class="control">×</span>
                  </span>
                </div>
                <div class="window-content">
                  <component :is="getExampleComponent(examples[selectedExample])" />
                </div>
              </div>
              <div v-else class="empty-state">
                <p class="blink">> SELECIONE UM ARQUIVO PARA CARREGAR</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </main>

    <footer>
      <div class="terminal-footer">
        <span class="system-info">SYSTEM: VUE.JS v3.2.47</span>
        <span class="memory">MEMORY: {{ randomMemoryUsage }}MB/8192MB</span>
        <span class="copyright">[c] 2025 - SECURE TERMINAL</span>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --primary: #0f0;
  --secondary: #00ff9c;
  --accent: #00bfff;
  --light: #444;
  --dark: #0f0;
  --success: #0f0;
  --warning: #ffcc00;
  --danger: #ff0000;
  --card-bg: #111;
  --card-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  --terminal-bg: #000000;
  --terminal-text: #0f0;
  --transition-speed: 0.3s;
  --glitch-intensity: 0.15s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none;
}

body {
  font-family: 'Courier New', monospace;
  line-height: 1.6;
  color: var(--terminal-text);
  background-color: var(--terminal-bg);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 2px, transparent 30px);
  pointer-events: none;
  z-index: 10;
  animation: scanline 10s linear infinite;
  opacity: 0.15;
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) 2px, transparent 2px, transparent 4px);
  background-size: 4px 4px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.2;
}

#custom-cursor {
  position: fixed;
  width: 16px;
  height: 16px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
  box-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary), 0 0 30px var(--primary);
  transition: all 0.1s ease;
}

#custom-cursor::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
}

#custom-cursor::after {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 1px solid var(--primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.3; }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
  }
  20%, 22%, 24%, 55% {
    opacity: 0.8;
  }
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

header {
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  border-bottom: 1px solid var(--primary);
  padding-bottom: 1rem;
}

.title {
  font-family: 'Courier New', monospace;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 0 10px var(--primary);
  color: var(--primary);
}

.glitch-text {
  position: relative;
}

.glitch-text.glitching {
  animation: glitch var(--glitch-intensity) linear 1;
}

.terminal-info {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #111;
  border: 1px solid var(--primary);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.command-line {
  text-align: left;
  background-color: #000;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  border-left: 4px solid var(--primary);
}

.prompt {
  color: var(--accent);
  margin-right: 0.5rem;
}

.command {
  color: var(--light);
}

.blink {
  animation: blink 1s infinite;
}

@keyframes shimmer {
  0% { width: 50px; opacity: 0; }
  50% { width: 200px; opacity: 1; }
  100% { width: 50px; opacity: 0; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.highlight {
  color: var(--accent);
}

.terminal-menu {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  background-color: #111;
  padding: 0.5rem;
  border: 1px solid var(--primary);
}

.terminal-menu button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  background-color: #000;
  color: var(--primary);
  border: 1px solid var(--primary);
  cursor: none;
  transition: all var(--transition-speed);
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.terminal-menu button:hover {
  background-color: #0a0a0a;
  box-shadow: 0 0 10px var(--primary);
  color: var(--accent);
}

.icon {
  font-size: 0.9rem;
  color: var(--accent);
}

button.selected {
  background-color: var(--primary);
  color: #000;
}

.section-title {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, var(--primary), var(--accent));
  border-radius: 2px;
}

.content-container {
  margin-bottom: 2rem;
  border: 1px solid var(--primary);
  background-color: #111;
  animation: fadeIn 0.6s;
}

.terminal-header {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 0.5rem;
  border-bottom: 1px solid var(--primary);
}

.access-code {
  color: var(--accent);
}

.file-path {
  color: var(--primary);
}

.terminal-selector {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 0;
  min-height: 400px;
}

.file-system {
  background-color: #0a0a0a;
  border-right: 1px solid var(--primary);
  padding: 0.5rem;
  overflow-y: auto;
}

.directory {
  margin-bottom: 0.5rem;
}

.directory-header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: none;
  transition: background-color 0.2s;
}

.directory-header:hover {
  background-color: #111;
}

.dir-icon {
  margin-right: 0.5rem;
  color: var(--accent);
}

.dir-name {
  color: var(--secondary);
}

.directory-contents {
  padding-left: 1.5rem;
}

.file-entry {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.2rem 0;
  cursor: none;
  transition: all 0.2s;
}

.file-entry:hover {
  background-color: #111;
}

.file-entry.active {
  background-color: var(--primary);
}

.file-entry.active .file-name {
  color: #000;
}

.file-icon {
  margin-right: 0.5rem;
  color: var(--accent);
}

.file-name {
  color: var(--primary);
}

.terminal-output {
  background-color: #0a0a0a;
  padding: 0.5rem;
  overflow: auto;
}

.output-window {
  height: 100%;
  border: 1px solid var(--primary);
  display: flex;
  flex-direction: column;
}

.window-header {
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  padding: 0.5rem;
  color: #000;
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  display: inline-block;
  text-align: center;
  line-height: 12px;
  border-radius: 50%;
  background-color: #000;
  color: var(--primary);
  font-size: 10px;
}

.window-content {
  padding: 1rem;
  flex-grow: 1;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.message-container {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid var(--primary);
  animation: fadeIn 0.3s;
}

.message {
  font-family: 'Courier New', monospace;
  color: var(--primary);
}

.product-list {
  grid-column: span 2;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

footer {
  text-align: center;
  margin-top: 3rem;
  padding: 1rem;
  color: #6c757d;
  font-size: 0.9rem;
}

/* Animações */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animação de transição entre abas */
.glitch-enter-active,
.glitch-leave-active {
  transition: opacity 0.3s;
  position: relative;
}

.glitch-enter-from,
.glitch-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.glitch-enter-active {
  animation: glitch 0.3s ease-out;
}

/* Cursor piscando */
.cursor-effect::after {
  content: '|';
  opacity: v-bind('cursorVisible ? 1 : 0');
  animation: blink 1s infinite;
  margin-left: 2px;
}

.card-content h3::after,
.card-content p::after,
.title::after {
  content: '|';
  display: inline-block;
  animation: blink 1s infinite;
  color: var(--primary);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Efeitos de partículas */
.particle {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px 2px rgba(76, 201, 240, 0.3);
  animation: particle-animation 3s ease-in-out;
}

@keyframes particle-animation {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) rotate(720deg);
  }
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--primary);
  font-family: 'Courier New', monospace;
}

.terminal-footer {
  display: flex;
  justify-content: space-between;
  background-color: #111;
  padding: 0.5rem;
  border: 1px solid var(--primary);
  font-size: 0.8rem;
  color: var(--primary);
  margin-top: 1rem;
}

.binary-code {
  position: absolute;
  font-size: 14px;
  color: var(--primary);
  opacity: 0.7;
  font-family: monospace;
  pointer-events: none;
  animation: binary-fade 1s forwards;
  z-index: 10;
}

@keyframes binary-fade {
  0% { opacity: 0.7; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}

/* Responsividade */
@media (max-width: 768px) {
  .terminal-selector {
    grid-template-columns: 1fr;
  }
  
  .file-system {
    border-right: none;
    border-bottom: 1px solid var(--primary);
    max-height: 200px;
  }
}
</style>