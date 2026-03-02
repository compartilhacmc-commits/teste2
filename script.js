   // ============================================================
    // DIRETORIA DE REGULAÇÃO DO ACESSO – DASHBOARD
    // script.js – v3.0 (com todas as alterações solicitadas)
    // ============================================================

    'use strict';

    Chart.register(ChartDataLabels);

    // ============================================================
    // CONFIGURAÇÕES
    // ============================================================
    const SHEET_ID  = '1gGIHpkw9Osr_881n5Vke7Fb3LWs2Z0p1';
    const SHEET_GID = '1698493941';
    const CSV_URL   = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

    // ============================================================
    // MAPEAMENTO DE OPERADORES
    // ============================================================
    const OPERADORES = {
      '336': 'Giovanna Borello',
      '531': 'Rosangela de Jesus',
      '594': 'Ariana Trindade',
      '536': 'Magaly Mendes',
      '591': 'Ana P Araujo',
      '535': 'Cristina Fonseca',
      '534': 'Erica Lucia',
      '533': 'Natalia Bretas',
      '595': 'Eliane Pereira',
      '540': 'Carolina de Avelar',
      '541': 'Daniela Fonseca',
      '532': 'Graziele Alves'
    };

    // ============================================================
    // MAPEAMENTO DE DISTRITOS (MESMO DO CÓDIGO ORIGINAL)
    // ============================================================
    const DISTRITO_MAP = {
      'UNIDADE BASICA DE SAUDE JARDIM BANDEIRANTES': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE AGUA BRANCA': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE XV': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE CSU ELDORADO': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE PARQUE SAO JOAO': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE JARDIM ELDORADO': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE NOVO ELDORADO': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE SANTA CRUZ': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE PEROBAS': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE BELA VISTA': 'ELDORADO',
      'UNIDADE BASICA DE SAUDE INDUSTRIAL III SECAO': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE JARDIM INDUSTRIAL': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE VILA SAO PAULO': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE SANDOVAL DE AZEVEDO': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE JOAO EVANGELISTA': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE BANDEIRANTES': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE AMAZONAS': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE VILA DINIZ': 'INDUSTRIAL',
      'UNIDADE BASICA DE SAUDE NACIONAL': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE ILDA EFIGENIA': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE JOAQUIM MURTINHO': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE XANGRILA': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE AMENDOEIRAS': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE ESTRELA DALVA': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE TIJUCA': 'NACIONAL',
      'UNIDADE BASICA DE SAUDE PETROLANDIA': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE TROPICAL II': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE SAPUCAIAS': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE DUQUE DE CAXIAS': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE SAO LUIZ II': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE SAO LUIZ I': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE CAMPO ALTO': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE TROPICAL I': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE ESTANCIAS IMPERIAIS': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE NASCENTES IMPERIAIS': 'PETROLANDIA',
      'UNIDADE BASICA DE SAUDE CAMPINA VERDE': 'RESSACA',
      'UNIDADE BASICA DE SAUDE LAGUNA': 'RESSACA',
      'UNIDADE BASICA DE SAUDE ARPOADOR': 'RESSACA',
      'UNIDADE BASICA DE SAUDE SAO JOAQUIM': 'RESSACA',
      'UNIDADE BASICA DE SAUDE PARQUE TURISTA': 'RESSACA',
      'UNIDADE BASICA DE SAUDE VILA PEROLA': 'RESSACA',
      'UNIDADE BASICA DE SAUDE NOVO PROGRESSO II': 'RESSACA',
      'UNIDADE BASICA DE SAUDE COLORADO': 'RESSACA',
      'UNIDADE BASICA DE SAUDE CANDIDA FERREIRA': 'RESSACA',
      'UNIDADE DE SAUDE DA FAMILIA VILA PEROLA II USF 84': 'RESSACA',
      'UNIDADE BASICA DE SAUDE PRESIDENTE KENNEDY': 'RESSACA',
      'UNIDADE BASICA DE SAUDE OITIS': 'RESSACA',
      'UNIDADE BASICA DE SAUDE MORADA NOVA': 'RESSACA',
      'UNIDADE BASICA DE SAUDE INCONFIDENTES': 'RIACHO',
      'UNIDADE BASICA DE SAUDE RIACHO': 'RIACHO',
      'UNIDADE BASICA DE SAUDE FLAMENGO': 'RIACHO',
      'UNIDADE BASICA DE SAUDE NOVO RIACHO': 'RIACHO',
      'UNIDADE BASICA DE SAUDE DURVAL DE BARROS': 'RIACHO',
      'UNIDADE BASICA DE SAUDE MONTE CASTELO': 'RIACHO',
      'UNIDADE BASICA DE SAUDE CHACARAS': 'SEDE',
      'UNIDADE BASICA DE SAUDE CANADA': 'SEDE',
      'UNIDADE BASICA DE SAUDE CENTRO (CAD)': 'SEDE',
      'UBS BERNARDO MONTEIRO/MOACIR PINTO MOREIRA': 'SEDE',
      'UNIDADE BASICA DE SAUDE LINDA VISTA': 'SEDE',
      'UNIDADE BASICA DE SAUDE SANTA HELENA': 'SEDE',
      'UNIDADE BASICA DE SAUDE VILA ITALIA': 'SEDE',
      'UNIDADE BASICA DE SAUDE BEATRIZ USF 72': 'SEDE',
      'UNIDADE BASICA DE SAUDE MARIA DA CONCEICAO': 'SEDE',
      'UNIDADE BASICA DE SAUDE FUNCIONARIOS': 'SEDE',
      'UNIDADE BASICA DE SAUDE PRAIA': 'SEDE',
      'UBS UNIDADE XVI (SEDE)': 'SEDE',
      'UNIDADE BASICA DE SAUDE VILA RENASCER': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE NOVA CONTAGEM': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE VILA SOLEDADE': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE ESTALEIRO': 'VARGEM DAS FLORES',
      'CERESP CONTAGEM': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE RETIRO II': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE RETIRO': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE IPE AMARELO': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE SAO JUDAS TADEU': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE VILA ESPERANCA': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE DARCY RIBEIRO': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE ICAIVERA': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE NOVA CONTAGEM I': 'VARGEM DAS FLORES',
      'CONTAGEM PENITENCIARIA NELSON HUNGRIA': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE TUPA': 'VARGEM DAS FLORES',
      'UNIDADE BASICA DE SAUDE LIBERDADE II': 'VARGEM DAS FLORES'
    };

    const CAE_UNITS = ['CAE IRIA DINIZ', 'CAE RESSACA', 'CEAPS'];

    const MESES_PT = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                      'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

    // ============================================================
    // ESTADO GLOBAL
    // ============================================================
    let allData        = [];
    let filteredData   = [];
    let tableData      = [];
    let tableSearched  = [];
    let currentPage    = 1;
    let sortColIdx     = -1;
    let sortAscFlag    = true;

    // Charts
    let chartPrestador        = null;
    let chartTipoAtendimento  = null;
    let chartEspecialidade    = null;
    let chartDistrito         = null;
    let chartMesRosca         = null;
    let chartSituacao         = null;
    let chartAbsentDistrito   = null;
    let chartAbsentEspecialidade = null;
    let chartCancelDistrito   = null;
    let chartCancelEspecialidade = null;

    // ============================================================
    // UTILITÁRIOS
    // ============================================================
    function norm(str) {
      if (!str) return '';
      return str.toString().toUpperCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ').trim();
    }

    function titleCase(str) {
      if (!str) return '';
      const artigos = ['DE','DA','DO','DAS','DOS','E','A','O','EM','NO','NA','NOS','NAS','POR','COM','PARA'];
      return str.toString().toLowerCase().split(' ').map((w, i) => {
        if (i === 0 || !artigos.includes(w.toUpperCase())) {
          return w.charAt(0).toUpperCase() + w.slice(1);
        }
        return w;
      }).join(' ');
    }

    function formatCBO(nomeCBO, especialidade) {
      if (!nomeCBO) return '';
      let name = nomeCBO.toString().trim();
      name = name.replace(/^M[eé]dico[:\-\s]*/i, '').trim();
      name = titleCase(name);
      if (especialidade) {
        const esp = especialidade.toString().trim();
        const addons = ['Adulto', 'Infantil', 'Geral', 'Pediátrico', 'Pediátrica'];
        for (const addon of addons) {
          if (norm(esp).includes(norm(addon)) && !norm(name).includes(norm(addon))) {
            name += ' ' + addon;
            break;
          }
        }
      }
      return name;
    }

    function formatProfissional(nome) {
      if (!nome) return '';
      return titleCase(nome.toString().trim().replace(/^\d+\s*[-–]?\s*/, '').trim());
    }

    function getUnidade(row) {
      const solicitante = (row['UNIDADE SOLICITANTE'] || '').toString().trim();
      const solNorm = norm(solicitante);
      for (const cae of CAE_UNITS) {
        if (solNorm === norm(cae)) {
          const ref = (row['UNIDADE DE REFERÊNCIA'] || row['UNIDADE DE REFERENCIA'] || '').toString().trim();
          if (ref) return ref;
          return solicitante;
        }
      }
      return solicitante;
    }

    function getDistrito(unidade) {
      if (!unidade) return 'NÃO IDENTIFICADO';
      const key = norm(unidade);
      for (const [mapKey, distrito] of Object.entries(DISTRITO_MAP)) {
        if (norm(mapKey) === key) return distrito;
      }
      for (const [mapKey, distrito] of Object.entries(DISTRITO_MAP)) {
        if (key.includes(norm(mapKey)) || norm(mapKey).includes(key)) return distrito;
      }
      return 'OUTROS';
    }

    function getTipoAtendimento(val) {
      const v = (val || '').toString().trim().toUpperCase();
      if (v === 'P') return 'Primeira Consulta';
      if (v === 'R') return 'Retorno';
      return val || '–';
    }

    function getSituacaoLabel(val) {
      const map = { AGE: 'Agendados', CAN: 'Cancelados', FAL: 'Faltosos', REC: 'Recepcionados', TRA: 'Transferidos' };
      return map[(val || '').toUpperCase()] || val || '–';
    }

    function getOperador(codigo) {
      const key = (codigo || '').toString().trim();
      return OPERADORES[key] || 'Outros';
    }

    function fmt(n) {
      return (n || 0).toLocaleString('pt-BR');
    }

    function fmtPercent(n) {
      return (n * 100).toFixed(1) + '%';
    }

    function parseDate(str) {
      if (!str) return null;
      str = str.toString().trim();
      let m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
      if (m) return new Date(+m[3], +m[2]-1, +m[1]);
      m = str.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (m) return new Date(+m[1], +m[2]-1, +m[3]);
      return null;
    }

    function isSameDay(d1, d2) {
      if (!d1 || !d2) return false;
      return d1.getFullYear() === d2.getFullYear() &&
             d1.getMonth()    === d2.getMonth()    &&
             d1.getDate()     === d2.getDate();
    }

    // ============================================================
    // CARREGAR DADOS
    // ============================================================
    async function loadData() {
      showLoading(true);
      setStatus('Carregando...', false);
      const icon = document.getElementById('refreshIcon');
      icon.classList.add('spinning');

      try {
        const response = await fetch(CSV_URL + '&t=' + Date.now(), {
          cache: 'no-store',
          mode: 'cors'
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: false,
          transformHeader: h => h.trim(),
          complete: function(results) {
            allData = normalizeData(results.data);
            populateFilterOptions();
            applyFilters();
            setStatus('Conectado', true);
            updateLastUpdate();
            showLoading(false);
            icon.classList.remove('spinning');
          },
          error: function(err) {
            console.error('Parse error:', err);
            showError('Erro ao processar os dados.');
            icon.classList.remove('spinning');
            showLoading(false);
          }
        });
      } catch (err) {
        console.error('Fetch error:', err);
        showError('Não foi possível carregar os dados. Verifique as permissões da planilha.');
        icon.classList.remove('spinning');
        showLoading(false);
      }
    }

    // ============================================================
    // NORMALIZAR DADOS
    // ============================================================
    function normalizeData(rows) {
      return rows.map(row => {
        const get = (...keys) => {
          for (const k of keys) {
            if (row[k] !== undefined && row[k] !== null && row[k] !== '') return row[k];
            const kNorm = norm(k);
            for (const [rk, rv] of Object.entries(row)) {
              if (norm(rk) === kNorm && rv !== undefined && rv !== null && rv !== '') return rv;
            }
          }
          return '';
        };

        const unidadeSolicitante = getUnidade({
          'UNIDADE SOLICITANTE': get('UNIDADE SOLICITANTE'),
          'UNIDADE DE REFERÊNCIA': get('UNIDADE DE REFERÊNCIA', 'UNIDADE DE REFERENCIA'),
        });

        const nomeCBO       = get('NOME CBO');
        const especialidade = get('ESPECIALIDADE');
        const cbof          = formatCBO(nomeCBO, especialidade);
        const profissional  = formatProfissional(get('NOME PROFISSIONAL'));
        const tipoAtend     = getTipoAtendimento(get('TIPO DE ATENDIMENTO'));
        const situacao      = (get('SITUAÇÃO', 'SITUACAO') || '').toUpperCase().trim();
        const operCod       = get('OPERADOR AGENDAMENTO');

        const dataCriacao       = get('DATA CRIAÇÃO DO AGENDAMENTO', 'DATA CRIACAO DO AGENDAMENTO', 'DATA CRIAÇÃO', 'DATA_CRIACAO');
        const dataCriacaoParsed = parseDate(dataCriacao);

        const dataAgenda       = get('DATA AGENDA', 'DATA_AGENDA');
        const dataAgendaParsed = parseDate(dataAgenda);

        const unidadeExec = get('UNIDADE EXECUTANTE');

        let mesLabel = '';
        if (dataAgendaParsed) {
          mesLabel = MESES_PT[dataAgendaParsed.getMonth()] + '/' + dataAgendaParsed.getFullYear();
        }

        return {
          _raw:              row,
          unidadeExecutante: unidadeExec,
          unidadeSolicitante,
          cbo:               cbof,
          especialidade:     especialidade ? titleCase(especialidade.toString()) : '',
          nomeCBO,
          profissional,
          tipoAtendimento:   tipoAtend,
          situacao,
          situacaoLabel:     getSituacaoLabel(situacao),
          operadorCod:       operCod,
          operador:          getOperador(operCod),
          dataCriacao,
          dataCriacaoParsed,
          dataAgenda,
          dataAgendaParsed,
          mesAgendamento:    mesLabel,
          distrito:          getDistrito(unidadeSolicitante),
          valor:             parseFloat((get('VALOR') || '0').toString().replace(',', '.')) || 0,
          quantidade:        parseInt(get('QUANTIDADE') || '1') || 1,
        };
      }).filter(r => r.unidadeExecutante || r.profissional);
    }

    // ============================================================
    // POPULAR FILTROS
    // ============================================================
    function populateFilterOptions() {
      populateSelect('filterPrestador',    [...new Set(allData.map(r => r.unidadeExecutante).filter(Boolean))].sort());
      populateSelect('filterEspecialidade',[...new Set(allData.map(r => r.cbo).filter(Boolean))].sort());
      populateSelect('filterProfissional', [...new Set(allData.map(r => r.profissional).filter(Boolean))].sort());
      populateSelect('filterUnidade',      [...new Set(allData.map(r => r.unidadeSolicitante).filter(Boolean))].sort());
      populateSelect('filterDistrito',     [...new Set(allData.map(r => r.distrito).filter(Boolean))].sort());

      const mesesSet = {};
      allData.forEach(r => {
        if (r.dataAgendaParsed && r.mesAgendamento) {
          const d   = r.dataAgendaParsed;
          const key = d.getFullYear() * 100 + d.getMonth();
          mesesSet[key] = r.mesAgendamento;
        }
      });
      const mesesOrdenados = Object.entries(mesesSet).sort((a,b) => +a[0] - +b[0]).map(e => e[1]);
      populateSelect('filterMes', mesesOrdenados);
    }

    function populateSelect(id, values) {
      const sel = document.getElementById(id);
      if (!sel) return;
      const current = sel.value;
      while (sel.options.length > 1) sel.remove(1);
      values.forEach(v => {
        if (!v) return;
        const opt = document.createElement('option');
        opt.value = v;
        opt.textContent = v;
        sel.appendChild(opt);
      });
      if (current) sel.value = current;
    }

    // ============================================================
    // APLICAR FILTROS
    // ============================================================
    function applyFilters() {
      const prestador     = document.getElementById('filterPrestador')?.value    || '';
      const especialidade = document.getElementById('filterEspecialidade')?.value|| '';
      const tipoServico   = document.getElementById('filterTipoServico')?.value  || '';
      const profissional  = document.getElementById('filterProfissional')?.value || '';
      const mes           = document.getElementById('filterMes')?.value          || '';
      const unidade       = document.getElementById('filterUnidade')?.value      || '';
      const distrito      = document.getElementById('filterDistrito')?.value     || '';
      const situacao      = document.getElementById('filterSituacao')?.value     || '';

      const dataCriacaoSelecionada = window._fpInicio ? window._fpInicio.selectedDates[0] : null;

      filteredData = allData.filter(r => {
        if (prestador     && r.unidadeExecutante   !== prestador)     return false;
        if (especialidade && r.cbo                !== especialidade)  return false;
        if (tipoServico   && r.tipoAtendimento    !== tipoServico)    return false;
        if (profissional  && r.profissional       !== profissional)   return false;
        if (mes           && r.mesAgendamento     !== mes)            return false;
        if (unidade       && r.unidadeSolicitante !== unidade)        return false;
        if (distrito      && r.distrito           !== distrito)       return false;
        if (situacao      && r.situacao           !== situacao)       return false;
        if (dataCriacaoSelecionada) {
          if (!r.dataCriacaoParsed) return false;
          if (!isSameDay(r.dataCriacaoParsed, dataCriacaoSelecionada)) return false;
        }
        return true;
      });

      updateKPIs();
      renderAllCharts();
      buildTableData();
      currentPage = 1;
      renderTable();
    }

    function clearFilters() {
      ['filterPrestador','filterEspecialidade','filterTipoServico','filterProfissional',
       'filterMes','filterUnidade','filterDistrito','filterSituacao'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      if (window._fpInicio) window._fpInicio.clear();
      applyFilters();
    }

    // ============================================================
    // KPIS - ATUALIZADO: Total exclui CAN
    // ============================================================
    function updateKPIs() {
      const total = filteredData.filter(r => r.situacao !== 'CAN').length; // Total excluindo cancelados
      const age   = filteredData.filter(r => r.situacao === 'AGE').length;
      const rec   = filteredData.filter(r => r.situacao === 'REC').length;
      const fal   = filteredData.filter(r => r.situacao === 'FAL').length;
      const can   = filteredData.filter(r => r.situacao === 'CAN').length;
      const tra   = filteredData.filter(r => r.situacao === 'TRA').length;

      animateCount('kpiTotal', total);
      animateCount('kpiAgendados', age);
      animateCount('kpiRecepcionados', rec);
      animateCount('kpiFaltosos', fal);
      animateCount('kpiCancelados', can);
      animateCount('kpiTransferidos', tra);
    }

    function animateCount(id, target) {
      const el = document.getElementById(id);
      if (!el) return;
      const current = parseInt(el.textContent.replace(/\D/g,'')) || 0;
      if (current === target) { el.textContent = fmt(target); return; }
      const step = Math.max(1, Math.round(Math.abs(target - current) / 20));
      let val = current;
      const inc = target > current ? step : -step;
      const timer = setInterval(() => {
        val += inc;
        if ((inc > 0 && val >= target) || (inc < 0 && val <= target)) {
          val = target;
          clearInterval(timer);
        }
        el.textContent = fmt(val);
      }, 16);
    }

    // ============================================================
    // GRÁFICOS
    // ============================================================
    const PALETTE_BLUE   = ['#1e3a5f','#2d5494','#4a90d9','#74b3e8','#a8d1f5','#c8e4fb'];
    const DARK_BLUE      = '#1e3a5f';
    const PALETTE_PURPLE = ['#6c3483','#7d3c98','#9b59b6','#af7ac5','#c39bd3','#d7bde2'];
    const PALETTE_TEAL   = ['#0e6655','#148069','#1abc9c','#45d1a0','#76ddb5','#a8e8ce'];
    const PALETTE_SITUACAO = ['#2ecc71', '#3498db', '#e74c3c', '#f39c12', '#9b59b6'];

    const TOOLTIP_BASE = {
      backgroundColor: 'rgba(20,40,68,0.92)',
      titleFont: { family: 'Inter', size: 12, weight: '700' },
      bodyFont:  { family: 'Inter', size: 11 },
      padding: 12,
      cornerRadius: 10,
      callbacks: { label: ctx => ` ${fmt(ctx.raw)}` }
    };

    function countBy(data, keyFn) {
      const map = {};
      data.forEach(r => {
        const k = keyFn(r);
        if (!k) return;
        map[k] = (map[k] || 0) + 1;
      });
      return map;
    }

    function sortedEntries(obj, limit = 0) {
      let entries = Object.entries(obj).sort((a,b) => b[1]-a[1]);
      if (limit > 0) entries = entries.slice(0, limit);
      return entries;
    }

    function renderAllCharts() {
      renderChartDistrito();      // Agora na posição 1
      renderChartPrestador();     // Agora na posição 2
      renderChartEspecialidade();
      renderChartSituacao();      // Novo gráfico consolidado por situação
      renderChartMesRosca();      // Mês em rosca
      renderChartAbsentDistrito();
      renderChartAbsentEspecialidade();
      renderChartCancelDistrito();
      renderChartCancelEspecialidade();
      renderChartTipoAtendimento();
    }

    // ============================================================
    // 1. Agendamentos por Distrito (agora no primeiro lugar)
    // ============================================================
    function renderChartDistrito() {
      const ctx = document.getElementById('chartDistrito')?.getContext('2d');
      if (!ctx) return;

      const counts  = countBy(filteredData, r => r.distrito);
      const entries = sortedEntries(counts);
      const labels  = entries.map(e => e[0]);
      const data    = entries.map(e => e[1]);

      if (chartDistrito) chartDistrito.destroy();
      chartDistrito = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Agendamentos',
            data,
            backgroundColor: DARK_BLUE,
            borderColor:     DARK_BLUE,
            borderWidth: 0,
            borderRadius: 7,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...TOOLTIP_BASE,
              callbacks: { label: ctx => ` ${fmt(ctx.raw)} agendamentos` }
            },
            datalabels: {
              anchor: 'center',
              align: 'center',
              color: '#ffffff',
              font: { family: 'Inter', size: 13, weight: 'bold' },
              formatter: val => val > 0 ? fmt(val) : ''
            }
          },
          scales: {
            x: {
              ticks: {
                font: { family: 'Inter', size: 10, weight: '600' },
                color: '#3d5166',
                maxRotation: 30
              },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              ticks: { font: { family: 'Inter', size: 10 }, color: '#7a8fa6' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 2. Agendamentos por Prestador (agora no segundo lugar)
    // ============================================================
    function renderChartPrestador() {
      const ctx = document.getElementById('chartPrestador')?.getContext('2d');
      if (!ctx) return;

      const counts  = countBy(filteredData, r => r.unidadeExecutante);
      const entries = sortedEntries(counts, 12);
      const labels  = entries.map(e => e[0]);
      const data    = entries.map(e => e[1]);

      if (chartPrestador) chartPrestador.destroy();
      chartPrestador = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Agendamentos',
            data,
            backgroundColor: labels.map((_, i) => PALETTE_BLUE[i % PALETTE_BLUE.length] + 'dd'),
            borderColor:     labels.map((_, i) => PALETTE_BLUE[i % PALETTE_BLUE.length]),
            borderWidth: 2,
            borderRadius: 6,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: TOOLTIP_BASE,
            datalabels: {
              anchor: 'end',
              align: 'end',
              clamp: true,
              offset: 2,
              color: '#1a2a3a',
              font: { family: 'Inter', size: 14, weight: 'bold' },
              formatter: val => fmt(val)
            }
          },
          layout: { padding: { top: 30 } },
          scales: {
            x: {
              ticks: {
                font: { family: 'Inter', size: 10 },
                color: '#3d5166',
                maxRotation: 35,
                minRotation: 20,
                callback: function(val) {
                  const label = this.getLabelForValue(val);
                  return label && label.length > 18 ? label.substring(0,16)+'…' : label;
                }
              },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              ticks: { font: { family: 'Inter', size: 10 }, color: '#7a8fa6' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 3. Agendamentos por Especialidade
    // ============================================================
    function renderChartEspecialidade() {
      const ctx = document.getElementById('chartEspecialidade')?.getContext('2d');
      if (!ctx) return;

      const counts  = countBy(filteredData, r => r.cbo);
      const entries = sortedEntries(counts, 15);
      const labels  = entries.map(e => e[0]);
      const data    = entries.map(e => e[1]);

      if (chartEspecialidade) chartEspecialidade.destroy();
      chartEspecialidade = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Agendamentos',
            data,
            backgroundColor: labels.map((_, i) => PALETTE_PURPLE[i % PALETTE_PURPLE.length] + 'dd'),
            borderColor:     labels.map((_, i) => PALETTE_PURPLE[i % PALETTE_PURPLE.length]),
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: TOOLTIP_BASE,
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: '#3d5166',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              formatter: val => fmt(val)
            }
          },
          layout: { padding: { right: 36 } },
          scales: {
            y: {
              ticks: {
                font: { family: 'Inter', size: 10 },
                color: '#3d5166',
                callback: function(val) {
                  const label = this.getLabelForValue(val);
                  return label && label.length > 24 ? label.substring(0,22)+'…' : label;
                }
              },
              grid: { display: false }
            },
            x: {
              beginAtZero: true,
              ticks: { font: { family: 'Inter', size: 10 }, color: '#7a8fa6' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 4. Consolidado por Situação (NOVO)
    // ============================================================
    function renderChartSituacao() {
      const ctx = document.getElementById('chartSituacao')?.getContext('2d');
      if (!ctx) return;

      const counts = {
        'Agendados': filteredData.filter(r => r.situacao === 'AGE').length,
        'Recepcionados': filteredData.filter(r => r.situacao === 'REC').length,
        'Faltosos': filteredData.filter(r => r.situacao === 'FAL').length,
        'Cancelados': filteredData.filter(r => r.situacao === 'CAN').length,
        'Transferidos': filteredData.filter(r => r.situacao === 'TRA').length
      };

      const labels = Object.keys(counts);
      const data = Object.values(counts);

      if (chartSituacao) chartSituacao.destroy();
      chartSituacao = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: PALETTE_SITUACAO,
            borderColor: '#ffffff',
            borderWidth: 3,
            borderRadius: 8,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: { family: 'Inter', size: 11 },
                color: '#3d5166',
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              ...TOOLTIP_BASE,
              callbacks: {
                label: ctx => ` ${ctx.label}: ${fmt(ctx.raw)} (${((ctx.raw / filteredData.length) * 100).toFixed(1)}%)`
              }
            },
            datalabels: {
              color: '#ffffff',
              font: { family: 'Inter', size: 12, weight: 'bold' },
              formatter: (val, ctx) => {
                const total = filteredData.length;
                if (total === 0) return '';
                return ((val / total) * 100).toFixed(1) + '%';
              },
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 12,
              padding: { top: 4, bottom: 4, left: 6, right: 6 }
            }
          }
        }
      });
    }

    // ============================================================
    // 5. Distribuição por Mês (ROSCA)
    // ============================================================
    function renderChartMesRosca() {
      const ctx = document.getElementById('chartMesRosca')?.getContext('2d');
      if (!ctx) return;

      const mesesMap = {};
      filteredData.forEach(r => {
        if (!r.dataAgendaParsed || !r.mesAgendamento) return;
        const d   = r.dataAgendaParsed;
        const key = d.getFullYear() * 100 + d.getMonth();
        if (!mesesMap[key]) mesesMap[key] = { label: r.mesAgendamento, count: 0 };
        mesesMap[key].count++;
      });

      const sorted = Object.entries(mesesMap).sort((a,b) => +a[0] - +b[0]);
      const labels = sorted.map(e => e[1].label);
      const data   = sorted.map(e => e[1].count);

      if (chartMesRosca) chartMesRosca.destroy();
      chartMesRosca = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: PALETTE_TEAL,
            borderColor: '#ffffff',
            borderWidth: 3,
            borderRadius: 8,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: { family: 'Inter', size: 10 },
                color: '#3d5166',
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              ...TOOLTIP_BASE,
              callbacks: {
                label: ctx => ` ${ctx.label}: ${fmt(ctx.raw)} agendamentos`
              }
            },
            datalabels: {
              color: '#ffffff',
              font: { family: 'Inter', size: 11, weight: 'bold' },
              formatter: (val, ctx) => {
                const total = filteredData.length;
                if (total === 0) return '';
                return ((val / total) * 100).toFixed(1) + '%';
              },
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: 12,
              padding: { top: 3, bottom: 3, left: 5, right: 5 }
            }
          }
        }
      });
    }

    // ============================================================
    // 6. % Absenteísmo por Distrito
    // ============================================================
    function renderChartAbsentDistrito() {
      const ctx = document.getElementById('chartAbsentDistrito')?.getContext('2d');
      if (!ctx) return;

      const distritos = {};
      filteredData.forEach(r => {
        if (!r.distrito) return;
        if (!distritos[r.distrito]) {
          distritos[r.distrito] = { total: 0, faltas: 0 };
        }
        if (r.situacao !== 'CAN') distritos[r.distrito].total++;
        if (r.situacao === 'FAL') distritos[r.distrito].faltas++;
      });

      const entries = Object.entries(distritos)
        .map(([distrito, dados]) => ({
          distrito,
          percentual: dados.total > 0 ? dados.faltas / dados.total : 0
        }))
        .filter(d => d.percentual > 0)
        .sort((a, b) => b.percentual - a.percentual)
        .slice(0, 10);

      const labels = entries.map(e => e.distrito);
      const data = entries.map(e => e.percentual * 100);

      if (chartAbsentDistrito) chartAbsentDistrito.destroy();
      chartAbsentDistrito = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: '% Absenteísmo',
            data,
            backgroundColor: '#e67e22',
            borderColor: '#d35400',
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.raw.toFixed(1)}% de absenteísmo`
              }
            },
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: '#e67e22',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              formatter: val => val.toFixed(1) + '%'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { font: { family: 'Inter', size: 9 }, callback: val => val + '%' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 7. % Absenteísmo por Especialidade
    // ============================================================
    function renderChartAbsentEspecialidade() {
      const ctx = document.getElementById('chartAbsentEspecialidade')?.getContext('2d');
      if (!ctx) return;

      const especialidades = {};
      filteredData.forEach(r => {
        if (!r.cbo) return;
        if (!especialidades[r.cbo]) {
          especialidades[r.cbo] = { total: 0, faltas: 0 };
        }
        if (r.situacao !== 'CAN') especialidades[r.cbo].total++;
        if (r.situacao === 'FAL') especialidades[r.cbo].faltas++;
      });

      const entries = Object.entries(especialidades)
        .map(([esp, dados]) => ({
          especialidade: esp,
          percentual: dados.total > 0 ? dados.faltas / dados.total : 0
        }))
        .filter(d => d.percentual > 0)
        .sort((a, b) => b.percentual - a.percentual)
        .slice(0, 10);

      const labels = entries.map(e => e.especialidade.length > 20 ? e.especialidade.substring(0,18)+'…' : e.especialidade);
      const data = entries.map(e => e.percentual * 100);

      if (chartAbsentEspecialidade) chartAbsentEspecialidade.destroy();
      chartAbsentEspecialidade = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: '% Absenteísmo',
            data,
            backgroundColor: '#9b59b6',
            borderColor: '#8e44ad',
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.raw.toFixed(1)}% de absenteísmo`
              }
            },
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: '#9b59b6',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              formatter: val => val.toFixed(1) + '%'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { font: { family: 'Inter', size: 9 }, callback: val => val + '%' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 8. % Cancelamentos por Distrito
    // ============================================================
    function renderChartCancelDistrito() {
      const ctx = document.getElementById('chartCancelDistrito')?.getContext('2d');
      if (!ctx) return;

      const distritos = {};
      filteredData.forEach(r => {
        if (!r.distrito) return;
        if (!distritos[r.distrito]) {
          distritos[r.distrito] = { total: 0, cancelados: 0 };
        }
        distritos[r.distrito].total++;
        if (r.situacao === 'CAN') distritos[r.distrito].cancelados++;
      });

      const entries = Object.entries(distritos)
        .map(([distrito, dados]) => ({
          distrito,
          percentual: dados.total > 0 ? dados.cancelados / dados.total : 0
        }))
        .filter(d => d.percentual > 0)
        .sort((a, b) => b.percentual - a.percentual)
        .slice(0, 10);

      const labels = entries.map(e => e.distrito);
      const data = entries.map(e => e.percentual * 100);

      if (chartCancelDistrito) chartCancelDistrito.destroy();
      chartCancelDistrito = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: '% Cancelamentos',
            data,
            backgroundColor: '#e74c3c',
            borderColor: '#c0392b',
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.raw.toFixed(1)}% de cancelamentos`
              }
            },
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: '#e74c3c',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              formatter: val => val.toFixed(1) + '%'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { font: { family: 'Inter', size: 9 }, callback: val => val + '%' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 9. % Cancelamentos por Especialidade
    // ============================================================
    function renderChartCancelEspecialidade() {
      const ctx = document.getElementById('chartCancelEspecialidade')?.getContext('2d');
      if (!ctx) return;

      const especialidades = {};
      filteredData.forEach(r => {
        if (!r.cbo) return;
        if (!especialidades[r.cbo]) {
          especialidades[r.cbo] = { total: 0, cancelados: 0 };
        }
        especialidades[r.cbo].total++;
        if (r.situacao === 'CAN') especialidades[r.cbo].cancelados++;
      });

      const entries = Object.entries(especialidades)
        .map(([esp, dados]) => ({
          especialidade: esp,
          percentual: dados.total > 0 ? dados.cancelados / dados.total : 0
        }))
        .filter(d => d.percentual > 0)
        .sort((a, b) => b.percentual - a.percentual)
        .slice(0, 10);

      const labels = entries.map(e => e.especialidade.length > 20 ? e.especialidade.substring(0,18)+'…' : e.especialidade);
      const data = entries.map(e => e.percentual * 100);

      if (chartCancelEspecialidade) chartCancelEspecialidade.destroy();
      chartCancelEspecialidade = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: '% Cancelamentos',
            data,
            backgroundColor: '#c0392b',
            borderColor: '#a93226',
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.raw.toFixed(1)}% de cancelamentos`
              }
            },
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: '#c0392b',
              font: { family: 'Inter', size: 10, weight: 'bold' },
              formatter: val => val.toFixed(1) + '%'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { font: { family: 'Inter', size: 9 }, callback: val => val + '%' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // 10. 1ª Consulta vs Retorno
    // ============================================================
    function renderChartTipoAtendimento() {
      const ctx = document.getElementById('chartTipoAtendimento')?.getContext('2d');
      if (!ctx) return;

      const pc  = filteredData.filter(r => r.tipoAtendimento === 'Primeira Consulta').length;
      const ret = filteredData.filter(r => r.tipoAtendimento === 'Retorno').length;

      if (chartTipoAtendimento) chartTipoAtendimento.destroy();
      chartTipoAtendimento = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['1ª Consulta', 'Retorno'],
          datasets: [{
            label: 'Quantidade',
            data: [pc, ret],
            backgroundColor: ['rgba(30,58,95,0.88)', 'rgba(39,174,96,0.88)'],
            borderColor:     ['#1e3a5f', '#27ae60'],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...TOOLTIP_BASE,
              callbacks: { label: ctx => ` ${fmt(ctx.raw)} agendamentos` }
            },
            datalabels: {
              anchor: 'center',
              align: 'center',
              color: '#ffffff',
              font: { family: 'Inter', size: 18, weight: 'bold' },
              formatter: val => val > 0 ? fmt(val) : ''
            }
          },
          scales: {
            x: {
              ticks: {
                font: { family: 'Inter', size: 15, weight: '700' },
                color: '#1e3a5f'
              },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              ticks: { font: { family: 'Inter', size: 10 }, color: '#7a8fa6' },
              grid: { color: 'rgba(0,0,0,0.05)' }
            }
          }
        }
      });
    }

    // ============================================================
    // TABELA CONSOLIDADO/AGENDAMENTOS (NOVA ESTRUTURA)
    // ============================================================
    function buildTableData() {
      const map = {};
      
      filteredData.forEach(r => {
        const key = `${r.distrito}|||${r.unidadeSolicitante}|||${r.tipoAtendimento}|||${r.cbo}|||${r.unidadeExecutante}`;
        
        if (!map[key]) {
          map[key] = {
            distrito: r.distrito || 'NÃO IDENTIFICADO',
            unidadeSolicitante: r.unidadeSolicitante || '–',
            tipoServico: r.tipoAtendimento || '–',
            cbo: r.cbo || '–',
            unidadeExecutante: r.unidadeExecutante || '–',
            age: 0,
            rec: 0,
            fal: 0,
            can: 0,
            tra: 0,
            totalAgendamentos: 0, // AGE + REC + FAL + TRA (exclui CAN)
            percentAbsenteismo: 0
          };
        }
        
        // Contadores por situação
        if (r.situacao === 'AGE') map[key].age++;
        else if (r.situacao === 'REC') map[key].rec++;
        else if (r.situacao === 'FAL') map[key].fal++;
        else if (r.situacao === 'CAN') map[key].can++;
        else if (r.situacao === 'TRA') map[key].tra++;
      });

      // Calcular totais e percentuais
      Object.values(map).forEach(item => {
        item.totalAgendamentos = item.age + item.rec + item.fal + item.tra; // Exclui CAN
        if (item.totalAgendamentos > 0) {
          item.percentAbsenteismo = item.fal / item.totalAgendamentos;
        }
      });

      tableData = Object.values(map).sort((a, b) => b.totalAgendamentos - a.totalAgendamentos);
      tableSearched = [...tableData];
    }

    function filterTable() {
      const q = (document.getElementById('tableSearch')?.value || '').toLowerCase();
      tableSearched = !q
        ? [...tableData]
        : tableData.filter(r =>
            (r.distrito||'').toLowerCase().includes(q) ||
            (r.unidadeSolicitante||'').toLowerCase().includes(q) ||
            (r.tipoServico||'').toLowerCase().includes(q) ||
            (r.cbo||'').toLowerCase().includes(q) ||
            (r.unidadeExecutante||'').toLowerCase().includes(q)
          );
      currentPage = 1;
      renderTable();
    }

    function sortTable(col) {
      if (sortColIdx === col) sortAscFlag = !sortAscFlag;
      else { sortColIdx = col; sortAscFlag = true; }

      const keys = ['distrito','unidadeSolicitante','tipoServico','cbo','unidadeExecutante','age','rec','fal','can','tra','totalAgendamentos','percentAbsenteismo'];
      const key  = keys[col];
      
      tableSearched.sort((a, b) => {
        let va = a[key] ?? '';
        let vb = b[key] ?? '';
        
        if (key === 'percentAbsenteismo') {
          return sortAscFlag ? va - vb : vb - va;
        }
        
        if (typeof va === 'number') {
          return sortAscFlag ? va - vb : vb - va;
        }
        
        return sortAscFlag 
          ? va.toString().localeCompare(vb.toString(), 'pt-BR')
          : vb.toString().localeCompare(va.toString(), 'pt-BR');
      });
      
      renderTable();
    }

    function renderTable() {
      const pageSize = parseInt(document.getElementById('tablePageSize')?.value || 15);
      const total    = tableSearched.length;
      const pages    = Math.max(1, Math.ceil(total / pageSize));
      if (currentPage > pages) currentPage = pages;

      const start = (currentPage - 1) * pageSize;
      const slice = tableSearched.slice(start, start + pageSize);

      const tbody = document.getElementById('tableBody');
      const tfoot = document.getElementById('tableFoot');
      if (!tbody) return;

      if (slice.length === 0) {
        tbody.innerHTML = '<tr><td colspan="12" class="empty-msg">Nenhum registro encontrado.</td></tr>';
        tfoot.innerHTML = '';
      } else {
        tbody.innerHTML = slice.map(r => `
          <tr>
            <td><span class="badge-num" style="background:rgba(30,58,95,0.1);">${r.distrito}</span></td>
            <td>${r.unidadeSolicitante}</td>
            <td>${r.tipoServico}</td>
            <td>${r.cbo}</td>
            <td>${r.unidadeExecutante}</td>
            <td class="text-center"><span class="badge-num" style="background:rgba(46,204,113,0.15);color:#27ae60;">${fmt(r.age)}</span></td>
            <td class="text-center"><span class="badge-num" style="background:rgba(52,152,219,0.15);color:#2980b9;">${fmt(r.rec)}</span></td>
            <td class="text-center"><span class="badge-num" style="background:rgba(230,126,34,0.15);color:#e67e22;">${fmt(r.fal)}</span></td>
            <td class="text-center"><span class="badge-num" style="background:rgba(231,76,60,0.15);color:#c0392b;">${fmt(r.can)}</span></td>
            <td class="text-center"><span class="badge-num" style="background:rgba(155,89,182,0.15);color:#8e44ad;">${fmt(r.tra)}</span></td>
            <td class="text-center"><span class="badge-num badge-total">${fmt(r.totalAgendamentos)}</span></td>
            <td class="text-center">
              <span class="percentage-badge ${r.percentAbsenteismo > 0.2 ? 'high' : ''}" 
                    style="${r.percentAbsenteismo > 0.2 ? 'background:rgba(231,76,60,0.15);color:#c0392b;' : ''}">
                ${fmtPercent(r.percentAbsenteismo)}
              </span>
            </td>
          </tr>
        `).join('');

        // Totais no rodapé
        const totAge = tableSearched.reduce((s,r) => s + r.age, 0);
        const totRec = tableSearched.reduce((s,r) => s + r.rec, 0);
        const totFal = tableSearched.reduce((s,r) => s + r.fal, 0);
        const totCan = tableSearched.reduce((s,r) => s + r.can, 0);
        const totTra = tableSearched.reduce((s,r) => s + r.tra, 0);
        const totTotal = tableSearched.reduce((s,r) => s + r.totalAgendamentos, 0);
        const percentAbsGlobal = totTotal > 0 ? (totFal / totTotal) : 0;

        tfoot.innerHTML = `
          <tr>
            <td colspan="5"><i class="fas fa-calculator" style="margin-right:6px;"></i>TOTAL GERAL (${fmt(tableSearched.length)} registros)</td>
            <td class="text-center">${fmt(totAge)}</td>
            <td class="text-center">${fmt(totRec)}</td>
            <td class="text-center">${fmt(totFal)}</td>
            <td class="text-center">${fmt(totCan)}</td>
            <td class="text-center">${fmt(totTra)}</td>
            <td class="text-center"><strong>${fmt(totTotal)}</strong></td>
            <td class="text-center"><strong>${fmtPercent(percentAbsGlobal)}</strong></td>
          </tr>
        `;
      }

      document.getElementById('tablePaginationInfo').textContent =
        `Mostrando ${total === 0 ? 0 : start+1} a ${Math.min(start+pageSize, total)} de ${fmt(total)} registros`;

      renderPagination(currentPage, pages);
    }

    function renderPagination(cur, total) {
      const container = document.getElementById('pagination');
      if (!container) return;

      let html = `<button class="page-btn" onclick="goPage(${cur-1})" ${cur===1?'disabled':''}>‹</button>`;

      let pages = [];
      if (total <= 7) {
        for (let i=1; i<=total; i++) pages.push(i);
      } else {
        pages = [1];
        if (cur > 3) pages.push('...');
        for (let i=Math.max(2,cur-1); i<=Math.min(total-1,cur+1); i++) pages.push(i);
        if (cur < total-2) pages.push('...');
        pages.push(total);
      }

      pages.forEach(p => {
        if (p === '...') {
          html += `<button class="page-btn" disabled>…</button>`;
        } else {
          html += `<button class="page-btn ${p===cur?'active':''}" onclick="goPage(${p})">${p}</button>`;
        }
      });

      html += `<button class="page-btn" onclick="goPage(${cur+1})" ${cur===total?'disabled':''}>›</button>`;
      container.innerHTML = html;
    }

    function goPage(p) {
      const pageSize = parseInt(document.getElementById('tablePageSize')?.value || 15);
      const pages    = Math.max(1, Math.ceil(tableSearched.length / pageSize));
      if (p < 1 || p > pages) return;
      currentPage = p;
      renderTable();
    }

    // ============================================================
    // EXPORTAR EXCEL (ATUALIZADO)
    // ============================================================
    function exportExcel() {
      if (!filteredData.length) {
        alert('Nenhum dado para exportar.');
        return;
      }
      const btn = document.getElementById('btnExcel');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando...';

      setTimeout(() => {
        try {
          // Dados detalhados
          const wsData = filteredData.map(r => ({
            'Distrito':            r.distrito,
            'Unidade Solicitante': r.unidadeSolicitante,
            'Tipo de Serviço':     r.tipoAtendimento,
            'CBO/Especialidade':   r.cbo,
            'Unidade Executante':  r.unidadeExecutante,
            'Situação':            r.situacaoLabel,
            'Profissional':        r.profissional,
            'Operador':            r.operador,
            'Data Agenda':         r.dataAgenda,
            'Data Criação':        r.dataCriacao,
            'Mês Agendamento':     r.mesAgendamento
          }));

          // Resumo consolidado
          const wsSummary = tableData.map(r => ({
            'Distrito':            r.distrito,
            'Unidade Solicitante': r.unidadeSolicitante,
            'Tipo de Serviço':     r.tipoServico,
            'CBO/Especialidade':   r.cbo,
            'Unidade Executante':  r.unidadeExecutante,
            'AGE':                 r.age,
            'REC':                 r.rec,
            'FAL':                 r.fal,
            'CAN':                 r.can,
            'TRA':                 r.tra,
            'Total Agendamentos':  r.totalAgendamentos,
            '% Absenteísmo':       fmtPercent(r.percentAbsenteismo)
          }));

          const wb  = XLSX.utils.book_new();
          const ws1 = XLSX.utils.json_to_sheet(wsData);
          autoSizeColumns(ws1, wsData);
          XLSX.utils.book_append_sheet(wb, ws1, 'Dados Filtrados');

          const ws2 = XLSX.utils.json_to_sheet(wsSummary);
          autoSizeColumns(ws2, wsSummary);
          XLSX.utils.book_append_sheet(wb, ws2, 'Consolidado');

          const now   = new Date();
          const fname = `Agendamentos_CMC_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}.xlsx`;
          XLSX.writeFile(wb, fname);
        } catch(e) {
          console.error(e);
          alert('Erro ao gerar o arquivo Excel.');
        }
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-file-excel"></i> Excel';
      }, 100);
    }

    function autoSizeColumns(ws, data) {
      if (!data.length) return;
      const cols = Object.keys(data[0]);
      ws['!cols'] = cols.map(col => ({
        wch: Math.min(
          data.reduce((max, row) => Math.max(max, (row[col]||'').toString().length), col.length) + 2,
          60
        )
      }));
    }

    // ============================================================
    // UTILITÁRIOS UI
    // ============================================================
    function showLoading(show) {
      document.getElementById('loadingOverlay')?.classList.toggle('hidden', !show);
    }

    function setStatus(msg, ok) {
      const el  = document.getElementById('statusText');
      const dot = document.querySelector('.status-dot');
      if (el)  el.textContent = msg;
      if (dot) dot.className  = 'status-dot ' + (ok ? 'connected' : 'error');
    }

    function showError(msg) {
      setStatus('Erro', false);
      showLoading(false);
      const toast = document.createElement('div');
      toast.style.cssText = `
        position:fixed;bottom:24px;right:24px;z-index:9998;
        background:#c0392b;color:#fff;border-radius:12px;
        padding:14px 22px;font-family:Inter,sans-serif;font-size:.85rem;
        font-weight:600;box-shadow:0 6px 24px rgba(0,0,0,.3);
        display:flex;align-items:center;gap:10px;
      `;
      toast.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 7000);
    }

    function updateLastUpdate() {
      const el = document.getElementById('lastUpdate');
      if (el) el.textContent = `Última atualização: ${new Date().toLocaleString('pt-BR')}`;
    }

    // ============================================================
    // DATE PICKER
    // ============================================================
    function initDatePickers() {
      window._fpInicio = flatpickr('#filterDataInicio', {
        locale: 'pt',
        dateFormat: 'd/m/Y',
        allowInput: false,
        disableMobile: false,
        onChange: () => applyFilters()
      });
    }

    // ============================================================
    // INICIALIZAÇÃO
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {
      initDatePickers();
      loadData();
    });

    // Tornar funções globais
    window.applyFilters = applyFilters;
    window.clearFilters = clearFilters;
    window.filterTable = filterTable;
    window.sortTable = sortTable;
    window.goPage = goPage;
    window.loadData = loadData;
    window.exportExcel = exportExcel;
    window.renderTable = renderTable;
  </script>
</body>
</html>
