// ComponentImports.js
// Este arquivo serve como um ponto central para importar todos os componentes
// e garantir que os caminhos de importação sejam consistentes entre ambientes

// IMPORTANTE: O Vue em produção (especialmente no Vercel) requer que os caminhos de importação
// correspondam exatamente ao caminho físico no sistema de arquivos, incluindo maiúsculas/minúsculas

// Importações de Exercícios usando path alias (definido em vite.config.js)
import Exercicio1 from '@exercicios/Exercicio1.vue';
import Exercicio1Condicional from '@exercicios/Exercicio1condicional.vue';
import Exercicio2Condicional from '@exercicios/Exercicio2condicional.vue';
import Exercicio3 from '@exercicios/Exercicio3.vue';
import Exercicio5 from '@exercicios/Exercicio5.vue';
import Exercicio6 from '@exercicios/Exercicio6.vue';
import Exercicio7 from '@exercicios/Exercicio7.vue';
import Exercicio8 from '@exercicios/Exercicio8.vue';
import Exercicio9 from '@exercicios/Exercicio9.vue';
import Exercicio10 from '@exercicios/Exercicio10.vue';
import Exercicio11 from '@exercicios/Exercicio11.vue';
import ExercicioComponentes from '@exercicios/ExercicioComponentes.vue';

// Importações de Exemplos usando path alias (definido em vite.config.js)
import Exemplo01Interpolacao from '@components/Exemplo01Interpolacao.vue';
import Exemplo02Condicional from '@components/Exemplo02Condicional.vue';
import Exemplo03For from '@components/exemplo03for.vue'; // Note: lowercase
import Exemplo04Html from '@components/exemplo04Html.vue'; // Note: lowercase
import Exemplo05Model from '@components/Exemplo05model.vue';
import Exemplo06Classe from '@components/exemplo06classe.vue'; // Note: lowercase
import Exemplo07 from '@components/Exemplo07.vue';
import Exemplo08Teclado from '@components/Exemplo08teclado.vue';
import Exemplo10PropsWrapper from '@components/Exemplo10propsWrapper.vue';
import Exemplo11Emits from '@components/Exemplo11Emits.vue';
import Exemplo2 from '@components/Exemplo2.vue';
import Exemplo3 from '@components/Exemplo3.vue';

// Exportar todos os componentes de exercícios com seus nomes de arquivo
export const exerciseComponents = [
  { name: 'Exercicio1.vue', component: Exercicio1 },
  { name: 'Exercicio1condicional.vue', component: Exercicio1Condicional },
  { name: 'Exercicio2condicional.vue', component: Exercicio2Condicional },
  { name: 'Exercicio3.vue', component: Exercicio3 },
  { name: 'Exercicio5.vue', component: Exercicio5 },
  { name: 'Exercicio6.vue', component: Exercicio6 },
  { name: 'Exercicio7.vue', component: Exercicio7 },
  { name: 'Exercicio8.vue', component: Exercicio8 },
  { name: 'Exercicio9.vue', component: Exercicio9 },
  { name: 'Exercicio10.vue', component: Exercicio10 },
  { name: 'Exercicio11.vue', component: Exercicio11 },
  { name: 'ExercicioComponentes.vue', component: ExercicioComponentes },
];

// Exportar todos os componentes de exemplos com seus nomes de arquivo
export const exampleComponents = [
  { name: 'Exemplo01Interpolacao.vue', component: Exemplo01Interpolacao },
  { name: 'Exemplo02Condicional.vue', component: Exemplo02Condicional },
  { name: 'Exemplo03for.vue', component: Exemplo03For },
  { name: 'Exemplo04Html.vue', component: Exemplo04Html },
  { name: 'Exemplo05model.vue', component: Exemplo05Model },
  { name: 'Exemplo06classe.vue', component: Exemplo06Classe },
  { name: 'Exemplo07.vue', component: Exemplo07 },
  { name: 'Exemplo08teclado.vue', component: Exemplo08Teclado },
  { name: 'Exemplo10propsWrapper.vue', component: Exemplo10PropsWrapper },
  { name: 'Exemplo11Emits.vue', component: Exemplo11Emits },
  { name: 'Exemplo2.vue', component: Exemplo2 },
  { name: 'Exemplo3.vue', component: Exemplo3 },
];
