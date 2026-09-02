# Liberação do domínio canônico

O site está publicado e validado no Cloudflare Pages, porém o corte de
`newtractor.com.br` permanece deliberadamente pendente para preservar e-mail,
autoridade orgânica e dados empresariais.

## Aprovações de conteúdo antes do corte

- Confirmar WhatsApp oficial entre os números divergentes encontrados.
- Confirmar administração do perfil do LinkedIn usado no site.
- Fornecer o cartão CNPJ e indicar qual razão social deve constar no cadastro
  de fornecedores.
- Confirmar formalmente a declaração de mais de 4.000 m² em três galpões.
- Confirmar autorização e vigência de uso dos 15 logotipos históricos.
- Entregar, se houver, documentos de ISO, NR, ART, qualidade, capacidade ou
  atendimento emergencial antes de publicar qualquer alegação correspondente.

## Infraestrutura antes do corte

- Exportar a zona DNS atual e registrar TTLs.
- Preservar e testar MX, SPF, DKIM, DMARC e verificações de terceiros.
- Adicionar domínio raiz e `www` ao Pages, com redirecionamento de `www` para o
  domínio canônico.
- Criar as Single Redirect Rules para as URLs antigas `/?p=470`, `/?p=13`,
  `/?p=288`, `/?p=286` e `/?p=477` descritas em `docs/DEPLOYMENT.md`.
- Planejar janela de mudança e rollback para hosting e DNS anteriores.

## Pós-corte

- Validar HTTPS, raiz, `www`, 404, canonicals, sitemap, robots, imagens, RFQ,
  telefone, WhatsApp e analytics.
- Remover o bloqueio de indexação somente do domínio canônico; manter todos os
  hosts `pages.dev` com `noindex`.
- Enviar `https://newtractor.com.br/sitemap.xml` no Google Search Console.
- Solicitar indexação das páginas institucionais prioritárias.
- Atualizar o Perfil da Empresa no Google e demais diretórios com metragem,
  canais e domínio aprovados.
- Monitorar cobertura, indexação, erros 404 e Core Web Vitals por 30 dias.
