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
  'Exemplo10props.vue',
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

// Efeito de cursor piscando
onMounted(() => {
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
});
</script>

<template>
  <div class="app-container">
    <header>
      <h1 class="title">Vue.js <span class="highlight">Exemplos & Exercícios</span></h1>
      <nav>
        <button :class="{selected: mainMenu === 'exercicios'}" @click="switchTab('exercicios')">
          <span class="icon">📝</span> Exercícios
        </button>
        <button :class="{selected: mainMenu === 'exemplos'}" @click="switchTab('exemplos')">
          <span class="icon">🔍</span> Exemplos
        </button>
      </nav>
    </header>

    <main>
      <transition name="fade" mode="out-in">
        <div v-if="mainMenu === 'exercicios'" key="exercicios" class="content-container">
          <h2 class="section-title">Exercícios</h2>
          <div class="card-grid">
            <div v-for="file in exercises" :key="file" class="card exercicio-card">
              <h3 class="card-title">
                {{ file.replace('.vue', '').replace('exercicio', 'Exercício ').replace(/\b\w/g, char => char.toUpperCase()) }}
              </h3>
              <div class="card-content">
                <component :is="getExerciseComponent(file)" />
              </div>
            </div>
            <div class="card exercicio-card product-list">
              <h3 class="card-title">Exercício: Lista de Produtos</h3>
              <div class="card-content">
                <div class="products-grid">
                  <div v-for="product in products" :key="product.name">
                    <ProductTerm :name="product.name" :price="product.price" @buy="handleBuy" />
                  </div>
                </div>
                <div v-if="message" class="message-container">
                  <p class="message">{{ message }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else key="exemplos" class="content-container">
          <h2 class="section-title">Exemplos</h2>
          <div class="card-grid">
            <div v-for="file in examples" :key="file" class="card exemplo-card">
              <h3 class="card-title">
                {{ file.replace('.vue', '').replace(/exemplo/i, 'Exemplo ').replace(/\b\w/g, char => char.toUpperCase()) }}
              </h3>
              <div class="card-content">
                <component :is="getExampleComponent(file)" />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </main>

    <footer>
      <p>Vue.js - Exercícios & Exemplos &copy; 2025</p>
    </footer>
  </div>
</template>

<style>
:root {
  --primary: #4361ee;
  --secondary: #3f37c9;
  --accent: #4cc9f0;
  --light: #f8f9fa;
  --dark: #212529;
  --success: #4ade80;
  --warning: #fbbf24;
  --danger: #f87171;
  --card-bg: #ffffff;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #f0f2f5;
  color: var(--dark);
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 2rem;
  animation: fadeInDown 1s;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.highlight {
  color: var(--accent);
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

nav button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  background-color: #e9ecef;
  color: var(--dark);
  cursor: pointer;
  transition: all var(--transition-speed);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

nav button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 1.2rem;
}

button.selected {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
  animation: fadeInUp 0.6s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.card-title {
  padding: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-size: 1.2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-content {
  padding: 1.5rem;
  min-height: 150px;
}

.message-container {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #e6f7ff;
  border-left: 4px solid var(--accent);
  border-radius: 4px;
  animation: fadeIn 0.3s;
}

.message {
  font-weight: 500;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Cursor piscando */
.cursor-effect::after {
  content: '|';
  opacity: v-bind('cursorVisible ? 1 : 0');
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Responsividade */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
  
  .product-list {
    grid-column: auto;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>