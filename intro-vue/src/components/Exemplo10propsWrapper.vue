<template>
  <div class="exemplo10-container">
    <h3 class="title">Exemplo de Props</h3>
    <div class="users-grid">
      <Exemplo10props 
        nome="João Silva" 
        email="joao@example.com" 
        telefone="(11) 99999-8888" 
        :idade="28" 
        :ativo="true" 
      />
      <Exemplo10props 
        nome="Maria Santos" 
        email="maria@example.com" 
        telefone="(11) 97777-6666" 
        :idade="32" 
        :ativo="false" 
      />
      <Exemplo10props 
        nome="Carlos Oliveira" 
        email="carlos@example.com" 
        telefone="(11) 95555-4444" 
        :idade="45" 
        :ativo="true" 
      />
    </div>
  </div>
</template>

<script setup>
import Exemplo10props from './Exemplo10props.vue';
</script>

<style scoped>
.exemplo10-container {
  padding: 20px;
  width: 100%;
}

.title {
  margin-bottom: 20px;
  text-align: center;
}

.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}
</style>
