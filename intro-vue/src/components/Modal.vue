<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// Modal.vue - Componente de modal com slots nomeados
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const isVisible = ref(props.show);

// Cursos customizado para o modal
const customCursorElement = ref(null);
const modalElement = ref(null);

// Criar um cursor personalizado específico para o modal
onMounted(() => {
  // Criar elemento para o cursor do modal
  if (!document.getElementById('modal-cursor')) {
    customCursorElement.value = document.createElement('div');
    customCursorElement.value.id = 'modal-cursor';
    customCursorElement.value.style.cssText = `
      position: fixed;
      width: 16px;
      height: 16px;
      border: 2px solid var(--primary);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10001;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      box-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary), 0 0 30px var(--primary);
      display: none;
    `;
    document.body.appendChild(customCursorElement.value);
  } else {
    customCursorElement.value = document.getElementById('modal-cursor');
  }
});

// Função para restaurar o cursor do app
function restoreAppCursor() {
  const appCursor = document.getElementById('custom-cursor');
  if (appCursor) {
    appCursor.style.display = 'block';
    
    // Se temos uma posição do mouse salva, usá-la para posicionar o cursor
    if (window._lastMousePosition) {
      appCursor.style.left = `${window._lastMousePosition.x}px`;
      appCursor.style.top = `${window._lastMousePosition.y}px`;
    }
  }
}

// Remover o cursor personalizado ao desmontar
onUnmounted(() => {
  if (customCursorElement.value && document.body.contains(customCursorElement.value)) {
    document.body.removeChild(customCursorElement.value);
  }
  
  // Garantir que o cursor do app seja restaurado quando o componente for desmontado
  restoreAppCursor();
});

// Observar a visibilidade do modal
watch(() => props.show, (newValue) => {
  // Obter referência ao cursor do app
  const appCursor = document.getElementById('custom-cursor');
  
  if (newValue) {
    // Modal está sendo aberto
    if (customCursorElement.value) {
      customCursorElement.value.style.display = 'block';
    }
    
    // Esconder o cursor do app
    if (appCursor) {
      // Armazenar o estilo original para restauração
      appCursor.dataset.originalDisplay = appCursor.style.display || 'block';
      appCursor.style.display = 'none';
    }
  } else {
    // Modal está sendo fechado
    if (customCursorElement.value) {
      customCursorElement.value.style.display = 'none';
    }
    
    // Restaurar o cursor do app
    if (appCursor) {
      appCursor.style.display = appCursor.dataset.originalDisplay || 'block';
      
      // Restaurar a posição do cursor na posição atual do mouse
      setTimeout(() => {
        const event = new MouseEvent('mousemove', {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: window.innerWidth / 2,
          clientY: window.innerHeight / 2
        });
        document.dispatchEvent(event);
      }, 10);
    }
  }
});

function closeModal() {
  isVisible.value = false;
  
  // Restaurar o cursor original quando o modal fechar
  if (customCursorElement.value) {
    customCursorElement.value.style.display = 'none';
  }
  
  // Restaurar o cursor do app com um pequeno delay para garantir que a transição ocorra corretamente
  setTimeout(() => {
    restoreAppCursor();
    
    // Adicionar um evento de movimento para garantir que o cursor seja atualizado
    if (window._lastMousePosition) {
      document.dispatchEvent(new MouseEvent('mousemove', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: window._lastMousePosition.x,
        clientY: window._lastMousePosition.y
      }));
    }
  }, 50);
  
  emit('close');
}

// Fechar modal com tecla ESC
function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// Função para atualizar a posição do cursor personalizado quando o mouse está sobre o modal
function updateCustomCursor(e) {
  if (customCursorElement.value) {
    customCursorElement.value.style.left = `${e.clientX}px`;
    customCursorElement.value.style.top = `${e.clientY}px`;
  }
  
  // Armazenar as coordenadas atuais do mouse para uso quando o modal for fechado
  window._lastMousePosition = {
    x: e.clientX,
    y: e.clientY
  };
}

// Adicionar evento de teclado quando o componente é montado
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

// Remover evento quando o componente é desmontado
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="modal-overlay modal-cursor-fix" @click="closeModal" @mousemove="updateCustomCursor">
      <div ref="modalElement" class="modal-container" @click.stop @mousemove="updateCustomCursor">
        <div class="modal-header">
          <!-- Slot nomeado para o cabeçalho -->
          <slot name="header">
            <h3>Modal Header</h3>
          </slot>
          <button class="close-button" @click="closeModal">×</button>
        </div>
        
        <div class="modal-content">
          <!-- Slot padrão para o conteúdo principal -->
          <slot>
            <p>Conteúdo do modal...</p>
          </slot>
        </div>
        
        <div class="modal-footer">
          <!-- Slot nomeado para o rodapé -->
          <slot name="footer">
            <div class="modal-actions">
              <button class="cancel-button" @click="closeModal">Fechar</button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
  animation: fadeIn 0.3s ease;
  pointer-events: auto;
}

.modal-container {
  width: 80%;
  max-width: 600px;
  background-color: #111;
  border: 1px solid var(--primary);
  box-shadow: 0 0 15px var(--primary);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  animation: slideDown 0.3s ease;
  position: relative;
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 255, 0, 0.1);
}

.modal-content {
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid var(--primary);
  background-color: rgba(0, 255, 0, 0.1);
}

.close-button {
  background: transparent;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button:hover {
  color: var(--danger);
  transform: scale(1.2);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-button {
  background-color: #111;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
}

.cancel-button:hover {
  background-color: var(--primary);
  color: #000;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Garantir que o cursor personalizado funcione dentro do modal */
.modal-overlay,
.modal-container,
.modal-header,
.modal-content,
.modal-footer,
.modal-cursor-fix {
  cursor: none !important; /* Desativa o cursor padrão */
}

.modal-cursor-fix button,
.modal-cursor-fix a,
.modal-cursor-fix input,
.modal-cursor-fix textarea,
.modal-cursor-fix select {
  cursor: none !important;
}

/* Certifique-se de que a modal fique acima de outros elementos mas abaixo do cursor */
.modal-overlay {
  z-index: 9000;
}

/* Certifique-se de que o modal-cursor esteja acima de tudo */
#modal-cursor {
  z-index: 10001 !important;
}
</style>
