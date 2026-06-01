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
        description: 'An illustration of a dog.',
        aspectRatio: '1.414 / 1'
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
    if (ill.aspectRatio) {
        imgContainer.classList.add('horizontal-container');
    }

    const img = document.createElement('img');
    // Set data-src for smart adjacent lazy loading
    img.setAttribute('data-src', ill.src);
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
    
    // Deactivate other filter circles and activate only the new active slide's circle
    if (activeColor) {
        const allCircles = document.querySelectorAll('.cursor-circle');
        allCircles.forEach(circle => {
            circle.classList.remove('active');
            circle.style.backgroundColor = 'transparent';
        });

        const activeSlide = track.children[currentIndex];
        if (activeSlide) {
            const activeCircle = activeSlide.querySelector('.cursor-circle');
            if (activeCircle) {
                activeCircle.style.width = `${currentSize}px`;
                activeCircle.style.height = `${currentSize}px`;
                activeCircle.style.backgroundColor = activeColor;
                activeCircle.classList.add('active');
            }
        }
    }

    if (window.updateActiveFilterPos) {
        window.updateActiveFilterPos();
    }
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
    } else if (e.key === 'Escape') {
        const closeBtn = document.getElementById('close-fullscreen-btn');
        if (closeBtn && document.body.classList.contains('fullscreen-active')) {
            closeBtn.click();
        }
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
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');

const getBaseSize = () => window.innerWidth < 480 ? 180 : 250;

let activeColor = null;
let currentSize = getBaseSize();

function setActiveColor(color) {
    const closeFilterBtn = document.getElementById('close-filter-btn');
    const allCircles = document.querySelectorAll('.cursor-circle');

    if (activeColor === color) {
        // Toggle off if clicking the same color again
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
        currentSize = getBaseSize(); // Reset size on switch
        allCircles.forEach(circle => {
            circle.classList.remove('active');
            circle.style.backgroundColor = 'transparent';
        });

        const activeSlide = track.children[currentIndex];
        if (activeSlide) {
            const activeCircle = activeSlide.querySelector('.cursor-circle');
            if (activeCircle) {
                activeCircle.style.width = `${currentSize}px`;
                activeCircle.style.height = `${currentSize}px`;
                activeCircle.style.backgroundColor = color;
                activeCircle.classList.add('active');
            }
        }
        document.body.classList.add('filter-active');
        if (closeFilterBtn) closeFilterBtn.classList.remove('visible');

        btnRed.classList.toggle('active', color === '#ff3333');
        btnBlue.classList.toggle('active', color === '#0000ff');
    }
}

// Fullscreen & Zooming Logic
let activeZoomImage = null;
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
let lastTapTime = 0;

function applyImageTransform() {
    if (activeZoomImage) {
        activeZoomImage.style.transform = `scale(${imageScale}) translate(${imagePanX}px, ${imagePanY}px)`;
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

if (btnRed && btnBlue) {
    btnRed.addEventListener('click', () => setActiveColor('#ff3333'));
    btnBlue.addEventListener('click', () => setActiveColor('#0000ff'));

    // Keep track of the last known coordinates
    let lastClientX = window.innerWidth / 2;
    let lastClientY = window.innerHeight / 2;

    const updateFilterPosition = (clientX, clientY) => {
        lastClientX = clientX;
        lastClientY = clientY;
        const activeSlide = track.children[currentIndex];
        if (activeSlide) {
            const imgContainer = activeSlide.querySelector('.illustration-image-container');
            const activeCircle = activeSlide.querySelector('.cursor-circle');
            if (imgContainer && activeCircle) {
                const rect = imgContainer.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                activeCircle.style.left = `${x}px`;
                activeCircle.style.top = `${y}px`;
            }
        }
    };

    // Track mouse position continuously to avoid jumps on activation
    window.addEventListener('mousemove', (e) => {
        updateFilterPosition(e.clientX, e.clientY);
    });

    // Position the filter immediately on touch start
    window.addEventListener('touchstart', (e) => {
        if (e.target.closest('.color-btn') || e.target.closest('.nav-arrow') || e.target.closest('#close-filter-btn') || e.target.closest('#close-fullscreen-btn')) return;
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
        // Ignore clicks on color buttons, navigation arrows, and the exit buttons
        if (e.target.closest('.color-btn') || e.target.closest('.nav-arrow') || e.target.closest('#close-filter-btn') || e.target.closest('#close-fullscreen-btn')) return;

        if (activeColor && e.button === 0) { // Expand only on left-click
            const step = window.innerWidth < 480 ? 120 : 150;
            currentSize += step;
            const allCircles = document.querySelectorAll('.cursor-circle');
            allCircles.forEach(circle => {
                circle.style.width = `${currentSize}px`;
                circle.style.height = `${currentSize}px`;
            });

            // Check if filter circle covers the entire screen
            const maxDimension = Math.max(window.innerWidth, window.innerHeight);
            if (currentSize >= maxDimension * 2.5) {
                if (closeFilterBtn) closeFilterBtn.classList.add('visible');
            }
        }
    });

    // Right-click (or long-press on mobile) to exit the active filter
    window.addEventListener('contextmenu', (e) => {
        if (activeColor) {
            e.preventDefault(); // Prevent default browser context menu
            setActiveColor(activeColor); // Exit active filter
        }
    });

    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', () => {
            setActiveColor(activeColor); // Exit filter
        });
    }

    // Expose a helper to trigger positioning after slide transitions
    window.updateActiveFilterPos = () => {
        updateFilterPosition(lastClientX, lastClientY);
    };
}

// Touch Delegation on track for Fullscreen & Zooming
track.addEventListener('click', (e) => {
    const zoomBtn = e.target.closest('.image-zoom-btn');

    if (zoomBtn) {
        if (activeColor) return; // Prevent entering fullscreen when filter is active
        if (document.body.classList.contains('fullscreen-active')) return;

        const slide = e.target.closest('.carousel-slide');
        const img = slide ? slide.querySelector('.illustration-image') : null;

        if (img) {
            // FLIP Animation: Measure (First)
            const firstRect = img.getBoundingClientRect();

            // Set state and active layout
            activeZoomImage = img;
            resetImageTransform(activeZoomImage);
            document.body.classList.add('fullscreen-active');

            // Measure (Last)
            const lastRect = img.getBoundingClientRect();

            // Calculate inversion differences (Invert)
            const deltaX = firstRect.left - lastRect.left;
            const deltaY = firstRect.top - lastRect.top;
            const deltaW = firstRect.width / lastRect.width;
            const deltaH = firstRect.height / lastRect.height;

            // Apply starting style
            img.style.transformOrigin = 'top left';
            img.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;

            // Use requestAnimationFrame to ensure the starting position is registered
            // by the browser before starting the transition.
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    img.classList.add('animating');
                    img.style.transform = 'translate(0px, 0px) scale(1)';
                });
            });

            // Clean up when animation ends
            setTimeout(() => {
                img.classList.remove('animating');
                img.style.transformOrigin = '';
            }, 450);
        }
    }
});

track.addEventListener('touchstart', (e) => {
    if (!document.body.classList.contains('fullscreen-active')) return;
    if (!e.target.classList.contains('illustration-image')) return;
    if (e.target.classList.contains('animating')) return;

    const touches = e.touches;

    if (touches.length === 1) {
        // Single finger drag initialization (only pan if zoomed)
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
}, { passive: false });

track.addEventListener('touchmove', (e) => {
    if (!document.body.classList.contains('fullscreen-active')) return;
    if (!e.target.classList.contains('illustration-image')) return;
    if (e.target.classList.contains('animating')) return;

    const touches = e.touches;

    if (isDraggingImage && touches.length === 1) {
        const dx = touches[0].clientX - initialTouchX;
        const dy = touches[0].clientY - initialTouchY;
        imagePanX = initialPanX + dx / imageScale;
        imagePanY = initialPanY + dy / imageScale;
        applyImageTransform();
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
        applyImageTransform();
        if (e.cancelable) e.preventDefault();
    }
}, { passive: false });

track.addEventListener('touchend', (e) => {
    isDraggingImage = false;
});

// Close Fullscreen Event Handler
const closeFullscreenBtn = document.getElementById('close-fullscreen-btn');
if (closeFullscreenBtn) {
    closeFullscreenBtn.addEventListener('click', () => {
        if (!activeZoomImage || activeZoomImage.classList.contains('animating')) return;

        // Turn off active color filter upon exit
        if (activeColor) {
            setActiveColor(activeColor);
        }

        const img = activeZoomImage;
        img.classList.add('animating');

        // FLIP Animation: Measure (Last)
        const lastRect = img.getBoundingClientRect();

        // Revert class to measure standard carousel layout (First)
        document.body.classList.remove('fullscreen-active');
        const firstRect = img.getBoundingClientRect();
        document.body.classList.add('fullscreen-active');

        // Calculate differences (Invert)
        const deltaX = firstRect.left - lastRect.left;
        const deltaY = firstRect.top - lastRect.top;
        const deltaW = firstRect.width / lastRect.width;
        const deltaH = firstRect.height / lastRect.height;

        // Apply style to play backward transition
        document.body.classList.add('fullscreen-exit-active');
        img.style.transformOrigin = 'top left';
        img.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;

        // Clean up classes and state after transition (Play)
        setTimeout(() => {
            document.body.classList.remove('fullscreen-active');
            document.body.classList.remove('fullscreen-exit-active');
            img.classList.remove('animating');
            resetImageTransform(img);
            activeZoomImage = null;
        }, 450);
    });
}


