# Jota’s — A brasa escreve a noite ✦

Website oficial e landing page de alta sofisticação para **Jota’s Hamburgueria**, desenvolvido com foco em estética minimalista e noturna, gastronomia de alto padrão e compatibilidade universal com hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

---

## ✦ Destaques do Projeto

- **Estética & Identidade Noturna:** Paleta de cores em preto profundo, âmbar e dourado (`Cinzel` e `Jost`).
- **Cardápio Sazonal Interativo:** Abas com fotos em alta definição, descrições detalhadas e preços para Hambúrgueres, Acompanhamentos e Sobremesas.
- **Sistema de Reservas Inteligente:**
  - Validação em tempo real (datas futuras até 90 dias).
  - Bloqueio automático para segundas-feiras (descanso da equipe).
  - Horários dinâmicos de acordo com o dia de funcionamento.
  - Máscara de telefone/WhatsApp brasileira `(XX) XXXXX-XXXX`.
  - Geração de código de reserva único (`#JT-XXXXXX`) e comprovante para envio direto no WhatsApp.
- **100% Estático & Zero Erros na Vercel:** Não necessita de comandos de compilação ou dependências externas que quebram o deploy. Basta subir para o GitHub e conectar à Vercel.

---

## 📁 Estrutura de Arquivos

```text
├── images/
│   ├── jotas-atmosphere.webp
│   ├── jotas-burger.webp
│   ├── jotas-dessert.webp
│   ├── jotas-hero.webp
│   └── jotas-sides.webp
├── favicon.svg
├── index.html
├── style.css
├── script.js
├── vercel.json
└── README.md
```

---

## 🚀 Como Publicar na Vercel

1. **Pelo GitHub:**
   - Faça o commit e push dos arquivos para o seu repositório GitHub (já preparado na branch `main`).
   - Acesse [vercel.com](https://vercel.com) e faça login.
   - Clique em **"Add New..."** > **"Project"**.
   - Selecione o repositório **Ham-Jotas**.
   - No **Framework Preset**, deixe como **"Other"**.
   - Clique em **"Deploy"**. Em menos de 20 segundos seu site estará online com certificado SSL gratuito e alta velocidade.

2. **Testar Localmente:**
   - Basta abrir o arquivo `index.html` diretamente em qualquer navegador moderno.
