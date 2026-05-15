/**
 * Illustration Showcase - Carousel Logic
 */

const illustrations = [
    {
        src: 'images/hand.jpg',
        title: 'Hand',
        description: 'A detailed study of hands.'
    },
    {
        src: 'images/park.jpg',
        title: 'Park',
        description: 'A beautiful scene from the park.'
    },
    {
        src: 'images/parkA3-2.png',
        title: 'Park A3',
        description: 'Another beautiful scene from the park.'
    }
];

// Preload images for smoother transitions
illustrations.forEach(ill => {
    const img = new Image();
    img.src = ill.src;
});

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
slidesData.forEach((ill) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    const imgContainer = document.createElement('div');
    imgContainer.className = 'illustration-image-container';

    const img = document.createElement('img');
    img.src = ill.src;
    img.alt = ill.title;
    img.className = 'illustration-image';
    img.loading = "lazy";
    
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

// Initial offset to show the first real slide
track.style.transform = `translateX(-${currentIndex * 100}%)`;

// Update Carousel Slide
function updateSlide(transition = true) {
    if (transition) {
        // Fast, elegant custom ease
        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
        track.style.transition = 'none';
    }
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
track.addEventListener('transitionend', () => {
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

// Color Filter Effect Logic
const cursorCircle = document.getElementById('cursor-circle');
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');

let activeColor = null;
let currentSize = 250;

function setActiveColor(color) {
    if (activeColor === color) {
        // Toggle off if clicking the same color again
        activeColor = null;
        cursorCircle.classList.remove('active');
        btnRed.classList.remove('active');
        btnBlue.classList.remove('active');
        
        setTimeout(() => {
            currentSize = 250;
            cursorCircle.style.width = `${currentSize}px`;
            cursorCircle.style.height = `${currentSize}px`;
        }, 300);
    } else {
        activeColor = color;
        cursorCircle.style.backgroundColor = color;
        cursorCircle.classList.add('active');
        
        btnRed.classList.toggle('active', color === '#ff0000');
        btnBlue.classList.toggle('active', color === '#0000ff');
    }
}

if (btnRed && btnBlue && cursorCircle) {
    btnRed.addEventListener('click', () => setActiveColor('#ff0000'));
    btnBlue.addEventListener('click', () => setActiveColor('#0000ff'));

    window.addEventListener('mousemove', (e) => {
        if (activeColor) {
            cursorCircle.style.left = `${e.clientX}px`;
            cursorCircle.style.top = `${e.clientY}px`;
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target.closest('.color-btn')) return;
        
        if (activeColor) {
            currentSize += 150;
            cursorCircle.style.width = `${currentSize}px`;
            cursorCircle.style.height = `${currentSize}px`;
        }
    });
}
