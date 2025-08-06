<template>
  <div>
    <p>Meu nome é {{ nome }}, tenho {{ idade }} anos e sou {{ profissao }}.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: 'Jimmy',
      idade: 18,
      profissao: 'Cybersecurity Engineer'
    }
  }
}
</script>
