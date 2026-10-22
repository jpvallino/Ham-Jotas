/**
 * Jota's Hamburgueria - Script Interativo
 * 100% Client-side, pronto para Vercel sem falhas de build
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar Ano no Rodapé
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Header Solid no Scroll
  const header = document.getElementById('site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('header-solid');
    } else {
      header.classList.remove('header-solid');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Menu Mobile Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      if (isExpanded) {
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('hidden', '');
      } else {
        mobileNav.removeAttribute('hidden');
        mobileNav.classList.add('is-open');
      }
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('hidden', '');
      });
    });
  }

  // 4. Cardápio Sazonal (Tabs)
  const menuData = [
    {
      id: 'burgers',
      name: 'Hambúrgueres',
      image: 'images/jotas-burger.webp',
      imageAlt: 'Imagem ilustrativa de hambúrguer artesanal com cheddar e bacon sob luz âmbar',
      caption: 'O clássico, do nosso jeito.',
      items: [
        {
          name: "Jota’s Original",
          description: "Blend bovino de 180 g, cheddar, bacon crocante, cebola caramelizada e maionese da casa no pão brioche.",
          price: 38.00,
          label: "O FAVORITO DA CASA"
        },
        {
          name: "Brasa & Brie",
          description: "Blend bovino de 180 g, queijo brie, geleia de pimenta e rúcula fresca no pão de fermentação natural.",
          price: 46.00,
          label: "DA ESTAÇÃO"
        },
        {
          name: "Duplo da Noite",
          description: "Dois smash burgers de 90 g, cheddar em dobro, picles artesanal e molho especial no brioche.",
          price: 42.00
        },
        {
          name: "Verde da Horta",
          description: "Hambúrguer de grão-de-bico, cogumelos salteados, rúcula e maionese de ervas no pão artesanal.",
          price: 36.00,
          label: "VEGETARIANO"
        }
      ]
    },
    {
      id: 'sides',
      name: 'Acompanhamentos',
      image: 'images/jotas-sides.webp',
      imageAlt: 'Imagem ilustrativa de batatas fritas artesanais com parmesão e aioli',
      caption: 'Boas companhias, à mesa.',
      items: [
        {
          name: "Fritas da Casa",
          description: "Batatas douradas, crocantes por fora e macias por dentro. Acompanham maionese de alho assado.",
          price: 18.00,
          label: "PARA COMPARTILHAR"
        },
        {
          name: "Fritas com Parmesão",
          description: "Nossa porção de fritas com parmesão curado, ervas frescas e um toque de azeite trufado.",
          price: 26.00
        },
        {
          name: "Onion Rings",
          description: "Anéis de cebola empanados, bem crocantes, com o molho especial da Jota’s.",
          price: 22.00
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Sobremesas',
      image: 'images/jotas-dessert.webp',
      imageAlt: 'Imagem ilustrativa de brownie quente com sorvete de baunilha e calda de chocolate',
      caption: 'Um último motivo para ficar.',
      items: [
        {
          name: "Brownie da Noite",
          description: "Brownie de chocolate intenso, sorvete de baunilha e calda quente de chocolate. Feito para terminar devagar.",
          price: 24.00,
          label: "O FINAL PERFEITO"
        },
        {
          name: "Cheesecake de Frutas",
          description: "Cheesecake cremoso com base crocante e compota artesanal de frutas vermelhas da estação.",
          price: 26.00,
          label: "DA ESTAÇÃO"
        },
        {
          name: "Doce de Leite & Flor de Sal",
          description: "Creme de doce de leite, farofa amanteigada e flor de sal. Uma colherada de cada vez.",
          price: 20.00
        }
      ]
    }
  ];

  const menuContainer = document.getElementById('menu-content-container');
  const formatBRL = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  function renderMenuTab(index) {
    const section = menuData[index];
    if (!section || !menuContainer) return;

    let itemsHtml = section.items.map(item => `
      <article class="menu-item">
        ${item.label ? `<span class="item-label">${item.label}</span>` : ''}
        <div class="item-top">
          <h3>${item.name}</h3>
          <span class="item-dotted-line"></span>
          <span class="price">${formatBRL(item.price)}</span>
        </div>
        <p>${item.description}</p>
      </article>
    `).join('');

    menuContainer.innerHTML = `
      <div class="menu-content" id="panel-${section.id}" role="tabpanel" aria-labelledby="tab-${section.id}">
        <div class="menu-photo">
          <img src="${section.image}" alt="${section.imageAlt}" loading="lazy" width="800" height="1000" />
          <span class="photo-kicker">JOTA’S · DA CHAPA À MESA</span>
          <div class="photo-caption">${section.caption}</div>
        </div>
        <div class="menu-list">
          ${itemsHtml}
          <div class="menu-list-footer">
            <span>Preparado na hora. Sem atalhos.</span>
            <a href="#reservas">
              Encontre sua mesa
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  const tabButtons = [
    document.getElementById('tab-burgers'),
    document.getElementById('tab-sides'),
    document.getElementById('tab-desserts')
  ];

  tabButtons.forEach((btn, idx) => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      tabButtons.forEach((b, i) => {
        const isCurrent = i === idx;
        b.classList.toggle('active', isCurrent);
        b.setAttribute('aria-selected', String(isCurrent));
        b.setAttribute('tabindex', isCurrent ? '0' : '-1');
      });
      renderMenuTab(idx);
    });

    btn.addEventListener('keydown', (e) => {
      let targetIdx = idx;
      if (e.key === 'ArrowRight') targetIdx = (idx + 1) % tabButtons.length;
      else if (e.key === 'ArrowLeft') targetIdx = (idx + tabButtons.length - 1) % tabButtons.length;
      else if (e.key === 'Home') targetIdx = 0;
      else if (e.key === 'End') targetIdx = tabButtons.length - 1;
      else return;

      e.preventDefault();
      tabButtons[targetIdx].click();
      tabButtons[targetIdx].focus();
    });
  });

  // Render inicial
  renderMenuTab(0);

  // 5. Sistema de Reservas
  const formContainer = document.getElementById('reservation-form-container');
  const dateInput = document.getElementById('reservation-date');
  const timeSelect = document.getElementById('reservation-time');
  const guestsSelect = document.getElementById('reservation-guests');
  const nameInput = document.getElementById('reservation-name');
  const phoneInput = document.getElementById('reservation-phone');
  const notesInput = document.getElementById('reservation-notes');
  const form = document.getElementById('reservation-form');

  // Configurar restrição de datas (hoje até 90 dias)
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const minDateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  
  const maxDate = new Date();
  maxDate.setDate(now.getDate() + 90);
  const maxDateStr = `${maxDate.getFullYear()}-${pad(maxDate.getMonth() + 1)}-${pad(maxDate.getDate())}`;

  if (dateInput) {
    dateInput.min = minDateStr;
    dateInput.max = maxDateStr;
  }

  // Horários por dia da semana (0: Domingo, 1: Segunda, 2: Terça, etc.)
  function getTimeSlotsForDate(dateStr) {
    if (!dateStr) return { closed: false, slots: [] };
    const parts = dateStr.split('-');
    if (parts.length !== 3) return { closed: false, slots: [] };
    
    // Obter dia da semana em UTC local
    const target = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    const day = target.getDay();

    if (day === 1) { // Segunda-feira
      return { closed: true, message: 'Descanso da equipe (fechado às segundas)' };
    }

    let startH = 18;
    let endH = 22; // Terça a quinta: fecha às 23h, última reserva às 22h
    if (day === 5 || day === 6) { // Sexta e Sábado: fecha às 00h, última reserva às 23h
      endH = 23;
    } else if (day === 0) { // Domingo: fecha às 22h, última reserva às 21h
      endH = 21;
    }

    const slots = [];
    for (let h = startH; h <= endH; h++) {
      slots.push(`${pad(h)}:00`);
      if (h < endH) {
        slots.push(`${pad(h)}:30`);
      }
    }
    return { closed: false, slots };
  }

  // Atualizar horários ao mudar a data
  if (dateInput && timeSelect) {
    dateInput.addEventListener('change', () => {
      clearError('date');
      clearError('time');
      const dateVal = dateInput.value;
      if (!dateVal) {
        timeSelect.disabled = true;
        timeSelect.innerHTML = '<option value="" selected>Selecione a data</option>';
        return;
      }

      const res = getTimeSlotsForDate(dateVal);
      if (res.closed) {
        timeSelect.disabled = true;
        timeSelect.innerHTML = `<option value="" selected>${res.message}</option>`;
        showError('date', 'Segunda-feira é dia de descanso da casa. Escolha de terça a domingo.');
      } else {
        timeSelect.disabled = false;
        let opts = '<option value="" selected>Selecione o horário</option>';
        res.slots.forEach(slot => {
          opts += `<option value="${slot}">${slot}</option>`;
        });
        timeSelect.innerHTML = opts;
      }
    });
  }

  // Máscara e validação de Telefone
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      clearError('phone');
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);
      
      if (val.length > 10) {
        e.target.value = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
      } else if (val.length > 6) {
        e.target.value = `(${val.slice(0, 2)}) ${val.slice(2, 6)}-${val.slice(6)}`;
      } else if (val.length > 2) {
        e.target.value = `(${val.slice(0, 2)}) ${val.slice(2)}`;
      } else if (val.length > 0) {
        e.target.value = `(${val}`;
      } else {
        e.target.value = '';
      }
    });
  }

  if (nameInput) {
    nameInput.addEventListener('input', () => clearError('name'));
  }
  if (timeSelect) {
    timeSelect.addEventListener('change', () => clearError('time'));
  }

  function showError(fieldId, msg) {
    const errEl = document.getElementById(`error-${fieldId}`);
    const inputEl = document.getElementById(`reservation-${fieldId}`);
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    }
    if (inputEl) {
      inputEl.setAttribute('aria-invalid', 'true');
    }
  }

  function clearError(fieldId) {
    const errEl = document.getElementById(`error-${fieldId}`);
    const inputEl = document.getElementById(`reservation-${fieldId}`);
    if (errEl) {
      errEl.textContent = '';
      errEl.style.display = 'none';
    }
    if (inputEl) {
      inputEl.setAttribute('aria-invalid', 'false');
    }
  }

  // Envio do formulário
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Validação Data
      const dateVal = dateInput.value;
      if (!dateVal) {
        showError('date', 'Por favor, informe a data desejada.');
        hasError = true;
      } else {
        const slotCheck = getTimeSlotsForDate(dateVal);
        if (slotCheck.closed) {
          showError('date', 'A casa não abre às segundas. Escolha outra data.');
          hasError = true;
        }
      }

      // Validação Horário
      const timeVal = timeSelect.value;
      if (!timeVal) {
        showError('time', 'Selecione um horário disponível.');
        hasError = true;
      }

      // Validação Nome
      const nameVal = nameInput.value.trim();
      if (!nameVal || nameVal.length < 2) {
        showError('name', 'Informe seu nome (mínimo 2 caracteres).');
        hasError = true;
      }

      // Validação Telefone
      const rawPhone = phoneInput.value.replace(/\D/g, '');
      if (rawPhone.length < 10) {
        showError('phone', 'Informe um telefone/WhatsApp válido com DDD.');
        hasError = true;
      }

      if (hasError) return;

      // Gerar referência única
      const refCode = 'JT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const guestsVal = guestsSelect.value;
      const notesVal = notesInput.value.trim();

      // Formatar data em português
      const [year, month, day] = dateVal.split('-');
      const dateObj = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
      const formattedDate = dateObj.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });

      // Salvar em localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('jotas_reservas') || '[]');
        existing.push({
          reference: refCode,
          name: nameVal,
          phone: phoneInput.value,
          date: dateVal,
          formattedDate,
          time: timeVal,
          guests: guestsVal,
          notes: notesVal,
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('jotas_reservas', JSON.stringify(existing));
      } catch (err) {
        console.warn('Erro ao salvar localmente:', err);
      }

      // Mensagem opcional de WhatsApp
      const whatsappMsg = encodeURIComponent(
        `Olá! Gostaria de confirmar uma reserva na Jota’s Hamburgueria:\n\n` +
        `• Referência: #${refCode}\n` +
        `• Nome: ${nameVal}\n` +
        `• Data: ${formattedDate}\n` +
        `• Horário: ${timeVal}\n` +
        `• Pessoas: ${guestsVal} ${guestsVal === '1' ? 'pessoa' : 'pessoas'}` +
        (notesVal ? `\n• Detalhes: ${notesVal}` : '')
      );

      // Exibir painel de sucesso idêntico ao modelo
      formContainer.innerHTML = `
        <div class="reservation-form success-panel" role="status" aria-live="polite">
          <span class="success-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <p class="eyebrow">UM BOM COMEÇO PARA A NOITE</p>
          <h3>Solicitação <em>recebida.</em></h3>
          <p>Seu pedido foi registrado. A reserva ainda depende de confirmação da Jota’s pelo telefone informado.</p>
          
          <div class="success-summary">
            <strong>${formattedDate} · ${timeVal}</strong>
            <span>${guestsVal} ${guestsVal === '1' ? 'pessoa' : 'pessoas'}</span>
            <span class="reference">Referência: #${refCode}</span>
          </div>

          <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            <a href="https://api.whatsapp.com/send?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="button button-primary" style="font-size: 8px; padding: 10px 16px;">
              Enviar comprovante no WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            
            <button class="underlined-link" type="button" id="btn-reset-form" style="background: none; border: none; cursor: pointer;">
              Fazer outra solicitação
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Botão de nova reserva
      document.getElementById('btn-reset-form')?.addEventListener('click', () => {
        window.location.reload();
      });
    });
  }
});
