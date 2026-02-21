/* ===========================================
   ANNE WEINANS — PRAKTIJK WEBSITE
   Main JavaScript

   INHOUDSOPGAVE:
   1. Content Injection (leest uit content.js)
   2. Navigation (Mobiel menu, scroll spy)
   3. Smooth Scrolling
   4. Tabs (Behandelingen)
   5. Content Group
   6. Scroll Animations (fade-in)
   7. Contact Form
   8. Initialization
=========================================== */


/* ===========================================
   1. CONTENT INJECTION
   Leest het SITE_CONTENT object uit content.js
   en vult de HTML elementen met de juiste tekst.
=========================================== */

function injectContent() {
    const data = window.SITE_CONTENT;
    if (!data) {
        console.error('SITE_CONTENT niet gevonden. Controleer of content.js geladen is.');
        return;
    }

    injectSite(data.site);
    injectNav(data.nav);
    injectHero(data.hero);
    injectBehandelingen(data.behandelingen);
    injectOverMij(data.overMij);
    injectAccordionSection('praktisch', data.praktisch);
    injectContact(data.contact);
    injectAccordionSection('kwaliteit', data.kwaliteit);
    injectFooter(data.footer);
}


/* --- Site-instellingen (paginatitel etc.) --- */
function injectSite(site) {
    if (!site) return;
    if (site.titel) document.title = site.titel;
}


/* --- Navigatie --- */
function injectNav(nav) {
    if (!nav) return;
    setLabel('nav-heading', nav.heading);
    setLabelAll('nav-behandelingen', nav.behandelingen);
    setLabelAll('nav-over-mij', nav.overMij);
    setLabelAll('nav-praktisch', nav.praktisch);
    setLabelAll('nav-contact', nav.contact);
    setLabelAll('nav-kwaliteit', nav.kwaliteit);
}


/* --- Hero --- */
function injectHero(hero) {
    if (!hero) return;
    setLabelAll('hero-naam', hero.naam);
    setText('hero-intro', hero.intro);
    setLabel('hero-cta', hero.cta);
}


/* --- Behandelingen --- */
function injectBehandelingen(beh) {
    if (!beh) return;

    setLabel('behandelingen-titel', beh.titel);
    setText('behandelingen-intro', beh.intro);

    // Tab-labels
    setLabel('tab-voor-wie', beh.tabVoorWie);
    setLabel('tab-methoden', beh.tabMethoden);
    setLabel('tab-traject', beh.tabTraject);

    // Voor wie — lijst
    const voorWieEl = document.querySelector('[data-content="behandelingen-voor-wie"]');
    if (voorWieEl && beh.voorWie) {
        voorWieEl.innerHTML = '<ul>' + beh.voorWie.map(item =>
            `<li class="bordered-block"><strong>${item.titel}</strong> — ${item.tekst}</li>`
        ).join('') + '</ul>';
    }

    // Voor wie niet — kopje en tekst
    setLabel('behandelingen-voor-wie-niet-titel', beh.voorWieNietTitel);
    setText('behandelingen-voor-wie-niet', beh.voorWieNiet);

    // Methoden — kaarten
    const methodenEl = document.querySelector('[data-content="behandelingen-methoden"]');
    if (methodenEl && beh.methoden) {
        methodenEl.innerHTML = beh.methoden.map(item =>
            `<div class="methode-card bordered-block fade-in">
                <h4>${item.titel}</h4>
                <p>${item.tekst}</p>
            </div>`
        ).join('');
    }

    // Traject — stappen
    const trajectEl = document.querySelector('[data-content="behandelingen-traject"]');
    if (trajectEl && beh.traject) {
        trajectEl.innerHTML = beh.traject.map((item, i) =>
            `<div class="traject-step fade-in" data-step="${i + 1}">
                <h4>${item.titel}</h4>
                <p>${item.tekst}</p>
            </div>`
        ).join('');
    }
}


/* --- Over Mij --- */
function injectOverMij(overMij) {
    if (!overMij) return;

    setLabel('over-mij-titel', overMij.titel);
    setText('over-mij-intro', overMij.intro);

    const container = document.querySelector('[data-content="over-mij-accordion"]');
    if (container && overMij.items) {
        container.innerHTML = buildContentHtml(overMij.items);
    }
}


/* --- Praktisch / Kwaliteit (content secties) --- */
function injectAccordionSection(sectionKey, sectionData) {
    if (!sectionData) return;

    setLabel(`${sectionKey}-titel`, sectionData.titel);
    setText(`${sectionKey}-intro`, sectionData.intro);

    const container = document.querySelector(`[data-content="${sectionKey}-accordion"]`);
    if (container && sectionData.items) {
        container.innerHTML = buildContentHtml(sectionData.items);
    }
}


/* --- Contact --- */
function injectContact(contact) {
    if (!contact) return;

    setLabel('contact-titel', contact.titel);
    setText('contact-intro', contact.intro);
    setText('contact-wachttijd', contact.wachttijd);
    setText('contact-bereikbaarheid', contact.bereikbaarheid);
    setLabel('contact-crisis-titel', contact.crisisTitel);
    setText('contact-crisis', contact.crisis);

    // Formulier — labels
    setLabel('contact-veld-naam', contact.veldNaam);
    setLabel('contact-veld-email', contact.veldEmail);
    setLabel('contact-veld-telefoon', contact.veldTelefoon);
    setLabel('contact-veld-bericht', contact.veldBericht);

    // Formulier — placeholders (via name-attribuut)
    setPlaceholder('naam', contact.placeholderNaam);
    setPlaceholder('email', contact.placeholderEmail);
    setPlaceholder('telefoon', contact.placeholderTelefoon);
    setPlaceholder('bericht', contact.placeholderBericht);

    // Verzendknop
    setLabel('contact-versturen', contact.versturen);
}


/* --- Footer --- */
function injectFooter(footer) {
    if (!footer) return;
    setLabel('footer-tagline', footer.tagline);
    setLabel('footer-copyright', footer.copyright);
}


/* ===========================================
   HELPERS
=========================================== */

/**
 * Zet tekst in een element op basis van data-content attribuut.
 */
function setText(key, text) {
    if (!text) return;
    const el = document.querySelector(`[data-content="${key}"]`);
    if (el) {
        el.innerHTML = `<p>${text}</p>`;
    }
}

/**
 * Zet een sectie-titel als platte tekst in één element (geen <p> wrapper).
 */
function setLabel(key, text) {
    if (!text) return;
    const el = document.querySelector(`[data-content="${key}"]`);
    if (el) el.textContent = text;
}

/**
 * Zet platte tekst in ALLE elementen met een bepaald data-content attribuut.
 */
function setLabelAll(key, text) {
    if (!text) return;
    document.querySelectorAll(`[data-content="${key}"]`).forEach(el => {
        el.textContent = text;
    });
}

/**
 * Zet de placeholder van een formulierveld op basis van het name-attribuut.
 */
function setPlaceholder(name, text) {
    if (!text) return;
    const el = document.querySelector(`[name="${name}"]`);
    if (el) el.placeholder = text;
}

/**
 * Bouwt eenvoudige kop-met-tekst HTML op basis van een array van { titel, tekst } objecten.
 */
function buildContentHtml(items) {
    return items.map(item => `
        <div class="content-item bordered-block fade-in">
            <h3>${item.titel}</h3>
            <p>${item.tekst}</p>
        </div>`
    ).join('');
}

/**
 * Maakt een URL-vriendelijke slug van een tekst.
 */
function slugify(text) {
    return text.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}


/* ===========================================
   2. NAVIGATION
=========================================== */

function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    function openMenu() {
        mainNav.classList.add('open');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }

    // Hamburger menu toggle
    menuToggle.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Sluit menu bij klik op een link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Sluit menu met Escape toets
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('open')) {
            closeMenu();
        }
    });
}

/**
 * Scroll spy: highlight de actieve nav link op basis van zichtbare sectie
 */
function initScrollSpy() {
    const scrollContainer = document.getElementById('scrollContainer');
    const sections = scrollContainer.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const header = document.getElementById('siteHeader');

    scrollContainer.addEventListener('scroll', () => {
        const scrollTop = scrollContainer.scrollTop;
        const viewportHeight = window.innerHeight;

        // Header achtergrond bij scrollen
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Vind actieve sectie
        let activeSection = '';
        sections.forEach(section => {
            const top = section.offsetTop - scrollContainer.offsetTop;
            if (scrollTop >= top - viewportHeight * 0.4) {
                activeSection = section.id;
            }
        });

        // Update nav links
        navLinks.forEach(link => {
            if (link.dataset.section === activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}


/* ===========================================
   3. SMOOTH SCROLLING
=========================================== */

function initSmoothScroll() {
    const scrollContainer = document.getElementById('scrollContainer');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const containerRect = scrollContainer.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();
                const scrollTop = scrollContainer.scrollTop + targetRect.top - containerRect.top;
                scrollContainer.scrollTo({
                    top: scrollTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}


/* ===========================================
   4. TABS (Behandelingen)
=========================================== */

function initTabs() {
    const tabs = document.querySelectorAll('.tab[data-tab]');
    const panels = document.querySelectorAll('.tab-panel[data-tab-panel]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.dataset.tab;

            // Deactiveer alle tabs en panels
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => p.classList.remove('active'));

            // Activeer de aangeklikte tab en panel
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const panel = document.querySelector(`[data-tab-panel="${targetPanel}"]`);
            if (panel) {
                panel.classList.add('active');
                observeFadeElements(panel);
            }
        });
    });
}



/* ===========================================
   6. SCROLL ANIMATIONS (Fade-in bij scrollen)
=========================================== */

function initScrollAnimations() {
    const scrollContainer = document.getElementById('scrollContainer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: scrollContainer,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Observeer nieuwe fade-in elementen (bijv. na tab-wissel)
 */
function observeFadeElements(container) {
    const scrollContainer = document.getElementById('scrollContainer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: scrollContainer,
        threshold: 0.1
    });

    (container || document).querySelectorAll('.fade-in:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}


/* ===========================================
   7. CONTACT FORM
=========================================== */

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        const contact = window.SITE_CONTENT && window.SITE_CONTENT.contact;
        const successTitel = (contact && contact.successTitel) || 'Bedankt voor je bericht!';
        const successTekst = (contact && contact.successTekst) || 'Ik neem zo snel mogelijk contact met je op.';

        // Toon succesbericht (vervang later door echte backend)
        const wrapper = form.closest('.contact-form-wrapper');
        wrapper.innerHTML = `
            <div style="text-align: center; padding: 2rem 0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                     fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 style="margin-top: 1rem; color: var(--darkbrown);">${successTitel}</h3>
                <p style="color: var(--text-medium); margin-top: 0.5rem;">
                    ${successTekst}
                </p>
            </div>
        `;

        console.log('Formulier verzonden:', data);
    });
}


/* ===========================================
   8. INITIALIZATION
=========================================== */

function init() {
    // Jaar in de footer
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Laad content vanuit content.js
    injectContent();

    // Initialiseer Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Initialiseer componenten
    initNavigation();
    initSmoothScroll();
    initTabs();
    initContactForm();

    // Start scroll spy en animaties na korte vertraging
    requestAnimationFrame(() => {
        initScrollSpy();
        initScrollAnimations();
        observeFadeElements();
    });
}

// Start zodra de DOM klaar is
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
