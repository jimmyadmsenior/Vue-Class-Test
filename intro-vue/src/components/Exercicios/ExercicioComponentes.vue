<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ButtonComponente from '../ButtonComponente.vue';
import Modal from '../Modal.vue';
import Card from '../Card.vue';

// Estado para controlar a visibilidade do modal
const showModal = ref(false);

// Função para abrir o modal
function openModal() {
  showModal.value = true;
}

// Função para fechar o modal
function closeModal() {
  showModal.value = false;
}

// Funções para os botões da demonstração
function handleButtonClick(message) {
  alert(`Botão "${message}" foi clicado!`);
}

// Função para Ver Detalhes do Card
function verDetalhesCard(id) {
  alert(`Detalhes do card ${id} serão exibidos!`);
}

// Função para copiar comando
function copiarComando() {
  const comando = "npm install vue";
  navigator.clipboard.writeText(comando)
    .then(() => {
      alert('Comando copiado para a área de transferência!');
    })
    .catch(err => {
      console.error('Erro ao copiar comando: ', err);
      alert('Não foi possível copiar o comando. Erro: ' + err);
    });
}

// Dados para os cards
const cards = [
  {
    id: 1,
    titulo: 'Card de Exemplo 1',
    descricao: 'Este é um exemplo de card utilizando o componente Card.vue',
    conteudo: 'Conteúdo principal do primeiro card. Você pode personalizar este conteúdo conforme necessário.'
  },
  {
    id: 2,
    titulo: 'Card de Exemplo 2',
    descricao: 'Demonstração de slots e props',
    conteudo: 'O slot padrão exibe este texto como conteúdo principal do card.'
  }
];
</script>

<template>
  <div class="components-demo">
    <h2 class="section-title">Demonstração de Componentes</h2>
    
    <div class="components-section">
      <h3>1. Componente ButtonComponente</h3>
      <div class="button-demo">
        <ButtonComponente @click="handleButtonClick('Clique Aqui')">Clique Aqui</ButtonComponente>
        <ButtonComponente @click="handleButtonClick('Enviar')">Enviar</ButtonComponente>
        <ButtonComponente @click="handleButtonClick('Cancelar')">Cancelar</ButtonComponente>
      </div>
    </div>
    
    <div class="components-section">
      <h3>2. Componente Modal</h3>
      <div class="modal-demo">
        <ButtonComponente @click="openModal">Abrir Modal</ButtonComponente>
        
        <Modal :show="showModal" @close="closeModal">
          <template #header>
            <h3>Exemplo de Modal</h3>
          </template>
          
          <div class="modal-demo-content">
            <p>Este é um exemplo de modal utilizando slots nomeados.</p>
            <p>O modal possui três slots:</p>
            <ul>
              <li>header: Para o cabeçalho</li>
              <li>default: Para o conteúdo principal</li>
              <li>footer: Para o rodapé</li>
            </ul>
          </div>
          
          <template #footer>
            <div class="modal-actions">
              <ButtonComponente @click="closeModal">Fechar Modal</ButtonComponente>
            </div>
          </template>
        </Modal>
      </div>
    </div>
    
    <div class="components-section">
      <h3>3. Componente Card</h3>
      <div class="cards-grid">
        <Card 
          v-for="card in cards" 
          :key="card.id"
          :titulo="card.titulo"
          :descricao="card.descricao"
        >
          <p>{{ card.conteudo }}</p>
          <ButtonComponente @click="verDetalhesCard(card.id)">Ver Detalhes</ButtonComponente>
          
          <template #footer>
            <div class="card-actions">
              <span class="card-id">ID: {{ card.id }}</span>
              <span class="card-date">{{ new Date().toLocaleDateString() }}</span>
            </div>
          </template>
        </Card>
        
        <!-- Card com conteúdo personalizado -->
        <Card 
          titulo="Card Personalizado" 
          descricao="Demonstração de personalização avançada"
        >
          <div class="custom-content">
            <div class="terminal-output">
              <div class="line command">$ npm install vue</div>
              <div class="line success">+ vue@3.2.47</div>
              <div class="line success">added 1 package, done in 2.5s</div>
            </div>
          </div>
          
          <template #footer>
            <div class="custom-footer">
              <ButtonComponente @click="copiarComando">Copiar Comando</ButtonComponente>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.components-demo {
  padding: 1rem;
  border: 1px solid var(--primary);
  background-color: rgba(0, 0, 0, 0.3);
}

.section-title {
  color: var(--primary);
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.components-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border: 1px dashed var(--primary);
  background-color: rgba(0, 0, 0, 0.2);
}

.components-section h3 {
  color: var(--accent);
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.5rem;
}

.button-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-demo-content {
  color: var(--primary);
  line-height: 1.6;
}

.modal-demo-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.modal-demo-content li {
  margin: 0.25rem 0;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8rem;
}

.card-id {
  font-family: monospace;
  color: var(--secondary);
}

.card-date {
  color: var(--accent);
}

.custom-content {
  background-color: #000;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
}

.terminal-output {
  font-family: 'Courier New', monospace;
  line-height: 1.5;
  color: #ccc;
}

.line {
  margin: 0.25rem 0;
}

.command {
  color: var(--primary);
  font-weight: bold;
  user-select: all; /* Makes the text easily selectable */
}

.success {
  color: var(--success);
}

.custom-footer {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Responsividade */
@media (max-width: 768px) {
  .button-demo, .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
