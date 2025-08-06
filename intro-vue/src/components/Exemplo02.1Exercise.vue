<template>
  <div>
    <p v-if="usuarioLogado">Bem-vindo!</p>
    <p v-else>Faça login</p>
    <button @click="toggleLogin">
      {{ usuarioLogado ? 'Sair' : 'Entrar' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarioLogado: false
    }
  },
  methods: {
    toggleLogin() {
      this.usuarioLogado = !this.usuarioLogado;
    }
  }
}
</script>
