<template>
  <div>
    <p>Soma: {{ a + b }}</p>
    <p>Subtração: {{ a - b }}</p>
    <p>Multiplicação: {{ a * b }}</p>
    <p>Divisão: {{ a / b }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 15,
      b: 25
    }
  }
}
</script>
