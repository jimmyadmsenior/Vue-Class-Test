<template>
  <div class="product">
    <h3>{{ name }}</h3>
    <p>Preço: R$ {{ price.toFixed(2) }}</p>
    <button @click="buyProduct">Comprar</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    buyProduct() {
      this.$emit('buy', this.name);
    }
  }
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
}
button {
  background-color: #64b5ff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #428bca;
}
</style>
