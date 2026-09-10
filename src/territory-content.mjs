// Conteúdo territorial para a página de atuação em Minas Gerais.
// As referências de território descrevem setores e operações publicados por
// órgãos e empresas; não são prova de clientes, contratos ou cobertura local.
// Pesquisa de apoio conferida em 08/09/2026.

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
