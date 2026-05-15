(function () {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');


  const iconAliases = {
    'registro-civil': ['registro-civil', 'registro civil', 'civil', 'nascimento', 'casamento'],
    'notas-e-escrituras': ['notas-e-escrituras', 'notas e escrituras', 'escrituras', 'notas', 'procuracao', 'procuração'],
    'registro-de-imoveis': ['registro-de-imoveis', 'registro de imoveis', 'registro de imóveis', 'registro-imoveis', 'imoveis', 'imóveis'],
    'protesto-de-titulos': ['protesto-de-titulos', 'protesto de titulos', 'protesto de títulos', 'protesto', 'titulos', 'títulos'],
    'tabelionato': ['tabelionato', 'tabeliao', 'tabelião'],
    'certidoes': ['certidoes', 'certidões', 'certidao', 'certidão'],
    'autenticacao': ['autenticacao', 'autenticação', 'autenticar'],
    'reconhecimento-de-firma': ['reconhecimento-de-firma', 'reconhecimento de firma', 'firma', 'assinatura'],
    'limpa-nome-protesto': ['limpa-nome-protesto', 'limpa nome protesto', 'limpa-nome', 'limpanomeprotesto'],
    'assinador-cartorios-to': ['assinador-cartorios-to', 'assinador cartorios to', 'assinador cartórios to', 'assinador-cartorios', 'assinador'],
    'cenprot': ['cenprot', 'pesquisa-protesto', 'pesquisa protesto'],
    'onrtdpj': ['onrtdpj', 'onrtdpj-brasil', 'rtdbrasil', 'rtd-brasil', 'rtdpj'],
    'e-notariado': ['e-notariado', 'enotariado', 'e notariado'],
    'atendimento-por-videoconferencia': ['atendimento-por-videoconferencia', 'videoconferencia', 'videoconferência', 'videochamada', 'online'],
    'atendimento-presencial': ['atendimento-presencial', 'presencial', 'agenda', 'calendario', 'calendário'],
    'atendimento-por-whatsapp': ['atendimento-por-whatsapp', 'whatsapp', 'atendimento-whatsapp'],
    'whatsapp': ['whatsapp', 'atendimento-por-whatsapp', 'chat']
  };

  function normalizeIconName(value) {
    return String(value || '')
      .trim()
      .replace(/\.svg$/i, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function addIconNameVariants(set, value) {
    const raw = String(value || '').trim().replace(/\.svg$/i, '');
    const normalized = normalizeIconName(raw);
    const hyphen = normalized.replace(/&/g, ' e ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const underscore = hyphen.replace(/-/g, '_');
    const spaces = hyphen.replace(/-/g, ' ');
    const compact = hyphen.replace(/-/g, '');

    [raw, normalized, hyphen, underscore, spaces, compact, `icon-${hyphen}`, `icone-${hyphen}`]
      .filter(Boolean)
      .forEach(function (item) { set.add(item); });
  }

  function iconCandidates(name) {
    const names = new Set();
    const key = normalizeIconName(name).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    addIconNameVariants(names, name);
    (iconAliases[key] || []).forEach(function (alias) { addIconNameVariants(names, alias); });

    return Array.from(names).map(function (fileName) {
      return 'assets/icons/' + encodeURIComponent(fileName).replace(/%20/g, '%20') + '.svg';
    });
  }

  function loadIconMask(element, paths, index) {
    if (!paths[index]) {
      element.classList.add('icon-missing');
      return;
    }

    const img = new Image();
    img.onload = function () {
      element.style.setProperty('--icon-url', 'url("' + paths[index] + '")');
      element.classList.add('icon-loaded');
      element.classList.remove('icon-missing');
    };
    img.onerror = function () { loadIconMask(element, paths, index + 1); };
    img.src = paths[index];
  }

  document.querySelectorAll('[data-icon]').forEach(function (element) {
    loadIconMask(element, iconCandidates(element.dataset.icon), 0);
  });

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 36);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuToggle && mobileMenu && header) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      header.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const form = document.getElementById('whatsapp-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const nome = document.getElementById('nome-input').value.trim();
      const assunto = document.getElementById('assunto-input').value;

      if (!nome || !assunto) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const msg = `Olá! meu nome é *${nome}* e estou entrando em contato para falar sobre *${assunto}*.`;
      window.open(`https://wa.me/5563992876354?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el, index) {
      el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  const waTip = document.getElementById('waTip');
  if (waTip) {
    window.setTimeout(function () { waTip.style.display = 'none'; }, 6000);
  }

  const banner = document.getElementById('lgpdBanner');
  const accept = document.getElementById('lgpdAccept');
  const decline = document.getElementById('lgpdDecline');
  const savedConsent = localStorage.getItem('lgpd_accepted');

  if (banner && savedConsent === null) {
    window.setTimeout(function () { banner.classList.add('visible'); }, 1200);
  }

  function closeLgpd(value) {
    localStorage.setItem('lgpd_accepted', value);
    if (banner) banner.classList.remove('visible');
  }

  if (accept) accept.addEventListener('click', function () { closeLgpd('1'); });
  if (decline) decline.addEventListener('click', function () { closeLgpd('0'); });

  window.addEventListener('load', function () {
    const initVlibras = function () {
      const script = document.createElement('script');
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.onload = function () {
        if (window.VLibras) new window.VLibras.Widget('https://vlibras.gov.br/app');
      };
      document.body.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(initVlibras, { timeout: 6000 });
    } else {
      window.setTimeout(initVlibras, 4000);
    }
  });
})();
