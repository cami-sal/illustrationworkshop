/**
 * Illustration Showcase - Carousel Logic
 */

const illustrations = [
    {
        src: 'images/city150.png',
        title: 'City',
        description: 'An illustration of a city.'
    },
    {
        src: 'images/dog150.png',
        title: 'Dog',
        description: 'An illustration of a dog.'
    },
    {
        src: 'images/fishing150.png',
        title: 'Fishing',
        description: 'An illustration of fishing.'
    },
    {
        src: 'images/hand150.png',
        title: 'Hand',
        description: 'An illustration of a hand.'
    },
    {
        src: 'images/laptip150.png',
        title: 'Laptop',
        description: 'An illustration of a laptop.'
    },
    {
        src: 'images/panels150.png',
        title: 'Panels',
        description: 'An illustration of panels.'
    },
    {
        src: 'images/park150.png',
        title: 'Park',
        description: 'An illustration of a park.'
    },
    {
        src: 'images/tree150.png',
        title: 'Tree',
        description: 'An illustration of a tree.'
    }
];

const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 1; 
let isTransitioning = false;

// Append clones to achieve infinite seamless loop
const slidesData = [
    illustrations[illustrations.length - 1], // Clone of last item prepended
    ...illustrations,
    illustrations[0]                         // Clone of first item appended
];

// Build DOM nodes dynamically
slidesData.forEach((ill, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    
    if (idx === 0 || idx === slidesData.length - 1) {
        slide.setAttribute('aria-hidden', 'true');
    } else {
        slide.setAttribute('aria-label', `${idx} of ${illustrations.length}`);
    }
    
    const imgContainer = document.createElement('div');
    imgContainer.className = 'illustration-image-container';

    const img = document.createElement('img');
    // Set data-src for smart adjacent lazy loading
    img.setAttribute('data-src', ill.src);
    img.alt = ill.title;
    img.className = 'illustration-image';
    
    imgContainer.appendChild(img);

    const info = document.createElement('div');
    info.className = 'illustration-info';
    
    const title = document.createElement('h2');
    title.className = 'illustration-title';
    title.textContent = ill.title;
    
    const desc = document.createElement('p');
    desc.className = 'illustration-desc';
    desc.textContent = ill.description;
    
    info.appendChild(title);
    info.appendChild(desc);
    
    slide.appendChild(imgContainer);
    slide.appendChild(info);
    
    track.appendChild(slide);
});

// Lazy load images dynamically for active, prev, and next slides
function lazyLoadAdjacent(index) {
    const slideIndicesToLoad = [index - 1, index, index + 1];
    slideIndicesToLoad.forEach(i => {
        if (i >= 0 && i < slidesData.length) {
            const slideEl = track.children[i];
            if (slideEl) {
                const imgEl = slideEl.querySelector('.illustration-image');
                if (imgEl && !imgEl.src) {
                    imgEl.src = imgEl.getAttribute('data-src');
                }
            }
        }
    });
}

// Initial load and offset to show the first real slide
lazyLoadAdjacent(currentIndex);
track.style.transform = `translateX(-${currentIndex * 100}%)`;

// Update Carousel Slide
function updateSlide(transition = true) {
    if (transition) {
        // Fast, elegant custom ease
        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
        track.style.transition = 'none';
    }
    lazyLoadAdjacent(currentIndex);
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navigation Events
prevBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateSlide();
});

nextBtn.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateSlide();
});

// Handle the end of transition for seamless looping
track.addEventListener('transitionend', (e) => {
    // Prevent bubbled transition events from slide images
    if (e.target !== track) return;

    isTransitioning = false;
    
    // Jump from the cloned first element back to the true last element
    if (currentIndex === 0) {
        currentIndex = illustrations.length;
        updateSlide(false);
    }
    // Jump from the cloned last element back to the true first element
    else if (currentIndex === slidesData.length - 1) {
        currentIndex = 1;
        updateSlide(false);
    }
});

// Keyboard Accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// Touch Swipe Navigation for mobile devices
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;

track.addEventListener('touchstart', (e) => {
    if (isTransitioning) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

track.addEventListener('touchend', (e) => {
    if (isTransitioning) return;
    touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Ensure horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextBtn.click();
        } else {
            prevBtn.click();
        }
    }
}, { passive: true });

// Color Filter Effect Logic
const cursorCircle = document.getElementById('cursor-circle');
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');

const getBaseSize = () => window.innerWidth < 480 ? 180 : 250;

let activeColor = null;
let currentSize = getBaseSize();

function setActiveColor(color) {
    const closeFilterBtn = document.getElementById('close-filter-btn');
    if (activeColor === color) {
        // Toggle off if clicking the same color again
        activeColor = null;
        cursorCircle.classList.remove('active');
        btnRed.classList.remove('active');
        btnBlue.classList.remove('active');
        document.body.classList.remove('filter-active');
        if (closeFilterBtn) closeFilterBtn.classList.remove('visible');
        
        setTimeout(() => {
            currentSize = getBaseSize();
            cursorCircle.style.width = `${currentSize}px`;
            cursorCircle.style.height = `${currentSize}px`;
        }, 300);
    } else {
        activeColor = color;
        currentSize = getBaseSize(); // Reset size on switch
        cursorCircle.style.width = `${currentSize}px`;
        cursorCircle.style.height = `${currentSize}px`;
        cursorCircle.style.backgroundColor = color;
        cursorCircle.classList.add('active');
        document.body.classList.add('filter-active');
        if (closeFilterBtn) closeFilterBtn.classList.remove('visible');
        
        btnRed.classList.toggle('active', color === '#ff0000');
        btnBlue.classList.toggle('active', color === '#0000ff');
    }
}

if (btnRed && btnBlue && cursorCircle) {
    btnRed.addEventListener('click', () => setActiveColor('#ff0000'));
    btnBlue.addEventListener('click', () => setActiveColor('#0000ff'));

    const updateFilterPosition = (clientX, clientY) => {
        cursorCircle.style.left = `${clientX}px`;
        cursorCircle.style.top = `${clientY}px`;
    };

    // Track mouse position continuously to avoid jumps on activation
    window.addEventListener('mousemove', (e) => {
        updateFilterPosition(e.clientX, e.clientY);
    });

    // Position the filter immediately on touch start
    window.addEventListener('touchstart', (e) => {
        if (e.target.closest('.color-btn') || e.target.closest('.nav-arrow') || e.target.closest('#close-filter-btn')) return;
        if (activeColor && e.touches.length > 0) {
            updateFilterPosition(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    // Touch support for dragging the filter on mobile (lock page scroll when active)
    window.addEventListener('touchmove', (e) => {
        if (activeColor) {
            if (e.cancelable) e.preventDefault();
            if (e.touches.length > 0) {
                updateFilterPosition(e.touches[0].clientX, e.touches[0].clientY);
            }
        }
    }, { passive: false });

    const closeFilterBtn = document.getElementById('close-filter-btn');

    window.addEventListener('click', (e) => {
        // Ignore clicks on color buttons, navigation arrows, and the exit button itself
        if (e.target.closest('.color-btn') || e.target.closest('.nav-arrow') || e.target.closest('#close-filter-btn')) return;
        
        if (activeColor) {
            const step = window.innerWidth < 480 ? 120 : 150;
            currentSize += step;
            cursorCircle.style.width = `${currentSize}px`;
            cursorCircle.style.height = `${currentSize}px`;
            
            // Check if filter circle covers the entire screen
            const maxDimension = Math.max(window.innerWidth, window.innerHeight);
            if (currentSize >= maxDimension * 2.5) {
                if (closeFilterBtn) closeFilterBtn.classList.add('visible');
            }
        }
    });

    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', () => {
            setActiveColor(activeColor); // Exit filter
        });
    }
}

