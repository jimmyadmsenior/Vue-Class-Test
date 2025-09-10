<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Modal.vue - Componente de modal com slots nomeados
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const isVisible = ref(props.show);

function closeModal() {
  isVisible.value = false;
  emit('close');
}

// Fechar modal com tecla ESC
function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
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
    <div v-if="show" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
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
</style>
