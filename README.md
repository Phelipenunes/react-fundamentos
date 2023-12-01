# Fundamentos de react

## 00-Projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx

npm run dev -- --host 0.0.0.0 --open

1. Componente Artigo.jsx
   Transforme o <Artigo> em um componente estilizado (dê o nome que quiser) com as seguintes configurações:

Cor de fundo de sua preferência
Espaçamento interno de 1rem
Margem superior/inferior de 0.5rem e esquerda/direita de 0
Faça regras adicionais para:

Colocar uma cor e uma borda inferior no elemento <h3>
Aumentar o tamanho do <p> para 1.1rem
📢 DESAFIO
Crie uma Media Query que faça os 3 componentes <Artigo> ficarem lado a lado se a aplicação estiver em uma tela com largura mínima de 650px.

Faça os ajustes necessários no HTML/JSX e no CSS (Styled) para haja um espaço entre os artigos.

2. Componente Rodape.jsx
   Transforme o <Rodape> em um componente estilizado chamado StyledRodape com as seguintes configurações:

Plano de fundo com gradiente/degrade de cores de sua preferência
Altura de 30vh
Recursos do flex para alinhamento centralizado total
