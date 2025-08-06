<script setup>

let exibir = true

let media = 8

</script>

<template>

<h1 v-if="exibir"> Testando a diretiva V-IF </h1>

<p v-if="media >= 7">Aprovado</p>

<p v-else-if="media >= 5">Em recuperação</p>

<p v-else>Reprovado</p>

</template>