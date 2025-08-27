<script setup>
let exibir = false
let media = 8
</script>

<template>
<h1 v-if="exibir">Testando a diretiva V-if</h1>
<p v-if="media>=7">Aprovado</p>
<p v-else-if="media<5">Em recuperação</p>
<p v-else>reprovado</p>
</template>