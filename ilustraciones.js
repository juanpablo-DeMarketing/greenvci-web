// SVG de ilustraciones generadas — placeholders elegantes
// Reutilizables por id para cualquier producto/industria/ciclo

window.ILUSTRACIONES = {
  // ---------- Producto: cada uno con su propia "esencia" visual ----------
  prodPowder: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pw-bg" cx="30%" cy="30%">
          <stop offset="0%" stop-color="#E3F0E6"/><stop offset="100%" stop-color="#C8E2CE"/>
        </radialGradient>
        <radialGradient id="pw-sphere" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#FAFBF9"/><stop offset="60%" stop-color="#9DCCA9"/><stop offset="100%" stop-color="#2A6841"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pw-bg)"/>
      ${Array.from({length: 90}, (_, i) => {
        const x = (i * 47) % 400, y = (i * 73) % 300;
        const r = 1 + (i % 4) * 0.6;
        return `<circle cx="${x}" cy="${y}" r="${r}" fill="#2A6841" opacity="${0.15 + (i%5)*0.06}"/>`;
      }).join('')}
      <circle cx="200" cy="160" r="70" fill="url(#pw-sphere)" opacity="0.95"/>
      <circle cx="200" cy="160" r="70" fill="none" stroke="#FAFBF9" stroke-width="0.5" opacity="0.4"/>
    </svg>`,

  prodMasterbatch: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F2F8F3"/><stop offset="100%" stop-color="#C8E2CE"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#mb-bg)"/>
      ${Array.from({length: 60}, (_, i) => {
        const cols = 10, row = Math.floor(i/cols), col = i%cols;
        const x = 50 + col*32 + (row%2)*16, y = 70 + row*28;
        const c = i%3 === 0 ? '#3E8953' : i%3 === 1 ? '#2A6841' : '#6AAD7D';
        return `<ellipse cx="${x}" cy="${y}" rx="14" ry="10" fill="${c}" opacity="0.85"/>
                <ellipse cx="${x-4}" cy="${y-3}" rx="5" ry="3" fill="#FFF" opacity="0.4"/>`;
      }).join('')}
    </svg>`,

  prodEmitter: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="em-bg" cx="50%" cy="50%">
          <stop offset="0%" stop-color="#163322"/><stop offset="100%" stop-color="#0A1A12"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#em-bg)"/>
      <rect x="150" y="100" width="100" height="120" rx="10" fill="#2A6841" opacity="0.9"/>
      <rect x="160" y="110" width="80" height="12" rx="4" fill="#6AAD7D"/>
      <circle cx="200" cy="160" r="28" fill="#9DCCA9" opacity="0.4"/>
      <circle cx="200" cy="160" r="20" fill="#E3F0E6"/>
      ${[0, 60, 120, 180, 240, 300].map(a => {
        const rad = a * Math.PI/180;
        const x1 = 200 + Math.cos(rad)*40, y1 = 160 + Math.sin(rad)*40;
        const x2 = 200 + Math.cos(rad)*80, y2 = 160 + Math.sin(rad)*80;
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#9DCCA9" stroke-width="1" opacity="0.5" stroke-dasharray="3 3"/>`;
      }).join('')}
      ${[50, 350, 60, 340].map((x, i) => `<circle cx="${x}" cy="${[80, 230, 230, 80][i]}" r="3" fill="#9DCCA9" opacity="0.6"/>`).join('')}
    </svg>`,

  prodLiquid: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lq-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#E3F0E6"/><stop offset="100%" stop-color="#9DCCA9"/>
        </linearGradient>
        <linearGradient id="lq-drop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FAFBF9"/><stop offset="100%" stop-color="#3E8953"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#lq-bg)"/>
      <path d="M200 60 C 160 130, 140 180, 140 210 A 60 60 0 0 0 260 210 C 260 180, 240 130, 200 60 Z" fill="url(#lq-drop)" opacity="0.95"/>
      <ellipse cx="180" cy="180" rx="20" ry="30" fill="#FFF" opacity="0.3"/>
      ${Array.from({length:6}, (_,i) => `<circle cx="${80 + i*55}" cy="${60 + (i%2)*180}" r="3" fill="#3E8953" opacity="0.4"/>`).join('')}
    </svg>`,

  prodDesiccant: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#F2F8F3"/>
      ${[[120,130,60],[220,110,70],[290,180,50]].map(([x,y,r],i) => `
        <rect x="${x-r}" y="${y-r*0.7}" width="${r*2}" height="${r*1.4}" rx="8" fill="#${['3E8953','2A6841','6AAD7D'][i]}" opacity="0.9"/>
        <rect x="${x-r+4}" y="${y-r*0.7+4}" width="${r*2-8}" height="${r*1.4-8}" rx="6" fill="none" stroke="#FFF" stroke-width="1" opacity="0.4" stroke-dasharray="3 3"/>
      `).join('')}
      <text x="120" y="140" text-anchor="middle" font-family="monospace" font-size="10" fill="#FFF" opacity="0.7">VCI</text>
      <text x="220" y="118" text-anchor="middle" font-family="monospace" font-size="11" fill="#FFF" opacity="0.7">VCI</text>
      <text x="290" y="188" text-anchor="middle" font-family="monospace" font-size="9" fill="#FFF" opacity="0.7">VCI</text>
    </svg>`,

  prodPaper: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#F5EADD"/>
      <g transform="translate(200 150) rotate(-8)">
        <rect x="-130" y="-80" width="260" height="160" fill="#FAFBF9" opacity="0.95"/>
        <rect x="-130" y="-80" width="260" height="160" fill="none" stroke="#9DCCA9" stroke-width="1.5" stroke-dasharray="6 4"/>
        ${Array.from({length: 20}, (_,i) => `<line x1="${-120 + i*13}" y1="-70" x2="${-125+i*13}" y2="70" stroke="#C8E2CE" stroke-width="0.5" opacity="0.6"/>`).join('')}
      </g>
      <g transform="translate(180 130) rotate(-8)">
        <rect x="-110" y="-60" width="220" height="120" fill="#E3F0E6" opacity="0.9"/>
      </g>
      <text x="200" y="160" text-anchor="middle" font-family="Barlow Condensed" font-size="28" font-weight="700" fill="#2A6841" opacity="0.5" letter-spacing="4">VCI PAPER</text>
    </svg>`,

  prodCleaner: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#C8E2CE"/><stop offset="100%" stop-color="#F2F8F3"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#cl-bg)"/>
      ${Array.from({length: 8}, (_, i) => {
        const x = 60 + i*40, y = 150 + Math.sin(i*0.8)*30, r = 20 + (i%3)*8;
        return `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFF" opacity="0.5" stroke="#3E8953" stroke-width="1"/>
                <circle cx="${x-r/3}" cy="${y-r/3}" r="${r/4}" fill="#FFF" opacity="0.8"/>`;
      }).join('')}
    </svg>`,

  prodFilm: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0F2418"/><stop offset="100%" stop-color="#163322"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#fm-bg)"/>
      <g opacity="0.85">
        <path d="M20 80 Q 100 60, 200 100 T 380 120 L 380 160 Q 280 140, 200 170 T 20 150 Z" fill="#3E8953" opacity="0.7"/>
        <path d="M20 150 Q 100 130, 200 170 T 380 190 L 380 220 Q 280 200, 200 230 T 20 210 Z" fill="#6AAD7D" opacity="0.6"/>
      </g>
      ${Array.from({length:30}, (_,i) => `<circle cx="${(i*37)%400}" cy="${(i*61)%300}" r="1" fill="#9DCCA9" opacity="0.5"/>`).join('')}
    </svg>`,

  prodFabrication: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#EDF0EE"/>
      <g stroke="#2A6841" stroke-width="1.5" fill="none" opacity="0.7">
        <rect x="80" y="80" width="240" height="140" rx="4"/>
        <rect x="100" y="100" width="200" height="100" rx="2" stroke-dasharray="4 3"/>
        <line x1="80" y1="80" x2="100" y2="60"/><line x1="320" y1="80" x2="340" y2="60"/>
        <line x1="100" y1="60" x2="340" y2="60"/>
        <line x1="340" y1="60" x2="340" y2="200"/><line x1="320" y1="220" x2="340" y2="200"/>
      </g>
      <g font-family="monospace" font-size="9" fill="#2A6841" opacity="0.8">
        <text x="200" y="78" text-anchor="middle">1200 mm</text>
        <text x="350" y="145" text-anchor="middle" transform="rotate(90 350 145)">800 mm</text>
      </g>
      <circle cx="200" cy="150" r="30" fill="#3E8953" opacity="0.25"/>
      <text x="200" y="156" text-anchor="middle" font-family="Barlow Condensed" font-size="18" font-weight="700" fill="#2A6841">VCI</text>
    </svg>`,

  // ---------- Industrias ----------
  indAuto: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#1A221D"/>
      ${Array.from({length: 40}, (_,i) => `<line x1="${i*12}" y1="0" x2="${i*12 - 30}" y2="300" stroke="#2E3732" stroke-width="1"/>`).join('')}
      <path d="M60 200 L100 150 L180 140 L260 140 L300 180 L340 200 L340 230 L60 230 Z" fill="#3E8953" opacity="0.85"/>
      <rect x="130" y="155" width="130" height="30" fill="#0C1410" opacity="0.6"/>
      <circle cx="110" cy="230" r="22" fill="#0C1410"/><circle cx="110" cy="230" r="10" fill="#2A6841"/>
      <circle cx="290" cy="230" r="22" fill="#0C1410"/><circle cx="290" cy="230" r="10" fill="#2A6841"/>
    </svg>`,

  indDeepTech: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#0F2418"/>
      <g stroke="#3E8953" stroke-width="0.8" fill="none" opacity="0.6">
        ${Array.from({length: 10}, (_,i) => `<line x1="60" y1="${60+i*20}" x2="340" y2="${60+i*20}"/>`).join('')}
        ${Array.from({length: 15}, (_,i) => `<line x1="${60+i*20}" y1="60" x2="${60+i*20}" y2="240"/>`).join('')}
      </g>
      ${[[120,120],[200,140],[280,100],[150,200],[250,180],[320,160]].map(([x,y]) => `<rect x="${x-6}" y="${y-6}" width="12" height="12" fill="#9DCCA9"/>`).join('')}
      <rect x="140" y="110" width="120" height="80" fill="none" stroke="#6AAD7D" stroke-width="2" stroke-dasharray="3 3"/>
    </svg>`,

  indHeavy: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="hi-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2E3732"/><stop offset="100%" stop-color="#0C1410"/></linearGradient></defs>
      <rect width="400" height="300" fill="url(#hi-bg)"/>
      ${[50,130,210,290].map((x,i) => `
        <rect x="${x}" y="${80+i*5}" width="60" height="${160-i*5}" fill="#4A5550"/>
        <rect x="${x+5}" y="${85+i*5}" width="50" height="10" fill="#3E8953" opacity="0.6"/>
      `).join('')}
      <path d="M20 240 L380 240 L380 250 L20 250 Z" fill="#2A6841"/>
    </svg>`,

  indOilGas: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="og-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#163322"/><stop offset="100%" stop-color="#2A6841"/></linearGradient></defs>
      <rect width="400" height="180" fill="url(#og-sky)"/>
      <rect y="180" width="400" height="120" fill="#0A1A12"/>
      <g stroke="#6AAD7D" stroke-width="2" fill="none">
        <path d="M150 180 L150 80 L180 60 L220 60 L250 80 L250 180"/>
        <line x1="160" y1="180" x2="160" y2="100"/>
        <line x1="240" y1="180" x2="240" y2="100"/>
        <path d="M175 100 L225 100 M175 130 L225 130 M175 160 L225 160"/>
      </g>
      <rect x="140" y="170" width="120" height="15" fill="#3E8953"/>
      <g stroke="#9DCCA9" stroke-width="1" opacity="0.5">
        <path d="M100 200 Q 150 195, 200 200 T 300 205"/>
        <path d="M80 220 Q 150 215, 220 220 T 340 225"/>
      </g>
    </svg>`,

  indMilitary: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#1E4A30"/>
      ${Array.from({length:30}, (_,i) => {
        const x = (i*67)%400, y = (i*43)%300;
        return `<circle cx="${x}" cy="${y}" r="${8+(i%4)*3}" fill="#2A6841" opacity="0.6"/>`;
      }).join('')}
      <g transform="translate(200 150)">
        <rect x="-70" y="-30" width="140" height="50" rx="6" fill="#0F2418"/>
        <rect x="-50" y="-45" width="100" height="20" rx="4" fill="#0F2418"/>
        <circle cx="-40" cy="30" r="14" fill="#0C1410"/>
        <circle cx="40" cy="30" r="14" fill="#0C1410"/>
        <rect x="-5" y="-55" width="10" height="15" fill="#2A6841"/>
      </g>
    </svg>`,

  indShipping: () => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1E4A30"/><stop offset="100%" stop-color="#2A6841"/></linearGradient></defs>
      <rect width="400" height="200" fill="url(#sh-sky)"/>
      <rect y="200" width="400" height="100" fill="#0F2418"/>
      <path d="M40 180 L360 180 L340 230 L60 230 Z" fill="#3E8953"/>
      ${Array.from({length:6}, (_,i) => `
        <rect x="${70+i*42}" y="130" width="38" height="50" fill="#${['C8986B','6AAD7D','9DCCA9','2A6841','3E8953','4A5550'][i%6]}"/>
        <rect x="${72+i*42}" y="132" width="34" height="3" fill="#0C1410" opacity="0.5"/>
      `).join('')}
      <rect x="180" y="100" width="60" height="30" fill="#FAFBF9" opacity="0.9"/>
      <rect x="195" y="80" width="8" height="25" fill="#FAFBF9"/>
      <g stroke="#9DCCA9" stroke-width="1" opacity="0.5">
        <path d="M0 230 Q 100 225, 200 230 T 400 235"/>
      </g>
    </svg>`,

  // ---------- Ciclo de vida circular (el alma visual ESG) ----------
  cicloVida: () => `
    <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cg-center" cx="50%" cy="50%">
          <stop offset="0%" stop-color="#3E8953"/><stop offset="100%" stop-color="#2A6841"/>
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="240" fill="none" stroke="#C8E2CE" stroke-width="1" stroke-dasharray="2 6"/>
      <circle cx="260" cy="260" r="180" fill="none" stroke="#9DCCA9" stroke-width="1"/>

      <!-- 3 etapas del ciclo -->
      <g>
        <!-- Reusable, top -->
        <g transform="translate(260 80)">
          <circle r="56" fill="#FFF" stroke="#3E8953" stroke-width="2"/>
          <g transform="translate(-24 -24)">
            <path d="M8 24 A 16 16 0 1 1 24 40 L 24 36" stroke="#3E8953" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M28 32 L 24 36 L 28 40" stroke="#3E8953" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <text y="88" text-anchor="middle" font-family="Barlow Condensed" font-size="18" font-weight="700" fill="#0C1410" letter-spacing="1">REUTILIZABLE</text>
        </g>

        <!-- Recyclable, bottom-right -->
        <g transform="translate(408 376)">
          <circle r="56" fill="#FFF" stroke="#3E8953" stroke-width="2"/>
          <g transform="translate(-22 -22)" stroke="#3E8953" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 8 L 32 22 L 22 22 Z"/>
            <path d="M10 34 L 22 32 L 16 42 Z"/>
            <path d="M34 34 L 28 42 L 40 32 Z"/>
          </g>
          <text y="88" text-anchor="middle" font-family="Barlow Condensed" font-size="18" font-weight="700" fill="#0C1410" letter-spacing="1">RECICLABLE</text>
        </g>

        <!-- Biodegradable, bottom-left -->
        <g transform="translate(112 376)">
          <circle r="56" fill="#FFF" stroke="#3E8953" stroke-width="2"/>
          <g transform="translate(-22 -22)" fill="#3E8953">
            <path d="M22 42 C 8 36, 4 20, 22 6 C 40 20, 36 36, 22 42 Z" opacity="0.9"/>
            <path d="M22 42 L 22 18" stroke="#FFF" stroke-width="1.5" fill="none"/>
          </g>
          <text y="88" text-anchor="middle" font-family="Barlow Condensed" font-size="18" font-weight="700" fill="#0C1410" letter-spacing="1">BIODEGRADABLE</text>
        </g>
      </g>

      <!-- Flechas del ciclo -->
      <g fill="none" stroke="#6AAD7D" stroke-width="2" stroke-linecap="round">
        <path d="M 320 110 A 180 180 0 0 1 398 260" stroke-dasharray="0" marker-end="url(#arr)"/>
        <path d="M 358 380 A 180 180 0 0 1 200 380" stroke-dasharray="0" marker-end="url(#arr)"/>
        <path d="M 122 260 A 180 180 0 0 1 200 110" stroke-dasharray="0" marker-end="url(#arr)"/>
      </g>
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="#6AAD7D"/>
        </marker>
      </defs>

      <!-- Centro: molécula VCI -->
      <g transform="translate(260 260)">
        <circle r="68" fill="url(#cg-center)"/>
        <g stroke="#FFF" stroke-width="1.5" opacity="0.6">
          <line x1="0" y1="-24" x2="0" y2="24"/>
          <line x1="-24" y1="0" x2="24" y2="0"/>
        </g>
        <circle r="6" fill="#FFF"/>
        <circle cx="0" cy="-24" r="6" fill="#FFF"/><circle cx="0" cy="24" r="6" fill="#FFF"/>
        <circle cx="-24" cy="0" r="6" fill="#FFF"/><circle cx="24" cy="0" r="6" fill="#FFF"/>
        <text y="48" text-anchor="middle" font-family="monospace" font-size="9" fill="#FFF" letter-spacing="2" opacity="0.8">VCI</text>
      </g>
    </svg>`,

  // ---------- Diagrama de ciencia VCI (sección oscura) ----------
  diagramaVCI: () => `
    <svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg">
      <!-- Fase 1: envase sellado -->
      <g transform="translate(100 170)">
        <rect x="-70" y="-80" width="140" height="160" rx="6" fill="none" stroke="#6AAD7D" stroke-width="2"/>
        <text y="-95" text-anchor="middle" font-family="monospace" font-size="10" fill="#9DCCA9" letter-spacing="2">01 · SELLADO</text>
        <!-- pieza metálica -->
        <g transform="translate(0 20)">
          <path d="M-30 -15 L30 -15 L25 15 L-25 15 Z" fill="#C8986B"/>
          <path d="M-30 -15 L-25 -20 L35 -20 L30 -15 Z" fill="#E2C4A1"/>
        </g>
        <!-- emisor VCI -->
        <rect x="-20" y="-60" width="40" height="18" rx="3" fill="#3E8953"/>
        <text x="0" y="-48" text-anchor="middle" font-family="monospace" font-size="8" fill="#FFF">VCI</text>
      </g>

      <!-- Flecha 1 -->
      <g transform="translate(220 170)" stroke="#3E8953" stroke-width="1.5" fill="none">
        <line x1="0" y1="0" x2="60" y2="0" stroke-dasharray="4 4"/>
        <path d="M55 -5 L65 0 L55 5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Fase 2: vaporización -->
      <g transform="translate(340 170)">
        <rect x="-70" y="-80" width="140" height="160" rx="6" fill="none" stroke="#6AAD7D" stroke-width="2"/>
        <text y="-95" text-anchor="middle" font-family="monospace" font-size="10" fill="#9DCCA9" letter-spacing="2">02 · VAPORIZACIÓN</text>
        <g transform="translate(0 20)">
          <path d="M-30 -15 L30 -15 L25 15 L-25 15 Z" fill="#C8986B"/>
        </g>
        <!-- partículas flotando -->
        ${Array.from({length:14}, (_,i) => {
          const x = -55 + (i*8) % 110;
          const y = -50 + ((i*7) % 50);
          return `<circle cx="${x}" cy="${y}" r="2" fill="#9DCCA9" opacity="${0.4 + (i%3)*0.2}"/>`;
        }).join('')}
      </g>

      <!-- Flecha 2 -->
      <g transform="translate(460 170)" stroke="#3E8953" stroke-width="1.5" fill="none">
        <line x1="0" y1="0" x2="60" y2="0" stroke-dasharray="4 4"/>
        <path d="M55 -5 L65 0 L55 5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Fase 3: capa molecular -->
      <g transform="translate(580 170)">
        <rect x="-70" y="-80" width="140" height="160" rx="6" fill="none" stroke="#6AAD7D" stroke-width="2"/>
        <text y="-95" text-anchor="middle" font-family="monospace" font-size="10" fill="#9DCCA9" letter-spacing="2">03 · CAPA PROTECTORA</text>
        <g transform="translate(0 20)">
          <path d="M-30 -15 L30 -15 L25 15 L-25 15 Z" fill="#C8986B"/>
          <!-- capa VCI -->
          <path d="M-32 -17 L32 -17 L27 17 L-27 17 Z" fill="none" stroke="#3E8953" stroke-width="2" stroke-dasharray="2 2"/>
        </g>
        ${Array.from({length:18}, (_,i) => {
          const angle = (i*20) * Math.PI/180;
          const r = 40 + (i%3)*5;
          return `<circle cx="${Math.cos(angle)*r}" cy="${20 + Math.sin(angle)*r*0.5}" r="1.5" fill="#3E8953" opacity="0.6"/>`;
        }).join('')}
      </g>

      <!-- Resultado final -->
      <g transform="translate(720 170)">
        <text y="-95" text-anchor="middle" font-family="monospace" font-size="10" fill="#9DCCA9" letter-spacing="2">04 · PROTECCIÓN</text>
        <circle r="56" fill="#3E8953" opacity="0.1"/>
        <circle r="40" fill="#3E8953" opacity="0.2"/>
        <g transform="translate(-16 -16)" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 16 L 12 24 L 28 8"/>
        </g>
      </g>
    </svg>`,

  // ---------- Iconos de principios ----------
  iconReutilizable: () => `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 24 A14 14 0 1 1 24 38" stroke="#3E8953" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M20 34 L 24 38 L 20 42" stroke="#3E8953" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M38 24 A14 14 0 1 1 24 10" stroke="#2A6841" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
      <path d="M28 14 L 24 10 L 28 6" stroke="#2A6841" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
    </svg>`,

  iconReciclable: () => `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" stroke="#3E8953" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M24 8 L 34 22 L 28 22 L 28 30 L 20 30 L 20 22 L 14 22 Z"/>
      <path d="M12 40 L 4 34 L 8 28 L 16 32 L 20 26 L 22 36 Z" transform="rotate(45 14 34)"/>
      <path d="M36 40 L 44 34 L 40 28 L 32 32 L 28 26 L 26 36 Z" transform="rotate(-45 34 34)"/>
    </svg>`,

  iconBiodegradable: () => `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 42 C 10 36, 6 18, 24 6 C 42 18, 38 36, 24 42 Z" fill="#3E8953" opacity="0.15" stroke="#3E8953" stroke-width="2"/>
      <path d="M24 42 L 24 18" stroke="#3E8953" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M24 26 L 18 20" stroke="#3E8953" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M24 30 L 30 24" stroke="#3E8953" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`,
};
