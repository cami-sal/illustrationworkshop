/**
 * Illustration Showcase - Grid Layout & Lightbox Logic
 */

const illustrations = [
    {
        src: 'images/city150.png',
        title: 'I need to get out of the city this weekend',
        explanation: 'A reflection on the claustrophobia of modern high-rises and the overwhelming architecture of urban environments. The red line structures represent the rigidity of our daily routines, prompting a silent call to find natural breathing room.'
    },
    {
        src: 'images/dog150.png',
        title: 'I had a dream about my friend',
        aspectRatio: '1.414 / 1',
        explanation: 'Exploring the soft spaces of memory and companionship. A visual translation of subconscious comfort, where the blue lines trace a dream-state encounter with a companion from the past, representing emotional grounding.'
    },
    {
        src: 'images/fishing150.png',
        title: 'I love fishing, let’s go!',
        explanation: 'Capturing a moment of pure focus and quiet escape. The act of fishing is depicted as a form of meditation, where the external noise of modern responsibilities falls away, leaving only the simple connection with the water.'
    },
    {
        src: 'images/hand150.png',
        title: 'I live to the fullest',
        explanation: 'An intimate study of touch, agency, and presence. The artwork centers on the gesture of reaching and feeling, symbolizing a quiet determination to live fully, feel deeply, and grasp one\'s own narrative.'
    },
    {
        src: 'images/laptip150.png',
        title: 'I like it, but it stresses me out',
        explanation: 'Visualizing the double-edged sword of digital connection. The laptop, representing work and social interfaces, becomes a source of both creative utility and overwhelming mental fatigue.'
    },
    {
        src: 'images/panels150.png',
        title: 'Just need to keep going,  I can do it',
        explanation: 'A comic-style narrative sequence depicting the emotional journey of persistence. The repetitive panel structures mirror the feeling of passing time and the daily struggle to keep moving forward.'
    },
    {
        src: 'images/park150.png',
        title: 'I wish I could scape sometimes',
        explanation: 'Exploring the boundary between private refuge and public space. The drawing depicts a park bench as a temporary sanctuary—a brief pause in the center of the world\'s constant motion.'
    },
    {
        src: 'images/tree150.png',
        title: 'There’s so much I want to achieve',
        explanation: 'A representation of growth, aspiration, and the passage of seasons. The branches stretch upward as a metaphor for personal ambition and the quiet desire to achieve something lasting.'
    }
];

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

    const imgContainer = document.createElement('div');
    imgContainer.className = 'illustration-image-container';
    if (ill.aspectRatio) {
        imgContainer.classList.add('horizontal-container');
    }

    const img = document.createElement('img');
    img.src = ill.src;
    img.alt = ill.title;
    img.className = 'illustration-image';
    imgContainer.appendChild(img);

    const filterCircle = document.createElement('div');
    filterCircle.className = 'cursor-circle';
    filterCircle.style.backgroundColor = 'transparent';
    imgContainer.appendChild(filterCircle);

    const zoomBtn = document.createElement('button');
    zoomBtn.className = 'image-zoom-btn';
    zoomBtn.setAttribute('aria-label', `Zoom in on ${ill.title}`);
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
    card.setAttribute('aria-label', `View details for ${ill.title}`);

    const info = document.createElement('div');
    info.className = 'illustration-info';

    const title = document.createElement('h2');
    title.className = 'illustration-title';
    title.textContent = ill.title;

    info.appendChild(title);
    card.appendChild(info);

    return card;
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

        btnRed.classList.toggle('active', color === '#ff3333');
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
    btnRed.addEventListener('click', () => setActiveColor('#ff3333'));
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
    if (!zoomBtn) return;

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
        if (!e.target.classList.contains('illustration-image')) return;
        if (e.target.classList.contains('animating')) return;

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
        const overlayImg = overlay.querySelector('.illustration-image');
        if (!overlayImg || overlayImg.classList.contains('animating')) return;
        if (!e.target.classList.contains('illustration-image')) return;

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
    
    document.getElementById('detail-title').textContent = ill.title;
    document.getElementById('detail-explanation').textContent = ill.explanation || "";
    
    const detailImg = document.getElementById('detail-image');
    detailImg.src = ill.src;
    detailImg.alt = ill.title;
    
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
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const detailView = document.getElementById('detail-view');
        if (detailView && detailView.classList.contains('active')) {
            detailView.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});
