<script setup>
let compras = ['Pão', 'Leite', 'Ovos', 'Frutas']
</script>

<template>
    <ul class="sem-ponto">
        <li v-for="(compra, index) in compras" :key="compra">
            {{ index + 1 }}. {{ compra }}
        </li>
    </ul>
</template>

<style scoped>
.sem-ponto {
    list-style: none;
    padding-left: 0;
}
</style>