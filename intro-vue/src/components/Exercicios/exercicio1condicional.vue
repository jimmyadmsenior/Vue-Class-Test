<script setup>
import { ref } from 'vue'
let usuariologado = ref(false)
</script>

<template>
  <div>
    <p v-if="usuariologado.value">Bem-vindo</p>
    <div v-else>
      <p>Faça login</p>
      <button @click="usuariologado.value = true">
        Entrar
      </button>
    </div>
  </div>
</template>