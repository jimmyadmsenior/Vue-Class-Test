<script setup>
let idade = 20
</script>

<template>
<p v-if="idade >= 0 && idade < 13">criança</p>
<p v-else-if="idade >= 13 && idade < 18">adolescente</p>
<p v-else-if="idade >= 18 && idade < 60">adulto</p>
<p v-else>idoso</p> 
</template>