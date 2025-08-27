<script setup>
let dataAtual = new Date()
</script>

<template>
<p>{{ `Ano atual: ${dataAtual.getFullYear()}` }}</p>
</template>