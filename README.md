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

