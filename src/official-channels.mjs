// Declarações institucionais confirmadas pelo proprietário em 23/09/2026.
export const officialChannelsRoute = "/canais-oficiais/";

export const officialNotice = () => `
  <aside class="official-notice" aria-label="Aviso sobre os canais oficiais">
    <div class="shell official-notice__inner">
      <p><strong>Não trabalhamos com aluguel de máquinas.</strong> Não fazemos cadastro de clientes pelo site nem possuímos grupos de WhatsApp.</p>
      <a href="${officialChannelsRoute}">Confira os canais oficiais <span aria-hidden="true">→</span></a>
    </div>
  </aside>`;

export function createOfficialChannelsPage({ site, breadcrumbSchema }) {
  return {
    route: officialChannelsRoute,
    output: "canais-oficiais/index.html",
    title: "Grupo New Tractor | Comunicado e canais oficiais",
    description: "Confira os canais oficiais do Grupo New Tractor. Não alugamos máquinas, não cadastramos clientes pelo site e não possuímos grupos de WhatsApp.",
    active: "contato",
    lastModified: "2026-09-23",
    schema: [breadcrumbSchema([{ name: "Canais oficiais", route: officialChannelsRoute }])],
    body: `
      <section class="section section--light official-channels" aria-labelledby="canais-oficiais-title"><div class="shell policy">
        <nav class="breadcrumbs" aria-label="Navegação estrutural"><ol><li><a href="/">Início</a></li><li><span aria-current="page">Canais oficiais</span></li></ol></nav>
        <span class="eyebrow">COMUNICADO INSTITUCIONAL · 23/09/2026</span>
        <h1 id="canais-oficiais-title">Comunicado oficial do Grupo New Tractor</h1>
        <p class="official-channels__lead">O Grupo New Tractor, com sede em Belo Horizonte/MG, esclarece sua atuação e seus canais de atendimento para orientar clientes e o público.</p>
        <h2>1. Identidade e canais oficiais</h2>
        <p>Nosso site institucional é exclusivamente <a href="${site.origin}/">newtractor.com.br</a>. Endereços com grafia semelhante, acréscimo, omissão ou troca de letras não são nossos canais oficiais. Para confirmar qualquer informação, utilize os contatos publicados nesta página.</p>
        <ul class="official-facts">
          <li><strong>Não trabalhamos com aluguel de máquinas.</strong> Nossa atuação é em manutenção, recuperação de componentes, fabricação de peças e soluções industriais para máquinas pesadas.</li>
          <li><strong>Não fazemos cadastro de clientes pelo site.</strong> Não operamos portal aberto de cadastro de usuários, conta de cliente ou envio de documentos por esta página. Não há venda direta pelo website. Solicitações comerciais devem ser encaminhadas pelos contatos oficiais.</li>
          <li><strong>Não possuímos grupos de WhatsApp.</strong> O atendimento pelo número abaixo é individual; não é um convite para entrar em grupos.</li>
        </ul>
        <p>Não comercializamos produtos ou serviços por plataformas de investimento, afiliação, indicação ou “pagamento automático”. Não solicitamos senha, depósito antecipado, PIX ou TED para cadastro, acesso, “liberação de saldo” ou como condição de atendimento por este site.</p>
        <p>O atendimento comercial e técnico começa pela identificação da demanda: máquina, componente, cidade e necessidade. Atender empresas de locação com manutenção não significa oferecer aluguel de máquinas.</p>
        <h2>2. O que não representa a empresa</h2>
        <p>Ofertas de aluguel de máquinas, páginas de cadastro de clientes, plataformas de investimento e grupos de WhatsApp que se apresentem como sendo do Grupo New Tractor não representam nossos serviços nem nossos canais de atendimento. Não temos vínculo com essas iniciativas.</p>
        <p>Questões sobre acesso, senhas, saldos ou pagamentos em plataformas externas não correspondem a funcionalidades deste site institucional. Confirme a identidade do responsável pela plataforma antes de fornecer informações.</p>
        <h2 id="contatos-verificados">3. Fale diretamente com a New Tractor</h2>
        <dl class="official-contact-list">
          <div><dt>Site institucional</dt><dd><a href="${site.origin}/">newtractor.com.br</a></dd></div>
          <div><dt>WhatsApp — atendimento individual</dt><dd><a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_canais_oficiais">${site.whatsappDisplay}</a></dd></div>
          <div><dt>Telefone</dt><dd><a href="${site.phoneHref}" data-analytics="telefone_canais_oficiais">${site.phoneDisplay}</a></dd></div>
          <div><dt>E-mail</dt><dd><a href="mailto:${site.email}" data-analytics="email_canais_oficiais">${site.email}</a></dd></div>
        </dl>
        <p>Confira também nosso endereço e os links para as redes sociais na <a href="/contato/">página de contato</a>. Em caso de dúvida sobre uma mensagem, confirme sua origem por um dos canais acima antes de enviar documentos ou realizar pagamentos.</p>
        <h2>4. Privacidade e cuidados com seus dados</h2>
        <p>Não compartilhe senhas, códigos de verificação ou dados bancários em grupos ou por links recebidos de contatos que você não confirmou. Para uma solicitação comercial, envie apenas as informações necessárias à sua demanda, depois de verificar o canal e a finalidade.</p>
        <p>Este site não faz cadastro de clientes. A análise de navegação é opcional e depende da sua escolha no aviso de privacidade. Links de WhatsApp e redes sociais abrem serviços externos, com políticas próprias. Consulte nossa <a href="/privacidade/">página de privacidade e uso de dados</a> para entender essas práticas e rever sua preferência.</p>
        <p>Para dúvidas ou solicitações relacionadas aos seus dados pessoais no relacionamento com a New Tractor, escreva para <a href="mailto:${site.email}?subject=Privacidade%20e%20dados%20pessoais">${site.email}</a>. Descreva sua solicitação sem enviar senhas ou documentos pessoais desnecessários.</p>
        <h2>5. Se você recebeu um contato ou enviou dados e valores</h2>
        <ol class="official-facts">
          <li>Confira o domínio na barra do navegador e confirme o contato pelos canais oficiais acima. Não envie documentos, selfies, senhas, códigos de verificação ou valores antes dessa confirmação.</li>
          <li>Preserve as mensagens, os links, as datas, os horários, os números utilizados e os comprovantes. Evite divulgar esses registros publicamente com dados pessoais.</li>
          <li>Se houve movimentação financeira que você considera irregular, entre em contato imediatamente com sua instituição bancária pelos canais oficiais. Consulte as <a href="https://www.bcb.gov.br/meubc/faqs/p/dicas-gerais-de-como-proceder-apos-sofrer-um-golpe">orientações do Banco Central</a>; uma comunicação à New Tractor não substitui o contato com o banco.</li>
          <li>Se você suspeita de uma ocorrência, procure a autoridade policial para registrar um boletim. Em Minas Gerais, consulte as <a href="https://www.mg.gov.br/servico/solicitar-registro-de-ocorrencia-de-estelionato">condições do serviço de registro de ocorrência</a>; em outros estados, utilize os canais da polícia local. Procure também o Procon quando houver questão de consumo.</li>
          <li>Para questões sobre uso dos seus dados pessoais, consulte os <a href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular">canais de denúncia e petição de titular da ANPD</a>, conforme o caso.</li>
        </ol>
        <p>Podemos receber, pelo e-mail oficial, relato sobre o uso do nome e da marca para avaliação e eventual comunicação às autoridades. Envie somente o necessário e preserve os registros originais. Esse contato não substitui o registro policial nem as providências perante o banco ou os órgãos competentes.</p>
        <h2>6. Confirmação de representantes e proteção da identidade</h2>
        <p>Se alguém se apresentar como representante, consultor ou investigador em nome do Grupo New Tractor, confirme sua identidade, origem e finalidade pelos canais oficiais antes de compartilhar informações. Não autorizamos terceiros a se apresentar como nossos representantes sem credencial ou autorização verificável.</p>
        <p>O Grupo New Tractor reserva-se o direito de buscar orientação jurídica e adotar as medidas cabíveis para proteger sua identidade, sua marca e seus canais oficiais.</p>
        <p><strong>Grupo New Tractor</strong><br>Belo Horizonte/MG, 23 de setembro de 2026.<br>${site.address} — CEP 31980-180</p>
      </div></section>`,
  };
}
