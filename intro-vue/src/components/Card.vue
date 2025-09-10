<script setup>
// Card.vue - Componente de card com props e slots

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="card-component">
    <div class="card-header">
      <h3 class="card-title">{{ titulo }}</h3>
      <p v-if="descricao" class="card-description">{{ descricao }}</p>
    </div>
    
    <div class="card-body">
      <!-- Slot padrão para o conteúdo principal -->
      <slot>
        <p class="empty-content">Sem conteúdo disponível</p>
      </slot>
    </div>
    
    <div class="card-footer">
      <!-- Slot nomeado para o rodapé -->
      <slot name="footer">
        <span class="timestamp">{{ new Date().toLocaleString() }}</span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card-component {
  background-color: #111;
  border: 1px solid var(--primary);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  transition: all 0.3s ease;
  margin: 1rem;
  max-width: 100%;
  position: relative;
}

.card-component::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--primary);
}

.card-component:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 255, 0, 0.5);
}

.card-header {
  padding: 1rem;
  background-color: rgba(0, 255, 0, 0.1);
  border-bottom: 1px solid var(--primary);
}

.card-title {
  color: var(--primary);
  margin: 0 0 0.5rem 0;
  font-family: 'Courier New', monospace;
}

.card-description {
  margin: 0;
  font-size: 0.9rem;
  color: var(--secondary);
  line-height: 1.4;
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1;
}

.empty-content {
  color: #666;
  font-style: italic;
  text-align: center;
}

.card-footer {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid var(--primary);
  font-size: 0.8rem;
  color: var(--accent);
}

.timestamp {
  font-size: 0.75rem;
  color: var(--accent);
}

/* Responsividade */
@media (max-width: 768px) {
  .card-component {
    margin: 0.5rem;
  }
  
  .card-header, .card-body, .card-footer {
    padding: 0.75rem;
  }
}
</style>
