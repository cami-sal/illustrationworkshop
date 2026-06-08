/**
 * Illustration Showcase - Grid Layout & Lightbox Logic
 */

const illustrations = [
    {
        src: 'images/city150.png',
    },
    {
        src: 'images/dog150.png',
        aspectRatio: '1.414 / 1',
    },
    {
        src: 'images/fishing150.png',
    },
    {
        src: 'images/hand150.png',
    },
    {
        src: 'images/laptip150.png',
    },
    {
        src: 'images/panels150.png',
    },
    {
        src: 'images/park150.png',
    },
    {
        src: 'images/tree150.png',
    }
];

const translations = {
    en: {
        headerTitle: 'Between Worlds',
        aboutBtn: 'about',
        langBtn: 'KOR',
        exitFilterBtn: 'Exit Filter',
        exitFullscreenAria: 'Exit fullscreen',
        closeDetailsAria: 'Close details',
        closeModalAria: 'Close modal',
        aboutTitle: 'Between Worlds',
        aboutParagraphs: [
            'This collection is a visual study of the life of a particular person, dear to the author, whose personal history, struggles, and quiet triumphs are reflected in every illustration.',
            'Through the use of red and blue line art, the artwork visualizes the friction between individual identity and societal structure. The red elements represent the external world: the repetitive, predictable, and often exhausting spaces of modern life. While the blue elements represent the inner space: the private passions, profound attachments, and mental escapes that allow this person to endure.',
            'Rather than viewing these two forces as a conflict, this series frames them as a coexistence. A portrait of someone finding their wholeness.'
        ],
        footerText: '© 2026 Camila Saldivia. All rights reserved.',
        illustrations: [
            {
                title: 'I need to get out of the city this weekend',
                explanation: 'The skyline, the loud, familiar comfort of city life, is a world too deeply woven into our habits to easily abandon. Amid the towering structures, he has a space of his own, a quiet lookout where he can watch the world move on outside, while relaxing in his own way. For a moment, imagination turns that space into a nature retreat, a cabin in the forest, a peaceful spot in the mountains. It is his quiet yearning to flee the city each weekend.'
            },
            {
                title: 'I had a dream about my friend',
                explanation: 'The quiet space of daily life. A bed, a desk, a TV, and the clutter of a personal sanctuary. Here, at night, the physical world fades into hazy memories. And imagination takes the stage. Growing into adulthood next to a beloved dog is one of the most wonderful things in life. But it can also be one of the most devastating at the end of the journey. This is the bittersweet struggle of grief.  A tender attempt to dream of a dear pet while coming back to reality when the sun rises. But for a brief moment, two friends can be together again.'
            },
            {
                title: 'I love fishing, let’s go!',
                explanation: 'The view outside the office window: an everyday landscape of parked cars, cardboard boxes, concrete, and urban geometry. Nothing new to see there, so why not dream a little? The pavement starts to dissolve into flowing blue water, lively fish swim left and right, the sun burns through the clouds, the heart is satisfied.  A plan starts to form, a relieving thought, something to wait for. We should make time for the things we love.'
            },
            {
                title: 'I live to the fullest',
                explanation: 'The polished, polite existence of having an office job is disrupted by the rough and calloused hands that perform it. The keyboard requires precision and softness, but his hands carry the memory of iron, strength, and effort. This is the duality of a mind bound to a desk and a body that refuses to follow suit.'
            },
            {
                title: 'I like it, but it stresses me out',
                explanation: 'Corporate life has great advantages, but everything comes with a cost. Hidden behind that mandatory professional smile, there’s often exhaustion, isolation, and boredom. Even if we like our jobs, there’s always that feeling that we could be doing something else, something that makes our souls happy. Can we keep turning our frown upside down on command?'
            },
            {
                title: 'Just need to keep going,  I can do it',
                explanation: 'The archive of his life shows a multifaceted self, as he has unique passions, routines, and burdens that define him, but never stop him. His different internal worlds ensamble like cells, functioning together to build the complete architecture of who he is.'
            },
            {
                title: 'I wish I could scape sometimes',
                explanation: 'In a tall office building, in a rigid office grid, in a desk that has become his own personal world, sometimes the corporate environment can feel overwhelming. Like this, the longing for peace and nature appears subtly and slowly. Daydreaming of trees, rivers, a cold beer, and sunshine, the mind finds a way to wander free for a few minutes.'
            },
            {
                title: 'There’s so much I want to achieve',
                explanation: 'The corporate ladder is strict but predictable. Depending on where you stop climbing, a predefined outcome will be behind every door. However, the soul’s true trajectory is to grow organically and reach in all directions at once. Concealed in the the blue branches are 6 Korean words that represent said directions.'
            }
        ]
    },
    ko: {
        headerTitle: '세계 사이에서',
        aboutBtn: '소개',
        langBtn: 'ENG',
        exitFilterBtn: '필터 해제',
        exitFullscreenAria: '전체화면 종료',
        closeDetailsAria: '상세보기 닫기',
        closeModalAria: '모달 닫기',
        aboutTitle: '경계에서',
        aboutParagraphs: [
            '이 컬렉션은 작가에게 소중한 특정 인물의 삶에 대한 시각적 탐구이며, 그의 개인적인 역사, 고군분투, 그리고 조용한 승리가 모든 일러스트레이션에 반영되어 있습니다.',
            '빨간색과 파란색 선화를 통해 작품은 개인의 정체성과 사회적 구조 사이의 마찰을 시각화합니다. 빨간색 요소는 외부 세계, 즉 현대 삶의 반복적이고 예측 가능하며 종종 지치는 공간을 나타냅니다. 반면 파란색 요소는 내부 공간, 즉 이 사람이 버틸 수 있게 해주는 사적인 열정, 깊은 애착, 정신적 탈출을 나타냅니다.',
            '이 두 힘을 대립으로 보기보다, 이 연작은 그것들을 공존으로 구성합니다. 자신의 온전함을 찾아가는 누군가의 초상화입니다.'
        ],
        footerText: '© 2026 Camila Saldivia. 모든 권리 보유.',
        illustrations: [
            {
                title: '이번 주말에는 도시를 벗어나야겠다',
                explanation: '도시 생활의 시끄럽고 익숙한 편안함인 스카이라인은 우리의 습관에 너무 깊이 짜여 있어 쉽게 포기하기 어려운 세상입니다. 우뚝 솟은 건물들 사이에서 그는 자신만의 공간, 밖에서 흘러가는 세상을 바라보며 자신만의 방식으로 휴식을 취할 수 있는 조용한 전망대를 가지고 있습니다. 잠시 상상력은 그 공간을 숲속의 오두막이나 산속의 평화로운 장소와 같은 자연의 휴식처로 바꿉니다. 주말마다 도시를 탈출하고자 하는 그의 조용한 열망입니다.'
            },
            {
                title: '내 친구에 대한 꿈을 꿨어',
                explanation: '일상생활의 조용한 공간. 침대, 책상, TV, 그리고 개인적 안식처의 어수선함. 여기 밤이 되면 물리적 세계는 흐릿한 기억 속으로 사라지고 상상력이 무대에 오릅니다. 사랑하는 반려견과 함께 성인이 되는 것은 삶에서 가장 멋진 일 중 하나입니다. 하지만 여정의 끝에서는 가장 파괴적인 일 중 하나가 될 수도 있습니다. 이것은 슬픔의 달콤씁쓸한 투쟁입니다. 해가 뜰 때 현실로 돌아오면서도 사랑하는 반려동물을 꿈꾸려는 부드러운 시도입니다. 하지만 잠시 동안 두 친구는 다시 함께할 수 있습니다.'
            },
            {
                title: '나 낚시 좋아해, 가자!',
                explanation: '사무실 창밖의 풍경: 주차된 차들, 판지 상자들, 콘크리트, 도시 기하학으로 이루어진 일상의 풍경. 그곳에는 새로울 것이 없으니, 상상을 좀 해보는 건 어떨까요? 도로가 흐르는 푸른 물로 녹아들기 시작하고, 활기찬 물고기들이 좌우로 헤엄치며, 태양이 구름을 뚫고 타오르고, 마음은 만족스러워집니다. 계획이 세워지고, 안도감을 주는 생각, 기다려지는 무언가가 생겨납니다. 우리는 우리가 좋아하는 일들을 위해 시간을 내야 합니다.'
            },
            {
                title: '나는 매 순간 최선을 다해 살아',
                explanation: '사무실 직업을 가진 단정하고 정중한 존재는 그것을 수행하는 거칠고 굳은살 박인 손에 의해 흐트러집니다. 키보드는 정밀함과 부드러움을 요구하지만, 그의 손은 철, 힘, 그리고 노력의 기억을 간직하고 있습니다. 이것은 책상에 묶인 마음과 그것을 따르기를 거부하는 몸의 이중성입니다.'
            },
            {
                title: '좋긴 한데 스트레스 받아',
                explanation: '회사 생활은 큰 이점이 있지만, 모든 것에는 비용이 따릅니다. 의무적인 비즈니스 미소 뒤에는 흔히 피로, 고립, 지루함이 숨어 있습니다. 비록 일을 좋아하더라도, 영혼을 행복하게 만드는 다른 일, 다른 무언가를 할 수 있을 것 같다는 느낌이 늘 존재합니다. 우리는 계속 명령에 따라 찡그린 얼굴을 뒤집어 미소를 지을 수 있을까요?'
            },
            {
                title: '그냥 계속 가면 돼, 할 수 있어',
                explanation: '그의 삶의 기록은 자신을 정의하지만 결코 멈추지 않는 독특한 열정, 루틴, 부담을 가진 다면적인 자아를 보여줍니다. 그의 서로 다른 내면 세계들은 세포처럼 조립되어 그가 누구인지를 정의하는 완전한 구조를 형성합니다.'
            },
            {
                title: '가끔은 탈출하고 싶어',
                explanation: '높은 오피스 빌딩에서, 경직된 사무실 격자 속에서, 자신만의 개인 세계가 된 책상에서, 때로는 기업 환경이 압도적으로 느껴질 수 있습니다. 이처럼 평화와 자연에 대한 열망은 미묘하고 천천히 나타납니다. 나무, 강, 시원한 맥주, 햇살을 몽상하며 마음은 몇 분 동안 자유롭게 배회할 수 있는 길을 찾습니다.'
            },
            {
                title: '이루고 싶은 게 정말 많아',
                explanation: '회사 사다리는 엄격하지만 예측 가능합니다. 오르는 것을 멈추는 위치에 따라 정의된 결과가 문 뒤에 기다리고 있을 것입니다. 그러나 영혼의 진정한 궤적은 유기적으로 성장하고 모든 방향으로 동시에 뻗어나가는 것입니다. 파란색 나뭇가지들 속에는 그 방향들을 나타내는 6개의 한국어 단어가 숨겨져 있습니다.'
            }
        ]
    }
};

const gridContainer = document.getElementById('grid-container');

let activeColor = null;
const getBaseSize = () => window.innerWidth < 480 ? 120 : 250;
let currentSize = getBaseSize();
let hoveredSlideIndex = -1;

let activeZoomImage = null;
let activeZoomIndex = -1;

let imageScale = 1;
let imagePanX = 0;
let imagePanY = 0;

let initialTouchX = 0;
let initialTouchY = 0;
let initialPanX = 0;
let initialPanY = 0;

let initialPinchHypot = 0;
let initialPinchScale = 1;

let isDraggingImage = false;

let currentLang = 'en';
let activeDetailIndex = -1;

// Build DOM nodes dynamically
illustrations.forEach((ill, idx) => {
    // Alternating checkerboard layout order
    const isPictureFirst = (Math.floor(idx / 2) % 2 === 0);

    const picCard = createPictureCard(ill, idx);
    const titleCard = createTitleCard(ill, idx);

    if (isPictureFirst) {
        gridContainer.appendChild(picCard);
        gridContainer.appendChild(titleCard);
    } else {
        gridContainer.appendChild(titleCard);
        gridContainer.appendChild(picCard);
    }
});

function createPictureCard(ill, idx) {
    const card = document.createElement('div');
    card.className = 'grid-card picture-card';
    card.setAttribute('data-index', idx);
    card.style.setProperty('--index', idx);

    const picOrder = (idx % 2 === 0) ? (idx * 2) : (idx * 2 + 1);
    card.style.setProperty('--mobile-order', picOrder);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'illustration-image-container';
    if (ill.aspectRatio) {
        imgContainer.classList.add('horizontal-container');
    }

    const img = document.createElement('img');
    img.src = ill.src;
    img.alt = translations[currentLang].illustrations[idx].title;
    img.className = 'illustration-image';
    imgContainer.appendChild(img);

    const filterCircle = document.createElement('div');
    filterCircle.className = 'cursor-circle';
    filterCircle.style.backgroundColor = 'transparent';
    imgContainer.appendChild(filterCircle);

    const zoomBtn = document.createElement('button');
    zoomBtn.className = 'image-zoom-btn';
    zoomBtn.setAttribute('aria-label', `Zoom in on ${translations[currentLang].illustrations[idx].title}`);
    zoomBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
    `;
    imgContainer.appendChild(zoomBtn);

    card.appendChild(imgContainer);

    imgContainer.addEventListener('mouseenter', () => {
        hoveredSlideIndex = idx;
        if (activeColor) {
            filterCircle.style.width = `${currentSize}px`;
            filterCircle.style.height = `${currentSize}px`;
            filterCircle.style.backgroundColor = activeColor;
            filterCircle.classList.add('active');
        }
    });

    imgContainer.addEventListener('mouseleave', () => {
        if (hoveredSlideIndex === idx) {
            hoveredSlideIndex = -1;
        }
        filterCircle.classList.remove('active');
        filterCircle.style.backgroundColor = 'transparent';
    });

    return card;
}

function createTitleCard(ill, idx) {
    const card = document.createElement('div');
    card.className = 'grid-card title-card';
    card.setAttribute('data-index', idx);
    card.style.setProperty('--index', idx);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View details for ${translations[currentLang].illustrations[idx].title}`);

    const titleOrder = (idx % 2 === 0) ? (idx * 2 + 1) : (idx * 2);
    card.style.setProperty('--mobile-order', titleOrder);

    const info = document.createElement('div');
    info.className = 'illustration-info';

    const title = document.createElement('h2');
    title.className = 'illustration-title';
    title.textContent = translations[currentLang].illustrations[idx].title;

    info.appendChild(title);
    card.appendChild(info);

    return card;
}

function updateLanguageDOM() {
    // 1. Update HTML language attribute
    document.documentElement.lang = currentLang;

    // 2. Update document title
    document.title = currentLang === 'en' ? 'Between Worlds' : '경계에서';

    // 3. Update header elements
    const h1 = document.querySelector('.showcase-header h1');
    if (h1) h1.textContent = translations[currentLang].headerTitle;

    const aboutBtn = document.getElementById('about-btn');
    if (aboutBtn) aboutBtn.textContent = translations[currentLang].aboutBtn;

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = translations[currentLang].langBtn;

    // 4. Update exit filter button text
    const exitFilterBtnSpan = document.querySelector('#close-filter-btn span');
    if (exitFilterBtnSpan) exitFilterBtnSpan.textContent = translations[currentLang].exitFilterBtn;

    // 5. Update close buttons ARIA labels
    const closeFullscreenBtn = document.getElementById('close-fullscreen-btn');
    if (closeFullscreenBtn) closeFullscreenBtn.setAttribute('aria-label', translations[currentLang].exitFullscreenAria);

    const closeDetailBtn = document.getElementById('close-detail-btn');
    if (closeDetailBtn) closeDetailBtn.setAttribute('aria-label', translations[currentLang].closeDetailsAria);

    const closeAboutBtn = document.getElementById('close-about-btn');
    if (closeAboutBtn) closeAboutBtn.setAttribute('aria-label', translations[currentLang].closeModalAria);

    // 6. Update about modal content
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = translations[currentLang].aboutTitle;

    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.innerHTML = translations[currentLang].aboutParagraphs.map(p => `<p>${p}</p>`).join('');
    }

    // 7. Update footer content
    const footerP = document.querySelector('.showcase-footer p');
    if (footerP) footerP.textContent = translations[currentLang].footerText;

    // 8. Update grid cards content
    const titleCards = document.querySelectorAll('.title-card');
    titleCards.forEach(card => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        card.querySelector('.illustration-title').textContent = translations[currentLang].illustrations[idx].title;
        card.setAttribute('aria-label', `View details for ${translations[currentLang].illustrations[idx].title}`);
    });

    const pictureCards = document.querySelectorAll('.picture-card');
    pictureCards.forEach(card => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        const img = card.querySelector('.illustration-image');
        if (img) img.alt = translations[currentLang].illustrations[idx].title;
        const zoomBtn = card.querySelector('.image-zoom-btn');
        if (zoomBtn) zoomBtn.setAttribute('aria-label', `Zoom in on ${translations[currentLang].illustrations[idx].title}`);
    });

    // 9. Update detail view content if currently open
    if (activeDetailIndex !== -1) {
        const translation = translations[currentLang].illustrations[activeDetailIndex];
        const detailTitle = document.getElementById('detail-title');
        if (detailTitle) detailTitle.textContent = translation.title;

        const detailExplanation = document.getElementById('detail-explanation');
        if (detailExplanation) detailExplanation.textContent = translation.explanation || "";

        const detailImg = document.getElementById('detail-image');
        if (detailImg) detailImg.alt = translation.title;
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    updateLanguageDOM();
}

// Add event listener for language toggle button
const langBtnElement = document.getElementById('lang-btn');
if (langBtnElement) {
    langBtnElement.addEventListener('click', toggleLanguage);
}

// Color Filter Effect Logic
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');

function setActiveColor(color) {
    const closeFilterBtn = document.getElementById('close-filter-btn');
    const allCircles = document.querySelectorAll('.cursor-circle');

    if (activeColor === color) {
        activeColor = null;
        allCircles.forEach(circle => {
            circle.classList.remove('active');
            circle.style.backgroundColor = 'transparent';
        });
        btnRed.classList.remove('active');
        btnBlue.classList.remove('active');
        document.body.classList.remove('filter-active');
        if (closeFilterBtn) closeFilterBtn.classList.remove('visible');

        setTimeout(() => {
            currentSize = getBaseSize();
            allCircles.forEach(circle => {
                circle.style.width = `${currentSize}px`;
                circle.style.height = `${currentSize}px`;
            });
        }, 300);
    } else {
        activeColor = color;
        currentSize = getBaseSize();

        allCircles.forEach(circle => {
            circle.classList.remove('active');
            circle.style.backgroundColor = 'transparent';
        });

        if (document.body.classList.contains('fullscreen-active')) {
            const activeCircle = document.getElementById('fullscreen-circle');
            if (activeCircle) {
                activeCircle.style.width = `${currentSize}px`;
                activeCircle.style.height = `${currentSize}px`;
                activeCircle.style.backgroundColor = color;
                activeCircle.classList.add('active');
            }
        } else if (hoveredSlideIndex !== -1) {
            const card = gridContainer.querySelector(`.picture-card[data-index="${hoveredSlideIndex}"]`);
            if (card) {
                const activeCircle = card.querySelector('.cursor-circle');
                if (activeCircle) {
                    activeCircle.style.width = `${currentSize}px`;
                    activeCircle.style.height = `${currentSize}px`;
                    activeCircle.style.backgroundColor = color;
                    activeCircle.classList.add('active');
                }
            }
        }

        document.body.classList.add('filter-active');
        if (closeFilterBtn) closeFilterBtn.classList.remove('visible');

        btnRed.classList.toggle('active', color === '#ff0000ff');
        btnBlue.classList.toggle('active', color === '#0000ff');
    }
}

let lastClientX = window.innerWidth / 2;
let lastClientY = window.innerHeight / 2;

const updateFilterPosition = (clientX, clientY) => {
    lastClientX = clientX;
    lastClientY = clientY;

    if (document.body.classList.contains('fullscreen-active')) {
        const overlayContainer = document.querySelector('.fullscreen-image-container');
        const activeCircle = document.getElementById('fullscreen-circle');
        if (overlayContainer && activeCircle) {
            const rect = overlayContainer.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            activeCircle.style.left = `${x}px`;
            activeCircle.style.top = `${y}px`;
        }
    } else if (hoveredSlideIndex !== -1) {
        const card = gridContainer.querySelector(`.picture-card[data-index="${hoveredSlideIndex}"]`);
        if (card) {
            const imgContainer = card.querySelector('.illustration-image-container');
            const activeCircle = card.querySelector('.cursor-circle');
            if (imgContainer && activeCircle) {
                const rect = imgContainer.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                activeCircle.style.left = `${x}px`;
                activeCircle.style.top = `${y}px`;
            }
        }
    }
};

window.addEventListener('mousemove', (e) => {
    updateFilterPosition(e.clientX, e.clientY);
});

window.addEventListener('touchstart', (e) => {
    if (e.target.closest('.color-btn') || e.target.closest('#close-filter-btn') || e.target.closest('#close-fullscreen-btn')) return;
    if (activeColor && e.touches.length > 0) {
        updateFilterPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    if (activeColor) {
        if (e.cancelable) e.preventDefault();
        if (e.touches.length > 0) {
            updateFilterPosition(e.touches[0].clientX, e.touches[0].clientY);
        }
    }
}, { passive: false });

if (btnRed && btnBlue) {
    btnRed.addEventListener('click', () => setActiveColor('#ff0000ff'));
    btnBlue.addEventListener('click', () => setActiveColor('#0000ff'));
}

const closeFilterBtn = document.getElementById('close-filter-btn');

window.addEventListener('click', (e) => {
    if (
        e.target.closest('.color-btn') ||
        e.target.closest('#close-filter-btn') ||
        e.target.closest('#close-fullscreen-btn') ||
        e.target.closest('.image-zoom-btn') ||
        e.target.closest('#about-btn') ||
        e.target.closest('#about-modal')
    ) return;

    if (activeColor && e.button === 0) {
        const step = window.innerWidth < 480 ? 120 : 150;
        currentSize += step;
        const allCircles = document.querySelectorAll('.cursor-circle');
        allCircles.forEach(circle => {
            circle.style.width = `${currentSize}px`;
            circle.style.height = `${currentSize}px`;
        });

        const maxDimension = Math.max(window.innerWidth, window.innerHeight);
        if (currentSize >= maxDimension * 2.5) {
            if (closeFilterBtn) closeFilterBtn.classList.add('visible');
        }
    }
});

window.addEventListener('contextmenu', (e) => {
    if (activeColor) {
        e.preventDefault();
        setActiveColor(activeColor);
    }
});

if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', () => {
        setActiveColor(activeColor);
    });
}

// Lightbox Zoom Event Handler
gridContainer.addEventListener('click', (e) => {
    const zoomBtn = e.target.closest('.image-zoom-btn');
    const imgContainer = e.target.closest('.illustration-image-container');

    if (!zoomBtn && !imgContainer) return;

    if (document.body.classList.contains('fullscreen-active')) return;

    const card = e.target.closest('.picture-card');
    const idx = parseInt(card.getAttribute('data-index'), 10);
    const img = card ? card.querySelector('.illustration-image') : null;

    if (img) {
        activeZoomImage = img;
        activeZoomIndex = idx;

        const firstRect = img.getBoundingClientRect();

        const overlay = document.getElementById('fullscreen-overlay');
        const overlayContainer = overlay.querySelector('.fullscreen-image-container');

        // Clear old image if any
        const existingImg = overlayContainer.querySelector('.illustration-image');
        if (existingImg) existingImg.remove();

        const overlayImg = document.createElement('img');
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlayImg.className = 'illustration-image';
        if (img.parentElement.classList.contains('horizontal-container')) {
            overlayContainer.classList.add('horizontal-container');
        } else {
            overlayContainer.classList.remove('horizontal-container');
        }
        overlayContainer.insertBefore(overlayImg, overlayContainer.firstChild);

        // Sync active color filter circle to overlay
        if (activeColor) {
            const allCircles = document.querySelectorAll('.cursor-circle');
            allCircles.forEach(circle => {
                circle.classList.remove('active');
                circle.style.backgroundColor = 'transparent';
            });

            const fsCircle = document.getElementById('fullscreen-circle');
            if (fsCircle) {
                fsCircle.style.width = `${currentSize}px`;
                fsCircle.style.height = `${currentSize}px`;
                fsCircle.style.backgroundColor = activeColor;
                fsCircle.classList.add('active');
            }
        }

        resetImageTransform(overlayImg);
        document.body.classList.add('fullscreen-active');

        const lastRect = overlayImg.getBoundingClientRect();

        const deltaX = firstRect.left - lastRect.left;
        const deltaY = firstRect.top - lastRect.top;
        const deltaW = firstRect.width / lastRect.width;
        const deltaH = firstRect.height / lastRect.height;

        overlayImg.style.transformOrigin = 'top left';
        overlayImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlayImg.classList.add('animating');
                overlayImg.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });

        setTimeout(() => {
            overlayImg.classList.remove('animating');
            overlayImg.style.transformOrigin = '';
        }, 450);
    }
});

const closeFullscreenBtn = document.getElementById('close-fullscreen-btn');
if (closeFullscreenBtn) {
    closeFullscreenBtn.addEventListener('click', () => {
        const overlay = document.getElementById('fullscreen-overlay');
        const overlayImg = overlay.querySelector('.illustration-image');

        if (!overlayImg || overlayImg.classList.contains('animating')) return;

        // Turn off active color filter upon exit
        if (activeColor) {
            setActiveColor(activeColor);
        }

        overlayImg.classList.add('animating');

        // FLIP Animation: Measure (Last)
        const lastRect = overlayImg.getBoundingClientRect();

        // Revert class to measure standard grid layout (First)
        document.body.classList.remove('fullscreen-active');
        const firstRect = activeZoomImage.getBoundingClientRect();

        // Go back to fullscreen state to animate
        document.body.classList.add('fullscreen-active');

        // Calculate differences (Invert)
        const deltaX = firstRect.left - lastRect.left;
        const deltaY = firstRect.top - lastRect.top;
        const deltaW = firstRect.width / lastRect.width;
        const deltaH = firstRect.height / lastRect.height;

        overlayImg.style.transformOrigin = 'top left';
        overlayImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;

        // Clean up classes and state after transition (Play)
        setTimeout(() => {
            document.body.classList.remove('fullscreen-active');
            overlayImg.classList.remove('animating');
            resetImageTransform(overlayImg);
            overlayImg.remove();
            activeZoomImage = null;
            activeZoomIndex = -1;
        }, 450);
    });
}

// Touch zoom panning/pinching
const overlay = document.getElementById('fullscreen-overlay');
if (overlay) {
    overlay.addEventListener('touchstart', (e) => {
        if (e.target.closest('.color-btn') || e.target.closest('#close-fullscreen-btn') || e.target.closest('#close-filter-btn')) return;

        const overlayImg = overlay.querySelector('.illustration-image');
        if (!overlayImg || overlayImg.classList.contains('animating')) return;

        const touches = e.touches;

        if (touches.length === 1) {
            if (imageScale > 1) {
                isDraggingImage = true;
                initialTouchX = touches[0].clientX;
                initialTouchY = touches[0].clientY;
                initialPanX = imagePanX;
                initialPanY = imagePanY;
            }
        } else if (touches.length === 2) {
            isDraggingImage = false;
            initialPinchHypot = Math.hypot(
                touches[0].clientX - touches[1].clientX,
                touches[0].clientY - touches[1].clientY
            );
            initialPinchScale = imageScale;
        }
    }, { passive: true });

    overlay.addEventListener('touchmove', (e) => {
        if (e.target.closest('.color-btn') || e.target.closest('#close-fullscreen-btn') || e.target.closest('#close-filter-btn')) return;

        const overlayImg = overlay.querySelector('.illustration-image');
        if (!overlayImg || overlayImg.classList.contains('animating')) return;

        const touches = e.touches;

        if (isDraggingImage && touches.length === 1) {
            const dx = touches[0].clientX - initialTouchX;
            const dy = touches[0].clientY - initialTouchY;
            imagePanX = initialPanX + dx / imageScale;
            imagePanY = initialPanY + dy / imageScale;
            applyOverlayImageTransform(overlayImg);
            if (e.cancelable) e.preventDefault();
        } else if (touches.length === 2) {
            const currentHypot = Math.hypot(
                touches[0].clientX - touches[1].clientX,
                touches[0].clientY - touches[1].clientY
            );
            const scaleRatio = currentHypot / initialPinchHypot;
            imageScale = Math.min(Math.max(initialPinchScale * scaleRatio, 1), 4);

            if (imageScale === 1) {
                imagePanX = 0;
                imagePanY = 0;
            }
            applyOverlayImageTransform(overlayImg);
            if (e.cancelable) e.preventDefault();
        }
    }, { passive: false });

    overlay.addEventListener('touchend', () => {
        isDraggingImage = false;
    });
}

function applyOverlayImageTransform(overlayImg) {
    if (overlayImg) {
        overlayImg.style.transform = `scale(${imageScale}) translate(${imagePanX}px, ${imagePanY}px)`;
    }
}

function resetImageTransform(img) {
    imageScale = 1;
    imagePanX = 0;
    imagePanY = 0;
    if (img) {
        img.style.transform = '';
    }
    isDraggingImage = false;
}

// Global key down for Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const closeBtn = document.getElementById('close-fullscreen-btn');
        if (closeBtn && document.body.classList.contains('fullscreen-active')) {
            closeBtn.click();
        }
    }
});

// About Modal Event Listeners
const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const closeAboutBtn = document.getElementById('close-about-btn');

if (aboutBtn && aboutModal && closeAboutBtn) {
    aboutBtn.addEventListener('click', () => {
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeAbout = () => {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeAboutBtn.addEventListener('click', closeAbout);

    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            closeAbout();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aboutModal.classList.contains('active')) {
            closeAbout();
        }
    });
}

// Detail View Page Event Handlers
function openDetailView(idx) {
    const ill = illustrations[idx];
    const translation = translations[currentLang].illustrations[idx];

    document.getElementById('detail-title').textContent = translation.title;
    document.getElementById('detail-explanation').textContent = translation.explanation || "";

    const detailImg = document.getElementById('detail-image');
    detailImg.src = ill.src;
    detailImg.alt = translation.title;

    activeDetailIndex = idx;

    document.getElementById('detail-view').classList.add('active');
    document.body.style.overflow = 'hidden';
}

gridContainer.addEventListener('click', (e) => {
    const titleCard = e.target.closest('.title-card');
    if (!titleCard) return;

    const idx = parseInt(titleCard.getAttribute('data-index'), 10);
    openDetailView(idx);
});

gridContainer.addEventListener('keydown', (e) => {
    const titleCard = e.target.closest('.title-card');
    if (!titleCard) return;

    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(titleCard.getAttribute('data-index'), 10);
        openDetailView(idx);
    }
});

const closeDetailBtn = document.getElementById('close-detail-btn');
if (closeDetailBtn) {
    closeDetailBtn.addEventListener('click', () => {
        document.getElementById('detail-view').classList.remove('active');
        document.body.style.overflow = '';
        activeDetailIndex = -1;
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const detailView = document.getElementById('detail-view');
        if (detailView && detailView.classList.contains('active')) {
            detailView.classList.remove('active');
            document.body.style.overflow = '';
            activeDetailIndex = -1;
        }
    }
});

// Custom Cursor Logic
const customCursor = document.getElementById('custom-cursor');

if (customCursor) {
    window.addEventListener('mousemove', (e) => {
        if (!document.body.classList.contains('fullscreen-active')) {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
            customCursor.style.opacity = '1';
        } else {
            customCursor.style.opacity = '0';
        }
    });

    window.addEventListener('mousedown', () => {
        if (!document.body.classList.contains('fullscreen-active')) {
            customCursor.classList.add('clicking');
        }
    });

    window.addEventListener('mouseup', () => {
        customCursor.classList.remove('clicking');
    });

    document.addEventListener('mouseover', (e) => {
        if (document.body.classList.contains('fullscreen-active')) {
            customCursor.classList.remove('hovering-card');
            return;
        }

        const isClickable = e.target.closest('.grid-card') ||
            e.target.closest('.color-btn') ||
            e.target.closest('#about-btn') ||
            e.target.closest('#lang-btn') ||
            e.target.closest('.close-detail-btn') ||
            e.target.closest('.close-filter-btn') ||
            e.target.closest('.close-about-btn') ||
            e.target.closest('a');

        if (isClickable) {
            customCursor.classList.add('hovering-card');
        } else {
            customCursor.classList.remove('hovering-card');
        }
    });

    document.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        if (!document.body.classList.contains('fullscreen-active')) {
            customCursor.style.opacity = '1';
        }
    });
}
