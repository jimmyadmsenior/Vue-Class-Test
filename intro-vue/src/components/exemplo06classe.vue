<script setup>
    let validacao = false
    let iserror = false
    let isactive = true
    let isdisable = false
</script>

<template>
    <!-- <p :class="validacao ? 'ok' : 'falha'">Utilizando a diretiva class</p> -->
    <p :class="{
     'ok': isactive,
     'falha': iserror
     }">testando diretiva Class</p>

     <button :disabled="isdisable">Clique aqui</button>
</template>

<style scoped>
.falha {
    color: red;
}
.ok {
    color: green;
}
</style>