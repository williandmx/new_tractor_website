# Copy regional de Minas Gerais — contrato preliminar

**Data:** 10/09/2026

**Módulo:** `src/regional-specialties.mjs`
**Escopo desta folha:** sete especialidades de marca, quatro contextos setoriais e um contrato de dados para o gerador de páginas do root.

O módulo entrega conteúdo-base para uma página de especialidade combinada com um município validado. Ele não cria rotas, HTML, schema, sitemap, redirects ou links de navegação. A cidade será fornecida pelo gerador e não aparece em `cityTitle` para evitar duplicar o município no título.

## Contrato preliminar

Cada item de `regionalSpecialties` tem exatamente uma especialidade e segue este formato:

```js
{
  id, companyName, companyRoute, label, citySlug, cityTitle, sectorNoun,
  intro, image, imageAlt, scope, limitations, rfq, process, technicalLinks,
  sectorContent: {
    mineracao: { intro, questions, constraints },
    florestal: { intro, questions, constraints },
    agro: { intro, questions, constraints },
    industrial: { intro, questions, constraints },
  },
}
```

- `companyRoute` aponta para uma frente de marca existente, não para uma razão social ou filial municipal.
- `citySlug` é o modificador de intenção da especialidade: `material-rodante`, `cilindros-hidraulicos`, `usinagem`, `caldeiraria`, `pecas-sob-demanda`, `servico-de-campo` e `tecnologia-manutencao`.
- `cityTitle` é um prefixo, como **Material rodante em**. O gerador acrescenta o nome do município e a marca.
- `image` usa somente arquivo já existente em `public/assets/images/`, com dimensões e `alt` para o gerador produzir `width`, `height`, `srcset` e `sizes`.
- `rfq` pede dados reais para uma cotação; não simula formulário nem transforma clique em lead confirmado.
- `process` descreve avaliação e encaminhamento, não promete prazo, resultado ou capacidade.
- `technicalLinks` contém rotas internas já existentes e deve ser validado pelo build antes de publicar.
- `sectorContent` não é um bloco de palavras-chave: cada setor muda a pergunta operacional, o documento necessário e a limitação da conversa.

## Especialidades e assets

| `id` | Frente e rota | Título-base | Asset existente | Observação editorial |
|---|---|---|---|---|
| `rodantes` | New Tractor Rodantes — `/rodantes/` | Material rodante em | `material-rodante-{640,1200}.webp` | Avaliação, recuperação e acompanhamento de componentes divulgados. |
| `hidrautractor` | HidrauTractor — `/hidrautractor/` | Cilindros hidráulicos em | `hidrau-recuperacao-{640,1280}.webp` | Recuperação e fabricação confirmadas; parâmetros por peça/aplicação. |
| `usinagem` | New Tractor Usinagem — `/usinagem/` | Usinagem de componentes em | `hidrau-fabricacao-{640,1280}.webp` | Recuperação dimensional; processo e capacidade por peça. |
| `calderaria` | New Tractor Calderaria — `/calderaria/` | Caldeiraria pesada em | `concha-patio-{640,1200}.webp` | Recuperação estrutural; não é oferta geral de estruturas fixas. |
| `parts` | New Tractor Parts — `/parts/` | Peças sob demanda em | `componentes-industriais-{640,1200}.webp` | Fabricação sob demanda; não implica estoque ou pronta-entrega. |
| `services` | New Tractor Services — `/services/` | Serviço de campo em | `medicao-rolete-640.webp` | Avaliação de desgaste e manutenção conforme agenda. |
| `techtractor` | TechTractor — `/techtractor/` | Tecnologia para manutenção em | `medicao-rolete-640.webp` | Frente em desenvolvimento; conversa de descoberta, não produto disponível. |

Os `widths` seguem os arquivos existentes e não criam novas imagens. `medicao-rolete` possui somente a versão 640 registrada no grupo; o gerador não deve inventar uma versão 1200.

## Regra territorial

A base pública real é Belo Horizonte. A autorização para explorar municípios mineiros é uma pauta de conteúdo, não prova de filial, equipe residente, coleta, cliente, contrato, prazo ou atendimento local. A página combinada deve:

1. acrescentar contexto específico do município ou polo, com fonte e diferença editorial verificável;
2. pedir cidade, máquina, componente, condição, documentação e logística;
3. manter a frase de que transporte, mobilização, capacidade, prazo e escopo são avaliados por demanda;
4. evitar listas de municípios repetidas em todas as URLs;
5. entrar no sitemap somente depois de conteúdo real, links, canonical e status 200 conferidos.

### Pool para validação de municípios

O root deve aplicar o corte de população **acima de 100 mil** ao dataset municipal vigente antes de gerar URLs. O pool de conferência inclui, sem afirmar aqui números populacionais individuais: Belo Horizonte, Contagem, Betim, Uberlândia, Juiz de Fora, Montes Claros, Ribeirão das Neves, Uberaba, Governador Valadares, Ipatinga, Sete Lagoas, Divinópolis, Santa Luzia, Ibirité, Poços de Caldas, Patos de Minas, Pouso Alegre, Teófilo Otoni, Varginha, Conselheiro Lafaiete, Araguari, Itabira, Passos, Araxá, Nova Lima, Ituiutaba, Lavras e Barbacena. A lista deve ser reconciliada com a fonte demográfica antes de indexar; não tratar a relação editorial como censo.

### Polos de contexto

Além do corte demográfico, a priorização editorial pode considerar os polos documentados em `docs/seo/territorio-fontes-2026-09-08.md`:

- RMBH: Belo Horizonte, Contagem e Betim;
- Quadrilátero Ferrífero: Itabira, Mariana, Ouro Preto e Congonhas;
- Centro-Norte e Jequitinhonha: Curvelo, Sete Lagoas, Três Marias, Capelinha e Itamarandiba;
- Noroeste, Triângulo e Alto Paranaíba: Paracatu, Uberlândia e Araxá;
- outros municípios somente após evidência de intenção, escopo e logística que seja distinta.

Esses polos explicam contexto de mineração, floresta, indústria, agronegócio ou frotas distribuídas. As fontes não comprovam clientes, contratação, frota da New Tractor, homologação ou cobertura municipal.

## Leitura setorial

Os quatro nomes de `sectorContent` são estáveis para o gerador: `mineracao`, `florestal`, `agro` e `industrial`.

- **Mineração:** registrar frente, carga, abrasão, acesso, componente, identificação e janela; não usar operador ou município como cliente implícito.
- **Florestal:** distinguir máquina de colheita, apoio e linha amarela; perguntar por solo, umidade, acesso, ciclo e histórico sem prometer mobilização regional.
- **Agro:** distinguir trator agrícola e implemento de escavadeira, trator de esteira ou outra máquina de linha amarela; usar janela do ciclo como pergunta, não como prazo.
- **Industrial:** separar equipamento móvel compatível de estrutura fixa ou processo fora do escopo; pedir desenho, revisão, material, acesso e requisito de conferência.

Em hidráulica, nenhum bloco instrui abertura, desmontagem ou intervenção em circuito pressurizado. Em Calderaria e Services, condição insegura não recebe autorização de operação. TechTractor permanece em desenvolvimento em todos os setores: não anunciar plataforma, app, integração, sensor, telemetria, diagnóstico automático, licença ou acesso transacional.

## Fontes e limites

- `docs/source-ledger.md`: escopos confirmados, base em Belo Horizonte, cobertura nacional condicionada à avaliação por demanda, limites de capacidade e estágio do TechTractor.
- `docs/CONTENT-REVIEW.md`: confirmação comercial de Services e Parts em 10/09/2026, HidrauTractor em 08/09/2026, limites de marca e divergências ainda pendentes.
- `src/group.mjs`: nomes, rotas, escopo público, perguntas, imagens e canais das sete frentes.
- `src/service-offers.mjs`: relação entre serviços, fotos responsivas e rotas técnicas existentes.
- `src/hydraulic-content.mjs`: recuperação e fabricação de cilindros por aplicação, seis etapas e limites de processo/ensaio.
- `docs/seo/territorio-fontes-2026-09-08.md`: contexto territorial e polos; não prova demanda ou atendimento municipal.

Não foram importadas certificações, tolerâncias, capacidade de máquina, estoque, SLA, garantia, depoimentos, cases, clientes ou contratos não registrados nas fontes acima.

## Checklist para o gerador e a revisão

- [ ] importar o módulo sem efeitos colaterais e confirmar sete IDs únicos;
- [ ] validar `citySlug`, `companyRoute`, links técnicos e assets contra os arquivos existentes;
- [ ] confirmar as quatro chaves setoriais, perguntas não vazias e limites específicos;
- [ ] combinar município somente onde houver conteúdo local suficiente; não fazer substituição mecânica de cidade;
- [ ] preservar exatamente um H1, title, description, canonical, imagem responsiva e `alt` por rota gerada;
- [ ] manter “base em Belo Horizonte” e logística por demanda, sem declarar presença local;
- [ ] revisar termos de segurança hidráulica e estrutural antes do HTML;
- [ ] manter TechTractor como frente em evolução e sem oferta transacional;
- [ ] rodar `npm run check`, testes de links/rotas e inspeção de HTML sem JavaScript no pacote integrado;
- [ ] só depois decidir quais URLs são indexáveis e incluí-las em sitemap.

Este arquivo registra o contrato preliminar e as checagens esperadas; não declara que as páginas municipais já foram geradas ou publicadas.
