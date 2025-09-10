<script setup>
import { ref } from 'vue';
import Modal from '../Modal.vue';
import ButtonComponente from '../ButtonComponente.vue';

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

// Modal com formulário
const showFormModal = ref(false);
const nome = ref('');
const email = ref('');
const mensagem = ref('');
const mensagemEnviada = ref(false);

function abrirFormulario() {
  showFormModal.value = true;
}

function fecharFormulario() {
  showFormModal.value = false;
}

function enviarFormulario() {
  if (nome.value && email.value) {
    mensagemEnviada.value = true;
    setTimeout(() => {
      fecharFormulario();
      // Reset após fechar
      setTimeout(() => {
        mensagemEnviada.value = false;
        nome.value = '';
        email.value = '';
        mensagem.value = '';
      }, 500);
    }, 2000);
  }
}
</script>

<template>
  <div class="exercicio-container">
    <h2 class="titulo">Exercício: Componente Modal</h2>
    
    <div class="descricao">
      <p>Este exercício demonstra o uso do componente Modal com slots nomeados.</p>
      <p>O componente Modal possui três slots: header, default (conteúdo principal) e footer.</p>
    </div>
    
    <div class="secao-demo">
      <h3 class="subtitulo">Demonstração do Modal</h3>
      
      <div class="botoes-demo">
        <ButtonComponente @click="openModal">Abrir Modal Básico</ButtonComponente>
        <ButtonComponente @click="abrirFormulario">Abrir Modal com Formulário</ButtonComponente>
      </div>
      
      <!-- Modal Básico -->
      <Modal :show="showModal" @close="closeModal">
        <template #header>
          <h3>Exemplo de Modal</h3>
        </template>
        
        <div class="modal-content">
          <p>Este é um exemplo de modal utilizando slots nomeados para organizar o conteúdo.</p>
          <p>O componente Modal possui três áreas distintas:</p>
          <ul>
            <li><strong>Header:</strong> Para o cabeçalho (usando slot "header")</li>
            <li><strong>Conteúdo:</strong> Para o conteúdo principal (usando slot padrão)</li>
            <li><strong>Footer:</strong> Para o rodapé (usando slot "footer")</li>
          </ul>
        </div>
        
        <template #footer>
          <div class="modal-actions">
            <ButtonComponente @click="closeModal">Fechar</ButtonComponente>
          </div>
        </template>
      </Modal>
      
      <!-- Modal com Formulário -->
      <Modal :show="showFormModal" @close="fecharFormulario">
        <template #header>
          <h3>{{ mensagemEnviada ? 'Mensagem Enviada' : 'Formulário de Contato' }}</h3>
        </template>
        
        <div v-if="mensagemEnviada" class="success-message">
          <div class="icon">✓</div>
          <p>Sua mensagem foi enviada com sucesso!</p>
        </div>
        
        <form v-else @submit.prevent="enviarFormulario" class="formulario">
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" v-model="nome" required />
          </div>
          
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          
          <div class="form-group">
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" v-model="mensagem" rows="4"></textarea>
          </div>
        </form>
        
        <template #footer>
          <div class="modal-actions">
            <ButtonComponente v-if="!mensagemEnviada" @click="fecharFormulario">Cancelar</ButtonComponente>
            <ButtonComponente v-if="!mensagemEnviada" @click="enviarFormulario">Enviar</ButtonComponente>
          </div>
        </template>
      </Modal>
    </div>
    
    <div class="secao-codigo">
      <h3 class="subtitulo">Código do Componente</h3>
      <div class="codigo-container">
        <pre class="codigo">
&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue';

// Modal.vue - Componente de modal com slots nomeados
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}

// Fechar modal com tecla ESC
function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;Teleport to="body"&gt;
    &lt;div v-if="show" class="modal-overlay" @click="closeModal"&gt;
      &lt;div class="modal-container" @click.stop&gt;
        &lt;div class="modal-header"&gt;
          &lt;!-- Slot nomeado para o cabeçalho --&gt;
          &lt;slot name="header"&gt;
            &lt;h3&gt;Modal Header&lt;/h3&gt;
          &lt;/slot&gt;
          &lt;button class="close-button" @click="closeModal"&gt;×&lt;/button&gt;
        &lt;/div&gt;
        
        &lt;div class="modal-content"&gt;
          &lt;!-- Slot padrão para o conteúdo principal --&gt;
          &lt;slot&gt;
            &lt;p&gt;Conteúdo do modal...&lt;/p&gt;
          &lt;/slot&gt;
        &lt;/div&gt;
        
        &lt;div class="modal-footer"&gt;
          &lt;!-- Slot nomeado para o rodapé --&gt;
          &lt;slot name="footer"&gt;
            &lt;div class="modal-actions"&gt;
              &lt;button class="cancel-button" @click="closeModal"&gt;Fechar&lt;/button&gt;
            &lt;/div&gt;
          &lt;/slot&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/Teleport&gt;
&lt;/template&gt;
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

.botoes-demo {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.modal-content {
  margin-bottom: 1rem;
}

.modal-content p {
  margin-bottom: 0.5rem;
}

.modal-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.modal-content li {
  margin-bottom: 0.5rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
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

.formulario {
  margin: 1rem 0;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  background-color: #111;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-family: 'Courier New', monospace;
}

.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
}

.success-message .icon {
  font-size: 3rem;
  color: var(--success);
  margin-bottom: 1rem;
}

.success-message p {
  color: var(--success);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .botoes-demo {
    flex-direction: column;
  }
}
</style>
