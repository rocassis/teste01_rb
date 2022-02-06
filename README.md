# CRUD Incidentes

Projeto de testes técnico usnado framework Laravel para o backend com APIs e ReactJS para o frontend com o framework de UI BootStrap

## Instalação
A instalação do projeto pode ser feita via git
```bash
git clone https://github.com/rocassis/teste01_rb.git /path/to/clone
```
## Configuração do Backend
Para a instalação das depências é necessário ter o [composer](https://getcomposer.org/) instalado.
- Comando para instalar as depências do framework laravel para o backend
```bash
composer install
``` 
- Copiar o arquivo '.env.example' e renomea-lo para '.env', caso seja necessaŕio deve ser configurada a porta onde a aplicação irá rodar
- Usar o seguinte comando para gerar a chave da aplicação:
```bash
php artisan key:generate
```
- No arquivo '.env' adicionar os dados da conexão com o banco de dados
- Usar o seguinte comando para que seja realizada a criação das tabelas do sistema de forma automatizada:

```bash
php artisan migrate
```

- Dar permissão de escrita no diretório 'storage' se necessário, nele serão gravados os logs da aplicação

## Configuração do Frontend
Para a instalação das dependências do frontend é necessário ter o [nodejs](https://nodejs.org/en/download/).

- Usar o seguinte comando para instalar as depências do RectJS para o frontend:
```bash
npm install
```
- Usar um dos seguintes comandos para compilar o fronted
```bash
# Compilar para produção
npm run prod

# Compilar para desenvolvimento
npm run dev

# Compilar para desenvolvimento com debug
npm run watch
```
## Utilização
Após a configurações é só acessar pelo navegador o endereço da aplicação ex: [http://localhost](http://localhost)