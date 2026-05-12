import{j as e}from"./index-D8O9dVeE.js";const t="https://wa.me/5563992876354?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda.%20Pode%20me%20atender%3F%0A%2ANome%3A%2A%20%0A%2AAssunto%3A%2A%20%0A%2AMelhor%20hor%C3%A1rio%3A%2A%20",a=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .wpp-bubble {
          position: fixed;
          right: clamp(12px, 2.5vw, 20px);
          bottom: clamp(12px, 2.5vw, 20px);
          z-index: 9999;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1rem;
          border-radius: 999px;
          text-decoration: none;
          background: linear-gradient(180deg, #25D366, #128C7E);
          color: #fff;
          box-shadow: 0 10px 24px rgba(18,140,126,.25), 0 2px 8px rgba(0,0,0,.12);
          transition: transform .2s ease, box-shadow .2s ease;
          -webkit-tap-highlight-color: transparent;
          isolation: isolate;
          animation: wpp-float 4.5s ease-in-out infinite;
          overflow: hidden;
        }
        .wpp-bubble:hover,
        .wpp-bubble:focus {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 14px 28px rgba(18,140,126,.28), 0 6px 12px rgba(0,0,0,.14);
          outline: none;
        }
        .wpp-bubble::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 100%);
          border-radius: inherit;
          animation: wpp-glint 12s ease-in-out infinite 2s;
          pointer-events: none;
          will-change: transform;
        }
        .wpp-bubble::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.08);
          pointer-events: none;
        }
        .wpp-icon-circle {
          display: inline-grid;
          place-items: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }
        .wpp-icon-circle svg {
          animation: wpp-wiggle 2.8s ease-in-out infinite;
          transform-origin: 50% 60%;
        }
        .wpp-label {
          font-weight: 600;
          font-size: 0.95rem;
          line-height: 1.1;
          white-space: nowrap;
          letter-spacing: 0.2px;
          color: #fff;
        }
        @keyframes wpp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes wpp-glint {
          0% { transform: translateX(-200%) skewX(-20deg); opacity: 0; }
          8% { transform: translateX(400%) skewX(-20deg); opacity: 1; }
          16% { transform: translateX(400%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(400%) skewX(-20deg); opacity: 0; }
        }
        @keyframes wpp-wiggle {
          0%, 75%, 100% { transform: rotate(0deg); }
          78% { transform: rotate(10deg); }
          82% { transform: rotate(-10deg); }
          86% { transform: rotate(6deg); }
          90% { transform: rotate(-6deg); }
          94% { transform: rotate(3deg); }
          98% { transform: rotate(-3deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wpp-bubble { animation: none; }
          .wpp-bubble::before { display: none; }
          .wpp-icon-circle svg { animation: none; }
        }
        @media (max-width: 420px) {
          .wpp-label { display: none; }
          .wpp-bubble { padding: 0.7rem; }
          .wpp-icon-circle { width: 2.4rem; height: 2.4rem; }
        }
      `}),e.jsxs("a",{href:t,className:"wpp-bubble","aria-label":"Atendimento pelo WhatsApp",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("span",{className:"wpp-icon-circle",children:e.jsx("svg",{viewBox:"0 0 32 32",className:"w-5 h-5",fill:"#25D366",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16.004 3.2C9.376 3.2 3.998 8.576 3.998 15.2c0 2.112.56 4.176 1.616 5.984L3.2 28.8l7.84-2.064A11.73 11.73 0 0 0 16.004 28c6.624 0 12-5.376 12-12s-5.376-12.8-12-12.8Zm0 22.016a9.97 9.97 0 0 1-5.088-1.392l-.368-.208-3.776.992 1.008-3.68-.24-.384A9.92 9.92 0 0 1 6.03 15.2c0-5.504 4.48-9.984 9.984-9.984 2.672 0 5.184 1.04 7.072 2.928A9.925 9.925 0 0 1 25.998 15.2c-.016 5.504-4.496 10.016-9.994 10.016Zm5.472-7.488c-.304-.144-1.776-.88-2.048-.976-.272-.096-.48-.144-.672.144-.192.288-.768.976-.944 1.168-.176.192-.352.224-.656.08-.304-.16-1.264-.464-2.416-1.488-.896-.8-1.504-1.776-1.68-2.08-.176-.288-.016-.448.128-.592.128-.128.304-.352.448-.528.144-.176.192-.304.288-.496.096-.192.048-.368-.032-.528-.08-.144-.672-1.616-.928-2.224-.24-.576-.496-.496-.672-.512h-.576c-.192 0-.528.08-.8.368-.272.288-1.056 1.024-1.056 2.496s1.072 2.896 1.216 3.104c.16.192 2.112 3.232 5.12 4.528.72.304 1.28.496 1.712.624.72.224 1.376.192 1.888.112.576-.08 1.776-.72 2.032-1.424.24-.688.24-1.296.176-1.424-.08-.112-.288-.192-.592-.336Z"})})}),e.jsx("span",{className:"wpp-label",children:"Atendimento"})]})]});export{a as default};
