// Conteúdo territorial para a página de atuação em Minas Gerais.
// As referências de território descrevem setores e operações publicados por
// órgãos e empresas; não são prova de clientes, contratos ou cobertura local.
// Pesquisa de apoio conferida em 08/09/2026:
// - https://prefeitura.pbh.gov.br/empreendedor/empreender-em-bh
// - https://portal.contagem.mg.gov.br/superintendencia-de-gestao-de-distritos-e-polos-sedecon/
// - https://www.betim.mg.gov.br/portal/servicos/1001/o-municipio/
// - https://amif.org.br/pt/levantamento-completo/
// - https://www.vale.com/pt/onde-estamos
// - https://vale.com/in/mariana
// - https://www.csn.com.br/mineracao/
// - https://www.suzano.com.br/noticia/suzano-forma-novos-operadores-de-maquinas-florestais-em-minas-gerais
// - https://www2.gerdau.com.br/wp-content/uploads/2025/06/RA_GERDAU_2024_PT_BR.pdf
// - https://www.nexaresources.com/quem-somos/
// - https://aperambioenergia.com.br/institucional/empresa/historia/
// - https://kinross.com.br/a-kinross/conheca/
// - https://www.mills.com.br/maquinas-pesadas/mapa-de-atuacao

const section = (id, title, content, tone = "light") =>
  `<section class="section section--${tone}" aria-labelledby="${id}"><div class="shell editorial-grid"><div><h2 id="${id}">${title}</h2></div><div class="rich-text">${content}</div></div></section>`;

const regionCard = (label, title, text, links) => `
  <article>
    <span>${label}</span>
    <h3>${title}</h3>
    <p>${text}</p>
    <p>${links}</p>
  </article>`;

const priorityCard = (number, region, title, text, href, label) => `
  <article>
    <div>
      <span>${number} · ${region}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <a class="text-link" href="${href}">${label}</a>
    </div>
  </article>`;

const territoryBody = ({ pageHero, contactBand, site }) => `
  ${pageHero({
    eyebrow: "ATUAÇÃO EM MINAS GERAIS",
    title: "Manutenção de máquinas pesadas em Minas Gerais",
    intro: "Serviço de campo, manutenção industrial e fabricação de peças sob demanda para máquinas de linha amarela em Minas Gerais, com base em Belo Horizonte.",
    breadcrumb: [
      { label: "Atuação", href: "/atuacao/" },
      { label: "Minas Gerais", href: "/atuacao/minas-gerais/" },
    ],
    image: "equipe",
    imageAlt: "Base operacional da New Tractor em Belo Horizonte, com equipamentos e veículos de apoio",
    imageWidths: [640, 1200],
    imageWidth: 1200,
    imageHeight: 675,
  })}
  ${section(
    "minas-contexto",
    "Cidade, máquina e componente no mesmo pedido",
    `<p>O Grupo New Tractor tem base em Belo Horizonte e reúne especialidades para manutenção e recuperação de máquinas pesadas. Minas Gerais conecta mineração, indústria, floresta, construção e locação em operações com rotinas e acessos diferentes.</p><p>Informe a cidade, o equipamento, o componente e a condição observada. Para uma <a href="/servicos/manutencao-material-rodante/">avaliação de material rodante</a>, descreva o conjunto e o uso. A HidrauTractor executa <a href="/hidrautractor/recuperacao-cilindros-hidraulicos/">recuperação de cilindros hidráulicos</a> e <a href="/hidrautractor/fabricacao-cilindros-hidraulicos/">fabricação de novos conjuntos</a>. A identificação e a aplicação orientam o plano de reparo ou o projeto. Peça existente com necessidade dimensional pode seguir para <a href="/usinagem/">Usinagem</a>; estruturas e implementos, para <a href="/calderaria/">Calderaria</a>; fabricação de peças sob demanda, para <a href="/parts/">Parts</a>, a partir de código, desenho ou especificação.</p><p>Os equipamentos ajudam a nomear a necessidade: consulte <a href="/equipamentos/escavadeiras/">escavadeiras</a>, <a href="/equipamentos/tratores-de-esteira/">tratores de esteira</a> e <a href="/equipamentos/pas-carregadeiras/">pás carregadeiras</a>. A <a href="/services/">New Tractor Services</a> leva técnicos especializados ao campo para avaliar desgastes e planejar a manutenção. A <a href="/techtractor/">TechTractor</a> desenvolve tecnologia para acompanhar inspeções e histórico.</p>`,
  )}
  <section class="section section--dark" aria-labelledby="corredores-mg-title">
    <div class="shell">
      <div class="section-heading section-heading--split">
        <div><span class="eyebrow eyebrow--light">QUATRO CONTEXTOS DE MINAS</span><h2 id="corredores-mg-title">Manutenção próxima da realidade de cada região.</h2></div>
        <p class="section-copy-light">Mineração, indústria, operações florestais e agronegócio têm rotinas diferentes. Planejamos os serviços considerando os equipamentos, o acesso e as janelas de manutenção.</p>
      </div>
      <div class="coverage-grid">
        ${regionCard("01 · RMBH", "Base metropolitana", "Belo Horizonte concentra a base do grupo, na Rua Santos Anjos com o Anel Rodoviário e acesso pela BR-381. Contagem e Betim entram como cobertura da RMBH — distritos industriais, mecânica e logística — sem uma segunda unidade declarada. Informe máquina, componente e cidade para encaminhar uma demanda de recuperação, usinagem ou peças.", `<a class="text-link text-link--light" href="/contato/">Informar cidade e componente</a>`)}
        ${regionCard("02 · QUADRILÁTERO", "Mineração e recuperação", "Itabira, Mariana, Ouro Preto e Congonhas concentram atividades de mineração de ferro. Registre máquina, componente, condição, acesso e janela para organizar uma consulta de material rodante, estruturas ou componentes.", `<a class="text-link text-link--light" href="/setores/mineracao/">Ver contexto de mineração</a>`)}
        ${regionCard("03 · CENTRO-NORTE / JEQUITINHONHA", "Floresta e indústria", "Curvelo e entorno concentram plantios florestais; Sete Lagoas tem produção industrial de aço; Três Marias abriga uma refinaria de zinco; Capelinha e Itamarandiba integram um polo florestal do Jequitinhonha. Informe a aplicação e o tipo de ativo.", `<a class="text-link text-link--light" href="/setores/florestal/">Ver contexto florestal</a>`)}
        ${regionCard("04 · NOROESTE / TRIÂNGULO", "Operações distribuídas", "Paracatu tem mineração de ouro; Araxá reúne um complexo industrial de nióbio; Uberlândia conta com operação de locação de máquinas pesadas. Envie origem, componente e modalidade de transporte ou mobilização para compor o pedido.", `<a class="text-link text-link--light" href="/setores/locadoras/">Ver contexto de locadoras</a>`)}
      </div>
    </div>
  </section>
  <section class="section section--sand" aria-labelledby="prioridades-mg-title">
    <div class="shell">
      <div class="section-heading section-heading--split">
        <div><span class="eyebrow">ROTAS PARA SUA OPERAÇÃO</span><h2 id="prioridades-mg-title">Encontre o próximo passo por região.</h2></div>
        <p>Os pontos são agrupados por corredor para ligar o perfil da região à especialidade e aos dados do pedido.</p>
      </div>
      <div class="component-grid component-grid--catalog">
        ${priorityCard("01", "RMBH", "Belo Horizonte", "Base real do grupo, em São Gabriel, na Santos Anjos com o Anel Rodoviário e acesso pela BR-381. Informe se a necessidade envolve rodante, cilindro, estrutura ou peça.", "/atuacao/", "Conhecer a atuação")}
        ${priorityCard("02", "RMBH", "Contagem", "Distritos industriais e conexões logísticas tornam útil uma consulta por usinagem, caldeiraria ou peça. Envie desenho, código, medidas e destino para avaliar o escopo.", "/usinagem/", "Conhecer Usinagem")}
        ${priorityCard("03", "RMBH", "Betim", "O perfil industrial, mecânico e logístico pede a separação entre componente de máquina pesada e demanda industrial. Descreva aplicação, material, dimensão e prioridade.", "/parts/", "Preparar consulta de peça")}
        ${priorityCard("04", "QUADRILÁTERO", "Itabira", "A mineração de ferro pede atenção ao desgaste de rodantes e componentes. Identifique escavadeira ou trator, lado, posição, fotos e histórico de intervenção.", "/rodantes/", "Ver Rodantes")}
        ${priorityCard("05", "QUADRILÁTERO", "Mariana e Ouro Preto", "O corredor reúne mineração de ferro em municípios próximos. Informe cidade, frente de trabalho e acesso ao equipamento para preparar a consulta.", "/setores/mineracao/", "Preparar contexto de mineração")}
        ${priorityCard("06", "QUADRILÁTERO", "Congonhas", "Em mineração a céu aberto, caçambas, conchas, estruturas e material rodante pedem registros diferentes. Registre o implemento, a condição e o objetivo: avaliar, recuperar ou consultar peça.", "/calderaria/", "Conhecer Calderaria")}
        ${priorityCard("07", "CENTRO-NORTE", "Curvelo", "O contexto florestal torna relevante separar máquina de colheita, apoio e linha amarela. Informe fabricante, modelo, componente, terreno, horímetro e cidade.", "/setores/florestal/", "Ver contexto florestal")}
        ${priorityCard("08", "CENTRO-NORTE", "Sete Lagoas e Três Marias", "São referências industriais diferentes: uma ligada à produção siderúrgica e outra à metalurgia do zinco. Para peças e recuperação, reúna desenho, material, dimensão e função.", "/guias/cotacao-pecas-maquinas-pesadas/", "Ver dados para cotação")}
        ${priorityCard("09", "JEQUITINHONHA", "Capelinha e Itamarandiba", "O polo florestal pede contexto de ativos, manejo e acesso. Relate componente, aplicação, condição, cidade e possibilidade de envio para organizar o pedido.", "/setores/florestal/", "Organizar dados florestais")}
        ${priorityCard("10", "NOROESTE", "Paracatu", "A mineração de ouro pede uma conversa organizada sobre ativos móveis e suprimentos. Envie identificação, fotos, cidade e restrições de acesso.", "/guias/avaliacao-maquinas-linha-amarela/", "Avaliar a máquina")}
        ${priorityCard("11", "ALTO PARANAÍBA", "Araxá", "O complexo industrial mineral orienta temas de manutenção industrial, peças e recuperação. Relacione o cilindro à máquina e envie identificação, aplicação e condição observada.", "/services/", "Conhecer o serviço de campo")}
        ${priorityCard("12", "TRIÂNGULO", "Uberlândia", "O nó de locação de máquinas pesadas pede histórico do ativo. Relacione patrimônio, aplicação, devolução, componente, cidade e disponibilidade.", "/setores/locadoras/", "Ver contexto de locadoras")}
      </div>
    </div>
  </section>
  ${section(
    "dados-territorio",
    "Dados para acelerar a análise",
    `<p>Comece com fabricante, modelo e identificação da máquina; componente, código ou desenho; fotos e medidas preliminares; peso e dimensões conhecidos; condição instalada ou removida; aplicação, prioridade e restrições de acesso.</p><ul><li><strong>Rodantes:</strong> lado, posição, tipo de componente, terreno, carga, horímetro e histórico de troca ou medição.</li><li><strong>Cilindros:</strong> função, plaqueta, conexões, comportamento observado e histórico do conjunto.</li><li><strong>Usinagem, Calderaria e Parts:</strong> peça, desenho, material conhecido, quantidade, objetivo da consulta e possibilidade de envio.</li><li><strong>Services:</strong> equipamentos, local, acesso e janela de manutenção para agendar a avaliação de desgaste no campo ou a intervenção nas unidades industriais.</li><li><strong>TechTractor:</strong> registros de inspeção e histórico que a manutenção precisa acompanhar.</li></ul><p>Cada solicitação é avaliada técnica, comercial e logisticamente conforme a peça, a aplicação e a cidade.</p><address>Base: ${site.address}. <a href="${site.phoneHref}">${site.phoneDisplay}</a> · <a href="mailto:${site.email}">${site.email}</a> · <a href="${site.map}" target="_blank" rel="noopener noreferrer">Ver a localização no mapa</a>.</address>`,
  )}
  ${section(
    "fontes-territoriais",
    "Referências públicas de contexto",
    `<p>Conheça as fontes públicas que ajudam a explicar o perfil dos territórios: <a href="https://prefeitura.pbh.gov.br/empreendedor/empreender-em-bh" target="_blank" rel="noopener noreferrer">Prefeitura de Belo Horizonte</a>, portais de <a href="https://portal.contagem.mg.gov.br/superintendencia-de-gestao-de-distritos-e-polos-sedecon/" target="_blank" rel="noopener noreferrer">Contagem</a> e <a href="https://www.betim.mg.gov.br/portal/servicos/1001/o-municipio/" target="_blank" rel="noopener noreferrer">Betim</a>, <a href="https://amif.org.br/pt/levantamento-completo/" target="_blank" rel="noopener noreferrer">AMIF</a>, <a href="https://www.vale.com/pt/onde-estamos" target="_blank" rel="noopener noreferrer">Vale</a>, <a href="https://www.csn.com.br/mineracao/" target="_blank" rel="noopener noreferrer">CSN</a>, <a href="https://www2.gerdau.com.br/wp-content/uploads/2025/06/RA_GERDAU_2024_PT_BR.pdf" target="_blank" rel="noopener noreferrer">Gerdau — relatório anual 2024 (PDF)</a>, <a href="https://www.nexaresources.com/quem-somos/" target="_blank" rel="noopener noreferrer">Nexa</a>, <a href="https://aperambioenergia.com.br/institucional/empresa/historia/" target="_blank" rel="noopener noreferrer">Aperam BioEnergia</a>, <a href="https://kinross.com.br/a-kinross/conheca/" target="_blank" rel="noopener noreferrer">Kinross</a>, <a href="https://cbmm.com/pt/midias/noticias/cbmm-crescimento-diversificacao-niobio" target="_blank" rel="noopener noreferrer">CBMM</a> e <a href="https://www.mills.com.br/maquinas-pesadas/mapa-de-atuacao" target="_blank" rel="noopener noreferrer">Mills</a>. Essas fontes contextualizam setores e localidades, sem indicar vínculo comercial com o Grupo New Tractor.</p><p>Para conhecer a atuação nacional, volte à <a href="/atuacao/">atuação do grupo</a> ou fale pelo <a href="/contato/">canal de contato</a>.</p>`,
  )}
  ${contactBand("Solicite atendimento em Minas Gerais")}`;

export function createTerritoryPages({ pageHero, contactBand, breadcrumbSchema, site }) {
  const route = "/atuacao/minas-gerais/";
  const crumbs = [
    { name: "Atuação", route: "/atuacao/" },
    { name: "Minas Gerais", route },
  ];
  return [{
    route,
    output: "atuacao/minas-gerais/index.html",
    title: "Manutenção de máquinas pesadas em Minas Gerais | New Tractor",
    description: "Manutenção de máquinas pesadas em Minas Gerais: técnicos de campo, recuperação de componentes e fabricação de peças sob demanda. Base em Belo Horizonte.",
    active: "atuacao",
    lastModified: "2026-09-10",
    about: { "@type": "AdministrativeArea", name: "Minas Gerais" },
    schema: [breadcrumbSchema(crumbs)],
    body: territoryBody({ pageHero, contactBand, site }),
  }];
}
