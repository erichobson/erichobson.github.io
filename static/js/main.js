const config = {
    name: 'Eric Hobson',
    tagline: 'Software developer. Former chef. Always learning.',
    // Optional nav-status message
    availability: '',
    bio: 'I\'m a software developer focused on iOS development and systems programming, with a Bachelor of Computer Science (Honours) from Carleton University. Before code, I spent over a decade in professional kitchens, where you learn quickly that the work is hard, mistakes happen, and how you respond to both is what matters. I carry that with me into everything I build.',
    skills: ['Swift', 'SwiftUI', 'C', 'C++', 'Java', 'Python', 'Qt', 'SQL', 'Linux', 'Git'],
    interests: ['Cooking', 'HomeAutomation', '3DPrinting', 'OpenSource'],
    social: [
        {name: 'GitHub', url: 'https://github.com/erichobson', icon: 'github'},
        {name: 'LinkedIn', url: 'https://linkedin.com/in/eric-hobson', icon: 'linkedin'},
        {name: 'Résumé', action: 'print', icon: 'file-text', label: 'Save résumé as PDF'}
    ],
    projects: [
        {
            title: 'Deep Frying Simulation',
            description: 'Physics-based openFrameworks simulation of frying potatoes. Implements Newton\'s Law of Cooling, Archimedes\' buoyancy with viscous drag, Arrhenius oil viscosity, Maillard reaction kinetics, and a bubble particle system. Compiled to the web with Emscripten.',
            tags: ['C++', 'openFrameworks', 'Emscripten'],
            live: 'projects/deep-frying-simulation/',
            code: 'https://github.com/erichobson/deep-frying-simulation'
        },
        {
            title: 'Jello Train Physics Simulation',
            description: 'Physics-based openFrameworks simulation of a train carrying a 125-particle (5×5×5) spring-mass jello cube across procedurally generated Perlin noise terrain. Uses Verlet integration with 12 sub-steps per frame for stable soft-body dynamics. Compiled to the web with Emscripten.',
            tags: ['C++', 'openFrameworks', 'Emscripten'],
            live: 'projects/jello-train-simulation/',
            code: 'https://github.com/erichobson/jello-train-simulation'
        },
        {
            title: '404 Paradox',
            description: "Interactive digital thesis framing the '404 Error' as a symbol of digital preservation's central paradox. Fully prerendered SvelteKit static site.",
            tags: ['Svelte', 'SvelteKit', 'Vite'],
            live: 'projects/404-paradox/',
        },
        {
            title: 'Firefighting Drone Swarm',
            description: 'Multi-process Java simulation of a drone swarm fighting fires. Three JVM processes communicate over UDP, with greedy bipartite assignment, battery-aware scheduling, collision avoidance, and a real-time Swing visualization.',
            tags: ['Java', 'Maven', 'Swing', 'UDP'],
            code: 'https://github.com/erichobson/firefighting-drone-swarm'
        },
        {
            title: 'Elevator System Simulator',
            description: 'Multi-elevator Qt/C++ simulator implementing the Singleton, Observer, and State patterns, with a priority-queue event loop and emergency override logic.',
            tags: ['C++', 'Qt'],
            code: 'https://github.com/erichobson/elevator-simulator'
        },
        {
            title: 'RaDoTech Simulation',
            description: 'Qt/C++ simulation of a health-monitoring device. MVC architecture with Qt signals/slots driving real-time sensor visualization.',
            tags: ['C++', 'Qt', 'MVC'],
            code: 'https://github.com/erichobson/radotech-simulator'
        },
        {
            title: 'Recipe Database Project',
            description: 'Python and SQLite tool for managing professional kitchen recipes, with a designed schema and an interactive query interface.',
            tags: ['Python', 'SQL', 'SQLite'],
            code: 'https://github.com/erichobson/recipe-database-project'
        }
    ],
    experience: [
        {
            role: 'Bachelor of Computer Science (Honours)',
            company: 'Carleton University',
            dates: '2020 \u2013 2026',
            highlights: [
                'Stream in Software Engineering',
                'Minor in Digital Humanities',
                'Concentration in Co-operative Education',
                'CGPA: 10.33 / 12.00'
            ]
        },
        {
            role: 'iOS Software Engineer',
            company: 'TrueContext (formerly ProntoForms)',
            dates: 'May 2025 - August 2025',
            highlights: [
                'Contributed to iOS application development by resolving bugs, managing tickets, and implementing new features using Swift and SwiftUI',
                'Conducted research and developed proof-of-concept solutions for upcoming iOS platform features (iOS26) to explore new functionalities'
            ]
        },
        {
            role: 'Kernel Automation Testware Developer',
            company: 'BlackBerry QNX',
            dates: 'January 2024 - August 2024',
            highlights: [
                'Developed and executed comprehensive C-based test suites on Linux to ensure robust libc library coverage within the QNX operating system',
                'Authored over 50 new test cases and contributed to the organization, support, and review of testing activities for the Kernel Automation Testware team'
            ]
        },
        {
            role: 'Software Developer',
            company: 'House of Commons',
            dates: 'September 2023 - December 2023',
            highlights: [
                'Designed and implemented a Python and Qt-based application to streamline the acquisition, organization, visualization, editing, and export of audio and video recordings',
                'Enhanced the existing proof-of-concept for the ParlVU web service streaming application, focusing on functionality and user experience improvements',
                'Researched, reported, and presented findings on the landscape of AI-driven live translation services'
            ]
        },
        {
            role: 'Teaching Assistant',
            company: 'Carleton University',
            dates: 'January 2023 - April 2023',
            highlights: [
                'Assisted as a Teaching Assistant for COMP2401: Introduction to Systems Programming, focusing on C development principles',
                'Facilitated assignment workshops and provided one-on-one guidance to students, aiding in troubleshooting and concept comprehension'
            ]
        },
        {
            role: 'iOS Software Developer',
            company: 'ProntoForms',
            dates: 'September 2022 - December 2022',
            highlights: [
                'Co-authored the modernization of a legacy Inter-Application Tester, implementing significant updates as a primary project',
                'Investigated and implemented solutions for reported tickets within their production iOS application'
            ]
        },
        {
            role: 'First Cook',
            company: 'Shaw Centre',
            dates: 'September 2016 - August 2022',
            highlights: [
                'Led portions of the kitchen team through high-volume evening service, delegating tasks and overseeing food preparation',
                'Specialized in real-time dietary accommodations and special requests during live service',
                'Supervised and trained staff; supported Chef de Parties and Sous Chefs'
            ]
        },
        {
            role: 'Culinary Chef Skills Certificate',
            company: 'Algonquin College',
            dates: 'September 2014 - April 2015',
            highlights: [
                'Graduated with Honours'
            ]
        }
    ]
};

function hexToRgb(hex) {
    const raw = String(hex || '').replace('#', '').trim();
    const full = raw.length === 3 ? raw.split('').map(c => c + c).join('') : raw;
    if (full.length !== 6) return null;
    const num = parseInt(full, 16);
    if (Number.isNaN(num)) return null;
    return {r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255};
}

function renderHero() {
    document.getElementById('heroName').textContent = config.name;
    document.getElementById('heroTagline').textContent = config.tagline;
    document.getElementById('footerName').textContent = config.name;
    document.getElementById('footerYear').textContent = new Date().getFullYear();
    document.getElementById('navLogo').textContent = config.name.split(' ')[0];

    const navStatus = document.getElementById('navStatus');
    if (navStatus) {
        const text = (config.availability || '').trim();
        if (text) {
            navStatus.querySelector('.nav-status__text').textContent = text;
            navStatus.hidden = false;
        } else {
            navStatus.hidden = true;
        }
    }

    const socialLinksContainer = document.getElementById('socialLinks');
    socialLinksContainer.textContent = '';
    const socialFragment = document.createDocumentFragment();
    config.social.forEach(link => {
        let el;
        if (link.action === 'print') {
            el = document.createElement('button');
            el.type = 'button';
            el.addEventListener('click', () => window.print());
        } else {
            el = document.createElement('a');
            el.href = link.url;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        }
        el.className = 'social-link';
        el.title = link.name;
        el.setAttribute('aria-label', link.label || link.name);

        const iconSpan = document.createElement('i');
        iconSpan.setAttribute('data-lucide', link.icon);
        el.appendChild(iconSpan);

        socialFragment.appendChild(el);
    });
    socialLinksContainer.appendChild(socialFragment);

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderAbout() {
    document.getElementById('aboutBio').textContent = config.bio;

    renderTagRow(document.getElementById('aboutSkills'), config.skills);
    renderTagRow(document.getElementById('aboutInterests'), config.interests);
}

function renderTagRow(container, items) {
    if (!container) return;
    container.textContent = '';
    if (!items || items.length === 0) {
        container.hidden = true;
        return;
    }
    container.hidden = false;
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = item;
        fragment.appendChild(tag);
    });
    container.appendChild(fragment);
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const filterContainer = document.getElementById('filterContainer');

    const allTags = new Set();
    allTags.add('All');
    config.projects.forEach(project => {
        project.tags.forEach(tag => allTags.add(tag));
    });

    filterContainer.textContent = '';
    const filterFragment = document.createDocumentFragment();
    Array.from(allTags).forEach(tag => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `filter-btn ${tag === 'All' ? 'active' : ''}`.trim();
        btn.dataset.filter = tag;
        btn.textContent = tag;
        btn.setAttribute('aria-pressed', tag === 'All' ? 'true' : 'false');
        filterFragment.appendChild(btn);
    });
    filterContainer.appendChild(filterFragment);

    function renderGridItems(filter = 'All') {
        const filtered = config.projects.filter(project => filter === 'All' || project.tags.includes(filter));
        projectsGrid.textContent = '';
        const gridFragment = document.createDocumentFragment();

        filtered.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const num = document.createElement('div');
            num.className = 'project-number';
            num.textContent = (index + 1).toString().padStart(2, '0');

            const title = document.createElement('h3');
            title.className = 'project-title';
            title.textContent = project.title;

            const desc = document.createElement('p');
            desc.className = 'project-description';
            desc.textContent = project.description;

            const tags = document.createElement('div');
            tags.className = 'project-tags';
            project.tags.forEach(t => {
                const pill = document.createElement('span');
                pill.className = 'tag';
                pill.textContent = t;
                tags.appendChild(pill);
            });

            const links = document.createElement('div');
            links.className = 'project-links';

            if (project.live && project.live !== '#') {
                const live = document.createElement('a');
                live.className = 'project-link';
                live.href = project.live;
                live.textContent = 'Live';
                live.setAttribute('aria-label', `Live demo: ${project.title}`);
                links.appendChild(live);
            }

            if (project.code && project.code !== '#') {
                const code = document.createElement('a');
                code.className = 'project-link';
                code.href = project.code;
                code.target = '_blank';
                code.rel = 'noopener noreferrer';
                code.textContent = 'Source';
                code.setAttribute('aria-label', `Source code: ${project.title}`);
                links.appendChild(code);
            }

            card.appendChild(num);
            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(tags);

            if (links.children.length > 0) {
                card.appendChild(links);
            }

            gridFragment.appendChild(card);
        });

        projectsGrid.appendChild(gridFragment);
    }

    renderGridItems();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetBtn = e.currentTarget;
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            targetBtn.classList.add('active');
            targetBtn.setAttribute('aria-pressed', 'true');
            renderGridItems(targetBtn.dataset.filter);
        });
    });

    if (window.matchMedia && !window.matchMedia('(hover: none)').matches) {
        projectsGrid.addEventListener('mousemove', (e) => {
            const card = e.target.closest('.project-card');
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
    }
}

function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    timeline.innerHTML = config.experience.map(exp => {
        const validHighlights = exp.highlights.filter(h => h && h.trim() !== '');
        const highlightsHTML = validHighlights.length > 0
            ? `<ul class="experience-highlights">${validHighlights.map(highlight => `<li>${highlight}</li>`).join('')}</ul>`
            : '';

        return `
            <div class="experience-item">
                <div class="experience-header">
                    <div class="experience-role">${exp.role}</div>
                    <div class="experience-meta">
                        <span class="experience-company">${exp.company}</span>
                        <span class="experience-divider"></span>
                        <span class="experience-dates">${exp.dates}</span>
                    </div>
                </div>
                ${highlightsHTML}
            </div>
        `;
    }).join('');
}

function updateActiveNav() {
    const sections = ['about', 'work', 'experience'];
    let current = '';

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = sectionId;
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

(function () {
    const bar = document.getElementById('scrollProgressBar');
    if (!bar) return;
    let rafId = null;

    function computeProgress() {
        const doc = document.documentElement;
        const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        bar.style.transform = `scaleX(${progress})`;
    }

    function onScrollOrResize() {
        if (rafId != null) return;
        rafId = requestAnimationFrame(() => {
            rafId = null;
            computeProgress();
        });
    }

    window.addEventListener('scroll', onScrollOrResize, {passive: true});
    window.addEventListener('resize', onScrollOrResize);
    computeProgress();
})();

const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > window.innerHeight);
}, {passive: true});

window.addEventListener('scroll', updateActiveNav, false);

(function () {
    const canvas = document.getElementById('constellationCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const hero = document.querySelector('.hero');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = {x: -1000, y: -1000, active: false};
    let points = [];
    let pointCount = 60;
    const connectionDistance = 120;
    const pointerRadius = 200;
    const baselinePointOpacity = 0.18;
    const baselineLineOpacity = 0.05;
    const accentFromCss = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
    const accentColor = hexToRgb(accentFromCss) || {r: 167, g: 139, b: 250};
    const cyanColor = {r: 34, g: 211, b: 238};
    let rafId = null;
    let running = false;

    function lerpColor(color1, color2, t) {
        return {
            r: Math.round(color1.r + (color2.r - color1.r) * t),
            g: Math.round(color1.g + (color2.g - color1.g) * t),
            b: Math.round(color1.b + (color2.b - color1.b) * t)
        };
    }

    function calculatePointCount() {
        const width = window.innerWidth;
        if (width < 768) return 45;
        if (width < 1024) return 75;
        if (width < 1440) return 105;
        return 130;
    }

    function resize() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
        pointCount = calculatePointCount();
        initPoints();
        if (reduceMotion) renderFrame();
    }

    function initPoints() {
        points = [];
        for (let i = 0; i < pointCount; i++) {
            const colorT = Math.random();
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                radius: Math.random() * 1.2 + 0.4,
                color: lerpColor(accentColor, cyanColor, colorT)
            });
        }
    }

    function pointerProximity(x, y) {
        if (!pointer.active) return 0;
        const dx = pointer.x - x;
        const dy = pointer.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < pointerRadius ? 1 - dist / pointerRadius : 0;
    }

    function renderFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            if (!reduceMotion) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            }

            const prox = pointerProximity(p.x, p.y);
            const opacity = baselinePointOpacity + 0.7 * prox;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${opacity})`;
            ctx.fill();
        }

        for (let i = 0; i < points.length; i++) {
            const a = points[i];
            const aProx = pointerProximity(a.x, a.y);
            for (let j = i + 1; j < points.length; j++) {
                const b = points[j];
                const dx = b.x - a.x;
                const dy = b.y - a.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > connectionDistance) continue;

                const distFactor = 1 - dist / connectionDistance;
                const bProx = pointerProximity(b.x, b.y);
                const proxBoost = Math.max(aProx, bProx);
                const lineOpacity = baselineLineOpacity * distFactor + 0.5 * distFactor * proxBoost;
                if (lineOpacity < 0.01) continue;

                const blended = lerpColor(a.color, b.color, 0.5);
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = `rgba(${blended.r}, ${blended.g}, ${blended.b}, ${lineOpacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }

    function animate() {
        if (!running) return;
        renderFrame();
        rafId = requestAnimationFrame(animate);
    }

    function start() {
        if (running) return;
        running = true;
        if (reduceMotion) {
            renderFrame();
            running = false;
            return;
        }
        rafId = requestAnimationFrame(animate);
    }

    function stop() {
        running = false;
        if (rafId != null) cancelAnimationFrame(rafId);
        rafId = null;
    }

    function setPointerFromEvent(clientX, clientY) {
        const rect = hero.getBoundingClientRect();
        pointer.x = clientX - rect.left;
        pointer.y = clientY - rect.top;
        pointer.active = true;
    }

    function clearPointer() {
        pointer.active = false;
        pointer.x = -1000;
        pointer.y = -1000;
    }

    hero.addEventListener('mousemove', (e) => setPointerFromEvent(e.clientX, e.clientY));
    hero.addEventListener('mouseleave', clearPointer);

    hero.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) setPointerFromEvent(e.touches[0].clientX, e.touches[0].clientY);
    }, {passive: true});
    hero.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) setPointerFromEvent(e.touches[0].clientX, e.touches[0].clientY);
    }, {passive: true});
    hero.addEventListener('touchend', clearPointer);
    hero.addEventListener('touchcancel', clearPointer);

    window.addEventListener('resize', resize);
    resize();

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            const inView = entries.some(e => e.isIntersecting);
            if (inView) {
                start();
            } else {
                stop();
            }
        }, {threshold: 0.05});
        observer.observe(hero);
    } else {
        start();
    }
})();

function init() {
    renderHero();
    renderAbout();
    renderProjects();
    renderExperience();
    updateActiveNav();
    initScrollAnimations();
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-stagger').forEach(el => {
        observer.observe(el);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
