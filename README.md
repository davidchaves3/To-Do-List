# To-Do-List
  <div align = center>
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDdtdGdnMjV5NmtxeWdpcG93enU5N2M0eGl4b3hkMjNqbXZiMDE4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B7o99rIuystY4/giphy.gif" />
  </div>

## Sobre o Projeto

Este projeto foi criado com o objetivo de desenvolver uma aplicação To-Do List.
Um To-Do List é uma aplicação simples para gerenciamento de tarefas, permitindo que o usuário adicione atividades, visualize uma lista organizada e marque quais já foram concluídas. Essa abordagem ajuda no controle de pendências do dia a dia e melhora a organização pessoal.

## Tecnologias Utilizadas

* `React` — biblioteca para criação da interface.
* `TypeScript` — superset do JavaScript que adiciona tipagem estática.
* `Vite` — ferramenta para inicialização e build rápido do projeto.
* `Tailwind CSS` — framework de utilitários para estilização.
* `shadcn/ui` — componentes pré-estilizados integrados ao Tailwind.

## Estrutura de Componentes

* `App.tsx`: componente principal que centraliza o estado da aplicação. Ele guarda a lista de tarefas, o texto do input e as funções de adicionar, alternar e remover tarefas.

* `Header.tsx`: exibe o título da página.

* `TaskInput.tsx`: componente responsável pelo campo de texto e botão de adicionar tarefa. Ele recebe o valor do input e os callbacks do App via props.

* `TaskList.tsx`: renderiza a lista de tarefas. Recebe do App o array de tarefas e funções para alternar ou remover, e repassa para cada TaskItem.

* `TaskItem.tsx`: representa uma tarefa individual, com checkbox e botão de remoção. Chama as funções recebidas por props para atualizar o estado no App.

* `components/ui`: pasta com os componentes prontos exportados do shadcn/ui (como Button, Checkbox e Input), usados para compor a interface da aplicação.

## Gerenciamento de Estado
A aplicação utiliza dois estados principais:

1. Lista de Tarefas (tarefas) — guarda todas as tarefas criadas.

2. Texto do Input (texto) — controla o valor do campo de digitação.

Exemplo do código no `App.tsx`:

      //Estado que guarda todas as tarefas (array de objetos do tipo Tarefa)
      const [tarefas, setTarefas] = useState<Tarefa[]>([]);

      //Estado que guarda o texto digitado no input antes de virar uma tarefa
      const [texto, setTexto] = useState("");
Quando o usuário adiciona uma nova tarefa, a função `adicionarTarefa` cria um objeto `Tarefa` e o insere no array `tarefas`:

    function adicionarTarefa() {
      const titulo = texto.trim();
      if (titulo === "") return;

      const nova: Tarefa = { id: Date.now(), texto: titulo, concluida: false };
      setTarefas((prev) => [...prev, nova]); // atualiza o estado de forma imutável
      setTexto(""); // limpa o input
    }
## Tipagem com TypeScript

A aplicação utiliza interfaces para definir contratos claros entre os dados e os componentes.
* Interface da Tarefa:

      interface Tarefa {
        id: number;
        texto: string;
        concluida: boolean;
      }
* Props do TaskItem:

      interface TaskItemProps {
        tarefa: Tarefa;
        onToggle: (id: number) => void;
        onRemove: (id: number) => void;
      }
* Props do TaskInput:

      interface TaskInputProps {
        valor: string;
        onChange: (texto: string) => void;
        onAdd: () => void;
      }
* Props do TaskList:

      interface TaskListProps {
        tarefas: Tarefa[];
        onToggle: (id: number) => void;
        onRemove: (id: number) => void;
      }

## Efeitos Colaterais

O `useEffect` é utilizado para executar ações sempre que o estado da aplicação mudar.

Neste projeto, ele foi usado para atualizar o título da aba do navegador com a quantidade de tarefas que ainda estão pendentes. Isso torna a aplicação mais interativa, pois o usuário consegue visualizar as pendências mesmo fora da tela principal.

Exemplo no `App.tsx`:

    useEffect(() => {
      const pendentes = tarefas.filter((t) => !t.concluida).length;
      document.title = `(${pendentes}) tarefas pendentes`;
    }, [tarefas]);

* `tarefas.filter((t) => !t.concluida).length `→ conta quantas tarefas não estão concluídas.

* `document.title = ... `→ altera o título da aba do navegador.

* `[tarefas] `→ o efeito só roda quando a lista de tarefas mudar.

  <div align = center>
    <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bmxqNmJ1aW15NjVwemY2cDVvbHlqcDlzMW40bGZqNTMzaGtvYXUwaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1Z02vuppxP1Pa/giphy.gif" />
  </div>