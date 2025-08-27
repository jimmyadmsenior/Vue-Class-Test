<script setup>
let text='<p style="color:red">testando a diretiva v-html</p>'
</script>
<template>
    <div v-html="texto"></div>
    <div>{{ texto }}</div>
</template>