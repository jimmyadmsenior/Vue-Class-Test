<script setup>
import { ref } from 'vue';
import Card from '../Card.vue';
import ButtonComponente from '../ButtonComponente.vue';

// Dados para os cards
const cards = ref([
  {
    id: 1,
    titulo: 'Desenvolvimento Front-end',
    descricao: 'Tecnologias para construção de interfaces web modernas',
    conteudo: 'Vue.js é um framework progressivo para construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotado incrementalmente.',
    tags: ['Vue.js', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 2,
    titulo: 'Componentes Reutilizáveis',
    descricao: 'Criação de componentes modulares para melhor manutenção',
    conteudo: 'Os componentes são uma das características mais poderosas do Vue.js. Eles permitem encapsular código reutilizável, incluindo a marcação HTML, lógica JavaScript e estilos CSS.',
    tags: ['Componentes', 'Props', 'Slots']
  }
]);

// Função para adicionar um novo card
const novoTitulo = ref('');
const novaDescricao = ref('');
const novoConteudo = ref('');
const novasTags = ref('');

function adicionarCard() {
  if (novoTitulo.value.trim() && novaDescricao.value.trim()) {
    cards.value.push({
      id: cards.value.length + 1,
      titulo: novoTitulo.value,
      descricao: novaDescricao.value,
      conteudo: novoConteudo.value || 'Sem conteúdo adicional',
      tags: novasTags.value ? novasTags.value.split(',').map(tag => tag.trim()) : []
    });
    
    // Limpar campos
    novoTitulo.value = '';
    novaDescricao.value = '';
    novoConteudo.value = '';
    novasTags.value = '';
  }
}

function removerCard(id) {
  cards.value = cards.value.filter(card => card.id !== id);
}
</script>

<template>
  <div class="exercicio-container">
    <h2 class="titulo">Exercício: Componente Card</h2>
    
    <div class="descricao">
      <p>Este exercício demonstra o uso do componente Card com props e slots.</p>
      <p>O componente Card recebe props para título e descrição, e possui slots para o conteúdo principal e rodapé.</p>
    </div>
    
    <div class="secao-demo">
      <h3 class="subtitulo">Cards Existentes</h3>
      
      <div class="cards-grid">
        <Card 
          v-for="card in cards" 
          :key="card.id"
          :titulo="card.titulo"
          :descricao="card.descricao"
        >
          <p class="card-content-text">{{ card.conteudo }}</p>
          
          <div v-if="card.tags && card.tags.length > 0" class="tags-container">
            <span v-for="(tag, index) in card.tags" :key="index" class="tag">
              {{ tag }}
            </span>
          </div>
          
          <template #footer>
            <div class="card-footer-content">
              <span class="card-id">ID: {{ card.id }}</span>
              <ButtonComponente class="btn-small" @click="removerCard(card.id)">Remover</ButtonComponente>
            </div>
          </template>
        </Card>
      </div>
      
      <div class="add-card-section">
        <h3 class="subtitulo">Adicionar Novo Card</h3>
        
        <div class="form-container">
          <div class="form-group">
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" v-model="novoTitulo" placeholder="Digite o título" />
          </div>
          
          <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" v-model="novaDescricao" placeholder="Digite a descrição" />
          </div>
          
          <div class="form-group">
            <label for="conteudo">Conteúdo:</label>
            <textarea id="conteudo" v-model="novoConteudo" placeholder="Digite o conteúdo principal" rows="3"></textarea>
          </div>
          
          <div class="form-group">
            <label for="tags">Tags (separadas por vírgula):</label>
            <input type="text" id="tags" v-model="novasTags" placeholder="Ex: Vue.js, Componentes" />
          </div>
          
          <ButtonComponente @click="adicionarCard">Adicionar Card</ButtonComponente>
        </div>
      </div>
    </div>
    
    <div class="secao-codigo">
      <h3 class="subtitulo">Código do Componente</h3>
      <div class="codigo-container">
        <pre class="codigo">
&lt;script setup&gt;
// Card.vue - Componente de card com props e slots

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    default: ''
  }
});
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="card-component"&gt;
    &lt;div class="card-header"&gt;
      &lt;h3 class="card-title"&gt;{{ titulo }}&lt;/h3&gt;
      &lt;p v-if="descricao" class="card-description"&gt;{{ descricao }}&lt;/p&gt;
    &lt;/div&gt;
    
    &lt;div class="card-body"&gt;
      &lt;!-- Slot padrão para o conteúdo principal --&gt;
      &lt;slot&gt;
        &lt;p class="empty-content"&gt;Sem conteúdo disponível&lt;/p&gt;
      &lt;/slot&gt;
    &lt;/div&gt;
    
    &lt;div class="card-footer"&gt;
      &lt;!-- Slot nomeado para o rodapé --&gt;
      &lt;slot name="footer"&gt;
        &lt;span class="timestamp"&gt;{{ new Date().toLocaleString() }}&lt;/span&gt;
      &lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exercicio-container {
  border: 1px solid var(--primary);
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.titulo {
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.descricao {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px dashed var(--primary);
  background-color: rgba(0, 0, 0, 0.2);
}

.descricao p {
  margin-bottom: 0.5rem;
}

.subtitulo {
  color: var(--accent);
  margin: 1.5rem 0 1rem;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.5rem;
}

.secao-demo {
  margin-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card-content-text {
  margin-bottom: 1.5rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background-color: rgba(0, 255, 0, 0.1);
  color: var(--secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid var(--secondary);
}

.card-footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-id {
  color: var(--accent);
  font-size: 0.8rem;
}

.btn-small {
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.add-card-section {
  border: 1px dashed var(--primary);
  padding: 1.5rem;
  margin-top: 2rem;
  background-color: rgba(0, 255, 0, 0.05);
}

.form-container {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  background-color: #111;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-family: 'Courier New', monospace;
}

.secao-codigo {
  margin-top: 2rem;
}

.codigo-container {
  background-color: #0a0a0a;
  border: 1px solid var(--primary);
  border-radius: 4px;
  padding: 1rem;
}

.codigo {
  color: var(--primary);
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
