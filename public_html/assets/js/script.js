/* ============================================================
   Cartório Natividade — script unificado
   Funciona em todas as páginas; cada bloco só roda se os
   elementos correspondentes existirem.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Cabeçalho fixo: estado ao rolar ---------- */
  var header = document.getElementById('header');
  function updateHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 32);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Menu mobile ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      if (header) header.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        if (header) header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Animação de revelação ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el, index) {
      el.style.transitionDelay = (Math.min(index % 4, 3) * 70) + 'ms';
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Formulário de contato via WhatsApp ---------- */
  var form = document.getElementById('whatsapp-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var nomeEl = document.getElementById('nome-input');
      var assuntoEl = document.getElementById('assunto-input');
      var nome = nomeEl ? nomeEl.value.trim() : '';
      var assunto = assuntoEl ? assuntoEl.value : '';
      if (!nome || !assunto) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      var msg = 'Olá! Meu nome é ' + nome + ' e gostaria de falar sobre ' + assunto + '.';
      window.open('https://wa.me/5563992876354?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  /* ---------- Dica do botão flutuante ---------- */
  var waTip = document.getElementById('waTip');
  if (waTip) {
    window.setTimeout(function () { waTip.style.display = 'none'; }, 6000);
  }

  /* ---------- Banner de cookies (LGPD) ---------- */
  var cookieBanner = document.getElementById('cookieBanner');
  if (cookieBanner) {
    var consent = null;
    try { consent = localStorage.getItem('cookie_consent'); } catch (e) {}
    if (consent === null) {
      window.setTimeout(function () { cookieBanner.classList.add('visible'); }, 1100);
    }
    var saveConsent = function (value) {
      try { localStorage.setItem('cookie_consent', value); } catch (e) {}
      cookieBanner.classList.remove('visible');
    };
    var accept = document.getElementById('cookieAccept');
    var decline = document.getElementById('cookieDecline');
    if (accept) accept.addEventListener('click', function () { saveConsent('accepted'); });
    if (decline) decline.addEventListener('click', function () { saveConsent('declined'); });
  }

  /* ---------- Galeria (página O Cartório) ---------- */
  var galleryStage = document.getElementById('galleryImg');
  if (galleryStage) {
    var images = [
      { src: '/assets/images/fachada1.jpg',        label: 'Fachada' },
      { src: '/assets/images/fachada2.jpg',         label: 'Fachada lateral' },
      { src: '/assets/images/recepcao.jpg',         label: 'Recepção' },
      { src: '/assets/images/sala-reuniao.jpg',     label: 'Sala de reunião' },
      { src: '/assets/images/guiches.jpg',          label: 'Guichês de atendimento' },
      { src: '/assets/images/sala-atendimento.jpg', label: 'Sala de atendimento' }
    ];
    var current = 0;
    var galleryLabel = document.getElementById('galleryLabel');
    var galleryCounter = document.getElementById('galleryCounter');
    var galleryDots = document.getElementById('galleryDots');

    function renderDots() {
      if (!galleryDots) return;
      galleryDots.innerHTML = '';
      images.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'gallery__dot' + (i === current ? ' active' : '');
        dot.setAttribute('aria-label', 'Ver imagem ' + (i + 1));
        dot.addEventListener('click', function () { goToImage(i); });
        galleryDots.appendChild(dot);
      });
    }
    function goToImage(index) {
      current = (index + images.length) % images.length;
      galleryStage.src = images[current].src;
      galleryStage.alt = images[current].label + ' – Cartório Natividade';
      if (galleryLabel) galleryLabel.textContent = images[current].label;
      if (galleryCounter) galleryCounter.textContent = (current + 1) + ' / ' + images.length;
      renderDots();
    }
    renderDots();
    var galleryPrev = document.getElementById('galleryPrev');
    var galleryNext = document.getElementById('galleryNext');
    if (galleryPrev) galleryPrev.addEventListener('click', function () { goToImage(current - 1); });
    if (galleryNext) galleryNext.addEventListener('click', function () { goToImage(current + 1); });
    var galleryTimer = window.setInterval(function () { goToImage(current + 1); }, 5000);
    galleryStage.closest('.gallery__stage').addEventListener('mouseenter', function () {
      window.clearInterval(galleryTimer);
    });
  }

  /* ---------- Carrossel da equipe ---------- */
  var teamScroll = document.getElementById('teamScroll');
  if (teamScroll) {
    var teamLeft = document.getElementById('teamScrollLeft');
    var teamRight = document.getElementById('teamScrollRight');
    if (teamLeft) teamLeft.addEventListener('click', function () {
      teamScroll.scrollBy({ left: -240, behavior: 'smooth' });
    });
    if (teamRight) teamRight.addEventListener('click', function () {
      teamScroll.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }

  /* ---------- Emolumentos: abas por ano e accordion ---------- */
  var emolTabs = document.querySelectorAll('.emol-tab');
  if (emolTabs.length) {
    emolTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var year = this.dataset.year;
        emolTabs.forEach(function (t) { t.classList.remove('active'); });
        document.querySelectorAll('.emol-year-block').forEach(function (b) {
          b.classList.remove('active');
        });
        this.classList.add('active');
        var block = document.getElementById('year-' + year);
        if (block) block.classList.add('active');
      });
    });
  }
  document.querySelectorAll('.emol-accordion-header').forEach(function (head) {
    head.addEventListener('click', function () {
      var accordion = head.closest('.emol-accordion');
      if (accordion) accordion.classList.toggle('open');
    });
  });

  /* ---------- VLibras (acessibilidade) ---------- */
  window.addEventListener('load', function () {
    if (!document.querySelector('[vw]')) return;
    var initVlibras = function () {
      var script = document.createElement('script');
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
