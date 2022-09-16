# nlw_esports Server

# Descrição

Foi implementado o prisma CMS, para auxiliar a integração com o banco de dados.

No projeto foi utilizado o SQLite.

Contém uma interface gráfica  do prisma studio.

# Instalação
```term
npx prisma
npx @prisma/client -D
```
## Gerando arquivo prisma
Gerando o arquivo prisma com o banco SQLite.
```term  
npx prisma init --datasource-provider SQLite
```
## As tabelas
As  tabelas são criadas dentro do arquivo do  prisma/schema.prisma


Quando realizar um ajuste no banco de dados deve ser gerado um migrate pelo seguinte comando
```term
npx prisma migrate dev
```



## Para ver o prisma studio
```term
yarn prisma studio

http://localhost:5555
```