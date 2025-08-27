<script setup>
const props = defineProps({
    titulo: String,
    preco: Number,
    image: String,
    estoque: Boolean,
});
</script>

<template>
    <div class="card" v-if="titulo">
        <h3>{{ titulo }}</h3>
        <p v-if="preco">Preço:{{ preco }}</p>
    <img v-if="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujpKRVC1SFE6oo_-DfIiF9RWXmsX-FD40yRoOV8tbugibd6l92GbdYTiRISNtbB7PPS4&usqp=CAU" alt="Imagem Card" style="max-width: 100px;" />
        <div :class="estoque ? 'ativo' : 'inativo'">{{ estoque ? 'Ativo' : 'Inativo' }}
        </div>
    </div>
</template>
<style scoped>
.card {
    border: 1px solid #605e5e;
    padding: 1rem;
    margin: 1rem;
}
.ativo {
        color: green;
}
.inativo{
    color: red;
}
</style>
