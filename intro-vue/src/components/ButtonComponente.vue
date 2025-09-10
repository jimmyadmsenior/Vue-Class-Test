<script setup>
// ButtonComponente.vue - Componente de botão com slot para o texto
const emit = defineEmits(['click']);

function handleClick(event) {
  emit('click', event);
}
</script>

<template>
  <button class="custom-button" @click="handleClick">
    <!-- Slot padrão para o conteúdo do botão -->
    <slot>Botão</slot>
  </button>
</template>

<style scoped>
.custom-button {
  background-color: #111;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.75rem 1.5rem;
  font-family: 'Courier New', monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 5px var(--primary);
}

.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent);
  transition: all 0.5s ease;
}

.custom-button:hover {
  background-color: var(--primary);
  color: #000;
  box-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary);
}

.custom-button:hover::before {
  left: 100%;
}

.custom-button:active {
  transform: scale(0.95);
}
</style>
