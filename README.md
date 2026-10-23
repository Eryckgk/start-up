# START_UP

Aplicação web para conectar founders, designers e desenvolvedores em um ambiente de descoberta e colaboração de startups.

## Como rodar

1. Instale as dependências:
   npm install
2. Inicie o projeto:
   npm run dev

## Autenticação

Por padrão, a aplicação entra em modo demo quando as variáveis de ambiente do Supabase não estão configuradas. Isso permite testar o fluxo de login e cadastro localmente sem uma conta real.

Credenciais de demonstração:
- E-mail: joao@startup.com
- Senha: 123456

## Variáveis de ambiente

Se quiser conectar com Supabase real, crie um arquivo .env e configure:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

Se as variáveis forem omitidas, o app continua funcionando em modo mock local.

## Conversas em tempo real

O chat em tempo real exige um projeto Supabase configurado. Aplique o arquivo
`supabase/migrations/20261023000000_realtime_direct_messages.sql` no SQL Editor
do projeto Supabase antes de usar a página de Mensagens. A migration cria os
perfis públicos básicos, conversas diretas e mensagens, configura políticas
de acesso por participante e habilita a publicação Realtime para mensagens.
Para aplicar, abra o painel do Supabase, selecione o projeto, entre em
**SQL Editor**, crie uma consulta, cole o conteúdo completo do arquivo e
execute. A migration pode ser executada novamente sem duplicar suas políticas.

## Scripts

- npm run dev
- npm run build
- npm run lint
