# Arquitetura do site

## Princípios

- HTML estático completo, sem dependência de JavaScript para conteúdo.
- Uma intenção principal por rota.
- Navegação curta: O grupo, Empresas (âncora na home), Pessoas, Atuação, Parcerias e Fale com o grupo. A segunda linha com as sete empresas aparece somente nas páginas de especialidades. Soluções técnicas e Equipamentos permanecem no conteúdo e no rodapé.
- Prova visual real antes de claims publicitários.
- Cobertura geográfica consolidada, sem doorway pages municipais.
- As sete frentes são arquitetura de marca local, não afirmação de pessoas jurídicas distintas.
- A rota `/servicos/` permanece o hub técnico das soluções comprovadas; `/services/` é uma frente comercial distinta e não um alias.

## Rotas comerciais confirmadas para implementação local

Status: decisão do usuário registrada em 2026-09-06. Os nomes abaixo organizam
a marca do Grupo New Tractor e não autorizam claims de capacidade, certificação,
prazo, estoque, garantia ou estrutura societária.

| Rota | Papel | Limite editorial |
|---|---|---|
| `/` | Home do Grupo, filme compilado e encaminhamento às sete frentes | Usar o Grupo como endosso de marca; manter fatos públicos e declarações do proprietário identificadas |
| `/rodantes/` | Frente New Tractor Rodantes | Pode usar manutenção, recondicionamento e monitoramento de material rodante já comprovados. `/rodante/` redireciona para cá |
| `/hidrautractor/` | Frente HidrauTractor | Nome confirmado; escopo técnico permanece sujeito a confirmação. `/hidraulica/` redireciona para cá |
| `/usinagem/` | Frente New Tractor Usinagem | Usinagem de componentes; prazo e capacidade após avaliação |
| `/calderaria/` | Frente New Tractor Calderaria | Caldeiraria e solda; escopo após avaliação da condição |
| `/parts/` | Frente New Tractor Parts | Fabricação e consulta de peças; não afirmar estoque sem matriz técnica |
| `/services/` | Frente New Tractor Services, interface comercial para demandas integradas | Não afirmar contrato único, garantia, SLA ou execução end-to-end sem evidência |
| `/techtractor/` | Frente TechTractor para tecnologia e acompanhamento de condição | Produto em evolução; não publicar como sistema pronto nem oferecer acesso transacional |

## Rotas institucionais e técnicas preservadas

| Rota | Papel |
|---|---|
| `/` | posicionamento, prova, soluções e conversão |
| `/empresa/` | história, estrutura, princípios e governança factual |
| `/parcerias/` | apresentação institucional e caminhos para clientes, fornecedores e parceiros |
| `/pessoas/` | filme sob demanda e visão institucional; entrevistas só após captação e autorização |
| `/servicos/` | hub das soluções comprovadas |
| `/servicos/manutencao-material-rodante/` | serviço de rodantes |
| `/servicos/reforma-cacambas-conchas/` | serviço de caçambas/conchas |
| `/servicos/monitoramento-material-rodante/` | medição e monitoramento |
| `/equipamentos/` | máquinas, componentes e informações para avaliação |
| `/atuacao/` | Brasil, corredores prioritários e logística por demanda |
| `/contato/` | canais, RFQ e homologação de fornecedor |
| `/noticias/new-tractor-na-exposibram-2026/` | anúncio histórico atualizado |
| `/privacidade/` | analytics e serviços externos |

## Expansões condicionadas a evidência

- páginas de mineração, construção pesada e agrícola;
- três hubs regionais (Sudeste, Bahia e Goiás);
- cases autorizados;
- conteúdo técnico assinado/revisado por especialista;
- programa 360 e qualquer promessa de reforma integral, contrato único ou pós-venda;
- escopos detalhados, catálogos, cases ou páginas de capacidade para Hidráulica, Parts, Services e TechTractor.

## Descoberta por busca e conteúdo institucional

- `sitemap.xml` com URLs canônicas e indexáveis;
- `robots.txt` permissivo em produção;
- `llms.txt` e `agents.txt` retirados da publicação por decisão editorial do
  proprietário em 07/09/2026; nenhum link ou discurso sobre IA no site;
- JSON-LD de `Organization`, `LocalBusiness`, `WebSite`, `Service`,
  `BreadcrumbList` e `Article` quando aplicável;
- preview `pages.dev` protegido por header `noindex, nofollow`.
