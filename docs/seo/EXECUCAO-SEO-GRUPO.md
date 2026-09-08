# Execução de SEO do Grupo New Tractor

Atualização: 08/09/2026. Objetivo permanente: aumentar a descoberta e a preferência
pelo grupo nas sete frentes de linha amarela, com foco comercial em Minas Gerais.
O benchmark não demonstra liderança atual nem permite prometer posições.

## Evidência reunida

- Dez concorrentes mineiros de hidráulica e diagnóstico inicial da New Tractor:
  `benchmark-cilindros-ubersuggest-2026-09-07.html`.
- Sete frentes, cinco contextos setoriais e fontes oficiais dos concorrentes:
  `benchmark-grupo-linha-amarela-2026-09-07.html`.
- 75 termos nacionais no Ubersuggest e seis novas primeiras páginas de resultados,
  além das três buscas hidráulicas já registradas. Os JSON preservam as fontes,
  datas, limitações e ordinais exibidos. Não são pesquisas geolocalizadas em MG.

## Alterações desta etapa

- Metadados e subtítulos das sete frentes orientados pela especialidade.
- Página técnica de recuperação dimensional por Usinagem em Belo Horizonte.
- Centro de guias e três conteúdos: avaliação da máquina, registro de inspeção
  de material rodante e preparação da cotação de peças.
- Cinco setores contextualizados por equipamento, componente, condição e logística;
  links entre marca, serviço, guia e contato.
- Sitemap e `llms.txt` gerados a partir das mesmas 25 rotas indexáveis. Robots
  continua apontando o sitemap canônico; previews continuam sem indexação.
- Correção do foco do atalho “Pular para o conteúdo”.

## Próximas prioridades por frente

| Frente | Entrega seguinte | Evidência necessária |
|---|---|---|
| Rodantes | Conteúdo próprio de componentes e leitura de desgaste, começando por roletes, sapatas e correntes | Fotos, identificação, processo e limites técnicos próprios; não copiar limites OEM |
| HidrauTractor | Página de recuperação de cilindros se o processo for confirmado | Recuperação/fabricação, bombas/vedações, equipamentos de teste e aplicações realmente executadas |
| Usinagem | Exemplos documentados de recuperação dimensional e perguntas de cotação | Desenho autorizado, condição inicial, processo e critérios de aceitação por peça |
| Calderaria | Aprofundar caçambas de escavadeira e conchas de carregadeira | Registros próprios, diagnóstico, materiais e procedimento aplicável; evitar a ambiguidade com caçambas de caminhões |
| Parts | Fichas úteis por peça e aplicação | Fabricação sob desenho, revenda ou ambos; código, compatibilidade e disponibilidade verificáveis |
| Services | Descrever a modalidade de medição na operação e eventuais outras intervenções confirmadas | Escopo, mobilização, equipe, logística, desmontagem/montagem e reparo no pátio, quando executados |
| TechTractor | Explicar fluxo e valor dos registros e validar a oferta tecnológica | Estado comercial, funcionalidades existentes, dados, acesso, integrações e permissões |

## Publicação e medição

Estado atual: PR5 mesclado em `main` (`7ae51f0`), checks aprovados e medição
de contatos confirmada no Pages estável. O PR4 (`3670e3e`) acrescentou a
referência editorial; o PR3 (`a2d8135`) entregou as cinco rotas e a otimização
anterior. O domínio oficial continua no WordPress anterior.
O [roteiro de corte](PRONTIDAO-DOMINIO-2026-09-07.md) registra e-mail, redirects,
medição e rollback; falta o inventário completo da zona DNS.

O [projeto Ubersuggest](monitoramento-ubersuggest-2026-09-07.md) foi criado com
44 palavras-chave em Português/Belo Horizonte, dez concorrentes e sete perguntas
para respostas de IA. A primeira coleta Desktop foi concluída: dez consultas com posição e 34 não
classificadas, todas referentes ao site antigo. Mobile estava com as 44 consultas
pendentes. Não há comparação de evolução.
[Posições, referências e fontes verificadas](referencias-e-ranking-2026-09-08.md).

1. Validar o preview e manter histórico de build, commit e rollback.
2. Preparar o corte do domínio canônico com inventário DNS completo e preservação
   de MX, SPF, DKIM, DMARC e verificações; executar redirects legados por query.
3. Confirmar propriedade no Search Console, enviar sitemap e inspecionar as URLs
   prioritárias depois que elas existirem no domínio canônico. Registrar data
   real da publicação como início da comparação.
4. Configurar acompanhamento por localização e dispositivo para BH e localidades
   priorizadas no plano mineiro, conforme limites contratados da ferramenta.
5. Comparar consultas de marca versus serviço/componente em 28 e 90 dias, com
   impressões, cliques, páginas de entrada e pedidos qualificados. Não atribuir
   automaticamente qualquer oscilação às alterações desta etapa.
6. Registrar no atendimento setor, cidade, equipamento, componente, urgência e
   possibilidade de atender. É esse registro que permite conhecer o comprador;
   uma ferramenta de palavras-chave não revela sua profissão.

## Acesso aos dados e medição de contatos

Em 08/09, a conta Google aberta não teve acesso à propriedade de domínio no
Search Console e não apresentou contas no Tag Manager. Foi solicitada a
identificação do responsável. O [plano de medição](MEDICAO-AQUISICAO.md) registra
os eventos e filtros comerciais, sem chamar clique de lead.

A correção publicada no Pages cobre contatos do rodapé e das sete especialidades, preserva
o aceite em memória quando o armazenamento falha e implementa o caminho de
revogação. A configuração e a recepção de eventos no GA4 permanecem pendentes.
[QA: 32 testes e sete cenários funcionais](../QA-MEDICAO-2026-09-08.md).

## Referências e presença local

A auditoria encontrou 17 backlinks de 13 domínios no Ubersuggest. A referência
editorial existente na Revista M&T foi verificada e incorporada à página de
manutenção, validada no preview e publicada no Pages em 08/09. Cinco contextos setoriais de referências dos
concorrentes foram verificados; pedidos de cadastro dependem de vínculo real.
O destino legado `?p=13` foi refinado para manutenção de material rodante,
com aliases `page_id` no [pacote desativado de migração](../migration/README.md).

Priorizar consistência do endereço e contatos na base real de BH, informações
úteis no Perfil da Empresa no Google, citações editoriais legítimas e materiais
próprios que fabricantes, parceiros e clientes possam referenciar. Cases,
depoimentos e menções comerciais exigem evidência e autorização correspondente.
Nenhuma mensagem de solicitação de link ou avaliação foi enviada nesta etapa.

Domínios adicionais só merecem investimento quando houver uma marca com oferta,
conteúdo, manutenção e demanda próprios. O trabalho inicial concentra a autoridade
no domínio do grupo e em páginas distintas por especialidade. Comprar variações
de palavras-chave ou gerar páginas municipais repetidas não substitui essa base.

O objetivo de superar os principais concorrentes permanece em andamento. Preview,
testes técnicos e pontuação Lighthouse não medem posição no Google, referências
conquistadas, pedidos comerciais ou redução real do tempo de máquina parada.
