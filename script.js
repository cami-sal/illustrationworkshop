/**
 * Illustration Showcase - Grid Layout & Lightbox Logic
 */

const illustrations = [
    {
        src: 'images/hand150.png',
    },
    {
        src: 'images/tree150.png',
    },
    {
        src: 'images/laptip150.png',
    },
    {
        src: 'images/park150.png',
    },
    {
        src: 'images/city150.png',
    },
    {
        src: 'images/fishing150.png',
    },
    {
        src: 'images/dog150.png',
        aspectRatio: '1.414 / 1',
    },
    {
        src: 'images/panels150.png',
    }
];

const translations = {
    en: {
        headerTitle: 'Between Worlds',
        aboutBtn: 'About',
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
                title: 'I live to the fullest',
                explanation: 'The polished, polite existence of having an office job is disrupted by the rough and calloused hands that perform it. The keyboard requires precision and softness, but his hands carry the memory of iron, strength, and effort. This is the duality of a mind bound to a desk and a body that refuses to follow suit.'
            },
            {
                title: 'There’s so much<br>I want to achieve',
                explanation: 'The corporate ladder is strict but predictable. Depending on where you stop climbing, a predefined outcome will be behind every door. However, the soul’s true trajectory is to grow organically and reach in all directions at once. Concealed in the the blue branches are 6 Korean words that represent said directions.'
            },
            {
                title: 'I like it, but it<br>stresses me out',
                explanation: 'Corporate life has great advantages, but everything comes with a cost. Hidden behind that mandatory professional smile, there’s often exhaustion, isolation, and boredom. Even if we like our jobs, there’s always that feeling that we could be doing something else, something that makes our souls happy. Can we keep turning our frown upside down on command?'
            },
            {
                title: 'I wish I could scape sometimes',
                explanation: 'In a tall office building, in a rigid office grid, in a desk that has become his own personal world, sometimes the corporate environment can feel overwhelming. Like this, the longing for peace and nature appears subtly and slowly. Daydreaming of trees, rivers, a cold beer, and sunshine, the mind finds a way to wander free for a few minutes.'
            },
            {
                title: 'I need to get<br>out of the city<br>this weekend',
                explanation: 'The skyline, the loud, familiar comfort of city life, is a world too deeply woven into our habits to easily abandon. Amid the towering structures, he has a space of his own, a quiet lookout where he can watch the world move on outside, while relaxing in his own way. For a moment, imagination turns that space into a nature retreat, a cabin in the forest, a peaceful spot in the mountains. It is his quiet yearning to flee the city each weekend.'
            },
            {
                title: 'I love fishing,<br>let’s go!',
                explanation: 'The view outside the office window: an everyday landscape of parked cars, cardboard boxes, concrete, and urban geometry. Nothing new to see there, so why not dream a little? The pavement starts to dissolve into flowing blue water, lively fish swim left and right, the sun burns through the clouds, the heart is satisfied. A plan starts to form, a relieving thought, something to wait for. We should make time for the things we love.'
            },
            {
                title: 'I had a dream<br>about my friend',
                explanation: 'The quiet space of daily life. A bed, a desk, a TV, and the clutter of a personal sanctuary. Here, at night, the physical world fades into hazy memories. And imagination takes the stage. Growing into adulthood next to a beloved dog is one of the most wonderful things in life. But it can also be one of the most devastating at the end of the journey. This is the bittersweet struggle of grief. A tender attempt to dream of a dear pet while coming back to reality when the sun rises. But for a brief moment, two friends can be together again.'
            },
            {
                title: 'Just need to keep<br>going, I can do it',
                explanation: 'The archive of his life shows a multifaceted self, as he has unique passions, routines, and burdens that define him, but never stop him. His different internal worlds ensamble like cells, functioning together to build the complete architecture of who he is.'
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
        aboutTitle: '세계 사이에서',
        aboutParagraphs: [
            '이 컬렉션은 작가에게 소중한 한 인물의 삶을 시각적으로 탐구한 작업이다. 그의 개인적 역사와 고난, 그리고 조용한 성취가 모든 일러스트레이션에 담겨 있다.',
            '작품은 붉은색과 푸른색 line art를 통해 개인의 정체성과 사회 구조 사이에서 발생하는 긴장을 시각화한다. 붉은 요소는 외부 세계를 상징한다. 그것은 현대 사회의 반복적이고 예측 가능하며 때로는 지치게 만드는 공간이다. 반면 푸른 요소는 내면의 공간을 상징한다. 그것은 이 인물이 삶을 견뎌 나갈 수 있도록 하는 개인적인 열정, 깊은 애착, 그리고 정신적 도피처를 의미한다.',
            '이 연작은 이 두 힘을 갈등으로 바라보기보다 공존의 관계로 제시한다. 이는 자신의 온전함을 찾아가는 한 사람의 초상이다.'
        ],
        footerText: '© 2026 Camila Saldivia. 모든 권리 보유.',
        illustrations: [
            {
                title: '난 열심히 살아간다',
                explanation: '사무직이라는 단정하고 점잖은 삶은 그 일을 수행하는 거칠고 굳은살 박인 손에 의해 균열을 드러낸다. 키보드는 섬세함과 부드러움을 요구하지만, 그의 손에는 쇠를 다루던 기억과 힘, 그리고 노동의 흔적이 남아 있다. 이는 책상에 묶인 정신과 그에 순응하기를 거부하는 육체가 공존하는 이중성의 모습이다.'
            },

            {
                title: '이루고 싶은 것이<br>너무 많다',
                explanation: '회사라는 사다리는 엄격하지만 예측 가능하다. 어느 지점에서 오르기를 멈추든, 각 문 뒤에는 이미 정해진 결과가 기다리고 있다. 그러나 영혼이 향하는 진정한 방향은 다르다. 그것은 자연스럽게 성장하며, 한 방향이 아닌 모든 방향으로 동시에 뻗어 나가고자 한다.<br><br>*푸른 가지들 속에는 이러한 방향들을 상징하는 6 개의 한국어 단어가 숨겨져 있다.'
            },

            {
                title: '좋아하긴 하지만, 스트레스를 받는다',
                explanation: '회사 생활에는 분명 많은 장점이 있다. 그러나 모든 것에는 대가가 따른다. 의무적으로 지어야 하는 프로페셔널한 미소 뒤에는 종종 피로와 고립감, 그리고 권태가 숨어 있다. 자신의 일을 좋아한다 해도, 어딘가에는 늘 다른 무언가를 하고 싶다는 마음이 남아 있다. 영혼을 진정으로 기쁘게 하는 일을 말이다. 우리는 과연 원할 때마다, 혹은 요구받을 때마다 찡그린 표정을 미소로 바꾸며 살아갈 수 있을까?'
            },

            {
                title: '가끔은 벗어나고 싶다',
                explanation: '높은 오피스 빌딩 안에서, 규칙적으로 배열된 사무실 속에서, 그리고 어느새 자신의 작은 세계가 되어 버린 책상 앞에서, 때때로 회사라는 환경은 숨이 막힐 만큼 버겁게 느껴지기도 한다. 그럴 때 평화와 자연에 대한 그리움은 조용하고도 서서히 모습을 드러낸다. 나무와 강, 시원한 맥주 한 잔, 그리고 따뜻한 햇살을 떠올리며, 마음은 잠시나마 자유롭게 떠돌 수 있는 길을 찾아낸다.'
            },

            {
                title: '이번 주말에는 도시를 벗어나야겠다',
                explanation: '도시의 스카이라인과 소란스럽지만 익숙한 일상은 너무도 깊이 삶에 스며들어 있어 쉽게 떠나기 어렵다. 거대한 건물들 사이에서 그는 자신만의 공간을 만들어 낸다. 세상과 잠시 거리를 둔 채, 바깥의 풍경과 사람들의 움직임을 바라보며 자신만의 방식으로 휴식을 취할 수 있는 조용한 자리이다. 그러나 어느 순간 상상은 그 공간을 전혀 다른 곳으로 바꾸어 놓는다. 숲속의 오두막, 산속의 평온한 쉼터와 같은 자연의 은신처로 말이다. 그것은 매주 주말마다 도시를 떠나고 싶어 하는 그의 조용한 갈망의 표현이다.'
            },

            {
                title: '낚시가 정말 좋다,<br>가자!',
                explanation: '사무실 창밖의 풍경은 주차된 차들, 종이상자들, 콘크리트와 도시의 기하학적 구조로 이루어진 평범한 일상이다. 더 이상 새로울 것이 없으니, 잠시 상상에 빠져 보는 건 어떨까? 포장도로는 푸른 물결로 녹아들고, 생기 넘치는 물고기들이 이리저리 헤엄친다. 구름 사이로 햇살이 비추고, 마음은 만족으로 채워진다. 하나의 계획이 떠오르기 시작한다. 마음을 가볍게 해 주는 생각, 기다릴 수 있는 무언가. 우리는 자신이 사랑하는 것들을 위해 시간을 내야 한다.'
            },

            {
                title: '친구에 대한<br>꿈을 꾸었다',
                explanation: '일상의 조용한 공간. 침대와 책상, TV, 그리고 개인적인 안식처를 이루는 물건들. 이곳에서 밤이 되면 현실은 희미한 기억으로 흐려지고, 상상이 그 자리를 대신한다. 사랑하는 반려견과 함께 성장하는 것은 인생에서 가장 아름다운 경험 중 하나이다. 하지만 여정의 끝에서 그것은 가장 가슴 아픈 경험이 되기도 한다. 이것은 상실의 슬픔이 지닌 달콤쌉싸름한 감정이다. 소중한 친구를 꿈속에서 다시 만나고 싶어 하면서도, 해가 뜨면 현실로 돌아와야 하는 마음의 싸움이다. 그러나 잠시 동안만큼은 두 친구가 다시 함께할 수 있다.'
            },

            {
                title: '계속 나아가기만<br>하면 된다,<br>나는 할 수 있다',
                explanation: '그의 삶을 이루는 기록들은 다면적인 자아를 보여 준다. 그를 정의하는 고유한 열정과 일상, 그리고 짐들이 존재하지만, 그것들은 결코 그의 발걸음을 멈추게 하지 않는다. 서로 다른 내면의 세계들은 세포처럼 모여 함께 작동하며, 결국 그라는 사람의 완전한 구조를 만들어 낸다.'
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
    card.style.order = picOrder;

    const imgContainer = document.createElement('div');
    imgContainer.className = 'illustration-image-container';
    if (ill.aspectRatio) {
        imgContainer.classList.add('horizontal-container');
        card.classList.add('horizontal-card');
    }

    const img = document.createElement('img');
    img.src = ill.src;
    img.alt = translations[currentLang].illustrations[idx].title.replace(/<br\s*\/?>/gi, ' ');
    img.className = 'illustration-image';
    imgContainer.appendChild(img);

    const filterCircle = document.createElement('div');
    filterCircle.className = 'cursor-circle';
    filterCircle.style.backgroundColor = 'transparent';
    imgContainer.appendChild(filterCircle);

    const zoomBtn = document.createElement('button');
    zoomBtn.className = 'image-zoom-btn';
    zoomBtn.setAttribute('aria-label', `Zoom in on ${translations[currentLang].illustrations[idx].title.replace(/<br\s*\/?>/gi, ' ')}`);
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
    card.setAttribute('aria-label', `View details for ${translations[currentLang].illustrations[idx].title.replace(/<br\s*\/?>/gi, ' ')}`);
    if (ill.aspectRatio) {
        card.classList.add('horizontal-card');
    }

    if (idx % 2 === 0) {
        card.classList.add('cloud-red');
    } else {
        card.classList.add('cloud-blue');
    }

    const titleOrder = (idx % 2 === 0) ? (idx * 2 + 1) : (idx * 2);
    card.style.order = titleOrder;

    const info = document.createElement('div');
    info.className = 'illustration-info';

    const title = document.createElement('h2');
    title.className = 'illustration-title';
    title.innerHTML = translations[currentLang].illustrations[idx].title;

    info.appendChild(title);
    card.appendChild(info);

    return card;
}

function updateLanguageDOM() {
    // 1. Update HTML language attribute
    document.documentElement.lang = currentLang;

    // 2. Update document title
    document.title = currentLang === 'en' ? 'Between Worlds' : '세계 사이에서';

    // 3. Update header elements
    const h1Img = document.querySelector('.showcase-header h1 img');
    if (h1Img) h1Img.alt = translations[currentLang].headerTitle;

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
        card.querySelector('.illustration-title').innerHTML = translations[currentLang].illustrations[idx].title;
        card.setAttribute('aria-label', `View details for ${translations[currentLang].illustrations[idx].title.replace(/<br\s*\/?>/gi, ' ')}`);
    });

    const pictureCards = document.querySelectorAll('.picture-card');
    pictureCards.forEach(card => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        const img = card.querySelector('.illustration-image');
        if (img) img.alt = translations[currentLang].illustrations[idx].title.replace(/<br\s*\/?>/gi, ' ');
        const zoomBtn = card.querySelector('.image-zoom-btn');
        if (zoomBtn) zoomBtn.setAttribute('aria-label', `Zoom in on ${translations[currentLang].illustrations[idx].title.replace(/<br\s*\/?>/gi, ' ')}`);
    });

    // 9. Update detail view content if currently open
    if (activeDetailIndex !== -1) {
        const translation = translations[currentLang].illustrations[activeDetailIndex];
        const detailTitle = document.getElementById('detail-title');
        if (detailTitle) detailTitle.innerHTML = translation.title.replace(/<br\s*\/?>/gi, ' ');

        const detailExplanation = document.getElementById('detail-explanation');
        if (detailExplanation) detailExplanation.innerHTML = translation.explanation || "";

        const detailImg = document.getElementById('detail-image');
        if (detailImg) detailImg.alt = translation.title.replace(/<br\s*\/?>/gi, ' ');

        const detailCloud = document.querySelector('.detail-cloud');
        if (detailCloud) {
            const isRed = (activeDetailIndex % 2 === 0);
            detailCloud.src = isRed ? 'webresources/messageRecurso_18_smallcloudred.png' : 'webresources/messageRecurso_19_smallcloudblue.png';
            if (currentLang === 'en') {
                detailCloud.alt = isRed ? 'Small red cloud decoration' : 'Small blue cloud decoration';
            } else {
                detailCloud.alt = isRed ? '작은 빨간 구름 장식' : '작은 파란 구름 장식';
            }
        }
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

    document.getElementById('detail-title').innerHTML = translation.title.replace(/<br\s*\/?>/gi, ' ');
    document.getElementById('detail-explanation').innerHTML = translation.explanation || "";

    const detailImg = document.getElementById('detail-image');
    detailImg.src = ill.src;
    detailImg.alt = translation.title.replace(/<br\s*\/?>/gi, ' ');

    const detailCloud = document.querySelector('.detail-cloud');
    if (detailCloud) {
        const isRed = (idx % 2 === 0);
        detailCloud.src = isRed ? 'webresources/messageRecurso_18_smallcloudred.png' : 'webresources/messageRecurso_19_smallcloudblue.png';
        if (currentLang === 'en') {
            detailCloud.alt = isRed ? 'Small red cloud decoration' : 'Small blue cloud decoration';
        } else {
            detailCloud.alt = isRed ? '작은 빨간 구름 장식' : '작은 파란 구름 장식';
        }
    }

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
