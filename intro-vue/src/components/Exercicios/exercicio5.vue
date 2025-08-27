<script setup>
let texto = '<strong>Exemplo de texto em negrito</strong>'
</script>
<template>
    <h2>Comparação: Template Syntax vs v-html</h2>
    <p><strong>Com template syntax ({{ texto }})</strong>:</p>
    <div>{{ texto }}</div>
    <p><strong>Com v-html</strong>:</p>
    <div v-html="texto"></div>
</template>y