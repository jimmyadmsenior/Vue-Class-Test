<template>
  <div>
    <p>Ano: {{ dataAtual.getFullYear() }}</p>
    <p>Mês: {{ dataAtual.getMonth() + 1 }}</p>
    <p>Dia: {{ dataAtual.getDate() }}</p>
    <p>Data completa: {{ dataAtual.toLocaleDateString() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataAtual: new Date()
    }
  }
}
</script>