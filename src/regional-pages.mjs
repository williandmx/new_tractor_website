import { minasCities, minasSources } from './minas-cities.mjs';
import { regionalSpecialties } from './regional-specialties.mjs';

// The municipality describes the origin of a request, never a new establishment.
// Geography is sourced independently from the group's own offer/capability.
export const regionalSectors = [
  { key: 'mineracao', slug: 'mineracao', label: 'Mineração', phrase: 'mineração', route: '/setores/mineracao/',
    intro: 'Extração, carregamento e apoio mineral exigem identificar a frente de trabalho, a aplicação e a condição do equipamento.' },
  { key: 'florestal', slug: 'florestal', label: 'Florestal', phrase: 'o setor florestal', route: '/setores/florestal/',
    intro: 'Colheita, movimentação de madeira e manutenção de acessos têm ativos, implementos e condições de operação diferentes.' },
  { key: 'agro', slug: 'agronegocio', label: 'Agronegócio', phrase: 'o agronegócio', route: '/setores/agronegocio/',
    intro: 'Máquinas pesadas de apoio ao agronegócio precisam ser identificadas pela função. Trator agrícola não é sinônimo de trator de esteira.' },
  { key: 'industrial', slug: 'industrial', label: 'Industrial', phrase: 'a indústria', route: '/setores/industrial/',
    intro: 'Pátios, movimentação de materiais e componentes industriais pedem especificação, identificação do ativo e programação da intervenção.' },
];

const lastModified = '2026-09-10';
const directoryRoute = '/atuacao/minas-gerais/cidades/';
const esc = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const link = (href, label, css = '') => '<a href="' + esc(href) + '"' + (css ? ' class="' + css + '"' : '') + '>' + esc(label) + '</a>';
const paragraph = text => '<p>' + text + '</p>';
const list = items => '<ul>' + items.map(item => '<li>' + esc(item) + '</li>').join('') + '</ul>';
const section = (id, title, body, tone = 'light') => '<section class="section section--' + tone + '" aria-labelledby="' + id + '"><div class="shell"><div class="section-heading"><span class="eyebrow">GRUPO NEW TRACTOR</span><h2 id="' + id + '">' + esc(title) + '</h2></div>' + body + '</div></section>';
const sortedCities = [...minasCities].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
const sectorFor = key => regionalSectors.find(sector => sector.key === key);
const sectorSpecialtyLabel = (specialty, sector) => (specialty.id === 'techtractor' ? 'Tecnologia de manutenção' : specialty.label) + ' para ' + sector.phrase;
export const cityRoute = city => '/atuacao/minas-gerais/' + city.slug + '/';
export const cityServiceRoute = (city, specialty) => cityRoute(city) + specialty.citySlug + '/';
export const sectorServiceRoute = (specialty, key) => '/' + specialty.id + '/setores/' + sectorFor(key).slug + '/';
const sectorLabels = city => city.sectors.map(key => sectorFor(key)?.label).filter(Boolean).join(' · ') || 'Aplicação a confirmar na consulta';

const siteConditions = site => '<div class="regional-notice"><strong>Base em Belo Horizonte. Atendimento por demanda.</strong>' +
  paragraph('A presença desta página não indica filial, equipe residente ou contrato em cada município. O atendimento é sujeito a avaliação técnica, comercial e logística, conforme a aplicação e a localização da operação.') +
  '<address>' + esc(site.address) + '</address></div>';

function sources(city) {
  return '<aside class="regional-sources" aria-label="Fontes do contexto municipal">' +
    '<h3>Contexto municipal e fontes</h3>' +
    paragraph('Referências públicas sobre ' + esc(city.name) + '. Não representam clientes, contratos ou parceria com o Grupo New Tractor.') +
    '<ul>' + city.sourceKeys.map(key => {
      const source = minasSources[key];
      if (!source) throw new Error('Fonte territorial ausente: ' + key);
      if (!source.url.startsWith('https://')) throw new Error('Fonte precisa de HTTPS: ' + key);
      return '<li>' + link(source.url, source.title) + '</li>';
    }).join('') + '</ul>' +
    paragraph('População estimada: ' + Number(city.population).toLocaleString('pt-BR') + ' habitantes (' + esc(city.populationYear) + '). Código IBGE: ' + esc(city.ibge) + '.') +
    '</aside>';
}

function rfq(specialty, place, site) {
  const technology = specialty.id === 'techtractor';
  const subject = 'Consulta — ' + specialty.label + ' — ' + place;
  const email = 'mailto:' + site.email + '?subject=' + encodeURIComponent(subject);
  return section('consulta-tecnica', technology ? 'Converse sobre sua rotina de manutenção' : 'Prepare sua consulta de ' + specialty.label.toLocaleLowerCase('pt-BR'),
    '<div class="regional-rfq"><div><p class="regional-lead">' + (technology ? 'Conte como sua equipe registra e acompanha a manutenção hoje.' : 'Uma boa cotação começa com a identificação da necessidade.') + '</p>' +
    '<dl class="regional-checklist">' + specialty.rfq.map(item => '<div><dt>' + esc(item.label) + '</dt><dd>' + esc(item.detail) + '</dd></div>').join('') + '</dl></div>' +
    '<aside class="regional-request"><h3>' + (technology ? 'Compartilhe a necessidade da sua equipe' : 'Envie desenhos e especificações por e-mail') + '</h3>' +
    paragraph(technology ? 'TechTractor é uma frente em desenvolvimento. Esta conversa identifica necessidades de informação e não representa contratação, acesso a produto ou compromisso de implementação.' : 'Abra seu aplicativo de e-mail, descreva a demanda e anexe os arquivos disponíveis. O envio só acontece quando você confirmar no seu aplicativo.') +
    '<a class="button button--dark" href="' + esc(email) + '" data-analytics="email_consulta_regional">' + (technology ? 'Preparar e-mail para conversar' : 'Preparar e-mail de cotação') + '</a>' +
    paragraph(link('mailto:' + site.email, site.email)) +
    paragraph('Local ou aplicação desta consulta: ' + esc(place) + (technology ? '. A conversa ajuda a entender a rotina e as informações necessárias.' : '. A equipe confirma escopo, condições e logística após a análise.')) +
    link('/contato/', 'Outros canais do grupo', 'text-link') + '</aside></div>', 'sand');
}

function specialtyCards(routeFor) {
  return '<ul class="regional-cards">' + regionalSpecialties.map(specialty =>
    '<li><span class="eyebrow">' + esc(specialty.companyName) + '</span><h3>' +
    link(routeFor(specialty), specialty.label) + '</h3>' +
    paragraph(esc(specialty.intro)) + link(routeFor(specialty), 'Conhecer escopo e preparar consulta', 'text-link') + '</li>').join('') + '</ul>';
}

function cityCards(cities, specialty) {
  return '<ul class="regional-city-list">' + cities.map(city =>
    '<li><h3>' + link(specialty ? cityServiceRoute(city, specialty) : cityRoute(city), city.name) + '</h3>' +
    '<p>' + esc(city.region) + '</p><span>' + esc(sectorLabels(city)) + '</span></li>').join('') + '</ul>';
}

function hero(pageHero, heading, intro, crumbs, specialty, actionLabel) {
  return pageHero({
    eyebrow: specialty ? specialty.companyName : 'ATUAÇÃO EM MINAS GERAIS',
    title: esc(heading), intro: esc(intro),
    breadcrumb: crumbs.map(item => ({ label: esc(item.name), href: item.route })),
    image: specialty?.image.name ?? 'equipe',
    imageAlt: specialty?.image.alt ?? 'Acervo da New Tractor: base e equipamentos em Belo Horizonte',
    imageWidths: specialty?.image.widths ?? [640, 1200],
    imageWidth: specialty?.image.width ?? 1200,
    imageHeight: specialty?.image.height ?? 675,
    actions: '<a class="button button--primary" href="' + (specialty ? '#consulta-tecnica' : '#especialidades') + '">' + esc(actionLabel || (specialty ? 'Preparar consulta técnica' : 'Escolher especialidade')) + '</a>',
  });
}

function page(route, title, description, body, crumbs, ctx, extra = {}) {
  return {
    route, output: route.slice(1) + 'index.html', title, description, body,
    active: 'atuacao', lastModified,
    schema: [ctx.breadcrumbSchema(crumbs)], ...extra,
  };
}

function serviceSchema(route, specialty, description, site, city) {
  // TechTractor remains institutional and in development, not a purchasable product.
  if (specialty.id === 'techtractor') return [];
  return [{
    '@type': 'Service', '@id': site.origin + route + '#service',
    name: specialty.label + (city ? ' — demandas de ' + city.name : ''),
    description, url: site.origin + route,
    provider: { '@id': site.origin + '/#organization' },
    serviceType: specialty.label,
    areaServed: city
      ? { '@type': 'City', name: city.name, containedInPlace: { '@type': 'State', name: 'Minas Gerais' } }
      : { '@type': 'State', name: 'Minas Gerais' },
    termsOfService: 'Atendimento sujeito a avaliação técnica, comercial e logística por demanda. Base em Belo Horizonte; sem declaração de filial ou equipe residente no município.',
  }];
}

const locationCrumbs = city => [
  { name: 'Atuação', route: '/atuacao/' },
  { name: 'Minas Gerais', route: '/atuacao/minas-gerais/' },
  { name: 'Cidades', route: directoryRoute },
  ...(city ? [{ name: city.name, route: cityRoute(city) }] : []),
];

function specialtyDetails(specialty) {
  return section('escopo-especialidade', 'O que esta especialidade avalia',
    '<div class="regional-columns"><div class="rich-text">' + paragraph(esc(specialty.intro)) + list(specialty.scope) + '</div>' +
    '<aside class="regional-notice"><h3>Limites do atendimento</h3>' + paragraph(esc(specialty.limitations)) +
    link(specialty.companyRoute, 'Conhecer ' + specialty.companyName, 'text-link') + '</aside></div>') +
    section('etapas-avaliacao', 'Da identificação ao planejamento',
      '<ol class="regional-process">' + specialty.process.map(item => '<li><h3>' + esc(item.title) + '</h3>' + paragraph(esc(item.detail)) + '</li>').join('') + '</ol>') +
    section('referencias-tecnicas', 'Informações para manutenção e suprimentos',
      '<ul class="regional-links">' + specialty.technicalLinks.map(item => '<li>' + link(item.href, item.label) + '</li>').join('') + '</ul>', 'sand');
}

function localServicePage(city, specialty, ctx) {
  const route = cityServiceRoute(city, specialty);
  const heading = specialty.cityTitle + ' ' + city.name;
  const crumbs = [...locationCrumbs(city), { name: specialty.label, route }];
  const description = specialty.id === 'techtractor'
    ? 'TechTractor em ' + city.name + ', MG: conversa sobre inspeções e histórico de manutenção. Frente em desenvolvimento, sem produto ou acesso comercial disponível.'
    : specialty.label + ' para operações de ' + city.name + ', MG. Conheça escopo, dados para cotação e avaliação logística com a New Tractor.';
  const documentedSectors = city.sectors.map(sectorFor).filter(Boolean);
  const relevantSectors = documentedSectors.length ? documentedSectors : regionalSectors;
  const body = hero(ctx.pageHero, heading,
    specialty.id === 'techtractor'
      ? 'Frente tecnológica em desenvolvimento. Uma conversa com equipes de ' + city.name + ' sobre inspeções, medições e histórico de manutenção, sem oferta de produto pronto.'
      : specialty.companyName + ': ' + specialty.label.toLocaleLowerCase('pt-BR') + ' para demandas originadas em ' + city.name + '. Estrutura do grupo em Belo Horizonte e atendimento definido por aplicação.',
    crumbs, specialty) +
    section('operacao-local', 'Sua operação em ' + city.name,
      '<div class="regional-columns"><div class="rich-text"><span class="eyebrow">' + esc(city.region) + '</span>' +
      paragraph(esc(city.context)) + paragraph(esc(city.procurementNote)) +
      paragraph('Para relacionar esse contexto à sua necessidade de ' + esc(specialty.label.toLocaleLowerCase('pt-BR')) + ', informe a aplicação real do equipamento. O perfil econômico do município não define a condição de uma máquina nem confirma compatibilidade.') +
      '</div>' + siteConditions(ctx.site) + '</div>') +
    specialtyDetails(specialty) +
    section('aplicacoes-locais', 'Perguntas conforme a aplicação',
      '<p class="regional-lead">' + (documentedSectors.length ? 'Use o contexto que corresponde ao seu ativo. Confirme a aplicação antes de escolher uma intervenção.' : 'As aplicações abaixo são opções para identificar a sua demanda, não uma classificação econômica de ' + esc(city.name) + '. Informe o setor e a função real do equipamento.') + '</p>' +
      '<div class="regional-context-grid">' + relevantSectors.map(sector => {
        const content = specialty.sectorContent[sector.key];
        return '<article><h3>' + esc(sector.label) + '</h3>' + paragraph(esc(content.intro)) +
          list(content.questions) + paragraph(esc(content.constraints)) +
          link(sectorServiceRoute(specialty, sector.key), sectorSpecialtyLabel(specialty, sector), 'text-link') + '</article>';
      }).join('') + '</div>') +
    section('logistica-local', 'Envio de componente ou avaliação de campo?',
      '<div class="regional-columns"><div class="rich-text">' +
      paragraph('Para uma demanda em ' + esc(city.name) + ', informe se o componente está instalado, removido ou disponível para transporte. Acrescente peso e dimensões conhecidos, origem, acesso e recursos de movimentação disponíveis. Não remova ou desmonte o componente apenas para solicitar uma cotação.') +
      paragraph('Uma consulta de campo precisa identificar município, local da operação, requisitos de acesso e janela pretendida. Visita, coleta, frete, prazos e condições comerciais dependem de confirmação; não há compromisso automático pela localização desta página.') +
      (specialty.id === 'services' ? '' : paragraph('Quando a necessidade envolver acompanhamento presencial, consulte também ' + link(cityServiceRoute(city, regionalSpecialties.find(item => item.id === 'services')), 'serviço de campo para demandas de ' + city.name) + '.')) +
      '</div>' + sources(city) + '</div>', 'sand') +
    rfq(specialty, city.name + ' — MG', ctx.site) +
    section('outras-especialidades', 'Outras especialidades para sua demanda em ' + city.name, specialtyCards(item => cityServiceRoute(city, item))) +
    ctx.contactBand('Converse sobre sua operação em ' + city.name);
  return page(route, heading + ' | New Tractor', description, body, crumbs, ctx, {
    active: specialty.id, discoveryGroup: specialty.id, regionalKind: 'city-service',
    municipality: city.slug, specialty: specialty.id,
    about: [{ '@type': 'City', name: city.name }, { '@id': ctx.site.origin + specialty.companyRoute + '#brand' }],
    schema: [ctx.breadcrumbSchema(crumbs), ...serviceSchema(route, specialty, description, ctx.site, city)],
  });
}

function localCityPage(city, ctx) {
  const route = cityRoute(city);
  const crumbs = locationCrumbs(city);
  const heading = 'Máquinas pesadas em ' + city.name;
  const body = hero(ctx.pageHero, heading, 'Conheça as especialidades do Grupo New Tractor e organize uma demanda de manutenção, componentes ou tecnologia para sua operação em ' + city.name + '.', crumbs) +
    section('panorama-municipal', 'Contexto de ' + city.name,
      '<div class="regional-columns"><div class="rich-text"><span class="eyebrow">' + esc(city.region) + '</span>' +
      paragraph(esc(city.context)) + paragraph(esc(city.procurementNote)) + '</div>' + siteConditions(ctx.site) + '</div>') +
    section('especialidades', 'Sete frentes para encaminhar sua necessidade', specialtyCards(item => cityServiceRoute(city, item)), 'sand') +
    section('pedido-municipal', 'O que informar antes de solicitar atendimento',
      '<div class="regional-columns"><div class="rich-text">' +
      list(['Fabricante, modelo, identificação e aplicação do equipamento.', 'Componente, condição observada, desenho ou especificação disponível.', 'Fotos, medições existentes e histórico de manutenção.', 'Localização da operação, restrições de acesso, prioridade e possibilidade de envio.']) +
      paragraph('Em ' + esc(city.name) + ', como nas demais localidades, transporte, visita e escopo são definidos a partir da demanda. A equipe avalia se o próximo passo é uma análise documental, uma avaliação de campo ou uma intervenção na estrutura industrial do grupo.') +
      link('/contato/', 'Enviar a necessidade para o grupo', 'text-link') + '</div>' + sources(city) + '</div>') +
    section('contextos-municipais', 'Consulte também o contexto da operação',
      '<ul class="regional-links">' + city.sectors.map(sectorFor).filter(Boolean).map(sector => '<li>' + link(sector.route, sector.label) + '</li>').join('') +
      '<li>' + link(directoryRoute, 'Todas as cidades de Minas Gerais nesta seção') + '</li></ul>') + ctx.contactBand('Planeje sua demanda em ' + city.name);
  return page(route, heading + ' | New Tractor',
    'Especialidades para máquinas pesadas em ' + city.name + ', MG: rodantes, hidráulica, usinagem e peças. Atendimento sob avaliação, com base em Belo Horizonte.',
    body, crumbs, ctx, { discoveryGroup: 'atuacao', regionalKind: 'city', municipality: city.slug,
      about: { '@type': 'City', name: city.name } });
}

function sectorSpecialtyPage(specialty, sector, ctx) {
  const route = sectorServiceRoute(specialty, sector.key);
  const heading = sectorSpecialtyLabel(specialty, sector);
  const crumbs = [{ name: specialty.companyName, route: specialty.companyRoute }, { name: sector.label, route }];
  const content = specialty.sectorContent[sector.key];
  const description = specialty.id === 'techtractor'
    ? 'TechTractor para ' + sector.phrase + ': converse sobre inspeções e histórico de manutenção. Frente tecnológica em desenvolvimento, sem oferta de produto pronto.'
    : specialty.label + ' no setor ' + sector.label.toLocaleLowerCase('pt-BR') + '. Aplicações, limites e dados para avaliação técnica com a New Tractor em Minas Gerais.';
  const cities = sortedCities.filter(city => city.sectors.includes(sector.key));
  const body = hero(ctx.pageHero, heading, content.intro, crumbs, specialty) +
    section('contexto-setorial', 'A aplicação muda os dados da avaliação',
      '<div class="regional-columns"><div class="rich-text">' + paragraph(esc(sector.intro)) + list(content.questions) + paragraph(esc(content.constraints)) +
      link(sector.route, 'Conhecer o contexto de ' + sector.label, 'text-link') + '</div>' + siteConditions(ctx.site) + '</div>') +
    specialtyDetails(specialty) + rfq(specialty, sector.label + ' — Minas Gerais', ctx.site) +
    section('municipios-setor', 'Consulte a especialidade por município',
      '<p class="regional-lead">Localidades com contexto ' + esc(sector.label.toLocaleLowerCase('pt-BR')) + ' documentado nesta seção. A inclusão não representa contrato, filial ou disponibilidade imediata.</p>' +
      cityCards(cities, specialty), 'sand') + ctx.contactBand('Planeje a manutenção conforme a aplicação');
  return page(route, heading + ' | New Tractor', description, body, crumbs, ctx, {
    active: specialty.id, discoveryGroup: specialty.id, regionalKind: 'sector-service',
    specialty: specialty.id, sector: sector.key,
    schema: [ctx.breadcrumbSchema(crumbs), ...serviceSchema(route, specialty, description, ctx.site)],
  });
}

export function regionalNavigation(pageEntry) {
  if (pageEntry.regionalKind || pageEntry.indexable === false) return '';
  const specialty = regionalSpecialties.find(item => item.companyRoute === pageEntry.route);
  const sector = regionalSectors.find(item => item.route === pageEntry.route);
  if (specialty) return section('especialidade-regional', 'Encontre a especialidade por setor e cidade',
    '<ul class="regional-links">' + regionalSectors.map(item => '<li>' + link(sectorServiceRoute(specialty, item.key), sectorSpecialtyLabel(specialty, item)) + '</li>').join('') +
    '<li>' + link(directoryRoute, 'Consultar cidades de Minas Gerais') + '</li></ul>', 'sand');
  if (sector) return section('especialidades-setor', 'Escolha a especialidade para ' + sector.phrase, specialtyCards(item => sectorServiceRoute(item, sector.key)), 'sand');
  if (pageEntry.route === '/atuacao/minas-gerais/' || pageEntry.route === '/atuacao/') return section('cidades-e-especialidades', 'Sua cidade, sua máquina, sua necessidade',
    '<p class="regional-lead">Encontre as sete frentes do grupo por município de Minas Gerais. Veja os dados para avaliação e as condições de atendimento para a origem da sua demanda.</p>' +
    link(directoryRoute, 'Consultar cidades e especialidades', 'button button--dark'));
  if (pageEntry.route === '/setores/') return section('setor-industrial', 'Operação industrial', paragraph('Pátios, componentes e máquinas pesadas da indústria também têm uma jornada própria de manutenção e suprimentos.') +
    link('/setores/industrial/', 'Conhecer a aplicação industrial', 'button button--dark'));
  return '';
}

export function createRegionalPages(ctx) {
  const crumbs = locationCrumbs();
  const regions = [...new Set(sortedCities.map(city => city.region))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const directoryBody = hero(ctx.pageHero, 'Minas Gerais: cidades e especialidades',
    'Localize sua cidade e encontre o caminho para consultar rodantes, cilindros hidráulicos, usinagem, caldeiraria, peças, serviço de campo e tecnologia de manutenção.', crumbs, null, 'Encontrar cidade') +
    section('especialidades', 'Da cidade ao componente',
      '<div class="regional-columns"><div class="rich-text">' +
      paragraph('Esta seção reúne ' + sortedCities.length + ' municípios mineiros: cidades acima de 100 mil habitantes na estimativa populacional utilizada e uma seleção de polos com contexto mineral, florestal, agropecuário ou industrial documentado.') +
      paragraph('Selecione o município de origem da demanda e depois a especialidade. Cada página apresenta escopo, identificação do ativo, dados para cotação e orientações de logística. Não é necessário que a máquina esteja na sede do município: informe a localização efetiva da operação.') +
      '</div>' + siteConditions(ctx.site) + '</div>' +
      '<nav aria-label="Ir para uma região de Minas Gerais"><ul class="regional-links">' + regions.map((region, index) => '<li>' + link('#regiao-' + index, region) + '</li>').join('') + '</ul></nav>') +
    regions.map((region, index) => section('regiao-' + index, region, cityCards(sortedCities.filter(city => city.region === region)), index % 2 ? 'light' : 'sand')).join('') +
    ctx.contactBand('Sua cidade não está na lista? Consulte a equipe');
  const industrial = regionalSectors.find(sector => sector.key === 'industrial');
  const industrialCrumbs = [{ name: 'Setores', route: '/setores/' }, { name: 'Industrial', route: industrial.route }];
  const industrialBody = hero(ctx.pageHero, 'Manutenção e componentes para a indústria',
    'Avaliação de máquinas pesadas de pátio, recuperação de componentes e fabricação sob demanda. Aplicação, desenho e programação orientam a conversa entre manutenção e suprimentos.', industrialCrumbs) +
    section('especialidades', 'Escolha a especialidade da demanda industrial', specialtyCards(item => sectorServiceRoute(item, 'industrial')), 'sand') +
    section('limites-industriais', 'Identifique o ativo antes de definir o serviço',
      '<div class="regional-columns"><div class="rich-text">' +
      paragraph('Separe a máquina móvel do processo fixo da planta. Tratores de esteira, escavadeiras e pás carregadeiras têm conjuntos diferentes de uma linha de produção. A avaliação de um componente industrial depende de aplicação, material, geometria e especificação; a presença de um setor nesta página não confirma compatibilidade universal.') +
      list(['Identificação do ativo, fabricante e função na planta.', 'Desenho ou revisão aplicável, material conhecido e quantidade.', 'Sintoma observado, histórico e documentação disponível.', 'Requisitos de acesso, janela de manutenção e recursos para movimentação.']) +
      '</div>' + siteConditions(ctx.site) + '</div>') + ctx.contactBand('Apresente sua necessidade industrial');
  return [
    page(directoryRoute, 'Cidades de Minas Gerais e especialidades | New Tractor',
      'Encontre as especialidades New Tractor por cidade de Minas Gerais: manutenção, cilindros, peças e serviço de campo, com avaliação técnica e logística.',
      directoryBody, crumbs, ctx, { discoveryGroup: 'atuacao', regionalKind: 'directory' }),
    page(industrial.route, 'Manutenção e componentes para a indústria | New Tractor',
      'Máquinas pesadas de pátio e componentes industriais: avaliação, recuperação e fabricação sob demanda. Prepare sua consulta técnica com a New Tractor.',
      industrialBody, industrialCrumbs, ctx, { regionalKind: 'industrial-hub' }),
    ...sortedCities.flatMap(city => [localCityPage(city, ctx), ...regionalSpecialties.map(specialty => localServicePage(city, specialty, ctx))]),
    ...regionalSpecialties.flatMap(specialty => regionalSectors.map(sector => sectorSpecialtyPage(specialty, sector, ctx))),
  ];
}
