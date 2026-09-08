# Redirects legados do WordPress

`wordpress-single-redirects.json` é um pacote local de revisão para cinco
redirects de páginas antigas do WordPress. Todas as regras estão com
`enabled: false`; guardar o arquivo no repositório não altera DNS, Cloudflare,
produção ou o site atual.

## Mapa aprovado

| Referência | ID WordPress | Destino institucional |
| --- | ---: | --- |
| `wordpress-470` | 470 | `/empresa/` |
| `wordpress-13` | 13 | `/servicos/manutencao-material-rodante/` |
| `wordpress-288` | 288 | `/servicos/reforma-cacambas-conchas/` |
| `wordpress-286` | 286 | `/servicos/monitoramento-material-rodante/` |
| `wordpress-477` | 477 | `/contato/` |

O ID 13 aponta diretamente para a página de manutenção de material rodante,
que preserva melhor a intenção principal observada na página legada. O hub de
serviços e as páginas relacionadas devem continuar acessíveis por links
internos do destino.

## Correspondência das regras

Cada regra cobre somente estes hosts e caminhos:

- `newtractor.com.br` ou `www.newtractor.com.br`;
- `/` ou `/index.php`;
- exatamente um valor para `p` **ou** exatamente um valor para `page_id`, com
  o ID da própria regra.

Os dois nomes de parâmetro são ramos mutuamente exclusivos. A expressão usa o
mapa oficial `http.request.uri.args`, verifica `len(...) == 1` e compara o
valor com `any(...)`. Por isso a ordem dos parâmetros não importa e parâmetros
auxiliares, como `utm_source` e `utm_campaign`, podem acompanhar o ID. Chaves
`p` e `page_id` simultâneas, valores duplicados, IDs diferentes ou
desconhecidos, outros hosts, outros caminhos e a home sem ID não correspondem
a estas regras.

`preserve_query_string` está definido como `false`. Uma correspondência envia
para a URL institucional limpa, sem transportar a query legada ou os UTM;
isso deve ser conferido antes do corte caso a operação de analytics exija
outra decisão.

## Uso na API Cloudflare

O formato segue o corpo de uma ruleset de zona na fase
`http_request_dynamic_redirect`, com ação `redirect`, `301`, `ref` estável e
`action_parameters.from_value.target_url.value`. Single Redirects só são
avaliados para hosts de entrada que estejam passando pelo proxy da Cloudflare.
O token usado pelo operador precisa ter a permissão de zona **Single Redirect
> Edit**.

Antes de criar ou atualizar qualquer coisa, faça uma leitura do entrypoint da
fase e preserve a resposta original:

```sh
export CF_ZONE_ID='substitua-pelo-zone-id'
export CF_API_TOKEN='use-um-token-fora-deste-arquivo'
curl --fail-with-body --silent --show-error \
  "https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/rulesets/phases/http_request_dynamic_redirect/entrypoint" \
  --header "Authorization: Bearer ${CF_API_TOKEN}" \
  --header 'Content-Type: application/json' \
  > /tmp/newtractor-redirect-entrypoint-before.json
```

Se o GET retornar um ruleset existente, use o `id` retornado e faça um merge
das cinco regras na lista já existente. Preserve regras, `ref`, IDs, nome,
estado e demais propriedades que já estiverem configurados. Envie o ruleset
completo pelo `PUT /zones/${CF_ZONE_ID}/rulesets/${RULESET_ID}` documentado
pela Cloudflare; não substitua a lista existente pelo array deste arquivo.
Isso evita apagar redirects mantidos por outra equipe.

Se o GET retornar 404, confirme manualmente a zona, o domínio proxied e a
ausência de um entrypoint que deva ser mantido. Somente depois dessa revisão o
operador pode usar o `POST /zones/${CF_ZONE_ID}/rulesets` de criação
documentado pela Cloudflare. Não crie um segundo entrypoint às cegas e não
habilite estas regras como parte desse procedimento local.

Referências oficiais:

- [Criar Single Redirects pela API](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-api/)
- [Campo `http.request.uri.args`](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/http.request.uri.args/)
- [Funções `any` e `len`](https://developers.cloudflare.com/ruleset-engine/rules-language/functions/)
- [Endpoints da API de Rulesets](https://developers.cloudflare.com/ruleset-engine/rulesets-api/endpoints/)

O JSON não foi enviado à API e não foi validado pelo parser da Cloudflare
nesta etapa.

## Validação local e de corte

Valide a estrutura e os destinos renderizados a partir da raiz do projeto:

```sh
python3 - <<'PY'
import json
from pathlib import Path
from urllib.parse import urlsplit

package = Path('docs/migration/wordpress-single-redirects.json')
data = json.loads(package.read_text(encoding='utf-8'))
assert data['kind'] == 'zone'
assert data['phase'] == 'http_request_dynamic_redirect'
assert len(data['rules']) == 5
expected = {
    'wordpress-470': '/empresa/',
    'wordpress-13': '/servicos/manutencao-material-rodante/',
    'wordpress-288': '/servicos/reforma-cacambas-conchas/',
    'wordpress-286': '/servicos/monitoramento-material-rodante/',
    'wordpress-477': '/contato/',
}
for rule in data['rules']:
    ref = rule['ref']
    assert ref in expected
    assert rule['enabled'] is False
    assert rule['action'] == 'redirect'
    assert rule['action_parameters']['from_value']['status_code'] == 301
    assert rule['action_parameters']['from_value']['preserve_query_string'] is False
    expression = rule['expression']
    for term in ('http.request.uri.args', 'len(', 'any(', 'has_key('):
        assert term in expression, (ref, term)
    target = rule['action_parameters']['from_value']['target_url']['value']
    assert target == 'https://newtractor.com.br' + expected[ref]
    route_file = Path('dist') / urlsplit(target).path.lstrip('/') / 'index.html'
    assert route_file.is_file(), route_file
    assert route_file.read_text(encoding='utf-8').count('<h1') == 1, route_file
print(f"OK: {len(data['rules'])} regras desabilitadas; 5 destinos dist presentes com um H1")
PY
```

Depois de integrar as regras preservando o entrypoint existente, habilite-as
somente no ambiente aprovado e confira os dois formatos de ID, a ordem dos
parâmetros e a remoção da query. O teste de cada ID pode ser feito assim:

```sh
for id in 470 13 288 286 477; do
  for key in p page_id; do
    curl --silent --show-error --dump-header - --output /dev/null \
      --max-redirs 0 "https://newtractor.com.br/?${key}=${id}"
  done
done
```

Os casos com correspondência devem retornar `301`, `Location` para o destino
da tabela e, com `preserve_query_string: false`, uma Location sem query. Repita
com `/index.php`, `www.newtractor.com.br`, parâmetros UTM antes/depois do ID e
ordem trocada. Confira também que `p=470&p=13`, `p=470&p=470`,
`p=999` e a home sem ID não são capturados por estas cinco regras. Status de
um caso negativo pode ser influenciado por regras antigas; o objetivo aqui é
confirmar que nenhuma destas expressões o corresponde.

Antes do corte, registre o estado atual de DNS e da ruleset para rollback.
Compare NS, A, AAAA, CNAME, MX, SPF, DKIM, DMARC, CAA, TXT e subdomínios, e
preserve os registros de e-mail durante qualquer troca de delegação. Não
invente seletores DKIM. Em caso de falha, restaure a resposta completa do
ruleset anterior ou desabilite estas cinco regras via atualização completa,
sem remover regras preexistentes; depois restaure somente a configuração web
registrada, mantendo MX, SPF, DKIM, DMARC e subdomínios intactos.
