# Masterclass TypeScript
## Edilson Alexandre Cuamba
### Aprendendo A utilizar typescript com node e com react;

**O que TypeScript?**\
É uma linguagem que ao ser compilada transpile código em JS na versão suportada pelo Node e pelos Navegadores.

1. Quando utilizamos TypeScript devemos sempre informar o tipo de dados que vamos utilizar, quando utilizamos uma lib de terceiros devemos sempre saber se ela não nos disponibiliza uma interface com a representação do tipo de dados ou não.
2. Devemos baixar a biblioteca de tipagens para o typescript quando utilizamos uma biblioteca externa, isso ajuda a termos highlights ao escrever código.
3. Node não entende TypeScript, devemos utilizar o tsc para transpile código TS para JS.
4. Para conseguir fazer importação e exportação com default devemos definir uma propriedade no ficheiro de configuração do TS, tsconfig.
5. É graças a esta propriedade que podemos importa como no JS puro, ""esModuleInterop": true,   ".
6. Utilizando a propriedade ""outDir": "./dist", " podemos definir onde os ficheiros transpilados vão ficar.
7. Com a biblioteca ts-node-dev, podemos definir um ambiente de desenvolvimento onde teremos hot reload log após salvarmos o ficheiro.
8. Não precisamos informar o tipo de dados sempre que declaramos uma nova var.
9. Sempre que utilzarmos uma classe ou variavel de uma lib devemos definir o seu tipo utilizado os dois pontos : tipo;
10. Devemos criar as nossas interface definindo os tipos de dados e etc.
11. Podemos criar uma interface que defini metodos;

